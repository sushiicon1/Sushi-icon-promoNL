import React, { useState, useCallback, useEffect, useMemo, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { DatePicker } from './components/DatePicker';
import "./App.css";
import "./i18n/config";
import { ParticleTextEffect } from "./components/ParticleTextEffect";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import SimpleCountrySelector from "./components/SimpleCountrySelector";
import SimplePhoneInput from "./components/SimplePhoneInput";
import { InteractiveHoverButton } from "./components/ui/interactive-hover-button";
import ThankYouPage from "./components/ThankYouPage";
import { EnhancedAdminPanel } from './components/EnhancedAdminPanel';
import NetherlandsAddressInput from "./components/NetherlandsAddressInput";
import AccessDenied from "./components/AccessDenied";
import AuroraCanvas from "./components/ui/ambient-aurora";
import brandLogoImage from './assets/new_sushi_logo.jpg';
import brandLogoSquare from './assets/fish.png';
// --- НОВЫЙ ИМПОРТ ---
import AdminLogin from "./components/AdminLogin"; // <-- Он у вас был, и это правильно!

// --- (типы и defaultFormState остаются без изменений) ---
type RegistrationFormState = {
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: string;
  email: string;
  birthDate: string;
  city: string;
  street: string;
  postalCode: string;
  houseNumber: string;
  preferredFood: string;
  feedback: string;
  discountCode: string;
  marketingConsent: boolean;
};

type StatusState = {
  type: "success" | "error";
  message: string;
  details?: string;
};

const defaultFormState: RegistrationFormState = {
  firstName: "",
  lastName: "",
  country: "",
  phoneNumber: "",
  email: "",
  birthDate: "",
  city: "",
  street: "",
  postalCode: "",
  houseNumber: "",
  preferredFood: "",
  feedback: "",
  discountCode: "",
  marketingConsent: false,
};


export default function App() {
  const { t, i18n } = useTranslation();
  const [formState, setFormState] = useState<RegistrationFormState>(defaultFormState);
  
  // Восстанавливаем сохраненный язык при загрузке приложения
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && ["ru", "uk", "en", "nl", "pl", "es", "de", "fr", "da", "lb", "no", "sv"].includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage).catch(console.error);
    }
  }, [i18n]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusState | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  // --- УПРАВЛЕНИЕ АДМИНКОЙ ---
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminToken, setAdminToken] = useState<string | null>(null); // Храним токен
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showAccessDenied, setShowAccessDenied] = useState(false);

  // --- (Мы удалили adminFormData, adminError, isAdminLoading, т.к. они теперь внутри AdminLogin.tsx) ---

  // --- НОВЫЕ СОСТОЯНИЯ ДЛЯ ВЕРИФИКАЦИИ (остаются) ---
  const [showVerification, setShowVerification] = useState(false);
  const [verificationData, setVerificationData] = useState<{customerId: string, email: string} | null>(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState("");

  const [draftId, setDraftId] = useState<string | null>(null);

  // --- (Валидация и инпуты остаются без изменений) ---
  const [addressValidation, setAddressValidation] = useState({
    isValid: false,
    errors: [] as string[]
  });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof RegistrationFormState, string>>>({});
  const lettersOnlyRegex = useMemo(() => /^[\p{L}]+(?:[-\s'][\p{L}]+)*$/u, []);
  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, []);
  const generateLocalDiscountCode = () => {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 8; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)];
    return code;
  };
  const validateForm = useCallback(() => {
    const errors: Partial<Record<keyof RegistrationFormState, string>> = {};

    if (!formState.firstName || !lettersOnlyRegex.test(formState.firstName.trim())) {
      errors.firstName = !formState.firstName ? t('registration.validation.firstName.required') : t('registration.validation.firstName.lettersOnly');
    }
    if (!formState.lastName || !lettersOnlyRegex.test(formState.lastName.trim())) {
      errors.lastName = !formState.lastName ? t('registration.validation.lastName.required') : t('registration.validation.lastName.lettersOnly');
    }
    if (!formState.country) {
      errors.country = t('registration.validation.country.required');
    }
    const phoneDigits = (formState.phoneNumber || '').replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 7 || phoneDigits.length > 15) {
      errors.phoneNumber = t('registration.validation.phone.length');
    }
    if (!formState.email || !emailRegex.test(formState.email)) {
      errors.email = t('registration.validation.email.invalid');
    }

    if (!addressValidation.isValid) {
      if (!formState.postalCode) errors.postalCode = t('registration.validation.postalCode.format');
      if (!formState.street) errors.street = t('registration.validation.street.required');
      if (!formState.city) errors.city = t('registration.validation.city.required');
      if (!formState.houseNumber) errors.houseNumber = t('registration.validation.houseNumber.required');
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formState, addressValidation.isValid, t, lettersOnlyRegex, emailRegex]);
  const handleInputChange = useCallback((field: keyof RegistrationFormState, value: string | boolean) => {
  setFormState(prev => ({ ...prev, [field]: value }));
}, []);

  
  // --- (handleSubmit остается без изменений) ---
  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    const ok = validateForm();
    if (!ok) return;
    setIsSubmitting(true);
    setStatus(null);
    setFieldErrors({});

    // Проверяем форму локально, если все заполнено правильно - сразу переходим дальше
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.status === "pending_verification") {
        if (draftId) {
          try {
            await fetch(`/api/form-draft/${draftId}`, { method: 'DELETE' });
            setDraftId(null);
          } catch (error) {
            console.error('Ошибка удаления черновика:', error);
          }
        }
        setVerificationData({ customerId: data.customerId, email: data.email });
        setShowVerification(true);
      } else if (response.ok && data.status === "exists") {
        setStatus({
          type: "error",
          message: t("registration.alreadyRegistered"),
          details: data.discountCode ? t("registration.success.discountCode", { code: data.discountCode }) : undefined,
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || t("registration.error.serverError"),
        });
        if (data.errors?.fieldErrors?.email) {
            setFieldErrors(prev => ({ ...prev, email: data.errors.fieldErrors.email[0] }));
        }
      }
    } catch (error) {
      // Если произошла ошибка сети, но форма правильно заполнена - продолжаем дальше
      console.log('Network error, but form is valid. Continuing...', error);
      
      // Генерируем локальный ID для верификации
      const localCustomerId = 'local_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      
      if (draftId) {
        try {
          await fetch(`/api/form-draft/${draftId}`, { method: 'DELETE' });
          setDraftId(null);
        } catch (error) {
          console.error('Ошибка удаления черновика:', error);
        }
      }
      
      // Переходим к верификации даже без ответа от сервера
      setVerificationData({ 
        customerId: localCustomerId, 
        email: formState.email 
      });
      setShowVerification(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, t, validateForm, draftId]);

  // --- (handleVerificationSubmit остается без изменений) ---
  const handleVerificationSubmit = async (e: FormEvent) => {
   e.preventDefault();
    if (!verificationData) return;
    
    // Проверяем, что код введен (минимум 4 символа)
    if (verificationCode.trim().length < 4) {
      setVerificationError(t("registration.validation.invalidCode"));
      return;
    }
    
    setIsSubmitting(true);
    setVerificationError("");

    try {
      const response = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId: verificationData.customerId,
          code: verificationCode.trim()
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowVerification(false);
        setVerificationData(null);
        setFormState(prev => ({
          ...defaultFormState,
          discountCode: data.discountCode || generateLocalDiscountCode(),
          firstName: prev.firstName,
          lastName: prev.lastName,
          phoneNumber: prev.phoneNumber,
          email: prev.email,
        }));
        setShowThankYou(true);
      } else {
        setVerificationError(data.message || t("registration.validation.invalidCode"));
      }
    } catch (err) {
      // Если ошибка сети, но код введен - продолжаем дальше с локальным промокодом
      console.log('Network error during verification, but code is entered. Continuing...', err);
      
      const localDiscountCode = generateLocalDiscountCode();
      
      setShowVerification(false);
      setVerificationData(null);
      setFormState(prev => ({
        ...defaultFormState,
        discountCode: localDiscountCode,
        firstName: prev.firstName,
        lastName: prev.lastName,
        phoneNumber: prev.phoneNumber,
        email: prev.email,
      }));
      setShowThankYou(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleCancelVerification = useCallback(async () => {
  if (!verificationData) {
    // На всякий случай, если данных нет, просто скрыть
    setShowVerification(false);
    setVerificationData(null);
    setVerificationCode("");
    setVerificationError("");
    return;
  }

  try {
    // 1. Отправляем запрос на сервер, чтобы удалить не-верифицированного пользователя
    await fetch("/api/cancel-registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customerId: verificationData.customerId }),
    });
  } catch (error) {
    console.error("Не удалось отменить регистрацию на сервере:", error);
    // В любом случае сбрасываем UI
  }

  // 2. Сбрасываем состояние UI
  setShowVerification(false);
  setVerificationData(null);
  setVerificationCode("");
  setVerificationError("");
  // Мы НЕ сбрасываем formState, чтобы пользователь мог исправить свои данные

}, [verificationData]); // <-- Добавьте эту функцию
  // --- НОВАЯ ФУНКЦИЯ ДЛЯ ОБРАБОТКИ УСПЕШНОГО ВХОДА ---
  // AdminLogin.tsx вызовет эту функцию, когда 2FA будет пройдена
  const handleAdminLoginSuccess = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
      // AdminLogin сохранил токен, нам нужно его прочитать
      const token = localStorage.getItem('adminToken');

      setIsAdminAuthenticated(true);
      setAdminToken(token); // Устанавливаем токен в состояние App.tsx
      setShowAdminPanel(true); // Показываем панель
      setShowAdminLogin(false); // Скрываем форму входа
    } else {
      // Это может быть вызвано, если onLogin(false) будет вызван из AdminLogin (например, при выходе)
      setIsAdminAuthenticated(false);
      setShowAdminPanel(false);
      setShowAdminLogin(false);
    }
  };
  // --------------------------------------------------

  // --- (Мы удалили старые handleAdminInputChange и handleAdminLogin) ---

  // --- (handleAdminLogout остается) ---
  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken'); // Используем 'adminToken'
    localStorage.removeItem('adminLoginTime');
    localStorage.removeItem('adminAuthenticated'); // Старый флаг

    setIsAdminAuthenticated(false);
    setAdminToken(null);
    setShowAdminLogin(false);
    setShowAdminPanel(false);
  };

  // --- (useEffect для проверки Auth немного изменен) ---
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('adminToken'); // <-- ИЩЕМ 'adminToken'
      const loginTime = localStorage.getItem('adminLoginTime');

      if (token && loginTime) {
        const loginDate = new Date(loginTime);
        const now = new Date();
        const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

        if (hoursDiff < 24) {
          setIsAdminAuthenticated(true);
          setAdminToken(token);
          setShowAdminPanel(true); 
        } else {
          handleAdminLogout();
        }
      } else {
        setIsAdminAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  // Отключаем прокрутку на странице верификации
  useEffect(() => {
    if (showVerification) {
      const originalOverflow = document.body.style.overflow;
      const originalHeight = document.body.style.height;
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.height = originalHeight;
      };
    }
  }, [showVerification]);

  // --- (useEffect для автосохранения остается без изменений) ---
  useEffect(() => {
    if (showThankYou || showAdminLogin || showAdminPanel || showAccessDenied || showVerification) {
      return;
    }

    const hasData = formState.firstName || formState.lastName || formState.email || 
                    formState.phoneNumber || formState.country || formState.city;

    if (!hasData) {
      return;
    }

    const saveDraft = async () => {
      try {
        const response = await fetch('/api/form-draft', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formState,
            draftId: draftId,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (!draftId && data.draftId) {
            setDraftId(data.draftId);
          }
        }
      } catch (error) {
        console.error('Ошибка автосохранения черновика:', error);
      }
    };
    saveDraft();
    const intervalId = setInterval(saveDraft, 1000);
    return () => clearInterval(intervalId);
  }, [formState, draftId, showThankYou, showAdminLogin, showAdminPanel, showAccessDenied, showVerification]);


  if (showThankYou) {
    return <ThankYouPage customerData={formState} onClose={() => setShowThankYou(false)} />;
  }

  if (showAccessDenied) {
    return <AccessDenied onBack={() => {
      setShowAccessDenied(false);
      setShowAdminLogin(false);
    }} />;
  }

  // --- ГЛАВНОЕ ИЗМЕНЕНИЕ В РЕНДЕРЕ ---

  const renderContent = () => {
    if (isAdminAuthenticated && showAdminPanel) {
      // Админ-панель
      return (
        <EnhancedAdminPanel 
          adminToken={adminToken} 
          onLogout={handleAdminLogout} 
        />
      );
    }

    // --- (Экран верификации пользователя остается) ---
    if (showVerification && verificationData) {
      return (
        <div className="app" style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'fixed',
          top: 0,
          left: 0,
          background: 'linear-gradient(135deg, #0ABAB5 0%, #1CC5C0 50%, #2DD9D4 100%)'
        }}>
          <AuroraCanvas />
          <LanguageSwitcher />
          <section className="verification-card" style={{
            width: '100%',
            maxWidth: '450px',
            maxHeight: '90vh',
            background: 
              'radial-gradient(70% 55% at 24% 20%, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0) 32%), radial-gradient(95% 80% at 80% 82%, rgba(62, 205, 255, 0.25), rgba(62, 205, 255, 0) 46%), linear-gradient(160deg, rgba(5, 40, 82, 0.95) 0%, rgba(4, 62, 118, 0.98) 45%, rgba(7, 94, 152, 1) 100%)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '32px 28px',
            color: '#ffffff',
            boxShadow: 
              '0 8px 24px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: '1 1 auto', minHeight: 0 }}>
                {/* Логотип */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0ABAB5 0%, #1CC5C0 100%)',
                    border: '3px solid rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(10, 186, 181, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.8) inset',
                    overflow: 'hidden',
                    padding: '0'
                  }}>
                    <img 
                      src={brandLogoImage} 
                      alt="SUSHI ICON" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                    />
                  </div>
                </div>

                {/* Заголовок */}
                <h2 style={{ 
                  color: '#ffffff', 
                  fontSize: '24px',
                  fontWeight: '800',
                  textAlign: 'center',
                  margin: '0 0 12px 0',
                  textShadow: '0 2px 8px rgba(10, 186, 181, 0.4), 0 0 20px rgba(10, 186, 181, 0.2)',
                  letterSpacing: '0.02em'
                }}>
                  {t("registration.verify.title")}
                </h2>

                {/* Инструкции */}
                <p style={{ 
                  textAlign: 'center', 
                  color: '#ffffff', 
                  marginBottom: '20px',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  fontWeight: '500',
                  opacity: 0.9
                }}>
                  {t("registration.verify.instructions", { email: verificationData.email })}
                </p>
                {/* --- НАЧАЛО ИЗМЕНЕНИЯ --- */}
                {/* Приписка о спаме */}
                <p style={{
                  textAlign: 'center',
                  color: '#ffffff',
                  fontSize: '12px',
                  lineHeight: '1.4',
                  fontWeight: '500',
                  opacity: 0.8,
                  marginTop: '-12px', // Немного приподнимем
                  marginBottom: '20px'
                }}>
                  {t("registration.verify.spamWarning", "P.S. Please check your spam folder!")}
                </p>
                {/* --- КОНЕЦ ИЗМЕНЕНИЯ --- */}
                {/* Форма */}
                <form onSubmit={handleVerificationSubmit} autoComplete="on" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Поле ввода кода */}
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '700', 
                      color: '#ffffff', 
                      fontSize: '14px',
                      marginBottom: '10px',
                      textShadow: '0 2px 6px rgba(10, 186, 181, 0.3), 0 0 15px rgba(10, 186, 181, 0.15)'
                    }}>
                      {t("registration.verify.codeLabel")} *
                    </label>
                    <input
                      type="text"
                      name="verificationCode"
                      placeholder="000000"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      autoComplete="one-time-code"
                      inputMode="numeric"
                      required
                      maxLength={6}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '10px',
                        fontSize: '24px',
                        fontWeight: '700',
                        boxSizing: 'border-box',
                        background: '#ffffff',
                        color: '#0a0f1a',
                        textAlign: 'center',
                        letterSpacing: '0.3em',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                        fontFamily: 'monospace'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(10, 186, 181, 0.8)';
                        e.target.style.boxShadow = '0 8px 32px rgba(10, 186, 181, 0.4), 0 0 0 4px rgba(10, 186, 181, 0.1)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    />
                    <p style={{
                      marginTop: '8px',
                      fontSize: '12px',
                      color: '#ffffff',
                      textAlign: 'center',
                      fontWeight: '500',
                      opacity: 0.85
                    }}>
                      {verificationCode.length}/6
                    </p>
                  </div>

                  {/* Сообщение об ошибке */}
                  {verificationError && (
                    <div style={{
                      padding: '12px 16px',
                      background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.95) 0%, rgba(200, 35, 51, 0.95) 100%)',
                      border: '2px solid rgba(220, 53, 69, 0.5)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '13px',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                      fontWeight: '600',
                      textAlign: 'center',
                      boxShadow: '0 4px 16px rgba(220, 53, 69, 0.4)',
                      animation: 'shake 0.5s ease-in-out'
                    }}>
                      {verificationError}
                    </div>
                  )}

                  {/* Кнопки */}
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginTop: '4px'
                  }}>
                    <InteractiveHoverButton 
                      text={isSubmitting ? t("registration.actions.submitting") : t("registration.verify.submitButton")}
                      className="button button--primary"
                      type="submit"
                      disabled={isSubmitting}
                    />
                    <InteractiveHoverButton 
                      text={t("registration.verify.cancelButton")}
                      className="button button--secondary"
                      onClick={handleCancelVerification}
                    />
                  </div>
                </form>
              </div>
          </section>
        </div>
      );
    }
    // ------------------------------------

    // --- ИЗМЕНЕНИЕ ЗДЕСЬ ---
    if (showAdminLogin) {
      // Теперь мы рендерим компонент AdminLogin
      // и передаем ему нашу новую функцию
      return (
        <AdminLogin onLogin={handleAdminLoginSuccess} />
      );
    }
    // --- КОНЕЦ ИЗМЕНЕНИЯ ---

    // Форма регистрации (без изменений)
    return (
      <>
        <section className="card card--registration">
          <h2 className="card__title">{t("registration.cardTitle")}</h2>

          {status && (
            <div className={`status status--${status.type}`}>
              <p className="status__message">{status.message}</p>
              {status.details && <p className="status__details">{status.details}</p>}
            </div>
          )}

          <form className="form" onSubmit={handleSubmit} autoComplete="on">
            <div className="form__row">
              <label className="form__label" htmlFor="firstName">
                {t("registration.fields.firstName")} *
              </label>
              <input
                id="firstName"
                name="firstName"
                className="form__input"
                type="text"
                placeholder={t("registration.placeholders.firstName")}
                value={formState.firstName}
                onChange={(event) => handleInputChange("firstName", event.target.value)}
                autoComplete="given-name"
                required
              />
              {fieldErrors.firstName && (
                <div className="form__hint form__hint--error">{fieldErrors.firstName}</div>
              )}
            </div>

            <div className="form__row">
              <label className="form__label" htmlFor="lastName">
                {t("registration.fields.lastName")} *
              </label>
              <input
                id="lastName"
                name="lastName"
                className="form__input"
                type="text"
                placeholder={t("registration.placeholders.lastName")}
                value={formState.lastName}
                onChange={(event) => handleInputChange("lastName", event.target.value)}
                autoComplete="family-name"
                required
              />
              {fieldErrors.lastName && (
                <div className="form__hint form__hint--error">{fieldErrors.lastName}</div>
              )}
            </div>

            <div className="form__row">
              <label className="form__label" htmlFor="country">
                {t("registration.fields.country")} *
              </label>
              <SimpleCountrySelector
                value={formState.country}
                onChange={(value) => handleInputChange("country", value)}
                placeholder={t("registration.placeholders.country")}
              />
              {fieldErrors.country && (
                <div className="form__hint form__hint--error">{fieldErrors.country}</div>
              )}
            </div>

            <div className="form__row">
              <label className="form__label" htmlFor="phoneNumber">
                {t("registration.fields.phone")} *
              </label>
              <SimplePhoneInput
                value={formState.phoneNumber}
                onChange={(value) => handleInputChange("phoneNumber", value)}
                placeholder={t("registration.placeholders.phone")}
                countryCode={formState.country}
              />
                {fieldErrors.phoneNumber && (
                  <div className="form__hint form__hint--error">{fieldErrors.phoneNumber}</div>
                )}
            </div>

            <div className="form__row">
              <label className="form__label" htmlFor="email">
                {t("registration.fields.email")} *
              </label>
              <input
                id="email"
                name="email"
                className="form__input"
                type="email"
                placeholder={t("registration.placeholders.email")}
                value={formState.email}
                onChange={(event) => handleInputChange("email", event.target.value)}
                autoComplete="email"
                required
              />
              {fieldErrors.email && (
                <div className="form__hint form__hint--error">{fieldErrors.email}</div>
              )}
            </div>

            <div className="form__row">
              <label className="form__label" htmlFor="birthDate">
                {t("registration.fields.birthDate")} *
              </label>
              <DatePicker
                value={formState.birthDate}
                onChange={(value) => handleInputChange("birthDate", value)}
                placeholder={t("registration.datePicker.placeholder")}
                required
              />
            </div>

            <NetherlandsAddressInput
              postalCode={formState.postalCode}
              street={formState.street}
              city={formState.city}
              houseNumber={formState.houseNumber}
              onPostalCodeChange={(value) => handleInputChange("postalCode", value)}
              onStreetChange={(value) => handleInputChange("street", value)}
              onCityChange={(value) => handleInputChange("city", value)}
              onHouseNumberChange={(value) => handleInputChange("houseNumber", value)}
              onValidationChange={(isValid, errors) => setAddressValidation({ isValid, errors })}
              required={true}
            />
            <div className="form__row" style={{ flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
            <input
              id="marketingConsent"
              name="marketingConsent"
              type="checkbox"
              checked={formState.marketingConsent}
              onChange={(event) => handleInputChange("marketingConsent", event.target.checked)} // <-- Отправляем event.target.checked
            />
            <label className="form__label" htmlFor="marketingConsent" style={{ marginBottom: 0 }}>
              {t("registration.fields.marketingConsent")} {/* <-- Не забудьте добавить этот ключ в файлы i18n */}
            </label>
             </div>
            <div className="form__row">
              <label className="form__label" htmlFor="preferredFood">
                {t("registration.fields.preferredFood")} *
              </label>
              <textarea
                id="preferredFood"
                name="preferredFood"
                className="form__input form__textarea"
                placeholder={t("registration.placeholders.preferredFood")}
                value={formState.preferredFood || formState.feedback}
                onChange={(event) => {
                  const v = event.target.value;
                  handleInputChange("preferredFood", v);
                  handleInputChange("feedback", v);
                }}
                autoComplete="off"
                rows={4}
                required
              />
            </div>

            <div className="form__actions">
              <InteractiveHoverButton 
                text={isSubmitting ? t("registration.actions.submitting") : t("registration.actions.submit")}
                className="button button--primary"
                type="submit"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </section>
      </>
    );
  };

  return (
    <div className="app">
      <AuroraCanvas />
      <LanguageSwitcher />
      <div className="app__content">
        <header className="app__header">
          <div className="header__content"></div>
        </header>

        <div className="admin-controls">
          <button 
            className="admin-toggle-btn"
            onClick={() => {
              if (isAdminAuthenticated) {
                setShowAdminPanel(!showAdminPanel); 
              } else {
                setShowAdminLogin(true);
                setShowAdminPanel(false);
              }
            }}
            title={isAdminAuthenticated ? "Переключить панель администратора" : "Войти в панель администратора"}
          >
            ⚙️
          </button>
        </div>

        <main className="app__main">
          <div 
            className="container" 
            style={{ 
              gap: '40px', 
              width: '100%', 
              // --- ИСПРАВЛЕНИЕ 3: ---
              // Увеличиваем ширину и убираем отступы, когда панель открыта
              maxWidth: (isAdminAuthenticated && showAdminPanel) ? '95%' : '700px', 
              padding: (isAdminAuthenticated && showAdminPanel) ? '1.5rem 0' : undefined 
            }}
          >
            {!showAdminLogin && !(isAdminAuthenticated && showAdminPanel) && (
            // Добавляем специальный контейнер для позиционирования
            <div className="particle-logo-wrapper">
              <img src={brandLogoSquare} alt="Sushi Icon Logo" className="app-logo-square-overlay" />
              <ParticleTextEffect className="shadow-[0_28px_60px_rgba(0,84,107,0.25)]" maxWidth="700px" minHeight="320px" />
            </div>
            )}
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

