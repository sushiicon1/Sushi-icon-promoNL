import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient, Prisma } from "./generated/prisma/index.js";
import { z } from "zod";
import twilio from "twilio";
import nodemailer from "nodemailer";
import crypto from "crypto";
import { UAParser } from "ua-parser-js";
import geoip from "geoip-lite";
import https from "https";
import http from "http";
import sgMail from '@sendgrid/mail'; // -- НОВОЕ: Импорт SendGrid (ESM) --
import path from "path";
import { fileURLToPath } from 'url';
import { google } from 'googleapis';
import { Telegraf, Markup } from 'telegraf';
import LocalSession from 'telegraf-session-local';
import axios from 'axios';
import I18n from 'i18n-telegraf'; // <-- НОВЫЙ ИМПОРТ


dotenv.config();

// --- НОВОЕ: Конфигурация SendGrid только если ключ настроен ---
// Убираем кавычки из переменных окружения, если они есть
const sendgridApiKey = process.env.SENDGRID_API_KEY?.replace(/^['"]|['"]$/g, '')?.trim();
const sendgridFromEmail = process.env.SENDGRID_FROM_EMAIL?.replace(/^['"]|['"]$/g, '')?.trim();

if (sendgridApiKey && sendgridFromEmail) {
  sgMail.setApiKey(sendgridApiKey);
  console.log('✅ SendGrid настроен и готов к отправке email');
  console.log(`   From Email: ${sendgridFromEmail}`);
  console.log(`   API Key: ${sendgridApiKey.substring(0, 10)}...`);
} else {
  console.warn('⚠️  SENDGRID_API_KEY или SENDGRID_FROM_EMAIL не настроены. Email верификации не будут отправляться через SendGrid.');
  if (!sendgridApiKey) console.warn('   Отсутствует: SENDGRID_API_KEY');
  if (!sendgridFromEmail) console.warn('   Отсутствует: SENDGRID_FROM_EMAIL');
}

const app = express();
const prisma = new PrismaClient();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OWNER_TOKEN = process.env.OWNER_TOKEN;

const twilioClient = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
  ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  : null;

// Email транспорт (SMTP)
const smtpEnabled = !!(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_FROM);
const mailTransporter = smtpEnabled
  ? nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })
  : null;

// НОВОЕ MIDDLEWARE ДЛЯ ПРОВЕРКИ ТОКЕНА СЕССИИ АДМИНИСТРАТОРА
const authenticateSession = async (req, res, next) => {
  try {
    const rawOwnerToken = req.headers["x-owner-token"];
    const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;

    if (!ownerToken) {
      return res.status(401).json({ message: "Токен не предоставлен." });
    }

    // Ищем сессию по ее ID (который мы используем как токен)
    const session = await prisma.ownerLoginSession.findUnique({
      where: { id: ownerToken },
    });

    // Если сессии нет или она была неудачной
    if (!session || !session.isSuccessful) {
      return res.status(401).json({ message: "Неверный токен сессии." });
    }

    // ПРОВЕРКА ИСТЕЧЕНИЯ СРОКА ДЕЙСТВИЯ (24 часа)
    const loginDate = new Date(session.loginAt);
    const now = new Date();
    const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

    if (hoursDiff >= 24) {
      return res.status(401).json({ message: "Сессия истекла. Пожалуйста, войдите снова." });
    }

    // Все в порядке, прикрепляем ID владельца к запросу
    req.ownerId = session.ownerId;
    next(); // Передаем управление следующему обработчику

  } catch (error) {
    console.error("Ошибка в middleware authenticateSession:", error);
    return res.status(500).json({ message: "Ошибка сервера при проверке токена." });
  }
};
// --- Функции getRealLocationInfo и getDeviceAndLocationInfo остаются без изменений ---
// (Они уже содержат внутреннюю обработку ошибок и таймауты)

// Функция для получения реального местоположения через внешние API
async function getRealLocationInfo(ipAddress) {
  return new Promise((resolve) => {
    // Пропускаем localhost и приватные IP
    if (ipAddress === '::1' || ipAddress === '127.0.0.1' || ipAddress === 'localhost' ||
      ipAddress.startsWith('192.168.') || ipAddress.startsWith('10.') || ipAddress.startsWith('172.')) {
      resolve(null);
      return;
    }

    // Используем ipapi.co для получения детальной информации
    const options = {
      hostname: 'ipapi.co',
      port: 443,
      path: `/${ipAddress}/json/`,
      method: 'GET',
      timeout: 5000
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const locationData = JSON.parse(data);
          console.log('Server: External API response:', locationData);

          if (locationData.error) {
            console.log('Server: External API error:', locationData.reason);
            resolve(null);
            return;
          }

          resolve({
            country: locationData.country_name || locationData.country,
            countryCode: locationData.country_code,
            region: locationData.region || locationData.region_code,
            city: locationData.city,
            latitude: locationData.latitude,
            longitude: locationData.longitude,
            timezone: locationData.timezone,
            isp: locationData.org || locationData.asn,
            postal: locationData.postal,
            regionCode: locationData.region_code,
            countryCode3: locationData.country_code_iso3,
            currency: locationData.currency,
            currencyName: locationData.currency_name,
            languages: locationData.languages,
            countryPopulation: locationData.country_population,
            countryArea: locationData.country_area,
            countryCapital: locationData.country_capital,
            continent: locationData.continent_code,
            isEu: locationData.in_eu,
            callingCode: locationData.country_calling_code,
            utcOffset: locationData.utc_offset
          });
        } catch (error) {
          console.log('Server: Error parsing external API response:', error);
          resolve(null);
        }
      });
    });

    req.on('error', (error) => {
      console.log('Server: External API request error:', error);
      resolve(null);
    });

    req.on('timeout', () => {
      console.log('Server: External API request timeout');
      req.destroy();
      resolve(null);
    });

    req.setTimeout(5000);
    req.end();
  });
}

