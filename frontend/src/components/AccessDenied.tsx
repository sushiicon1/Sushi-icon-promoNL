import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { LanguageSwitcher } from './LanguageSwitcher';
import AuroraCanvas from './ui/ambient-aurora';

type AccessDeniedProps = {
  onBack: () => void;
};

const AccessDenied: React.FC<AccessDeniedProps> = ({ onBack }) => {
  const { t, i18n } = useTranslation();
  
  // Восстанавливаем сохраненный язык при загрузке страницы
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && ["ru", "uk", "en", "nl", "pl", "es", "de", "fr", "da", "lb", "no", "sv"].includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage).catch(console.error);
    }
  }, [i18n]);

  // Отключаем прокрутку при монтировании компонента
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalHeight = document.body.style.height;
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.height = originalHeight;
    };
  }, []);
  
  return (
    <div className="app" style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'transparent',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      boxSizing: 'border-box'
    }}>
      <AuroraCanvas />
      <LanguageSwitcher />
      <div style={{
        width: '100%',
        maxWidth: '500px',
        maxHeight: '90vh',
        background: 
          'radial-gradient(70% 55% at 24% 20%, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0) 32%), radial-gradient(95% 80% at 80% 82%, rgba(62, 205, 255, 0.25), rgba(62, 205, 255, 0) 46%), linear-gradient(160deg, rgba(5, 40, 82, 0.95) 0%, rgba(4, 62, 118, 0.98) 45%, rgba(7, 94, 152, 1) 100%)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: 
          '0 8px 24px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset',
        backdropFilter: 'blur(12px)',
        color: '#ffffff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          padding: '28px 32px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto',
          minHeight: 0
        }}>
          <div style={{
            fontSize: '56px',
            lineHeight: 1,
            marginBottom: '12px'
          }}>⛔️</div>
          <h1 style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: 800,
            color: '#ffffff',
            textShadow: '0 2px 8px rgba(10, 186, 181, 0.4), 0 0 20px rgba(10, 186, 181, 0.2)',
            letterSpacing: '0.02em',
            marginBottom: '10px'
          }}>
            {t("accessDenied.title")}
          </h1>
          <p style={{
            margin: '0 0 16px 0',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 600,
            opacity: 0.9
          }}>
            {t("accessDenied.message")}
          </p>

          <div style={{
            marginBottom: '18px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            borderRadius: '12px',
            padding: '12px 16px',
            fontSize: '13px',
            fontWeight: 500,
            lineHeight: '1.5',
            textAlign: 'left'
          }}>
            {t("accessDenied.description")}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InteractiveHoverButton
              text={t("accessDenied.backButton")}
              className="button button--primary"
              onClick={onBack}
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;


