// import React, { useState, useEffect, useMemo } from 'react';
// import { useTranslation } from 'react-i18next';

// // --- Константы для Годов ---
// const CURRENT_YEAR = new Date().getFullYear();
// const MIN_AGE = 16; // Минимальный возраст
// const MAX_YEAR = CURRENT_YEAR - MIN_AGE; // Самый "молодой" год
// const MIN_YEAR = 1900; // Самый "старый" год

// const YEARS = Array.from({ length: MAX_YEAR - MIN_YEAR + 1 }, (_, i) => 
//   String(MAX_YEAR - i)
// );
// // --- Конец констант ---


// // --- Вспомогательные функции ---

// /**
//  * Получает количество дней в месяце (месяц 1-based)
//  */
// const getDaysInMonth = (month: number, year: number): number => {
//   return new Date(year, month, 0).getDate();
// };

// /**
//  * Безопасно парсит дату из строки "YYYY-MM-DD",
//  * исправляя невалидные значения (например, 31 февраля).
//  */
// const parseDate = (dateString: string): [string, string, string] => {
//   if (dateString && dateString.includes('-')) {
//     const parts = dateString.split('-');
//     if (parts.length === 3) {
//       // 1. Валидация Года
//       const year = YEARS.includes(parts[0]) ? parts[0] : String(MAX_YEAR);
      
//       // 2. Валидация Месяца
//       const monthNum = parseInt(parts[1], 10);
//       const month = (monthNum >= 1 && monthNum <= 12) 
//         ? String(monthNum).padStart(2, '0') 
//         : '01';

//       // 3. Валидация Дня (на основе года и месяца)
//       const daysInMonth = getDaysInMonth(parseInt(month, 10), parseInt(year, 10));
//       const dayNum = parseInt(parts[2], 10);
//       let day: string;
      
//       if (dayNum > daysInMonth) {
//         day = String(daysInMonth).padStart(2, '0');
//       } else if (dayNum < 1) {
//         day = '01';
//       } else {
//         day = String(dayNum).padStart(2, '0');
//       }
      
//       return [year, month, day];
//     }
//   }
//   // Значения по умолчанию
//   return [String(MAX_YEAR), '01', '01'];
// };


// // --- Интерфейс ---
// interface DatePickerProps {
//   // Принимает дату в формате "YYYY-MM-DD"
//   value: string;
//   // Отправляет дату в формате "YYYY-MM-DD"
//   onChange: (date: string) => void;
//   placeholder?: string;
//   required?: boolean;
// }


// // --- Компонент ---
// export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
//   const { t } = useTranslation();
  
//   // --- Динамическая карта месяцев на основе i18n ---
//   const MONTHS_MAP = useMemo(() => {
//     // Ключи из ваших en.json/nl.json
//     const keys = [
//       'january', 'february', 'march', 'april', 'may', 'june', 
//       'july', 'august', 'september', 'october', 'november', 'december'
//     ];
//     // Собираем объект вида { '01': 'January', '02': 'February', ... }
//     return keys.reduce((acc, key, index) => {
//       const monthNumber = String(index + 1).padStart(2, '0');
//       acc[monthNumber] = t(`registration.datePicker.months.${key}`);
//       return acc;
//     }, {} as Record<string, string>);
//   }, [t]);

//   // Внутреннее состояние для каждой колонки
//   const [year, setYear] = useState(String(MAX_YEAR));
//   const [month, setMonth] = useState('01');
//   const [day, setDay] = useState('01');

//   // 1. Синхронизация с `value` из пропсов
//   useEffect(() => {
//     // Применяем parseDate к `value`
//     const [parsedYear, parsedMonth, parsedDay] = parseDate(value);
//     setYear(parsedYear);
//     setMonth(parsedMonth);
//     setDay(parsedDay);
//   }, [value]); // Зависимость только от value

//   // 2. Динамический список дней (зависит от месяца и года)
//   const DAYS = useMemo(() => {
//     const daysInMonth = getDaysInMonth(parseInt(month, 10), parseInt(year, 10));
//     return Array.from({ length: daysInMonth }, (_, i) => {
//       const day = String(i + 1);
//       return day.padStart(2, '0'); // "1" -> "01"
//     });
//   }, [month, year]);

//   // 3. Обработчик изменений
//   const handleChange = (type: 'year' | 'month' | 'day', newValue: string) => {
//     let newYear = year;
//     let newMonth = month;
//     let newDay = day;