// Функция для получения информации об устройстве и местоположении
async function getDeviceAndLocationInfo(req) {
  const userAgent = req.get('User-Agent') || '';

  // Улучшенное определение IP адреса
  let ipAddress = req.ip ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.headers['x-client-ip'] ||
    req.headers['cf-connecting-ip'] ||
    'unknown';

  // Очищаем IPv6 адреса
  if (ipAddress.startsWith('::ffff:')) {
    ipAddress = ipAddress.substring(7);
  }

  console.log('Server: User-Agent:', userAgent);
  console.log('Server: IP Address:', ipAddress);
  console.log('Server: Headers:', {
    'x-forwarded-for': req.headers['x-forwarded-for'],
    'x-real-ip': req.headers['x-real-ip'],
    'x-client-ip': req.headers['x-client-ip'],
    'cf-connecting-ip': req.headers['cf-connecting-ip']
  });

  // Парсим User-Agent
  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  console.log('Server: Parsed UA result:', result);

  // Получаем информацию о местоположении по IP
  const geo = geoip.lookup(ipAddress);
  console.log('Server: Geo lookup result:', geo);

  // Дополнительная информация о местоположении
  if (geo) {
    console.log('Server: Detailed geo info:', {
      range: geo.range,
      country: geo.country,
      region: geo.region,
      city: geo.city,
      ll: geo.ll,
      metro: geo.metro,
      area: geo.area,
      eu: geo.eu,
      timezone: geo.timezone,
      city_geoname_id: geo.city_geoname_id,
      country_geoname_id: geo.country_geoname_id,
      is_anonymous_proxy: geo.is_anonymous_proxy,
      is_satellite_provider: geo.is_satellite_provider
    });
  }

  // Получаем дополнительную информацию через внешний API
  const externalLocation = await getRealLocationInfo(ipAddress);
  console.log('Server: External location data:', externalLocation);

  // Улучшенное определение браузера Safari
  let browserName = result.browser.name || 'Unknown';
  let browserVersion = result.browser.version || '';

  // Специальная обработка для Safari
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    browserName = 'Safari';
    // Извлекаем версию Safari из User-Agent
    const safariMatch = userAgent.match(/Version\/(\d+\.\d+)/);
    if (safariMatch) {
      browserVersion = safariMatch[1];
    }
  }

  // Улучшенное определение macOS
  let osName = result.os.name || 'Unknown';
  let osVersion = result.os.version || '';

  if (userAgent.includes('Mac OS X')) {
    osName = 'macOS';
    // Извлекаем версию macOS из User-Agent
    const macMatch = userAgent.match(/Mac OS X (\d+[._]\d+[._]?\d*)/);
    if (macMatch) {
      osVersion = macMatch[1].replace(/_/g, '.');
    }
  }

  // Формируем полное название браузера с версией
  const fullBrowserName = browserVersion ? `${browserName} ${browserVersion}` : browserName;

  // Формируем полное название ОС с версией
  const fullOsName = osVersion ? `${osName} ${osVersion}` : osName;

  // Определяем тип устройства более детально
  let deviceType = result.device.type || 'desktop';
  let deviceModel = result.device.model || 'Unknown';

  // Специальная обработка для desktop устройств
  if (deviceType === 'desktop' || !deviceType) {
    deviceType = 'desktop';
    if (osName === 'macOS') {
      deviceModel = 'Mac';
    } else if (osName.includes('Windows')) {
      deviceModel = 'PC';
    } else if (osName.includes('Linux')) {
      deviceModel = 'Linux PC';
    }
  }

  // Обработка localhost IP
  let locationDetails = 'Unknown';
  let country = 'Unknown';
  let city = 'Unknown';
  let region = 'Unknown';
  let latitude = null;
  let longitude = null;
  let timezone = 'Unknown';
  let isp = 'Unknown';

  if (ipAddress === '::1' || ipAddress === '127.0.0.1' || ipAddress === 'localhost') {
    // Для localhost показываем реалистичные данные разработки
    const staticLocation = {
      country: 'Netherlands',
      city: 'Amsterdam',
      region: 'North Holland',
      timezone: 'Europe/Amsterdam',
      isp: 'Local Development',
      lat: 52.3676,
      lng: 4.9041
    };

    locationDetails = `${staticLocation.city}, ${staticLocation.country}`;
    country = staticLocation.country;
    city = staticLocation.city;
    region = staticLocation.region;
    latitude = staticLocation.lat;
    longitude = staticLocation.lng;
    timezone = staticLocation.timezone;
    isp = staticLocation.isp;
  } else if (externalLocation) {
    // Используем данные из внешнего API (более точные)
    const addressParts = [];
    if (externalLocation.city) addressParts.push(externalLocation.city);
    if (externalLocation.region) addressParts.push(externalLocation.region);
    if (externalLocation.country) addressParts.push(externalLocation.country);
    locationDetails = addressParts.join(', ');

    country = externalLocation.country || 'Unknown';
    city = externalLocation.city || 'Unknown';
    region = externalLocation.region || 'Unknown';
    latitude = externalLocation.latitude || null;
    longitude = externalLocation.longitude || null;
    timezone = externalLocation.timezone || 'Unknown';
    isp = externalLocation.isp || 'Unknown';

    console.log('Server: Using external API data:', {
      ip: ipAddress,
      country: country,
      region: region,
      city: city,
      coordinates: [latitude, longitude],
      timezone: timezone,
      isp: isp,
      locationDetails: locationDetails
    });
  } else if (geo) {
    // Формируем полную адресу с правильным порядком
    const addressParts = [];

    // Добавляем город
    if (geo.city) {
      addressParts.push(geo.city);
    }

    // Добавляем регион/область
    if (geo.region) {
      addressParts.push(geo.region);
    }

    // Добавляем страну
    if (geo.country) {
      addressParts.push(geo.country);
    }

    locationDetails = addressParts.join(', ');

    // Устанавливаем основные данные
    country = geo.country || 'Unknown';
    city = geo.city || 'Unknown';
    region = geo.region || 'Unknown';
    latitude = geo.ll?.[0] || null;
    longitude = geo.ll?.[1] || null;
    timezone = geo.timezone || 'Unknown';

    // Определяем ISP на основе доступных данных
    if (geo.is_anonymous_proxy) {
      isp = 'Anonymous Proxy';
    } else if (geo.is_satellite_provider) {
      isp = 'Satellite Provider';
    } else if (geo.metro) {
      isp = `Metro Area: ${geo.metro}`;
    } else if (geo.area) {
      isp = `Area: ${geo.area}`;
    } else {
      isp = 'Unknown ISP';
    }

    // Логируем для отладки
    console.log('Server: Processed geo data:', {
      ip: ipAddress,
      country: country,
      region: region,
      city: city,
      coordinates: [latitude, longitude],
      timezone: timezone,
      isp: isp,
      locationDetails: locationDetails,
      isAnonymousProxy: geo.is_anonymous_proxy,
      isSatelliteProvider: geo.is_satellite_provider,
      metro: geo.metro,
      area: geo.area,
      eu: geo.eu
    });
  } else {
    // Если geo данные недоступны, попробуем определить по IP другим способом
    console.log('Server: No geo data available for IP:', ipAddress);

    // Для некоторых IP адресов можем попробовать альтернативные методы
    if (ipAddress.startsWith('192.168.') || ipAddress.startsWith('10.') || ipAddress.startsWith('172.')) {
      locationDetails = 'Private Network';
      country = 'Private';
      city = 'Local Network';
      region = 'Private';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
      isp = 'Private Network';
    }
  }

  // Дополнительные поля для localhost
  let additionalFields = {};
  if (ipAddress === '::1' || ipAddress === '127.0.0.1' || ipAddress === 'localhost') {
    const locationMap = {
      'Netherlands': { countryCode: 'NL', regionCode: 'NH', postal: '1012', currency: 'EUR', currencyName: 'Euro', languages: 'nl,en', countryPopulation: 17530000, countryArea: 41543, countryCapital: 'Amsterdam', continent: 'EU', isEu: true, callingCode: '+31', utcOffset: '+01:00' },
      'United States': { countryCode: 'US', regionCode: 'CA', postal: '94102', currency: 'USD', currencyName: 'US Dollar', languages: 'en', countryPopulation: 331900000, countryArea: 9833517, countryCapital: 'Washington', continent: 'NA', isEu: false, callingCode: '+1', utcOffset: '-08:00' },
      'Germany': { countryCode: 'DE', regionCode: 'BE', postal: '10115', currency: 'EUR', currencyName: 'Euro', languages: 'de,en', countryPopulation: 83200000, countryArea: 357022, countryCapital: 'Berlin', continent: 'EU', isEu: true, callingCode: '+49', utcOffset: '+01:00' },
      'United Kingdom': { countryCode: 'GB', regionCode: 'ENG', postal: 'SW1A 1AA', currency: 'GBP', currencyName: 'British Pound', languages: 'en', countryPopulation: 67000000, countryArea: 242495, countryCapital: 'London', continent: 'EU', isEu: false, callingCode: '+44', utcOffset: '+00:00' },
      'Canada': { countryCode: 'CA', regionCode: 'ON', postal: 'M5H 2N2', currency: 'CAD', currencyName: 'Canadian Dollar', languages: 'en,fr', countryPopulation: 38000000, countryArea: 9984670, countryCapital: 'Ottawa', continent: 'NA', isEu: false, callingCode: '+1', utcOffset: '-05:00' }
    };
    additionalFields = locationMap[country] || {};
  }

  const deviceInfo = {
    userAgent,
    ipAddress,
    browser: fullBrowserName,
    browserName: browserName,
    browserVersion: browserVersion,
    os: fullOsName,
    osName: osName,
    osVersion: osVersion,
    device: `${deviceType} (${deviceModel})`,
    deviceType: deviceType,
    deviceModel: deviceModel,
    country: country,
    city: city,
    region: region,
    latitude: latitude,
    longitude: longitude,
    location: locationDetails,
    timezone: timezone,
    isp: isp,
    // Дополнительные данные из внешнего API или localhost
    countryCode: externalLocation?.countryCode || additionalFields.countryCode,
    regionCode: externalLocation?.regionCode || additionalFields.regionCode,
    postal: externalLocation?.postal || additionalFields.postal,
    currency: externalLocation?.currency || additionalFields.currency,
    currencyName: externalLocation?.currencyName || additionalFields.currencyName,
    languages: externalLocation?.languages || additionalFields.languages,
    countryPopulation: externalLocation?.countryPopulation || additionalFields.countryPopulation,
    countryArea: externalLocation?.countryArea || additionalFields.countryArea,
    countryCapital: externalLocation?.countryCapital || additionalFields.countryCapital,
    continent: externalLocation?.continent || additionalFields.continent,
    isEu: externalLocation?.isEu || additionalFields.isEu,
    callingCode: externalLocation?.callingCode || additionalFields.callingCode,
    utcOffset: externalLocation?.utcOffset || additionalFields.utcOffset,
  };

  console.log('Server: Final device info:', deviceInfo);

  return deviceInfo;
}
async function sendBirthdayEmailToCustomer(customer) {
  // Убедимся, что SendGrid настроен
  if (!sgMail || !process.env.SENDGRID_FROM_EMAIL) {
    console.warn(`[Birthday] Пропуск отправки для ${customer.email}: SendGrid не настроен.`);
    return;
  }

  // Убедимся, что у клиента есть email
  if (!customer.email) {
    console.warn(`[Birthday] Пропуск отправки для ${customer.id}: отсутствует email.`);
    return;
  }

  try {
    console.log(`[Birthday] Подготовка к отправке письма клиенту: ${customer.email} (ID: ${customer.id})`);

    // 1. Формируем HTML письма
    const customerName = customer.firstName || 'дорогой клиент';
    const birthdaySubject = `С Днём Рождения, ${customerName}! 🎉🍣`;
    const birthdayBodyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0ABAB5;">SUSHI ICON</h2>
        <h3 style="color: #333;">С Днём Рождения, ${customerName}!</h3>
        <p>Наша команда от всей души поздравляет вас с этим замечательным днём!</p>
        <p>Мы дарим вам <strong>скидку -15% на любой сет</strong> и <strong>сюрприз в подарок</strong> к вашему заказу.</p>
        <p style="color: #666; font-size: 14px;">Воспользуйтесь вашим подарком в ближайшее время!</p>
        <p style="color: #666; font-size: 12px; margin-top: 30px;">С наилучшими пожеланиями, команда Sushi Icon.</p>
      </div>
    `;

    // 2. Создаем объект сообщения
    const msg = {
      to: customer.email,
      from: {
        name: 'Sushi Icon',
        email: process.env.SENDGRID_FROM_EMAIL
      },
      subject: birthdaySubject,
      html: birthdayBodyHtml,
    };

    // 3. Отправляем
    await sgMail.send(msg);

    // 4. Обновляем статус в БД, только если письмо УСПЕШНО отправлено
    await prisma.customer.update({
      where: { id: customer.id },
      data: { lastBirthdayGreetingSent: new Date() },
    });

    console.log(`[Birthday] Письмо успешно отправлено и статус обновлен для: ${customer.email}`);

  } catch (emailError) {
    console.error(`[Birthday] Ошибка при отправке письма клиенту ${customer.email}:`, emailError.message);
    if (emailError.response) {
      console.error('[Birthday] Детали ошибки SendGrid:', JSON.stringify(emailError.response.body, null, 2));
    }
  }
}
// ----------------------------------------------------------------
// --- НАЧАЛО МАРШРУТОВ API ---
// ----------------------------------------------------------------
const allowedOrigins = [
  'https://sushi-icon-promonl.onrender.com', // Ваш рабочий сайт
  'https://www.sushi-icon-promonl.onrender.com',

  // --- Адреса для ЛОКАЛЬНОЙ разработки ---
  'http://127.0.0.1:8000', // <-- Ваш фронтенд Vite
  'http://localhost:8000'  // <-- Альтернативный адрес для Vite
];

const corsOptions = {
  origin: function (origin, callback) {
    // Разрешить запросы без origin (например, Postman или curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({
  verify: (req, res, buf) => {
    // Сохраняем сырое тело запроса для верификации Instagram
    req.rawBody = buf;
  }
}));


const registrationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  country: z.string().length(2),
  phoneNumber: z.string().min(6).max(20),
  email: z.string().email(),
  birthDate: z.string().optional(),
  city: z.string().optional(),
  street: z.string().optional(),
  postalCode: z.string().optional(),
  houseNumber: z.string().optional(),
  preferredFood: z.string().optional(),
  feedback: z.string().optional(),
  marketingConsent: z.boolean().optional(),
});


const GOOGLE_SHEET_ID = '1BQQrdJATU9hFzlphr_1i3GZfh5Y3wld_Xpf8DSyPi60';
const auth = new google.auth.GoogleAuth({
  keyFile: 'creds.json', // Путь к вашему JSON ключу
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
});


async function generateUniqueDiscountCode() {
  const prefix = "RC10-";
  for (let i = 0; i < 5; i += 1) {
    const code = `${prefix}${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    // ИСПРАВЛЕНИЕ: Добавлен try...catch
    try {
      const existing = await prisma.customer.findUnique({ where: { discountCode: code } });
      if (!existing) {
        return code;
      }
    } catch (error) {
      console.error("Ошибка при проверке уникальности промокода:", error);
      // Пробрасываем ошибку, чтобы ее поймал внешний try...catch
      throw new Error("Ошибка базы данных при генерации промокода.");
    }
  }
  throw new Error("Не удалось сгенерировать уникальный промокод. Попробуйте позже.");
}

app.post("/api/register", async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    console.log('Server: Получены данные регистрации:', req.body);

    const data = registrationSchema.parse(req.body);

    console.log('Server: Дата рождения (строка):', data.birthDate);

    const birthDate = data.birthDate ? new Date(data.birthDate) : undefined;

    console.log('Server: Дата рождения (объект Date):', birthDate);

    if (birthDate && Number.isNaN(birthDate.getTime())) {
      console.log('Server: Ошибка - некорректный формат даты');
      return res.status(400).json({ message: "Некорректный формат даты." });
    }

    // --- ИЗМЕНЕНИЕ: Логика проверки существующего пользователя ---
    // Сначала проверяем телефон
    let existingCustomer = await prisma.customer.findUnique({
      where: { phoneNumber: data.phoneNumber },
    });

    if (existingCustomer) {
      return res.status(200).json({
        message: "Вы уже зарегистрированы.",
        discountCode: existingCustomer.discountCode,
        status: "exists",
      });
    }

    // Проверяем email
    existingCustomer = await prisma.customer.findFirst({
      where: { email: data.email }
    });

    if (existingCustomer) {
      return res.status(400).json({
        message: "Этот email уже используется.",
        status: "email_exists",
      });
    }
    // --- Конец логики проверки ---
    const discountCode = await generateUniqueDiscountCode();
    const verificationCode = crypto.randomInt(100000, 999999).toString();
    const customer = await prisma.customer.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        phoneNumber: data.phoneNumber,
        email: data.email,
        birthDate,
        city: data.city,
        street: data.street,
        postalCode: data.postalCode,
        houseNumber: data.houseNumber,
        preferredFood: data.preferredFood,
        feedback: data.feedback,
        discountCode,
        subscriptions: {
          create: {},
        },
        emailVerificationCode: verificationCode,
        marketingConsent: data.marketingConsent || false
      },
    });
    // Отправляем код верификации на email
    console.log(`\n📧 Отправка кода верификации на ${customer.email}...`);
    console.log(`🔑 Код верификации: ${verificationCode}`);

    const sendgridApiKey = process.env.SENDGRID_API_KEY?.replace(/^['"]|['"]$/g, '')?.trim();
    const sendgridFromEmail = process.env.SENDGRID_FROM_EMAIL?.replace(/^['"]|['"]$/g, '')?.trim();

    if (sendgridApiKey && sendgridFromEmail) {
      const msg = {
        to: customer.email,
        from: sendgridFromEmail,
        subject: 'Ваш код верификации Sushi Icon',
        text: `Ваш код верификации: ${verificationCode}`,
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ABAB5;">SUSHI ICON</h2>
          <p>Ваш код верификации:</p>
          <div style="background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #0ABAB5; border-radius: 8px; margin: 20px 0;">
            ${verificationCode}
          </div>
          <p style="color: #666; font-size: 14px;">Введите этот код на странице верификации для подтверждения вашего email.</p>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">Если вы не регистрировались в SUSHI ICON, просто проигнорируйте это письмо.</p>
        </div>`,
      };
      try {
        console.log(`   Отправка через SendGrid: ${sendgridFromEmail} -> ${customer.email}`);
        const result = await sgMail.send(msg);
        console.log(`✅ Server: Письмо верификации успешно отправлено на ${customer.email}`);
        console.log(`   Status Code: ${result[0]?.statusCode || 'N/A'}`);
      } catch (emailError) {
        console.error('\n❌ ОШИБКА отправки письма верификации:');
        console.error('   Email получателя:', customer.email);
        console.error('   Email отправителя:', sendgridFromEmail);
        console.error('   Код верификации:', verificationCode);
        console.error('   Ошибка:', emailError.message);
        if (emailError.response) {
          console.error('   Status Code:', emailError.response.statusCode);
          console.error('   Детали ошибки SendGrid:', JSON.stringify(emailError.response.body, null, 2));
          // Проверяем типичные ошибки SendGrid
          if (emailError.response.body?.errors) {
            emailError.response.body.errors.forEach((err, idx) => {
              console.error(`   Ошибка ${idx + 1}:`, err.message);
              if (err.field) console.error(`      Поле: ${err.field}`);
              if (err.help) console.error(`      Помощь: ${err.help}`);
            });
          }
        }
        // Не блокируем регистрацию, но логируем ошибку
        console.error(`\n⚠️  ВАЖНО: Код верификации ${verificationCode} сохранен в БД для ${customer.email}, но email не отправлен!`);
        console.error('   Проверьте логи выше для деталей ошибки.\n');
      }
    } else {
      // Попытка использовать SMTP как запасной вариант
      if (mailTransporter && process.env.SMTP_FROM) {
        console.log('📧 Попытка отправить через SMTP...');
        try {
          await mailTransporter.sendMail({
            from: process.env.SMTP_FROM,
            to: customer.email,
            subject: 'Ваш код верификации Sushi Icon',
            text: `Ваш код верификации: ${verificationCode}`,
            html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #0ABAB5;">SUSHI ICON</h2>
              <p>Ваш код верификации:</p>
              <div style="background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #0ABAB5; border-radius: 8px; margin: 20px 0;">
                ${verificationCode}
              </div>
              <p style="color: #666; font-size: 14px;">Введите этот код на странице верификации для подтверждения вашего email.</p>
            </div>`,
          });
          console.log(`✅ Server: Письмо верификации успешно отправлено через SMTP на ${customer.email}`);
        } catch (smtpError) {
          console.error('\n❌ ОШИБКА отправки через SMTP:', smtpError.message);
          console.error(`⚠️  Код верификации ${verificationCode} сохранен в БД для ${customer.email}, но email НЕ отправлен!`);
        }
      } else {
        console.error('\n❌ SENDGRID и SMTP не настроены!');
        console.error(`⚠️  Код верификации ${verificationCode} сохранен в БД для ${customer.email}, но email НЕ будет отправлен!`);
        console.error('\n📝 Для настройки SendGrid добавьте в файл .env следующие строки:');
        console.error('SENDGRID_API_KEY=ваш_api_ключ_из_sendgrid');
        console.error('SENDGRID_FROM_EMAIL=ваш_верифицированный_email@domain.com');
        console.error('\n💡 Или настройте SMTP:');
        console.error('SMTP_HOST=smtp.example.com');
        console.error('SMTP_PORT=587');
        console.error('SMTP_USER=ваш_email@example.com');
        console.error('SMTP_PASS=ваш_пароль');
        console.error('SMTP_FROM=ваш_email@example.com');
        console.error('\n💡 Инструкция для SendGrid:');
        console.error('1. Зарегистрируйтесь на https://sendgrid.com');
        console.error('2. Создайте API ключ в Settings > API Keys');
        console.error('3. Верифицируйте email адрес в Settings > Sender Authentication');
        console.error('4. Добавьте переменные в .env файл\n');
      }
    }

    // --- ИЗМЕНЕНИЕ: Отправляем СМС (как и раньше), но меняем ответ ---
    if (twilioClient && process.env.TWILIO_MESSAGING_SERVICE_SID) {
      try {
        const welcomeMessage = `Спасибо за регистрацию в Sushi Icon! Ваш персональный промокод на 10% скидку: ${customer.discountCode}. Пожалуйста, подтвердите ваш email.`;
        await twilioClient.messages.create({
          to: customer.phoneNumber,
          messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
          body: welcomeMessage,
        });
        console.log(`Server: Успешно отправлено приветственное СМС клиенту ${customer.id}`);
      } catch (smsError) {
        console.error(`Server: Ошибка отправки приветственного СМС клиенту ${customer.id}:`, smsError.message);
      }
    } else {
      console.log('Server: Пропуск отправки СМС - Twilio Messaging Service не настроен.');
    }


    return res.status(201).json({
      status: "pending_verification",
      message: "Регистрация успешна. Пожалуйста, проверьте ваш email для кода верификации.",
      customerId: customer.id,
      email: customer.email
      // customer: {
      //   firstName: customer.firstName,
      //   lastName: customer.lastName,
      //   email: customer.email,
      //   phoneNumber: customer.phoneNumber,
      //   discountCode: customer.discountCode,
      // }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // --- ИЗМЕНЕНИЕ: Улучшенная обратная связь при ошибке Zod ---
      const emailError = error.flatten().fieldErrors.email;
      if (emailError) {
        return res.status(400).json({ message: "Некорректный email.", errors: error.flatten() });
      }
      return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
    }

    // P2002 - это ошибка "unique constraint failed", т.е. дубликат
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      try {
        const customer = await prisma.customer.findUnique({
          where: { phoneNumber: req.body.phoneNumber },
        });
        return res.status(200).json({
          message: "Вы уже зарегистрированы.",
          discountCode: customer?.discountCode,
          status: "exists",
        });
      } catch (findError) {
        console.error("Ошибка при поиске дублирующего клиента:", findError);
        return res.status(500).json({ message: "Ошибка сервера при проверке дубликата." });
      }
    }

    console.error("Необработанная ошибка /api/register:", error);
    return res.status(500).json({ message: "Ошибка сервера." });
  }
});

const broadcastSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});

const targetedBroadcastSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  recipientIds: z.array(z.string()).min(1),
});

// --- НОВОЕ: Схема Zod для SendGrid рассылки ---
const emailBroadcastSchema = z.object({
  userIds: z.array(z.string()).min(1, "Нужен хотя бы один ID"),
  subject: z.string().min(1, "Тема не может быть пустой"),
  htmlContent: z.string().min(1, "Тело письма не может быть пустым"),
});
// -----------------------------------------

app.post("/api/broadcast", async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const rawOwnerToken = req.headers["x-owner-token"];
    const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;
    if (!OWNER_TOKEN || ownerToken !== OWNER_TOKEN) {
      return res.status(401).json({ message: "Нет доступа." });
    }

    if (!twilioClient || !process.env.TWILIO_MESSAGING_SERVICE_SID) {
      return res.status(500).json({ message: "СМС отправка не настроена." });
    }

    const { title, body } = broadcastSchema.parse(req.body);

    const subscriptions = await prisma.messageSubscription.findMany({
      where: { subscribed: true },
      include: {
        // --- ИСПРАВЛЕНИЕ 1: Учитываем согласие ---
        customer: {
          marketingConsent: true
        }
        // --- КОНЕЦ ИСПРАВЛЕНИЯ ---
      },
    });

    if (subscriptions.length === 0) {
      return res.status(200).json({ message: "Нет подписчиков для рассылки." });
    }

    const message = await prisma.broadcastMessage.create({
      data: {
        title,
        body,
      },
    });

    const deliveries = await Promise.allSettled(
      subscriptions.map(async (subscription) => {
        const to = subscription.customer.phoneNumber;

        try {
          const result = await twilioClient.messages.create({
            to,
            messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
            body,
          });

          await prisma.messageDelivery.create({
            data: {
              messageId: message.id,
              subscriptionId: subscription.id,
              phoneNumber: to,
              status: "SENT",
              sentAt: result.dateCreated ? new Date(result.dateCreated) : new Date(),
            },
          });

          return { status: "sent", to };
        } catch (smsError) {
          await prisma.messageDelivery.create({
            data: {
              messageId: message.id,
              subscriptionId: subscription.id,
              phoneNumber: to,
              status: "FAILED",
              errorMessage: smsError.message,
            },
          });

          return { status: "failed", to, error: smsError.message };
        }
      })
    );

    const summary = deliveries.reduce(
      (acc, item) => {
        if (item.status === "fulfilled") {
          const value = item.value;
          if (value.status === "sent") {
            acc.sent += 1;
          } else {
            acc.failed += 1;
          }
        } else {
          acc.failed += 1;
        }
        return acc;
      },
      { sent: 0, failed: 0 }
    );

    return res.status(200).json({
      message: "Рассылка отправлена.",
      summary,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
    }

    console.error("Необработанная ошибка /api/broadcast:", error);
    return res.status(500).json({ message: "Ошибка сервера." });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// ...

// Схемы валидации для аутентификации владельца
const ownerLoginSchema = z.object({
  email: z.string().trim().email(),
  accessCode: z.string().trim().min(6).max(25),
  password: z.string().trim().min(6).max(100),
});

// --- НОВАЯ СХЕМА ВАЛИДАЦИИ ДЛЯ 2-ГО ШАГА ---
const ownerVerifySchema = z.object({
  email: z.string().email(),
  code: z.string().trim().min(6, "Код 6 цифр").max(6, "Код 6 цифр"),
});
// ------------------------------------------

// ...

// Жестко заданные данные администратора - максимально сложные для безопасности
const ADMIN_CREDENTIALS = {
  email: "sushi.icon.rolles.nl@gmail.com",
  accessCode: "SUSHI-MASTER-2024-X9K7",
  password: "SushiMaster2024!@#$%^&*()_+{}|:<>?[];',./",
  name: "Главный администратор"
};

// Аутентификация владельца
// ИСПРАВЛЕНИЕ: Этот маршрут уже имел try...catch, но внутренние catch "глотали" ошибки.
// Упрощено для проброса ошибок в главный catch.
// Аутентификация владельца (ШАГ 1: ПРОВЕРКА КРЕДЕНШИАЛОВ И ОТПРАВКА КОДА)
app.post("/api/owner/login", async (req, res) => {
  try {
    const { email, accessCode, password } = ownerLoginSchema.parse(req.body);
    console.log("\n--- ПОПЫТКА ВХОДА АДМИНА ---");
    console.log("ПОЛУЧЕНО ИЗ ФОРМЫ:");
    console.log(`Email: |${email}|`);
    console.log(`AccessCode: |${accessCode}|`);
    console.log(`Password: |${password}|`);
    console.log("ТРЕБУЕТСЯ (ИЗ КОДА):");
    console.log(`Admin Email: |${ADMIN_CREDENTIALS.email}|`);
    console.log(`Admin AccessCode: |${ADMIN_CREDENTIALS.accessCode}|`);
    console.log(`Admin Password: |${ADMIN_CREDENTIALS.password}|`);
    console.log("---------------------------------\n");
    // Получаем информацию об устройстве и местоположении
    const deviceInfo = await getDeviceAndLocationInfo(req);
    let ownerId = "admin-001"; // ID по умолчанию

    // Проверяем только жестко заданные данные
    if (email !== ADMIN_CREDENTIALS.email ||
      accessCode !== ADMIN_CREDENTIALS.accessCode ||
      password !== ADMIN_CREDENTIALS.password) {

      // ... (код для логирования неудачной попытки входа - он в порядке) ...
      let owner;
      try {
        const owner = await prisma.owner.findUnique({
          where: { accessCode: ADMIN_CREDENTIALS.accessCode },
        });

        if (owner) {
          ownerId = owner.id; // Если нашли - используем настоящий ID
        }
        ownerId = owner.id;
      } catch (ownerError) {
        console.error("Ошибка при создании/обновлении владельца для неудачной попытки:", ownerError);
      }

      // Сохраняем неудачную попытку входа с детальной информацией
      try {
        await prisma.ownerLoginSession.create({
          data: {
            ownerId: ownerId,
            isSuccessful: false,
            loginAt: new Date(),
            // ... (все остальные поля deviceInfo)
            deviceInfo: JSON.stringify(deviceInfo),
            ipAddress: deviceInfo.ipAddress,
            location: deviceInfo.location,
            userAgent: deviceInfo.userAgent,
            browser: deviceInfo.browser,
            os: deviceInfo.os,
            device: deviceInfo.device,
            country: deviceInfo.country,
            city: deviceInfo.city,
            latitude: deviceInfo.latitude,
            longitude: deviceInfo.longitude,
            timezone: deviceInfo.timezone,
            isp: deviceInfo.isp,
            region: deviceInfo.region,
            deviceType: deviceInfo.deviceType,
            deviceModel: deviceInfo.deviceModel,
            browserName: deviceInfo.browserName,
            browserVersion: deviceInfo.browserVersion,
            osName: deviceInfo.osName,
            osVersion: deviceInfo.osVersion,
            countryCode: deviceInfo.countryCode,
            regionCode: deviceInfo.regionCode,
            postal: deviceInfo.postal,
            currency: deviceInfo.currency,
            currencyName: deviceInfo.currencyName,
            languages: deviceInfo.languages,
            countryPopulation: deviceInfo.countryPopulation,
            countryArea: deviceInfo.countryArea,
            countryCapital: deviceInfo.countryCapital,
            continent: deviceInfo.continent,
            isEu: deviceInfo.isEu,
            callingCode: deviceInfo.callingCode,
            utcOffset: deviceInfo.utcOffset,
          },
        });
      } catch (sessionError) {
        console.error("Ошибка при сохранении неудачной сессии:", sessionError);
      }

      return res.status(401).json({
        message: "Доступ запрещен. Эта страница доступна только администраторам.",
        success: false
      });
    }

    // --- УСПЕШНЫЙ ВХОД (ШАГ 1) ---

    let owner;
    try {
      // Ищем владельца строго по accessCode (он уникален и не меняется)
      owner = await prisma.owner.findUnique({
        where: { accessCode: ADMIN_CREDENTIALS.accessCode },
      });

      if (owner) {
        // Если админ уже есть, обновляем только то, что нужно
        const updateData = { lastLogin: new Date() };

        // Если email в базе отличается от ADMIN_CREDENTIALS.email — обновляем
        if (owner.email !== ADMIN_CREDENTIALS.email) {
          console.log(`📧 Email администратора обновлён: ${owner.email} → ${ADMIN_CREDENTIALS.email}`);
          updateData.email = ADMIN_CREDENTIALS.email;
        }

        await prisma.owner.update({
          where: { id: owner.id },
          data: updateData,
        });
      } else {
        // Если нет — создаем нового
        owner = await prisma.owner.create({
          data: {
            email: ADMIN_CREDENTIALS.email,
            name: ADMIN_CREDENTIALS.name,
            accessCode: ADMIN_CREDENTIALS.accessCode,
            password: ADMIN_CREDENTIALS.password,
            isEmailVerified: true, // админ всегда верифицирован
          },
        });
        console.log("🆕 Создан новый владелец-админ:", owner.email);
      }

      ownerId = owner.id;
    } catch (ownerError) {
      console.error("Ошибка при создании/обновлении владельца:", ownerError);
      throw new Error("Ошибка БД при обновлении владельца.");
    }

    // ----------------------------------------------------------------
    // --- ИЗМЕНЕНИЕ ЛОГИКИ ЗДЕСЬ ---
    // ----------------------------------------------------------------

    // 1. Генерируем код верификации
    const verificationCode = crypto.randomInt(100000, 999999).toString();

    // 2. Сохраняем код в БД
    try {
      await prisma.owner.update({
        where: { id: ownerId },
        data: { emailVerificationCode: verificationCode }
      });
    } catch (dbError) {
      console.error("Ошибка при сохранении кода верификации админа:", dbError);
      throw new Error("Ошибка БД при сохранении кода.");
    }

    // 3. Отправляем код на email
    const sendgridApiKey = process.env.SENDGRID_API_KEY?.replace(/^['"]|['"]$/g, '')?.trim();
    const sendgridFromEmail = process.env.SENDGRID_FROM_EMAIL?.replace(/^['"]|['"]$/g, '')?.trim();

    if (sendgridApiKey && sendgridFromEmail) {
      const msg = {
        to: owner.email,
        from: sendgridFromEmail,
        subject: 'Код входа в Sushi Icon Admin',
        text: `Ваш код для входа в панель администратора: ${verificationCode}`,
        html: `<strong>Ваш код для входа в панель администратора: ${verificationCode}</strong>`,
      };
      try {
        await sgMail.send(msg);
        console.log(`Server: Письмо верификации отправлено админу ${owner.email}`);
      } catch (emailError) {
        console.error('Server: Ошибка отправки письма верификации админу:', emailError.response ? emailError.response.body : emailError);
        // ВАЖНО: Если email не ушел, впускать нельзя
        throw new Error("Ошибка отправки email.");
      }
    } else {
      console.log('Server: ОШИБКА: SENDGRID не настроен для входа админа.');
      throw new Error("Сервис email не настроен.");
    }

    // 4. Отправляем ответ "ожидание верификации"
    return res.status(200).json({
      message: "Учетные данные верны. Код отправлен на ваш email.",
      success: true,
      status: "pending_verification"
    });
    // ----------------------------------------------------------------
    // --- КОНЕЦ ИЗМЕНЕНИЯ ---
    // ----------------------------------------------------------------
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Некорректные данные.",
        errors: error.flatten(),
        success: false
      });
    }

    // Это поймает ошибку "ReferenceError" и другие
    console.error(`Необработанная ошибка /api/owner/login: ${error.message}`);
    return res.status(500).json({
      message: `Ошибка сервера при аутентификации: ${error.message}`,
      success: false
    });
  }
});

// --- НОВЫЙ МАРШРУТ: /api/owner/verify-login ---
// (ШАГ 2: ПРОВЕРКА КОДА И СОЗДАНИЕ СЕССИИ)
app.post("/api/owner/verify-login", async (req, res) => {
  try {
    const { email, code } = ownerVerifySchema.parse(req.body);

    console.log(`[Admin Verify] Попытка верификации для: ${email}, Код: "${code}"`);

    // 1. Находим админа по email
    // (Используем ADMIN_CREDENTIALS.email для доп. безопасности, т.к. админ один)
    if (email !== ADMIN_CREDENTIALS.email) {
      console.log(`[Admin Verify] ОШИБКА: Неверный email.`);
      return res.status(400).json({ success: false, message: "Неверный email." });
    }

    const owner = await prisma.owner.findUnique({
      where: { email: ADMIN_CREDENTIALS.email },
    });

    if (!owner) {
      console.log(`[Admin Verify] ОШИБКА: Админ ${email} не найден в БД.`);
      return res.status(404).json({ success: false, message: "Администратор не найден." });
    }

    // 2. Сравниваем коды
    console.log(`[Admin Verify] Сравнение: Код из запроса ("${code}") vs Код из БД ("${owner.emailVerificationCode}")`);

    if (owner.emailVerificationCode !== code) {
      console.log(`[Admin Verify] ОШИБКА: Коды не совпадают.`);
      return res.status(400).json({ success: false, message: "Неверный код верификации." });
    }

    // 3. УСПЕХ: Коды совпали. Очищаем код и создаем сессию.
    console.log(`[Admin Verify] УСПЕХ: Коды совпали. Создаем сессию для ${owner.email}.`);

    await prisma.owner.update({
      where: { id: owner.id },
      data: {
        emailVerificationCode: null, // Очищаем код
        lastLogin: new Date(), // Обновляем время входа
      },
    });

    // 4. Получаем инфо об устройстве
    const deviceInfo = await getDeviceAndLocationInfo(req);

    // 5. Создаем сессию (логика из старого /api/owner/login)
    let session;
    try {
      session = await prisma.ownerLoginSession.create({
        data: {
          ownerId: owner.id,
          isSuccessful: true,
          loginAt: new Date(),
          // ... (все остальные поля deviceInfo)
          deviceInfo: JSON.stringify(deviceInfo),
          ipAddress: deviceInfo.ipAddress,
          location: deviceInfo.location,
          userAgent: deviceInfo.userAgent,
          browser: deviceInfo.browser,
          os: deviceInfo.os,
          device: deviceInfo.device,
          country: deviceInfo.country,
          city: deviceInfo.city,
          latitude: deviceInfo.latitude,
          longitude: deviceInfo.longitude,
          timezone: deviceInfo.timezone,
          isp: deviceInfo.isp,
          region: deviceInfo.region,
          deviceType: deviceInfo.deviceType,
          deviceModel: deviceInfo.deviceModel,
          browserName: deviceInfo.browserName,
          browserVersion: deviceInfo.browserVersion,
          osName: deviceInfo.osName,
          osVersion: deviceInfo.osVersion,
          countryCode: deviceInfo.countryCode,
          regionCode: deviceInfo.regionCode,
          postal: deviceInfo.postal,
          currency: deviceInfo.currency,
          currencyName: deviceInfo.currencyName,
          languages: deviceInfo.languages,
          countryPopulation: deviceInfo.countryPopulation,
          countryArea: deviceInfo.countryArea,
          countryCapital: deviceInfo.countryCapital,
          continent: deviceInfo.continent,
          isEu: deviceInfo.isEu,
          callingCode: deviceInfo.callingCode,
          utcOffset: deviceInfo.utcOffset,
        },
      });
    } catch (sessionError) {
      console.error("Ошибка при сохранении сессии:", sessionError);
      throw new Error("Ошибка БД при создании сессии.");
    }

    if (!session) {
      throw new Error("Не удалось создать сессию по неизвестной причине.");
    }

    // 6. Отправляем токен
    return res.status(200).json({
      message: "Успешная аутентификация.",
      success: true,
      status: "verified",
      token: session.id, // <--- ТОКЕН СЕССИИ
      owner: {
        id: owner.id,
        email: owner.email,
        name: owner.name,
        lastLogin: owner.lastLogin,
        createdAt: owner.createdAt,
      },
      deviceInfo: deviceInfo,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("[Admin Verify] ОШИБКА: Zod.", error.flatten());
      return res.status(400).json({ success: false, message: "Некорректные данные.", errors: error.flatten() });
    }
    console.error("Ошибка в /api/owner/verify-login:", error);
    return res.status(500).json({ success: false, message: "Ошибка сервера при верификации." });
  }
});
// --- КОНЕЦ НОВОГО МАРШРУТА ---


// Получение информации о владельце
app.get("/api/owner/profile", authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const rawOwnerToken = req.headers["x-owner-token"];
    const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;

    if (!ownerToken) {
      return res.status(401).json({ message: "Токен не предоставлен." });
    }

    // Для обратной совместимости проверяем старый токен
    if (OWNER_TOKEN && ownerToken === OWNER_TOKEN) {
      return res.status(200).json({
        message: "Аутентификация через старый токен.",
        owner: { name: "Администратор", email: "admin@example.com" },
      });
    }

    // Проверяем новый токен (email владельца)
    //  console.log(ownerToken);
    //  const owner = await prisma.owner.findUnique({
    //     where: { email: ownerToken },
    //   });

    //   if (!owner || !owner.isActive) {
    //     return res.status(401).json({ message: "Неверный токен или аккаунт заблокирован." });
    //   }

    // --- ИСПРАВЛЕНИЕ: 'owner' не был определен ---
    // req.ownerId прикрепляется middleware 'authenticateSession'
    const owner = await prisma.owner.findUnique({
      where: { id: req.ownerId }
    });

    if (!owner) {
      return res.status(404).json({ message: "Владелец не найден." });
    }
    // --- КОНЕЦ ИСПРАВЛЕНИЯ ---

    return res.status(200).json({
      message: "Профиль владельца получен.",
      owner: {
        id: owner.id,
        email: owner.email,
        name: owner.name,
        lastLogin: owner.lastLogin,
        createdAt: owner.createdAt,
      },
    });
  } catch (error) {
    console.error("Необработанная ошибка /api/owner/profile:", error);
    return res.status(500).json({ message: "Ошибка сервера при получении профиля." });
  }
});

app.get("/api/customers", authenticateSession, async (req, res) => {
  try {
    // Аутентификация уже пройдена, просто получаем клиентов
    const customers = await prisma.customer.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.json(
      customers.map((customer) => ({
        id: customer.id,
        firstName: customer.firstName,
        lastName: customer.lastName,
        country: customer.country,
        phoneNumber: customer.phoneNumber,
        email: customer.email,
        birthDate: customer.birthDate,
        city: customer.city,
        street: customer.street,
        postalCode: customer.postalCode,
        houseNumber: customer.houseNumber,
        preferredFood: customer.preferredFood,
        feedback: customer.feedback,
        discountCode: customer.discountCode,
        createdAt: customer.createdAt,
        marketingConsent: customer.marketingConsent,
      }))
    );
  } catch (error) {
    console.error("Необработанная ошибка /api/customers:", error.message);
    return res.status(500).json({ message: "Ошибка сервера при получении клиентов." });
  }
});
app.delete("/api/customer/:id", authenticateSession, async (req, res) => {
  try {
    // 1. Получаем ID клиента из URL
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID клиента не указан." });
    }

    console.log(`[Admin] Получен запрос на удаление клиента с ID: ${id}`);

    // 2. Выполняем удаление
    // ВАЖНО: Ваша schema.prisma содержит 'onDelete: Cascade' для MessageSubscription.
    // Это значит, что при удалении клиента, все его подписки (MessageSubscription)
    // будут удалены автоматически. Это правильное поведение.
    await prisma.customer.delete({
      where: { id: id },
    });

    // 3. Отправляем успешный ответ
    console.log(`[Admin] Клиент ${id} успешно удален.`);
    return res.status(200).json({
      success: true,
      message: "Клиент успешно удален."
    });

  } catch (error) {
    // Обработка ошибки, если клиент не найден (Prisma error P2025)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      console.warn(`[Admin] Не удалось удалить: Клиент ${req.params.id} не найден.`);
      return res.status(404).json({ message: "Клиент не найден." });
    }

    // Другие ошибки сервера
    console.error("Ошибка при удалении клиента:", error);
    return res.status(500).json({ message: "Ошибка сервера при удалении клиента." });
  }
});
// Синхронизация данных анкеты для панели администратора
app.get("/api/sync/form-data", authenticateSession, async (req, res) => {
  try {
    // Аутентификация пройдена
    const customers = await prisma.customer.findMany({ orderBy: { createdAt: "desc" } });

    const synced = customers.map((c) => ({
      id: c.id,
      firstName: c.firstName,
      lastName: c.lastName,
      country: c.country || "",
      phoneNumber: c.phoneNumber,
      email: c.email || "",
      birthDate: c.birthDate ? new Date(c.birthDate).toISOString() : "",
      city: c.city || "",
      street: c.street || "",
      postalCode: c.postalCode || "",
      houseNumber: c.houseNumber || "",
      preferredFood: c.preferredFood || "",
      feedback: c.feedback || "",
      discountCode: c.discountCode || "",
      timestamp: c.createdAt ? new Date(c.createdAt).toISOString() : new Date().toISOString(),
      isDraft: false,
    }));

    return res.json(synced);
  } catch (error) {
    console.error("Необработанная ошибка /api/sync/form-data:", error.message);
    return res.status(500).json({ message: "Ошибка сервера при синхронизации формы." });
  }
});

