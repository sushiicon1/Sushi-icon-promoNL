import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Автозаполнение отключено: пользователь вводит все поля вручную

interface NetherlandsAddressInputProps {
  postalCode: string;
  street: string;
  city: string;
  houseNumber: string;
  onPostalCodeChange: (value: string) => void;
  onStreetChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onHouseNumberChange: (value: string) => void;
  onValidationChange: (isValid: boolean, errors: string[]) => void;
  required?: boolean;
}

export const NetherlandsAddressInput: React.FC<NetherlandsAddressInputProps> = ({
  postalCode,
  street,
  city,
  houseNumber,
  onPostalCodeChange,
  onStreetChange,
  onCityChange,
  onHouseNumberChange,
  onValidationChange,
  required = true
}) => {
  const { t } = useTranslation();
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] = useState<{ postalCode?: string; street?: string; city?: string; houseNumber?: string }>({});
  // Автозаполнение отключено; ручной ввод

  // Автозаполнение и внешние запросы удалены

  // Обработка валидации
  const handleValidationChange = (valid: boolean, validationErrors: string[]) => {
    setIsValid(valid);
    setErrors(validationErrors);
    onValidationChange(valid, validationErrors);
  };

  // Форматирование почтового кода (автоматическое добавление пробела)
  const formatPostalCode = (value: string): string => {
    const cleanValue = value.replace(/\s/g, '').toUpperCase();
    if (cleanValue.length >= 4) {
      return cleanValue.slice(0, 4) + ' ' + cleanValue.slice(4, 6);
    }
    return cleanValue;
  };

  // Обработка изменения почтового кода
  const handlePostalCodeChange = (value: string) => {
    const formatted = formatPostalCode(value);
    onPostalCodeChange(formatted);
  };

  // Простая валидация полей адреса и почтового кода NL (1234 AB)
  useEffect(() => {
    const newFieldErrors: { postalCode?: string; street?: string; city?: string; houseNumber?: string } = {};

    const postalRegex = /^[1-9][0-9]{3}\s[A-Za-z]{2}$/;
    if (!postalCode || !postalRegex.test(postalCode)) {
      newFieldErrors.postalCode = t('registration.validation.postalCode.format');
    }
    if (!street || street.trim() === '') {
      newFieldErrors.street = t('registration.validation.street.required');
    }
    if (!city || city.trim() === '') {
      newFieldErrors.city = t('registration.validation.city.required');
    }
    if (!houseNumber || houseNumber.trim() === '') {
      newFieldErrors.houseNumber = t('registration.validation.houseNumber.required');
    }

    setFieldErrors(newFieldErrors);
    const validNow = Object.keys(newFieldErrors).length === 0;
    handleValidationChange(validNow, Object.values(newFieldErrors).filter(Boolean) as string[]);
  }, [postalCode, street, city, houseNumber, required, t]);

  return (
    <div className="netherlands-address-input">
      <div className="form__row">
        <label className="form__label" htmlFor="postalCode">
          {t("address.postalCode")} *
        </label>
        <input
          id="postalCode"
          name="postalCode"
          className="form__input"
          type="text"
          placeholder={t("address.postalCodePlaceholder")}
          value={postalCode}
          onChange={(e) => handlePostalCodeChange(e.target.value)}
          autoComplete="postal-code"
          maxLength={7}
          required={false}
        />
        {fieldErrors.postalCode ? (
          <div className="form__hint form__hint--error">{fieldErrors.postalCode}</div>
        ) : (
          <div className="form__hint" style={{ color: '#ffffff', opacity: 0.8, fontSize: '12px', marginTop: '6px' }}>
            {t('registration.validation.postalCode.format')}
          </div>
        )}
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="street">
          {t("address.street")} *
        </label>
        <input
          id="street"
          name="street"
          className="form__input"
          type="text"
          placeholder={t("address.streetPlaceholder")}
          value={street}
          onChange={(e) => onStreetChange(e.target.value)}
          autoComplete="street-address"
          required={false}
        />
        {fieldErrors.street ? (
          <div className="form__hint form__hint--error">{fieldErrors.street}</div>
        ) : (
          <div className="form__hint" style={{ color: '#ffffff', opacity: 0.8, fontSize: '12px', marginTop: '6px' }}>
            {t('registration.validation.street.required')}
          </div>
        )}
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="city">
          {t("address.city")} *
        </label>
        <input
          id="city"
          name="city"
          className="form__input"
          type="text"
          placeholder={t("address.cityPlaceholder")}
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          autoComplete="address-level2"
          required={false}
        />
        {fieldErrors.city ? (
          <div className="form__hint form__hint--error">{fieldErrors.city}</div>
        ) : (
          <div className="form__hint" style={{ color: '#ffffff', opacity: 0.8, fontSize: '12px', marginTop: '6px' }}>
            {t('registration.validation.city.required')}
          </div>
        )}
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="houseNumber">
          {t("address.houseNumber")} *
        </label>
        <input
          id="houseNumber"
          name="houseNumber"
          className="form__input"
          type="text"
          placeholder={t("address.houseNumberPlaceholder")}
          value={houseNumber}
          onChange={(e) => onHouseNumberChange(e.target.value)}
          autoComplete="address-line2"
          required={false}
        />
        {fieldErrors.houseNumber ? (
          <div className="form__hint form__hint--error">{fieldErrors.houseNumber}</div>
        ) : (
          <div className="form__hint" style={{ color: '#ffffff', opacity: 0.8, fontSize: '12px', marginTop: '6px' }}>
            {t('registration.validation.houseNumber.required')}
          </div>
        )}
      </div>

    </div>
  );
};

export default NetherlandsAddressInput;