//     if (type === 'year') {
//       newYear = newValue;
//     } else if (type === 'month') {
//       newMonth = newValue;
//     } else if (type === 'day') {
//       newDay = newValue;
//     }

//     // --- Валидация дня при смене месяца или года ---
//     if (type === 'year' || type === 'month') {
//       const daysInNewMonth = getDaysInMonth(parseInt(newMonth, 10), parseInt(newYear, 10));
//       // Если текущий день (например, 31) больше, чем дней в новом месяце (например, 29 в феврале)
//       if (parseInt(newDay, 10) > daysInNewMonth) {
//         newDay = String(daysInNewMonth).padStart(2, '0'); // Устанавливаем макс. день (29)
//       }
//     }
    
//     // Обновляем внутреннее состояние
//     setYear(newYear);
//     setMonth(newMonth);
//     setDay(newDay);

//     // Собираем дату в "YYYY-MM-DD" и отправляем "наверх"
//     const newDateString = `${newYear}-${newMonth}-${newDay}`;
//     onChange(newDateString);
//   };

//   return (
//     // 'custom-date-picker' для группировки и стилизации (как в App.css)
//     <div className="custom-date-picker">
      
//       {/* --- Колонка 1: ЧИСЛО --- */}
//       <div className="picker-group">
//         {/* Используем ключ перевода из nl.json/en.json */}
//         <label htmlFor="date-picker-day">{t('registration.datePicker.day')}</label>
//         <select
//           id="date-picker-day"
//           className="form__input" // <-- Класс стиля как у других полей
//           value={day}
//           onChange={(e) => handleChange('day', e.target.value)}
//         >
//           {DAYS.map((d) => (
//             <option key={d} value={d}>{d}</option>
//           ))}
//         </select>
//       </div>

//       {/* --- Колонка 2: МЕСЯЦ --- */}
//       <div className="picker-group">
//         <label htmlFor="date-picker-month">{t('registration.datePicker.month')}</label>
//         <select
//           id="date-picker-month"
//           className="form__input" // <-- Класс стиля
//           value={month}
//           onChange={(e) => handleChange('month', e.target.value)}
//         >
//           {Object.entries(MONTHS_MAP).map(([monthValue, monthName]) => (
//             <option key={monthValue} value={monthValue}>
//               {monthName}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* --- Колонка 3: ГОД --- */}
//       <div className="picker-group">
//         <label htmlFor="date-picker-year">{t('registration.datePicker.year')}</label>
//         <select
//           id="date-picker-year"
//           className="form__input" // <-- Класс стиля
//           value={year}
//           onChange={(e) => handleChange('year', e.target.value)}
//         >
//           {YEARS.map((y) => (
//             <option key={y} value={y}>{y}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// // Экспорт по умолчанию, чтобы работал import в App_new.tsx
// export default DatePicker;
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// --- Константы для Годов (2025-2010) ---
const MIN_YEAR = 1900;
const MAX_YEAR = 2025;

const YEARS = Array.from({ length: MAX_YEAR - MIN_YEAR + 1 }, (_, i) => 
  String(MAX_YEAR - i) // [2025, 2024, ..., 2010]
);
// --- Конец констант ---


// --- Вспомогательные функции ---

/**
 * Получает количество дней в месяце (месяц 1-based)
 */
const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};

/**
 * Безопасно парсит дату из строки "YYYY-MM-DD",
 * исправляя невалидные значения (например, 31 февраля).
 */
const parseDate = (dateString: string): [string, string, string] => {
  if (dateString && dateString.includes('-')) {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      // 1. Валидация Года
      const year = YEARS.includes(parts[0]) ? parts[0] : String(MAX_YEAR);
      
      // 2. Валидация Месяца
      const monthNum = parseInt(parts[1], 10);
      const month = (monthNum >= 1 && monthNum <= 12) 
        ? String(monthNum).padStart(2, '0') 
        : '01';

      // 3. Валидация Дня (на основе года и месяца)
      const daysInMonth = getDaysInMonth(parseInt(month, 10), parseInt(year, 10));
      const dayNum = parseInt(parts[2], 10);
      let day: string;
      
      if (dayNum > daysInMonth) {
        day = String(daysInMonth).padStart(2, '0');
      } else if (dayNum < 1) {
        day = '01';
      } else {
        day = String(dayNum).padStart(2, '0');
      }
      
      return [year, month, day];
    }
  }
  // Значения по умолчанию (2025, 01, 01)
  return [String(MAX_YEAR), '01', '01'];
};