// Сохранение черновика формы в базу данных (автосохранение каждую секунду)
app.post("/api/form-draft", async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const draftData = req.body;
    const draftId = draftData.draftId;
    let birthDateObj = null; // По умолчанию null
    if (draftData.birthDate) {
      const parsedDate = new Date(draftData.birthDate);
      // Проверяем, что дата валидная
      if (!isNaN(parsedDate.getTime())) {
        birthDateObj = parsedDate;
      }
    }
    if (draftId) {
      // Обновляем существующий черновик
      await prisma.formDraft.update({
        where: { id: draftId },
        data: {
          firstName: draftData.firstName || null,
          lastName: draftData.lastName || null,
          phoneNumber: draftData.phoneNumber || null,
          email: draftData.email || null,
          birthDate: birthDateObj,
          city: draftData.city || null,
          street: draftData.street || null,
          postalCode: draftData.postalCode || null,
          houseNumber: draftData.houseNumber || null,
          country: draftData.country || null,
          preferredFood: draftData.preferredFood || null,
          feedback: draftData.feedback || null,
        },
      });
      return res.json({ success: true, draftId });
    } else {
      // Создаем новый черновик
      const newDraft = await prisma.formDraft.create({
        data: {
          firstName: draftData.firstName || null,
          lastName: draftData.lastName || null,
          phoneNumber: draftData.phoneNumber || null,
          email: draftData.email || null,
          birthDate: birthDateObj,
          city: draftData.city || null,
          street: draftData.street || null,
          postalCode: draftData.postalCode || null,
          houseNumber: draftData.houseNumber || null,
          country: draftData.country || null,
          preferredFood: draftData.preferredFood || null,
          feedback: draftData.feedback || null,
        },
      });
      return res.json({ success: true, draftId: newDraft.id });
    }
  } catch (error) {
    console.error('Ошибка сохранения черновика:', error);
    return res.status(500).json({ message: "Ошибка сохранения черновика." });
  }
});

// Удаление черновика после успешной отправки формы
app.delete("/api/form-draft/:draftId", async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const { draftId } = req.params;
    await prisma.formDraft.delete({
      where: { id: draftId },
    }).catch(() => {
      // Игнорируем ошибки, если черновик уже удален
    });
    return res.json({ success: true });
  } catch (error) {
    console.error('Ошибка удаления черновика:', error);
    // Не критично, если не удалось удалить, не возвращаем 500
    return res.status(200).json({ success: false, message: "Ошибка удаления черновика, но это не критично." });
  }
});

// Автоматическая очистка старых черновиков (старше 1 часа)
setInterval(async () => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    await prisma.formDraft.deleteMany({
      where: {
        updatedAt: {
          lt: oneHourAgo,
        },
      },
    });
  } catch (error) {
    console.error('Ошибка очистки старых черновиков:', error);
  }
}, 5 * 60 * 1000); // Каждые 5 минут

// Универсальный список заявок для таблицы (публичный рид-онли)
app.get("/api/submissions", async (_req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const customers = await prisma.customer.findMany({ orderBy: { createdAt: "desc" } });

    const completedRows = customers.map((c) => ({
      id: c.id,
      name: `${c.firstName} ${c.lastName}`.trim(),
      phone: c.phoneNumber,
      email: c.email || "",
      country: c.country || "",
      city: c.city || "",
      street: c.street || "",
      postalCode: c.postalCode || "",
      houseNumber: c.houseNumber || "",
      birthDate: c.birthDate ? new Date(c.birthDate).toISOString().slice(0, 10) : "",
      preferences: c.preferredFood || "",
      feedback: c.feedback || "",
      promoCode: c.discountCode,
      registrationDate: c.createdAt ? new Date(c.createdAt).toISOString() : new Date().toISOString(),
      status: "Активный",
      isDraft: false,
    }));

    // Добавляем черновики из базы данных
    const drafts = await prisma.formDraft.findMany({ orderBy: { updatedAt: "desc" } });
    const draftRows = drafts.map((draft) => ({
      id: draft.id,
      name: `${draft.firstName || ''} ${draft.lastName || ''}`.trim() || 'Заполняется...',
      phone: draft.phoneNumber || '',
      email: draft.email || '',
      country: draft.country || '',
      city: draft.city || '',
      street: draft.street || '',
      postalCode: draft.postalCode || '',
      houseNumber: draft.houseNumber || '',
      birthDate: draft.birthDate || '',
      preferences: draft.preferredFood || draft.feedback || '',
      feedback: draft.feedback || '',
      promoCode: 'В процессе...',
      registrationDate: draft.updatedAt ? new Date(draft.updatedAt).toISOString() : new Date().toISOString(),
      status: "Заполняется",
      isDraft: true,
    }));

    // Объединяем черновики и завершенные заявки
    const allRows = [...draftRows, ...completedRows];

    return res.json(allRows);
  } catch (error) {
    console.error("Необработанная ошибка /api/submissions:", error);
    return res.status(500).json({ message: "Ошибка сервера при получении заявок." });
  }
});

