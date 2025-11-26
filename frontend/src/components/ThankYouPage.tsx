import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import AuroraCanvas from "./ui/ambient-aurora";
import adminLogoImage from "../assets/new_sushi_logo.jpg";

interface ThankYouPageProps {
  customerData: {
    firstName: string;
    lastName: string;
    discountCode: string;
    email?: string;
    phoneNumber: string;
  };
  onClose: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ customerData, onClose }) => {
  const { t, i18n } = useTranslation();
  const [showLogo, setShowLogo] = useState(false);
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [copied, setCopied] = useState(false);

  // Восстанавливаем сохраненный язык при загрузке страницы
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && ["ru", "uk", "en", "nl", "pl", "es", "de", "fr", "da", "lb", "no", "sv"].includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage).catch(console.error);
    }
  }, [i18n]);

  useEffect(() => {
    // Показываем логотип сразу с анимацией
    setTimeout(() => {
      setShowLogo(true);
    }, 300);
    
    // Показываем промокод через 1 секунду
    setTimeout(() => {
      setShowPromoCode(true);
    }, 1000);
    
    // Показываем инструкции через 2 секунды
    setTimeout(() => {
      setShowInstructions(true);
    }, 2000);
  }, []);

  const handleCopyPromoCode = async () => {
    try {
      await navigator.clipboard.writeText(customerData.discountCode);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const handleShareToInstagram = () => {
    // Открываем Instagram в новом окне
    window.open(`https://www.instagram.com/sushi.ikon.nl/`, '_blank');
  };

  return (
    <div className="thank-you-overlay">
      <AuroraCanvas />
      <LanguageSwitcher />
      <div className="thank-you-container">
        <div className="thank-you-content">
          {/* Логотип */}
          <div className={`logo-animation ${showLogo ? 'logo-animation--visible' : ''}`}>
            <div className="logo-image-wrapper">
              <img src={adminLogoImage} alt="SUSHI ICON" className="logo-image" />
              <div className="logo-glow"></div>
            </div>
          </div>

          {/* Сообщение благодарности */}
          <div className={`thank-you-message ${showPromoCode ? 'thank-you-message--visible' : ''}`}>
            <h2 className="thank-you-title">
              {t("thankYou.title", { firstName: customerData.firstName })} 🎉
            </h2>
            <p className="thank-you-text">
              {t("thankYou.welcomeMessage")}
            </p>
          </div>

          {/* Промокод */}
          <div className={`promo-code-section ${showPromoCode ? 'promo-code-section--visible' : ''}`}>
            <div className="promo-code-card">
              <h3 className="promo-code-title">{t("thankYou.promoCode.title")}</h3>
              <div className="promo-code-display">
                <span 
                  className={`promo-code-value ${copied ? 'promo-code-value--copied' : ''}`}
                  onClick={handleCopyPromoCode}
                  title={t("thankYou.promoCode.copyButton")}
                >
                  {customerData.discountCode}
                </span>
                <button 
                  className={`promo-code-copy-btn ${copied ? 'promo-code-copy-btn--copied' : ''}`}
                  onClick={handleCopyPromoCode}
                  title={copied ? t("thankYou.promoCode.copied") || "Скопировано!" : t("thankYou.promoCode.copyButton")}
                >
                  {copied ? '✓' : '📋'}
                </button>
              </div>
              {copied && <div className="promo-code-copied-notification">{t("thankYou.promoCode.copied") || "Скопировано!"}</div>}
              <p className="promo-code-description">
                {t("thankYou.promoCode.description")}
              </p>
            </div>
          </div>

          {/* Инструкции */}
          <div className={`instructions-section ${showInstructions ? 'instructions-section--visible' : ''}`}>
            <h3 className="instructions-title">{t("thankYou.instructions.title")}</h3>
            <div className="instructions-list">
              <div className="instruction-item">
                <span className="instruction-number">1</span>
                <span className="instruction-text">{t("thankYou.instructions.step1", { code: customerData.discountCode })}</span>
              </div>
              <div className="instruction-item">
                <span className="instruction-number">2</span>
                <span className="instruction-text">{t("thankYou.instructions.step2")}</span>
              </div>
              <div className="instruction-item">
                <span className="instruction-number">3</span>
                <span className="instruction-text">{t("thankYou.instructions.step3")}</span>
              </div>
            </div>
            
            <div className="social-buttons">
              <button 
                className="social-btn social-btn--instagram"
                onClick={handleShareToInstagram}
              >
                📸 {t("thankYou.instagramButton")}
              </button>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className={`additional-info ${showInstructions ? 'additional-info--visible' : ''}`}>
            <div className="info-card">
              <h4>{t("thankYou.contact.title")}</h4>
              <p>{t("thankYou.contact.phone")}: <strong>+31 6 45 41 44 64</strong></p>
              <p>{t("thankYou.contact.email")}: <strong>sushi.icon.rolles.nl@gmail.com</strong></p>
            </div>
            
            <div className="info-card">
              <h4>{t("thankYou.address.title")}</h4>
              <p>{t("thankYou.address.street")}</p>
              <p>{t("thankYou.address.country")}</p>
            </div>
          </div>

          {/* Кнопка закрытия */}
          <button 
            className="close-btn"
            onClick={onClose}
          >
            ✕ {t("thankYou.closeButton")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