// --- Интерфейс ---
interface DatePickerProps {
  // Принимает дату в формате "YYYY-MM-DD"
  value: string;
  // Отправляет дату в формате "YYYY-MM-DD"
  onChange: (date: string) => void;
  placeholder?: string;
  required?: boolean;
}


// --- Компонент ---
export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange, required = false }) => {
  const { t } = useTranslation();
  
  // --- ИСПРАВЛЕНИЕ: Используем Массив (Array) вместо Объекта (Object) ---
  // Это гарантирует правильный порядок месяцев
  const MONTHS_ARRAY = useMemo(() => {
    // Порядок жестко задан здесь, с января по декабрь
    const keys = [
      'january', 'february', 'march', 'april', 'may', 'june', 
      'july', 'august', 'september', 'october', 'november', 'december'
    ];
    
    // Собираем массив объектов
    return keys.map((key, index) => {
      const monthNumber = String(index + 1).padStart(2, '0');
      return {
        value: monthNumber, // "01", "02", ...
        name: t(`registration.datePicker.months.${key}`) // "January", "February", ...
      };
    });
  }, [t]);

  // Внутреннее состояние (по умолчанию - 1 января 2025)
  const [year, setYear] = useState(String(MAX_YEAR));
  const [month, setMonth] = useState('01');
  const [day, setDay] = useState('01');

  // 1. Синхронизация с `value` из пропсов
  useEffect(() => {
    const [parsedYear, parsedMonth, parsedDay] = parseDate(value);
    setYear(parsedYear);
    setMonth(parsedMonth);
    setDay(parsedDay);
  }, [value]);

  // 2. Динамический список дней (зависит от месяца и года)
  const DAYS = useMemo(() => {
    const daysInMonth = getDaysInMonth(parseInt(month, 10), parseInt(year, 10));
    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = String(i + 1);
      return day.padStart(2, '0');
    });
  }, [month, year]);

  // 3. Обработчик изменений
  const handleChange = (type: 'year' | 'month' | 'day', newValue: string) => {
    let newYear = year;
    let newMonth = month;
    let newDay = day;

    if (type === 'year') {
      newYear = newValue;
    } else if (type === 'month') {
      newMonth = newValue;
    } else if (type === 'day') {
      newDay = newValue;
    }

    if (type === 'year' || type === 'month') {
      const daysInNewMonth = getDaysInMonth(parseInt(newMonth, 10), parseInt(newYear, 10));
      if (parseInt(newDay, 10) > daysInNewMonth) {
        newDay = String(daysInNewMonth).padStart(2, '0');
      }
    }
    
    setYear(newYear);
    setMonth(newMonth);
    setDay(newDay);

    const newDateString = `${newYear}-${newMonth}-${newDay}`;
    onChange(newDateString);
  };

  return (
    <div className="custom-date-picker">
      
      {/* --- Колонка 1: ЧИСЛО --- */}
      <div className="picker-group">
        <label htmlFor="date-picker-day">{t('registration.datePicker.day')}</label>
        <select
          id="date-picker-day"
          name="birth-day"
          className="form__input"
          value={day}
          onChange={(e) => handleChange('day', e.target.value)}
          required={required}
        >
          {DAYS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* --- Колонка 2: МЕСЯЦ --- */}
      <div className="picker-group">
        <label htmlFor="date-picker-month">{t('registration.datePicker.month')}</label>
        <select
          id="date-picker-month"
          name="birth-month"
          className="form__input"
          value={month}
          onChange={(e) => handleChange('month', e.target.value)}
          required={required}
        >
          {/* ИСПОЛЬЗУЕМ MONTHS_ARRAY для 100% гарантии порядка */}
          {MONTHS_ARRAY.map((month) => (
            <option key={month.value} value={month.value}>
              {month.name}
            </option>
          ))}
        </select>
      </div>

      {/* --- Колонка 3: ГОД --- */}
      <div className="picker-group">
        <label htmlFor="date-picker-year">{t('registration.datePicker.year')}</label>
        <select
          id="date-picker-year"
          name="birth-year"
          className="form__input"
          value={year}
          onChange={(e) => handleChange('year', e.target.value)}
          required={required}
        >
          {YEARS.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DatePicker;