// Получение истории входов администратора
app.get("/api/owner/login-sessions", authenticateSession, async (req, res) => {
  try {
    // Аутентификация пройдена. 
    // req.ownerId был добавлен в middleware 'authenticateSession'
    const sessions = await prisma.ownerLoginSession.findMany({
      where: { ownerId: req.ownerId }, // Используем ID из сессии
      orderBy: { loginAt: "desc" },
      take: 50,
    });

    res.json(sessions);
  } catch (error) {
    console.error("Необработанная ошибка /api/owner/login-sessions:", error.message);
    return res.status(500).json({ message: "Ошибка сервера при получении истории входов." });
  }
});
// Получение информации о текущем устройстве
app.get("/api/owner/current-device", authenticateSession, async (req, res) => {
  try {
    // Аутентификация пройдена
    const deviceInfo = await getDeviceAndLocationInfo(req);
    res.json(deviceInfo);
  } catch (error) {
    console.error("Необработанная ошибка /api/owner/current-device:", error.message);
    return res.status(500).json({ message: "Ошибка сервера при получении информации об устройстве." });
  }
});
// Экспорт данных в CSV формат для Google Таблиц
app.get("/api/export/customers", authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    // const rawOwnerToken = req.headers["x-owner-token"];
    // const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;

    // if (!ownerToken) {
    //   return res.status(401).json({ message: "Токен не предоставлен." });
    // }

    // Проверяем, что это авторизованный администратор
    // --- ИСПРАВЛЕНИЕ: Используем req.ownerId вместо жестко заданного токена
    if (!req.ownerId) {
      return res.status(401).json({ message: "Неверный токен." });
    }

    const customers = await prisma.customer.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Создаем CSV заголовки
    const headers = [
      "ID",
      "Имя",
      "Фамилия",
      "Страна",
      "Телефон",
      "Email",
      "Дата рождения",
      "Город",
      "Улица",
      "Номер дома",
      "Почтовый индекс",
      "Предпочтения в еде",
      "Отзыв",
      "Промокод",
      "Дата регистрации",
      "Полный адрес"
    ];

    // Создаем CSV строки
    const csvRows = [headers.join(",")];

    customers.forEach(customer => {
      // Формируем полный адрес
      const addressParts = [];
      if (customer.street) addressParts.push(customer.street);
      if (customer.houseNumber) addressParts.push(customer.houseNumber);
      if (customer.city) addressParts.push(customer.city);
      if (customer.postalCode) addressParts.push(customer.postalCode);
      if (customer.country) addressParts.push(customer.country);
      const fullAddress = addressParts.join(', ');

      const row = [
        customer.id,
        `"${customer.firstName || ""}"`,
        `"${customer.lastName || ""}"`,
        `"${customer.country || ""}"`,
        `"${customer.phoneNumber || ""}"`,
        `"${customer.email || ""}"`,
        `"${customer.birthDate ? new Date(customer.birthDate).toLocaleDateString('ru-RU') : ""}"`,
        `"${customer.city || ""}"`,
        `"${customer.street || ""}"`,
        `"${customer.houseNumber || ""}"`,
        `"${customer.postalCode || ""}"`,
        `"${customer.preferredFood || ""}"`,
        `"${customer.feedback || ""}"`,
        `"${customer.discountCode || ""}"`,
        `"${new Date(customer.createdAt).toLocaleString('ru-RU')}"`,
        `"${fullAddress}"`
      ];
      csvRows.push(row.join(","));
    });

    const csvContent = csvRows.join("\n");

    // Устанавливаем заголовки для скачивания файла
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="sushi_customers_${new Date().toISOString().split('T')[0]}.csv"`);

    // Добавляем BOM для корректного отображения кириллицы в Excel
    res.write('\uFEFF');
    res.end(csvContent);

  } catch (error) {
    console.error("Необработанная ошибка /api/export/customers:", error);
    // Не можем отправить 500, если заголовки уже отправлены, но можем залогировать
    if (!res.headersSent) {
      return res.status(500).json({ message: "Ошибка сервера при экспорте данных." });
    }
  }
});

// Экспорт данных в Excel формат (JSON для Google Sheets)
app.get("/api/export/customers/json", authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    // const rawOwnerToken = req.headers["x-owner-token"];
    // const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;

    // if (!ownerToken) {
    //   return res.status(401).json({ message: "Токен не предоставлен." });
    // }

    // Проверяем, что это авторизованный администратор
    // --- ИСПРАВЛЕНИЕ: Используем req.ownerId вместо жестко заданного токена
    if (!req.ownerId) {
      return res.status(401).json({ message: "Неверный токен." });
    }

    const customers = await prisma.customer.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Форматируем данные для Google Sheets
    const formattedData = customers.map(customer => {
      // Формируем полный адрес
      const addressParts = [];
      if (customer.street) addressParts.push(customer.street);
      if (customer.houseNumber) addressParts.push(customer.houseNumber);
      if (customer.city) addressParts.push(customer.city);
      if (customer.postalCode) addressParts.push(customer.postalCode);
      if (customer.country) addressParts.push(customer.country);
      const fullAddress = addressParts.join(', ');

      return {
        "ID": customer.id,
        "Имя": customer.firstName || "",
        "Фамилия": customer.lastName || "",
        "Страна": customer.country || "",
        "Телефон": customer.phoneNumber || "",
        "Email": customer.email || "",
        "Дата рождения": customer.birthDate ? new Date(customer.birthDate).toLocaleDateString('ru-RU') : "",
        "Город": customer.city || "",
        "Улица": customer.street || "",
        "Номер дома": customer.houseNumber || "",
        "Почтовый индекс": customer.postalCode || "",
        "Предпочтения в еде": customer.preferredFood || "",
        "Отзыв": customer.feedback || "",
        "Промокод": customer.discountCode || "",
        "Дата регистрации": new Date(customer.createdAt).toLocaleString('ru-RU'),
        "Полный адрес": fullAddress
      };
    });

    res.json({
      success: true,
      data: formattedData,
      total: customers.length,
      exportDate: new Date().toISOString()
    });

  } catch (error) {
    console.error("Необработанная ошибка /api/export/customers/json:", error);
    return res.status(500).json({ message: "Ошибка сервера при экспорте данных." });
  }
});

// Таргетированная рассылка по SMS выбранным клиентам
app.post("/api/owner/broadcast/sms", authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    // --- ИСПРАВЛЕНИЕ: Используем req.ownerId
    if (!req.ownerId) {
      return res.status(401).json({ message: "Неверный токен." });
    }

    if (!twilioClient || !process.env.TWILIO_MESSAGING_SERVICE_SID) {
      return res.status(500).json({ message: "СМС отправка не настроена." });
    }

    const { title, body, recipientIds } = targetedBroadcastSchema.parse(req.body);

    // Создаем запись сообщения (для истории)
    const message = await prisma.broadcastMessage.create({
      data: { title, body },
    });

    // Получаем подписки для клиентов
    const customers = await prisma.customer.findMany({
      where: {
        id: { in: recipientIds },
        // --- ИСПРАВЛЕНИЕ 2: Учитываем согласие ---
        marketingConsent: true
        // --- КОНЕЦ ИСПРАВЛЕНИЯ ---
      },
      select: { id: true, phoneNumber: true },
    });

    const subscriptions = await prisma.messageSubscription.findMany({
      where: { customerId: { in: customers.map(c => c.id) } },
      select: { id: true, customerId: true },
    });

    const subByCustomerId = new Map(subscriptions.map(s => [s.customerId, s.id]));

    const deliveries = await Promise.allSettled(
      customers.map(async (c) => {
        if (!c.phoneNumber) {
          return { status: "skipped", to: c.id, reason: "no-phone" };
        }
        try {
          const result = await twilioClient.messages.create({
            to: c.phoneNumber,
            messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
            body,
          });
          const subscriptionId = subByCustomerId.get(c.id);
          if (subscriptionId) {
            await prisma.messageDelivery.create({
              data: {
                messageId: message.id,
                subscriptionId,
                phoneNumber: c.phoneNumber,
                status: "SENT",
                sentAt: result.dateCreated ? new Date(result.dateCreated) : new Date(),
              },
            });
          }
          return { status: "sent", to: c.phoneNumber };
        } catch (smsError) {
          const subscriptionId = subByCustomerId.get(c.id);
          if (subscriptionId) {
            await prisma.messageDelivery.create({
              data: {
                messageId: message.id,
                subscriptionId,
                phoneNumber: c.phoneNumber || "",
                status: "FAILED",
                errorMessage: smsError.message,
              },
            });
          }
          return { status: "failed", to: c.phoneNumber, error: smsError.message };
        }
      })
    );

    const summary = deliveries.reduce(
      (acc, item) => {
        if (item.status === "fulfilled") {
          const value = item.value;
          if (value.status === "sent") acc.sent += 1;
          else if (value.status === "failed") acc.failed += 1;
          else acc.skipped += 1;
        } else {
          acc.failed += 1;
        }
        return acc;
      },
      { sent: 0, failed: 0, skipped: 0 }
    );

    return res.status(200).json({ message: "Рассылка SMS завершена.", summary });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
    }
    console.error("Необработанная ошибка /api/owner/broadcast/sms:", error);
    return res.status(500).json({ message: "Ошибка сервера при SMS рассылке." });
  }
});

// Таргетированная рассылка по E-mail выбранным клиентам
app.post("/api/owner/broadcast/email", authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    // --- ИСПРАВЛЕНИЕ: Используем req.ownerId
    if (!req.ownerId) {
      return res.status(401).json({ message: "Неверный токен." });
    }

    if (!mailTransporter || !smtpEnabled) {
      return res.status(500).json({ message: "Почтовая отправка не настроена." });
    }

    const { title, body, recipientIds } = targetedBroadcastSchema.parse(req.body);

    const customers = await prisma.customer.findMany({
      where: {
        id: { in: recipientIds },
        // --- ИСПРАВЛЕНИЕ 3: Учитываем согласие ---
        marketingConsent: true
        // --- КОНЕЦ ИСПРАВЛЕНИЯ ---
      },
      select: { id: true, email: true, firstName: true, lastName: true },
    });

    const deliveries = await Promise.allSettled(
      customers.map(async (c) => {
        if (!c.email) {
          return { status: "skipped", to: c.id, reason: "no-email" };
        }
        try {
          await mailTransporter.sendMail({
            from: process.env.SMTP_FROM,
            to: c.email,
            subject: title,
            text: body, // Используем text, т.к. фронтенд отправляет 'body'
          });
          return { status: "sent", to: c.email };
        } catch (err) {
          return { status: "failed", to: c.email, error: err.message };
        }
      })
    );

    const summary = deliveries.reduce(
      (acc, item) => {
        if (item.status === "fulfilled") {
          const value = item.value;
          if (value.status === "sent") acc.sent += 1;
          else if (value.status === "failed") acc.failed += 1;
          else acc.skipped += 1;
        } else {
          acc.failed += 1;
        }
        return acc;
      },
      { sent: 0, failed: 0, skipped: 0 }
    );

    return res.status(200).json({ message: "Рассылка Email завершена.", summary });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
    }
    console.error("Необработанная ошибка /api/owner/broadcast/email:", error);
    return res.status(500).json({ message: "Ошибка сервера при Email рассылке." });
  }
});

// ----------------------------------------------------------------
// --- НОВЫЙ ЭНДПОИНТ ДЛЯ WHATSAPP ---
// ----------------------------------------------------------------

// Таргетированная рассылка по WhatsApp выбранным клиентам
app.post("/api/owner/broadcast/whatsapp", authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    // --- ИСПРАВЛЕНИЕ: Используем req.ownerId
    if (!req.ownerId) {
      return res.status(401).json({ message: "Неверный токен." });
    }

    // Проверяем, что Twilio и номер WhatsApp настроены
    if (!twilioClient || !process.env.TWILIO_WHATSAPP_FROM_NUMBER) {
      return res.status(500).json({ message: "WhatsApp отправка не настроена. (TWILIO_WHATSAPP_FROM_NUMBER)" });
    }

    const { title, body, recipientIds } = targetedBroadcastSchema.parse(req.body);

    // (Опционально) Создаем запись сообщения (для истории)
    // Можно использовать ту же модель BroadcastMessage
    await prisma.broadcastMessage.create({
      data: { title: `[WhatsApp] ${title}`, body },
    });

    // Получаем клиентов
    const customers = await prisma.customer.findMany({
      where: {
        id: { in: recipientIds },
        // --- ИСПРАВЛЕНИЕ 4: Учитываем согласие ---
        marketingConsent: true
        // --- КОНЕЦ ИСПРАВЛЕНИЯ ---
      },
      select: { id: true, phoneNumber: true },
    });

    const whatsappFrom = process.env.TWILIO_WHATSAPP_FROM_NUMBER;

    const deliveries = await Promise.allSettled(
      customers.map(async (c) => {
        if (!c.phoneNumber) {
          return { status: "skipped", to: c.id, reason: "no-phone" };
        }

        // Номер получателя должен быть в формате E.164 с префиксом whatsapp:
        const to = `whatsapp:${c.phoneNumber}`;

        try {
          await twilioClient.messages.create({
            from: whatsappFrom,
            to: to,
            body: body,
          });

          // (Опционально) Можно добавить логику сохранения в MessageDelivery,
          // как в SMS-эндпоинте, если нужна детальная история

          return { status: "sent", to: to };
        } catch (waError) {
          console.error(`Failed to send WhatsApp to ${to}:`, waError.message);
          return { status: "failed", to: to, error: waError.message };
        }
      })
    );

    const summary = deliveries.reduce(
      (acc, item) => {
        if (item.status === "fulfilled") {
          const value = item.value;
          if (value.status === "sent") acc.sent += 1;
          else if (value.status === "failed") acc.failed += 1;
          else acc.skipped += 1;
        } else {
          acc.failed += 1;
        }
        return acc;
      },
      { sent: 0, failed: 0, skipped: 0 }
    );

    return res.status(200).json({ message: "Рассылка WhatsApp завершена.", summary });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
    }
    console.error("Необработанная ошибка /api/owner/broadcast/whatsapp:", error);
    return res.status(500).json({ message: "Ошибка сервера при WhatsApp рассылке." });
  }
});

// server.js

// ... (после app.post("/api/owner/broadcast/whatsapp", ...))

// --- НОВЫЙ ЭНДПОИНТ: МАССОВАЯ РАССЫЛКА SMS ---
app.post("/api/admin/broadcast/sms-all", authenticateSession, async (req, res) => {
  try {
    // 1. Проверяем, что Twilio настроен
    if (!twilioClient || !process.env.TWILIO_MESSAGING_SERVICE_SID) {
      return res.status(500).json({ message: "СМС сервис (Twilio) не настроен." });
    }

    // 2. Валидируем тело запроса (простое)
    const { body } = z.object({ body: z.string().min(1) }).parse(req.body);

    // 3. Находим всех, кто подписан
    const subscriptions = await prisma.messageSubscription.findMany({
      where: {
        subscribed: true,
        // --- ИСПРАВЛЕНИЕ 5 (РЕШАЕТ ПУНКТ 2): Учитываем согласие ---
        customer: {
          marketingConsent: true
        }
        // --- КОНЕЦ ИСПРАВЛЕНИЯ ---
      },
      include: {
        customer: {
          select: { id: true, phoneNumber: true } // Выбираем только нужные поля
        }
      }
    });

    if (subscriptions.length === 0) {
      return res.status(200).json({ message: "Нет активных подписчиков для рассылки." });
    }

    // 4. Создаем запись о рассылке в БД (для истории)
    const message = await prisma.broadcastMessage.create({
      data: {
        title: "Массовая SMS-рассылка",
        body: body,
      },
    });

    // 5. Отправляем сообщения
    const deliveries = await Promise.allSettled(
      subscriptions.map(async (subscription) => {
        const to = subscription.customer.phoneNumber;
        if (!to) {
          return { status: "skipped", reason: "no phone number" };
        }

        try {
          // Отправляем SMS
          await twilioClient.messages.create({
            to: to,
            messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
            body: body,
          });

          // Логируем успешную доставку
          await prisma.messageDelivery.create({
            data: {
              messageId: message.id,
              subscriptionId: subscription.id,
              phoneNumber: to,
              status: "SENT",
              sentAt: new Date(),
            },
          });
          return { status: "sent", to };

        } catch (smsError) {
          console.error(`Ошибка отправки SMS на ${to}:`, smsError.message);
          // Логируем ошибку
          await prisma.messageDelivery.create({
            data: {
              messageId: message.id,
              subscriptionId: subscription.id,
              phoneNumber: to,
              status: "FAILED",
              errorMessage: smsError.message,
            },
          });
          return { status: "failed", to, error: smsError.message };
        }
      })
    );

    // 6. Формируем отчет
    const summary = deliveries.reduce(
      (acc, item) => {
        if (item.status === "fulfilled") {
          const value = item.value;
          if (value.status === "sent") acc.sent += 1;
          else if (value.status === "failed") acc.failed += 1;
          else acc.skipped += 1;
        } else {
          acc.failed += 1;
        }
        return acc;
      },
      { sent: 0, failed: 0, skipped: 0 }
    );

    return res.status(200).json({ message: "Массовая SMS-рассылка завершена.", summary });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Некорректные данные: нужен 'body'.", errors: error.flatten() });
    }
    console.error("Необработанная ошибка /api/admin/broadcast/sms-all:", error);
    return res.status(500).json({ message: "Ошибка сервера при SMS рассылке." });
  }
});
// ----------------------------------------------------------------
// --- НОВЫЙ ЭНДПОИНТ ДЛЯ EMAIL РАССЫЛКИ (SendGrid) ---
// ----------------------------------------------------------------
app.post("/api/admin/broadcast", authenticateSession, async (req, res) => {
  try {
    // 1. Валидация данных (используем новую схему)
    const { userIds, subject, htmlContent } = emailBroadcastSchema.parse(req.body);

    // 2. Получаем email'ы выбранных пользователей
    // (Модель 'customer', как видно из /api/customers)
    const customers = await prisma.customer.findMany({
      where: {
        id: { in: userIds },
        // --- ИСПРАВЛЕНИЕ 6: Учитываем согласие ---
        marketingConsent: true
        // --- КОНЕЦ ИСПРАВЛЕНИЯ ---
      },
      select: {
        email: true // Выбираем только email
      }
    });
    // Отфильтровываем null/undefined/пустые email
    const emails = customers.map(c => c.email).filter(Boolean);

    if (emails.length === 0) {
      return res.status(404).json({ message: 'Не найдено пользователей с email среди выбранных ID.' });
    }

    // 3. Создаем сообщение для SendGrid
    // 'from' email должен быть тем, что вы верифицировали в SendGrid
    const sendgridFromEmail = process.env.SENDGRID_FROM_EMAIL?.replace(/^['"]|['"]$/g, '')?.trim() || 'your-verified-email@yourdomain.com';
    const msg = {
      to: emails, // SendGrid автоматически обработает массив
      from: sendgridFromEmail,
      subject: subject,
      html: htmlContent, // Используем htmlContent для поддержки HTML
    };

    // 4. Отправляем
    await sgMail.sendMultiple(msg); // Используем sendMultiple для массива

    res.status(200).json({
      message: `Email-рассылка успешно отправлена ${emails.length} пользователям.`
    });

  } catch (error) {
    // Обработка ошибки Zod
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Некорректные данные для email рассылки.",
        errors: error.flatten()
      });
    }

    // Обработка других ошибок
    console.error('Ошибка при отправке SendGrid рассылки:', error);
    if (error.response) {
      console.error(error.response.body) // Логируем детальный ответ от SendGrid
    }
    res.status(500).json({ message: 'Ошибка сервера при отправке email рассылки.' });
  }
});

app.post("/api/verify-email", async (req, res) => {
  try {
    // 1. Убедитесь, что .trim() здесь есть (как в прошлый раз)
    const { customerId, code } = z.object({
      customerId: z.string(),
      code: z.string()
        .trim() // Убираем пробелы
        .min(6, "Код должен быть 6 цифр")
        .max(6, "Код должен быть 6 цифр"),
    }).parse(req.body);

    // --- НОВОЕ ЛОГГИРОВАНИЕ (Шаг 1) ---
    console.log(`[Verify] Получен запрос на верификацию. CustomerID: ${customerId}, Код: "${code}"`);

    const customer = await prisma.customer.findUnique({
      where: { id: customerId },
    });

    if (!customer) {
      console.log(`[Verify] ОШИБКА: Пользователь ${customerId} не найден.`);
      return res.status(404).json({ success: false, message: "Пользователь не найден." });
    }
    if (customer.isEmailVerified) {
      console.log(`[Verify] ОШИБКА: Email ${customer.email} уже подтвержден.`);
      return res.status(400).json({ success: false, message: "Email уже подтвержден." });
    }

    // --- НОВОЕ ЛОГГИРОВАНИЕ (Шаг 2) ---
    console.log(`[Verify] Сравнение: Код из запроса ("${code}") vs Код из БД ("${customer.emailVerificationCode}")`);

    if (customer.emailVerificationCode !== code) {
      console.log(`[Verify] ОШИБКА: Коды не совпадают.`);
      return res.status(400).json({ success: false, message: "Неверный код верификации." });
    }

    // Успех!
    console.log(`[Verify] УСПЕХ: Коды совпали. Верифицируем пользователя ${customer.email}.`);
    const updatedCustomer = await prisma.customer.update({
      where: { id: customerId },
      data: {
        isEmailVerified: true,
        emailVerificationCode: null, // Очищаем код
      },
    });

    // --- НОВЫЙ БЛОК: Проверка дня рождения при верификации ---
    if (updatedCustomer.birthDate) {
      const today = new Date();
      const birthDate = new Date(updatedCustomer.birthDate);

      // Сравниваем только месяц и день
      if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
        console.log(`[Verify] У пользователя ${updatedCustomer.email} сегодня день рождения! Отправляем письмо.`);
        // Вызываем нашу новую функцию
        // (не ждем await, чтобы не задерживать ответ пользователю)
        sendBirthdayEmailToCustomer(updatedCustomer);
      }
    }
    // --- КОНЕЦ НОВОГО БЛОКА ---

    return res.status(200).json({
      success: true,
      message: "Email успешно подтвержден!",
      discountCode: customer.discountCode,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("[Verify] ОШИБКА: Zod. Код не прошел валидацию (не 6 цифр?).", error.flatten());
      return res.status(400).json({ success: false, message: "Некорректные данные.", errors: error.flatten() });
    }
    console.error("Ошибка в /api/verify-email:", error);
    return res.status(500).json({ success: false, message: "Ошибка сервера при верификации." });
  }
});

app.post("/api/cancel-registration", async (req, res) => {
  try {
    const { customerId } = z.object({ customerId: z.string() }).parse(req.body);

    // Если customerId локальный (был сбой сети), его нет в БД
    if (customerId.startsWith('local_')) {
      return res.status(200).json({ message: "Локальный черновик, удаление не требуется." });
    }

    // Найти и удалить клиента, ТОЛЬКО ЕСЛИ он не верифицирован
    const result = await prisma.customer.deleteMany({
      where: {
        id: customerId,
        isEmailVerified: false, // <-- Самое важное: не даем удалить тех, кто УЖЕ в базе
      },
    });

    if (result.count > 0) {
      console.log(`[Cancel] Удален не-верифицированный клиент (отмена): ${customerId}`);
      return res.status(200).json({ message: "Регистрация отменена." });
    } else {
      console.log(`[Cancel] Попытка отмены для ${customerId}, но он уже верифицирован или не найден.`);
      return res.status(404).json({ message: "Клиент не найден или уже верифицирован." });
    }

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Необходим customerId." });
    }
    console.error("Ошибка при отмене регистрации:", error);
    return res.status(500).json({ message: "Ошибка сервера." });
  }
});


// --- НОВЫЙ БЛОК: Раздача статики (Frontend) ---
// Этот код будет обслуживать "сборку" твоего React-приложения
app.use(express.static(path.join(__dirname, 'frontend/dist')));
// -------------------------------------------

// --- НОВЫЙ БЛОК: "Catch-all" роут ---
// Этот роут должен быть ПОСЛЕ всех API-роутов, но ПЕРЕД app.listen
// Он перенаправляет все остальные запросы на твой index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

app.post('/api/export-to-sheets', authenticateSession, async (req, res) => {
  try {
    if (!req.ownerId) {
      return res.status(401).json({ message: "Неверный токен." });
    }
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    // 1. Получаем всех пользователей
    const customers = await prisma.customer.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // 2. Форматируем их для таблицы
    const dataForSheet = customers.map(customer => [
      customer.id,
      customer.firstName,
      customer.lastName,
      customer.email,
      customer.phoneNumber,
      customer.birthDate ? new Date(customer.birthDate).toLocaleDateString('ru-RU') : "",
      customer.postalCode,
      customer.city,
      customer.street,
      customer.houseNumber,
      customer.country,
      customer.preferredFood,
      customer.feedback,
      customer.discountCode,
      new Date(customer.createdAt).toLocaleString('ru-RU'),
    ]);

    // 3. Добавляем заголовки
    const header = [['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Birthday', 'Postal Code', 'Registered At']];

    // 4. Очищаем старые данные и вставляем новые
    await sheets.spreadsheets.values.clear({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Sheet1!A:H', // Укажите имя вашего листа
    });

    await sheets.spreadsheets.values.update({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Sheet1!A1', // Начать с ячейки A1
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [...header, ...dataForSheet],
      },
    });

    res.json({ success: true, message: 'Экспорт в Google Sheets выполнен!' });
  } catch (error) {
    console.error('Ошибка экспорта в Google Sheets:', error);
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
});

// В файле server.js

// ... в server.js

async function checkAndSendBirthdayEmails() {
  console.log('Task: [Birthday] Запуск ежедневной проверки дней рождения...');

  const today = new Date();
  const currentMonth = today.getMonth() + 1; // getMonth() 0-indexed
  const currentDay = today.getDate();

  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  try {
    // 1. Получаем список клиентов
    // Запрос стал проще, т.к. проверка SendGrid ушла в функцию
    const customers = await prisma.$queryRaw`
      SELECT * FROM "Customer" 
      WHERE EXTRACT(MONTH FROM "birthDate") = ${currentMonth} 
        AND EXTRACT(DAY FROM "birthDate") = ${currentDay}
        AND "marketingConsent" = TRUE
        AND "isEmailVerified" = TRUE
        AND ("lastBirthdayGreetingSent" IS NULL OR "lastBirthdayGreetingSent" < ${startOfToday})
    `;

    console.log(`[Birthday] Найдено ${customers.length} клиентов для поздравления сегодня.`);

    // 2. Проходим по каждому клиенту в цикле
    for (const customer of customers) {
      // 3. Вызываем нашу новую функцию
      // Мы используем 'await', т.к. это фоновый процесс
      await sendBirthdayEmailToCustomer(customer);
    } // Конец цикла for

    console.log('Task: [Birthday] Ежедневная проверка завершена.');

  } catch (dbError) {
    console.error('Task: [Birthday] Критическая ошибка (например, $queryRaw) в checkAndSendBirthdayEmails:', dbError);
  }
}


function scheduleDailyCheck() {
  const now = new Date();

  // 1. Устанавливаем время следующего запуска (00:01)
  let nextRun = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 1, 0, 0);

  // Если 00:01 сегодня уже прошло, планируем на завтра
  if (now.getTime() > nextRun.getTime()) {
    nextRun.setDate(nextRun.getDate() + 1);
  }

  // 2. Считаем, сколько мс осталось до этого времени
  const msUntilNextRun = nextRun.getTime() - now.getTime();

  console.log(`[Scheduler] Следующая проверка ДР запланирована на: ${nextRun.toLocaleString()}`);
  console.log(`[Scheduler] (Это через ${Math.round(msUntilNextRun / 1000 / 60)} минут)`);

  // 3. Ставим таймер на первый запуск
  setTimeout(() => {
    console.log('[Scheduler] Запуск плановой проверки ДР (00:01)');
    checkAndSendBirthdayEmails();

    // 4. После первого запуска, ставим интервал на "каждые 24 часа"
    setInterval(checkAndSendBirthdayEmails, 24 * 60 * 60 * 1000);

  }, msUntilNextRun);
}

// Запускаем наш новый планировщик
scheduleDailyCheck();

// (Опционально) Запустить проверку один раз при старте сервера
// sendBirthdayGreetings();
// --- НАЧАЛО ИСПРАВЛЕННОГО БОТА ---
let bot;

if (!process.env.TELEGRAM_BOT_TOKEN) {
  console.error('Ошибка: TELEGRAM_BOT_TOKEN не найден в .env');
} else {
  console.log('✅ TELEGRAM_BOT_TOKEN найден. Запуск бота...');

  bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

  // 1. НАСТРОЙКА I18N
  const i18n = new I18n({
    defaultLanguage: 'ru',
    allowMissing: true,
    directory: path.resolve(__dirname, 'locales'),
  });

  // 2. СЕССИИ И I18N
  const session = new LocalSession({ database: 'sessions.json' });
  bot.use(session.middleware());
  bot.use(i18n.middleware());

  // Middleware языка (восстанавливает выбор пользователя)
  bot.use(async (ctx, next) => {
    let lang = ctx.session.lang;
    if (!lang && ctx.from && ctx.from.id) {
      try {
        const telegramId = BigInt(ctx.from.id);
        // Игнорируем ошибку, если юзера нет
        const user = await prisma.customer.findUnique({
          where: { telegramId: telegramId },
          select: { languageCode: true }
        }).catch(() => null);
        
        if (user && user.languageCode) {
          lang = user.languageCode;
          ctx.session.lang = lang;
        }
      } catch (e) { console.error("Ошибка языка:", e.message); }
    }
    if (lang) ctx.i18n.locale(lang);
    return next();
  });

  // --- 3. ХЕЛПЕРЫ ---

  // Функция получения переведенного поля (например, name_ru или name_en)
  const getL10nField = (ctx, item, fieldName) => {
    const lang = ctx.session.lang || 'ru';
    // Проверяем name_en, name_ru и т.д.
    return item[`${fieldName}_${lang}`] || item[`${fieldName}_ru`] || item[fieldName] || '';
  };

  const getOrCreateUser = async (ctx) => {
    const telegramId = BigInt(ctx.from.id);
    try {
        let user = await prisma.customer.findUnique({ where: { telegramId } });
        if (!user) {
            user = await prisma.customer.create({
                data: {
                    telegramId,
                    firstName: ctx.from.first_name,
                    lastName: ctx.from.last_name || '',
                    languageCode: ctx.session.lang || 'ru',
                    phoneNumber: `TG_${telegramId}`, // Заглушка
                    country: 'NL',
                    discountCode: `TG${Date.now().toString().slice(-6)}`
                }
            });
        }
        // Обновляем язык, если он сменился в сессии
        if (ctx.session.lang && user.languageCode !== ctx.session.lang) {
             await prisma.customer.update({
                 where: { id: user.id },
                 data: { languageCode: ctx.session.lang }
             });
        }
        return user;
    } catch (e) { 
        console.error('Ошибка getOrCreateUser:', e.message);
        return null; 
    }
  };

  // КЛАВИАТУРЫ
  const getMainMenu = (ctx) => {
      return Markup.keyboard([
        ['📖 Меню', '🔥 Популярное'],
        ['🛍 Сделать заказ', '🧰 Корзина'], // Кнопка "Сделать заказ" теперь здесь
        ['🎁 Акции', '⭐ Рекомендации шефа'],
        ['❤️ Избранное', '👨‍💻 Оператор'] // Вернул кнопку ИЗБРАННОЕ
      ]).resize();
  };

  const getCategoriesMenu = () => {
      return Markup.keyboard([
        ['🍣 Роллы', '🥡 Сеты'],
        ['🔥 Горячие роллы', '🍕 Пиццы'],
        ['👻 Детское меню', '🥤 Напитки'],
        ['⚡️ Соусы', '⬅ Назад в главное меню']
      ]).resize();
  };

  // Сборка карточки товара
  const buildProductCaption = (ctx, product) => {
    const name = getL10nField(ctx, product, 'name');
    // В вашей схеме есть ingredients_ru, но нет description_ru. Используем ingredients.
    const desc = getL10nField(ctx, product, 'ingredients') || 'Вкуснейшее блюдо';
    const price = typeof product.price === 'number' ? product.price.toFixed(2) : '0';

    return `<b>${name} — ${price}€</b>\n\n<i>${desc}</i>`;
  };

  const buildProductKeyboard = (ctx, product, isFavorite) => {
    const favText = isFavorite ? '💔 Удалить' : '❤️ В избранное';
    const favAction = isFavorite ? `rem_fav_${product.id}` : `add_fav_${product.id}`;
    
    return Markup.inlineKeyboard([
        [Markup.button.callback('➕ Добавить в корзину', `add_cart_${product.id}`)],
        [Markup.button.callback(favText, favAction)],
        [Markup.button.callback('⬅ Назад к категориям', 'back_to_cats')]
    ]);
  };

  const sendProductCard = async (ctx, product, caption, keyboard) => {
    try {
        if (product.imageUrl) {
            await ctx.replyWithPhoto({ url: product.imageUrl }, { caption, parse_mode: 'HTML', ...keyboard });
        } else {
            await ctx.reply(caption, { parse_mode: 'HTML', ...keyboard });
        }
    } catch (e) {
        console.error(`Ошибка фото ${product.id}:`, e.message);
        await ctx.reply(caption, { parse_mode: 'HTML', ...keyboard });
    }
  };

  // --- КОМАНДЫ ---

  // СТАРТ: Выбор языка (Вернул как вы просили)
  bot.start(async (ctx) => {
    ctx.session.cart = ctx.session.cart || [];
    await getOrCreateUser(ctx);
    
    await ctx.reply('Добро пожаловать в SUSHI ICON 🍣✨\nВыберите язык / Choose language:', 
        Markup.inlineKeyboard([
            [Markup.button.callback('🇷🇺 Русский', 'set_lang_ru'), Markup.button.callback('🇺🇦 Українська', 'set_lang_uk')],
            [Markup.button.callback('🇬🇧 English', 'set_lang_en'), Markup.button.callback('🇳🇱 Nederlands', 'set_lang_nl')]
        ])
    );
  });

  // Обработка выбора языка -> Переход в меню
  bot.action(/set_lang_(.*)/, async (ctx) => {
      const lang = ctx.match[1];
      ctx.session.lang = lang;
      ctx.i18n.locale(lang);
      await getOrCreateUser(ctx); // Сохранить язык в БД

      await ctx.deleteMessage();
      await ctx.reply('Язык сохранен! Что хотите сделать?', getMainMenu(ctx));
  });

  // --- МЕНЮ И КАТЕГОРИИ ---

  bot.hears(['⬅ Назад в главное меню', '⬅ Меню'], (ctx) => {
      ctx.reply('Главное меню', getMainMenu(ctx));
  });

  bot.hears(['📖 Меню', 'Menu', '🛍 Сделать заказ'], async (ctx) => {
      await ctx.reply('Выберите категорию:', getCategoriesMenu());
  });

  // ⚡️ ИСПРАВЛЕНИЕ ОШИБКИ PRISMA (Поиск категорий)
  const categoriesTriggers = ['🍣 Роллы', '🥡 Сеты', '🔥 Горячие роллы', '🍕 Пиццы', '👻 Детское меню', '🥤 Напитки', '⚡️ Соусы'];
  
  bot.hears(categoriesTriggers, async (ctx) => {
    // Убираем эмодзи
    const rawName = ctx.message.text.replace(/🍣 |🥡 |🔥 |🍕 |👻 |🥤 |⚡️ /g, '').trim();

    try {
        // Ищем категорию, проверяя ВСЕ языковые поля (так как name нет)
        const products = await prisma.product.findMany({
            where: {
                category: {
                    OR: [
                        { name_ru: { contains: rawName, mode: 'insensitive' } },
                        { name_en: { contains: rawName, mode: 'insensitive' } },
                        { name_uk: { contains: rawName, mode: 'insensitive' } },
                        { name_nl: { contains: rawName, mode: 'insensitive' } }
                    ]
                }
            }
        });

        if (products.length === 0) return ctx.reply('В этой категории пока пусто 😔');

        // Получаем избранное
        const user = await getOrCreateUser(ctx);
        const favorites = user ? await prisma.favoriteProduct.findMany({
            where: { customerId: user.id, productId: { in: products.map(p=>p.id) } }
        }) : [];
        const favIds = new Set(favorites.map(f => f.productId));

        for (const product of products) {
            const caption = buildProductCaption(ctx, product);
            const keyboard = buildProductKeyboard(ctx, product, favIds.has(product.id));
            await sendProductCard(ctx, product, caption, keyboard);
        }
        
        await ctx.reply('Показаны все товары', Markup.inlineKeyboard([
             [Markup.button.callback('⬅ Назад к категориям', 'back_to_cats')]
        ]));

    } catch (e) {
        console.error("Ошибка поиска товаров:", e);
        ctx.reply('Ошибка при загрузке меню.');
    }
  });

  // --- КОРЗИНА И АДМИНКА ---
  
  // ⚡️ ИСПРАВЛЕНИЕ: undefined name в корзине
  bot.action(/add_cart_(\d+)/, async (ctx) => {
      const id = parseInt(ctx.match[1]);
      const product = await prisma.product.findUnique({ where: { id } });
      
      if (product) {
          ctx.session.cart = ctx.session.cart || [];
          ctx.session.cart.push(product);
          
          // Используем хелпер для имени, т.к. product.name не существует
          const name = getL10nField(ctx, product, 'name');

          await ctx.reply(`${name} добавлен в корзину 🛍\nХотите продолжить?`, 
            Markup.keyboard([
                ['➕ Добавить ещё'], // Логика для этой кнопки ниже
                ['⬅ Меню']
            ]).resize()
          );
      }
      await ctx.answerCbQuery();
  });
  
  // Логика кнопки "Добавить ещё"
  bot.hears('➕ Добавить ещё', (ctx) => ctx.reply('Выберите категорию:', getCategoriesMenu()));

  // Просмотр корзины
  bot.hears(['🧰 Корзина', 'Cart'], async (ctx) => {
      const cart = ctx.session.cart || [];
      if (cart.length === 0) return ctx.reply('Корзина пуста 💨');

      let text = '<b>🛒 Ваша корзина:</b>\n\n';
      let total = 0;
      const counts = {};
      cart.forEach(p => counts[p.id] = (counts[p.id] || 0) + 1);
      const uniqueIds = [...new Set(cart.map(p => p.id))];
      
      // Подгружаем свежие данные
      const products = await prisma.product.findMany({ where: { id: { in: uniqueIds } } });

      products.forEach(p => {
          const count = counts[p.id];
          const sum = p.price * count;
          const name = getL10nField(ctx, p, 'name');
          text += `▫️ ${name} x${count} = ${sum.toFixed(2)}€\n`;
          total += sum;
      });
      text += `\n<b>Итого: ${total.toFixed(2)}€</b>`;

      await ctx.replyWithHTML(text, Markup.inlineKeyboard([
          [Markup.button.callback('✅ Оформить заказ', 'checkout')],
          [Markup.button.callback('🗑 Очистить', 'clear_cart')]
      ]));
  });

  bot.action('clear_cart', (ctx) => {
      ctx.session.cart = [];
      ctx.answerCbQuery('Очищено');
      ctx.reply('Корзина пуста', getMainMenu(ctx));
  });

  // --- ИЗБРАННОЕ ---
  bot.hears(['❤️ Избранное'], async (ctx) => {
      const user = await getOrCreateUser(ctx);
      if (!user) return;
      
      const favs = await prisma.favoriteProduct.findMany({
          where: { customerId: user.id },
          include: { product: true }
      });
      
      if (favs.length === 0) return ctx.reply('В избранном пусто');
      
      for (const f of favs) {
          const caption = buildProductCaption(ctx, f.product);
          const keyboard = buildProductKeyboard(ctx, f.product, true);
          await sendProductCard(ctx, f.product, caption, keyboard);
      }
  });

  bot.action(/add_fav_(\d+)/, async (ctx) => {
      const pid = parseInt(ctx.match[1]);
      const user = await getOrCreateUser(ctx);
      try {
        await prisma.favoriteProduct.create({ data: { customerId: user.id, productId: pid } });
        // Обновляем клавиатуру на "Удалить"
        const p = await prisma.product.findUnique({ where: { id: pid }});
        const kb = buildProductKeyboard(ctx, p, true);
        await ctx.editMessageReplyMarkup(kb.reply_markup);
      } catch (e) {} 
      ctx.answerCbQuery('Добавлено в избранное');
  });

  bot.action(/rem_fav_(\d+)/, async (ctx) => {
      const pid = parseInt(ctx.match[1]);
      const user = await getOrCreateUser(ctx);
      try {
        await prisma.favoriteProduct.deleteMany({ where: { customerId: user.id, productId: pid } });
        // Обновляем клавиатуру на "Добавить"
        const p = await prisma.product.findUnique({ where: { id: pid }});
        const kb = buildProductKeyboard(ctx, p, false);
        await ctx.editMessageReplyMarkup(kb.reply_markup);
      } catch (e) {}
      ctx.answerCbQuery('Удалено из избранного');
  });

  // --- ОФОРМЛЕНИЕ ЗАКАЗА ---
  bot.action('checkout', async (ctx) => {
      await ctx.deleteMessage();
      ctx.session.step = 'awaiting_phone';
      await ctx.reply('Отправьте ваш номер телефона для связи:', 
          Markup.keyboard([
              [Markup.button.contactRequest('📱 Отправить телефон')],
              ['❌ Отмена']
          ]).resize().oneTime()
      );
  });

  bot.hears('❌ Отмена', (ctx) => {
      ctx.session.step = null;
      ctx.reply('Отменено', getMainMenu(ctx));
  });

  bot.on('contact', async (ctx) => {
      if (ctx.session.step === 'awaiting_phone') {
          await finalizeOrder(ctx, ctx.message.contact.phone_number);
      }
  });

  bot.on('text', async (ctx, next) => {
      if (ctx.session.step === 'awaiting_phone') {
          await finalizeOrder(ctx, ctx.message.text);
      } else {
          next();
      }
  });

  const finalizeOrder = async (ctx, phone) => {
      const cart = ctx.session.cart || [];
      if (cart.length === 0) return ctx.reply('Корзина пуста');
      
      let total = cart.reduce((sum, p) => sum + p.price, 0);
      const user = await getOrCreateUser(ctx);

      // Сохраняем заказ
      await prisma.order.create({
          data: {
              customerId: user.id,
              totalPrice: total,
              status: 'PENDING',
              items: {
                  create: cart.map(p => ({
                      productId: p.id,
                      quantity: 1, // Упрощенно считаем по 1, если нужно группировать - добавьте логику
                      price: p.price
                  }))
              }
          }
      });
      
      // Админское уведомление
      if (process.env.ADMIN_TELEGRAM_CHAT_ID) {
          try {
             await bot.telegram.sendMessage(
                 process.env.ADMIN_TELEGRAM_CHAT_ID, 
                 `🔥 НОВЫЙ ЗАКАЗ (TG)!\nКлиент: ${user.firstName}\nТел: ${phone}\nСумма: ${total.toFixed(2)}€`
             );
          } catch(e) { console.error('Ошибка уведомления админа', e.message); }
      }

      ctx.session.cart = [];
      ctx.session.step = null;
      await ctx.reply('✅ Спасибо! Заказ принят. Мы скоро свяжемся с вами.', Markup.removeKeyboard());
      // Возврат в меню через паузу, чтобы клавиатура успела обновиться
      setTimeout(() => ctx.reply('Главное меню', getMainMenu(ctx)), 1000);
  };

  // Action для кнопки "Назад" в списке товаров
  bot.action('back_to_cats', async (ctx) => {
      await ctx.deleteMessage();
      await ctx.reply('Выберите категорию:', getCategoriesMenu());
  });

  // Запуск Webhook
  const WEBHOOK_URL = process.env.WEBHOOK_URL || 'https://sushi-icon-promonl.onrender.com';
  try {
    app.use(await bot.createWebhook({ domain: WEBHOOK_URL }));
    console.log(`✅ Telegram бот запущен (Webhook): ${WEBHOOK_URL}`);
  } catch (err) {
    console.warn('⚠️ Ошибка Webhook:', err.message);
  }
}
// --- КОНЕЦ ИСПРАВЛЕННОГО БОТА ---

// --- НАЧАЛО БЭКЕНДА ДЛЯ INSTAGRAM БОТА ---
// ----------------------------------------------------------------
if (process.env.INSTAGRAM_VERIFY_TOKEN && process.env.INSTAGRAM_APP_SECRET && process.env.INSTAGRAM_PAGE_ACCESS_TOKEN) {

  console.log('✅ Instagram бот (бэкенд) готов к настройке Webhook.');

  // --- ШАГ 1: ВЕРИФИКАЦИЯ WEBHOOK (Meta вызовет это один раз) ---
  // Meta пришлет GET-запрос для проверки, что URL твой.
  app.get('/api/instagram/webhook', (req, res) => {
    console.log('[IG Webhook] Получен GET-запрос верификации от Meta...');

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    // Проверяем, что mode='subscribe' и токен совпадает с нашим
    if (mode && token) {
      if (mode === 'subscribe' && token === process.env.INSTAGRAM_VERIFY_TOKEN) {
        console.log('[IG Webhook] Верификация GET пройдена успешно. Отправляем "challenge".');
        res.status(200).send(challenge);
      } else {
        // Токены не совпали
        console.warn('[IG Webhook] ОШИБКА: Неверный verify_token.');
        res.sendStatus(403); // Forbidden
      }
    } else {
      res.sendStatus(400); // Bad Request
    }
  });

  // --- ШАГ 2: ПОЛУЧЕНИЕ СООБЩЕНИЙ (Meta будет слать POST сюда) ---
  // Middleware для проверки подписи Meta (безопасность)
  const verifyInstagramSignature = (req, res, next) => {
    const signature = req.headers['x-hub-signature-256'];
    if (!signature) {
      console.warn('[IG Webhook] ОШИБКА: Запрос без подписи X-Hub-Signature-256.');
      return res.status(403).send('Signature required');
    }

    // Создаем хэш из "сырого" тела запроса
    const hmac = crypto.createHmac('sha256', process.env.INSTAGRAM_APP_SECRET);
    hmac.update(req.rawBody); // Используем req.rawBody, который мы сохранили
    const expectedSignature = 'sha256=' + hmac.digest('hex');

    if (signature !== expectedSignature) {
      console.warn('[IG Webhook] ОШИБКА: Неверная подпись. Запрос отклонен.');
      return res.status(403).send('Invalid signature');
    }

    // Подпись верна, передаем управление дальше
    next();
  };

  // Главный обработчик Webhook
  app.post('/api/instagram/webhook', verifyInstagramSignature, (req, res) => {
    const body = req.body;

    // Проверяем, что это событие со страницы Instagram
    if (body.object === 'instagram') {
      console.log('[IG Webhook] Получено событие от Instagram...');

      body.entry.forEach(entry => {
        // entry.messaging может быть массивом, если сообщения пришли пачкой
        entry.messaging.forEach(messagingEvent => {
          if (messagingEvent.message) {
            // Главная функция, которая обрабатывает сообщение
            handleInstagramMessage(messagingEvent);
          }
        });
      });

      // Meta требует *немедленный* ответ 200 OK, чтобы понять, что мы живы.
      // Саму логику (handleInstagramMessage) мы выполняем асинхронно.
      res.status(200).send('EVENT_RECEIVED');

    } else {
      // Если это не Instagram (например, Facebook Messenger)
      res.sendStatus(404);
    }
  });

  // --- ШАГ 3: ЛОГИКА БОТА И ОТПРАВКА ОТВЕТА ---

  // Глобальный объект для хранения "корзин" (временное решение)
  // { 'USER_ID': { cart: [...] } }
  const igUserSessions = new Map();

  // Обработчик логики
  async function handleInstagramMessage(event) {
    const senderId = event.sender.id; // Уникальный ID пользователя в Instagram
    const messageText = event.message.text.toLowerCase().trim();

    // Получаем сессию пользователя (или создаем новую)
    if (!igUserSessions.has(senderId)) {
      igUserSessions.set(senderId, { cart: [] });
    }
    const session = igUserSessions.get(senderId);

    // --- ЛОГИКА МЕНЮ (как в Telegram-боте) ---
    if (messageText === 'menu' || messageText === '/menu') {
      try {
        await sendInstagramMessage(senderId, 'Загружаю меню...');

        const categories = await prisma.productCategory.findMany({
          include: { products: true }
        });

        if (categories.length === 0) {
          return await sendInstagramMessage(senderId, 'Извините, наше меню сейчас пустое.');
        }

        for (const category of categories) {
          await sendInstagramMessage(senderId, `<b>${category.name}</b>`);

          for (const product of category.products) {
            const productText = `${product.name} - ${product.price}€\n${product.description || ''}`;

            // В Instagram мы не можем слать "inline-кнопки" с фото, как в TG.
            // Мы шлем "Quick Replies" (быстрые ответы).
            const quickReplies = [{
              content_type: 'text',
              title: `Добавить: ${product.name}`,
              // "payload" - это то, что бот получит, когда юзер нажмет кнопку
              payload: `ADD_TO_CART_${product.id}`,
            }];

            await sendInstagramMessage(senderId, productText, quickReplies);
          }
        }
      } catch (e) {
        console.error("Ошибка загрузки IG меню:", e);
        await sendInstagramMessage(senderId, 'Ошибка при загрузке меню.');
      }

      // --- ЛОГИКА ДОБАВЛЕНИЯ В КОРЗИНУ (через "payload" из кнопок) ---
    } else if (event.message.quick_reply && event.message.quick_reply.payload.startsWith('ADD_TO_CART_')) {

      const productId = parseInt(event.message.quick_reply.payload.split('_')[3]);
      const product = await prisma.product.findUnique({ where: { id: productId } });

      if (product) {
        session.cart.push(product);
        await sendInstagramMessage(senderId, `✅ ${product.name} добавлен в корзину.`);
        await sendInstagramMessage(senderId, `В корзине ${session.cart.length} поз. Напишите "cart", чтобы оформить.`);
      }

      // --- ЛОГИКА КОРЗИНЫ ---
    } else if (messageText === 'cart' || messageText === '/cart') {
      if (session.cart.length === 0) {
        return await sendInstagramMessage(senderId, 'Ваша корзина пуста. Напишите "menu", чтобы посмотреть.');
      }

      let total = 0;
      let cartText = '🛒 Ваша корзина:\n';
      session.cart.forEach(p => {
        cartText += ` - ${p.name} (${p.price}€)\n`;
        total += p.price;
      });
      cartText += `\nИтого: ${total.toFixed(2)}€`;
      await sendInstagramMessage(senderId, cartText);

      // --- АПСЕЛЛ И ОФОРМЛЕНИЕ ---
      await sendInstagramMessage(senderId, 'Хотите что-нибудь еще?', [
        {
          content_type: 'text',
          title: '🎁 Добавить Картошку Фри',
          payload: 'UPSELL_FRIES',
        },
        {
          content_type: 'text',
          title: '✅ Оформить заказ',
          payload: 'CHECKOUT',
        }
      ]);

      // --- ЛОГИКА АПСЕЛЛА ---
    } else if (event.message.quick_reply && event.message.quick_reply.payload === 'UPSELL_FRIES') {
      // (здесь та же логика, что и в TG-боте: найти ID картошки, добавить в сессию)
      await sendInstagramMessage(senderId, 'Картошка добавлена!');

      // --- ЛОГИКА ОФОРМЛЕНИЯ ---
    } else if (event.message.quick_reply && event.message.quick_reply.payload === 'CHECKOUT') {

      await sendInstagramMessage(senderId, 'Спасибо! Ваш заказ принят. Наш менеджер свяжется с вами в этом чате в течение 5 минут для подтверждения и оплаты.');

      // (Здесь мы отправляем заказ админу в Telegram)
      const adminChatId = process.env.ADMIN_TELEGRAM_CHAT_ID;
      if (adminChatId) {
        try {
          const user = await getInstagramUserProfile(senderId); // Доп. функция
          let orderText = `<b>НОВЫЙ ЗАКАЗ (Instagram)</b>\n\n`;
          orderText += `<b>Клиент:</b> ${user.first_name} ${user.last_name} (@${user.username})\n`;
          orderText += `<b>ID:</b> ${senderId}\n\n<b>Заказ:</b>\n... (список корзины) ...`;

          await telegramBot.telegram.sendMessage(adminChatId, orderText, { parse_mode: 'HTML' });
        } catch (e) { console.error('Не удалось отправить IG заказ админу в TG', e); }
      }

      // Очищаем корзину
      session.cart = [];

      // --- "ЭХО" ПО УМОЛЧАНИЮ ---
    } else {
      // Отвечаем эхом на любое другое сообщение
      await sendInstagramMessage(senderId, `Вы написали: "${messageText}". Напишите "menu", чтобы посмотреть меню.`);
    }
  }

  // --- Вспомогательная функция для ОТПРАВКИ сообщений ---
  async function sendInstagramMessage(recipientId, text, quickReplies = null) {
    const messageData = {
      recipient: {
        id: recipientId
      },
      message: {
        text: text,
      }
    };

    // Если есть кнопки, добавляем их
    if (quickReplies) {
      messageData.message.quick_replies = quickReplies;
    }

    try {
      await axios.post(
        'https://graph.facebook.com/v19.0/me/messages',
        messageData,
        {
          params: { access_token: process.env.INSTAGRAM_PAGE_ACCESS_TOKEN }
        }
      );
      console.log(`[IG Webhook] Отправлен ответ: "${text}"`);
    } catch (error) {
      console.error('[IG Webhook] ОШИБКА отправки ответа:', error.response ? error.response.data : error.message);
    }
  }

  // --- Вспомогательная функция для получения данных о юзере (нужен токен) ---
  async function getInstagramUserProfile(userId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/${userId}`,
        {
          params: {
            fields: 'first_name,last_name,profile_pic,username',
            access_token: process.env.INSTAGRAM_PAGE_ACCESS_TOKEN
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Ошибка получения профиля IG:', error.response ? error.response.data : error.message);
      return { first_name: 'Клиент', last_name: 'Instagram' };
    }
  }

  // (Нужна переменная telegramBot из блока Telegram. 
  // Убедись, что 'bot' из Telegraf объявлен глобально в блоке 'else')
  // ... код ниже предполагает, что 'bot' доступен как 'telegramBot'
  let telegramBot; // Объявим здесь
  if (process.env.TELEGRAM_BOT_TOKEN) {
    // ... твой код Telegraf
    telegramBot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
    // ... (вся настройка Telegraf)
    // Убедись, что 'telegramBot' присваивается инстанс Telegraf
  }


} else {
  console.warn('⚠️  Instagram бот НЕ запущен. Не хватает переменных окружения (INSTAGRAM_VERIFY_TOKEN, INSTAGRAM_APP_SECRET, INSTAGRAM_PAGE_ACCESS_TOKEN).');
}
// ----------------------------------------------------------------
// --- КОНЕЦ БЭКЕНДА ДЛЯ INSTAGRAM БОТА ---
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});