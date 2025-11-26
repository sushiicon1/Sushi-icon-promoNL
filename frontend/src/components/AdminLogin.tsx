
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import AccessDenied from './AccessDenied';
import AuroraCanvas from './ui/ambient-aurora';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import adminLogoImage from '../assets/new_sushi_logo.jpg';

// --- Определение API_URL ---
const API_URL = import.meta.env.VITE_API_URL || '';

interface AdminLoginProps {
  onLogin: (isAuthenticated: boolean) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const { t, i18n } = useTranslation();
  
  const [step, setStep] = useState<'login' | 'verify'>('login');
  const [showAccessDenied, setShowAccessDenied] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    accessCode: '',
    password: ''
  });
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);

  // Восстанавливаем сохраненный язык при загрузке страницы
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && ["ru", "uk", "en", "nl", "pl", "es", "de", "fr", "da", "lb", "no", "sv"].includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage).catch(console.error);
    }
  }, [i18n]);

  // Обновляем сообщение верификации при изменении языка
  useEffect(() => {
    if (step === 'verify') {
      setMessage(i18n.t('admin.login.verificationCodeSent'));
    }
  }, [i18n.language, step, i18n]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setVerificationCode(value);
    if (error) setError('');
  };

  const clearAuth = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminLoginTime');
    console.log('Auth cleared');
    // Возвращаемся в анкету
    onLogin(false);
  };

  // --- ОБРАБОТЧИК ШАГА 1 ---
  const handleSubmitCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');
    
    try {
      const response = await fetch(`${API_URL}/api/owner/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success && data.status === 'pending_verification') {
        setStep('verify');
        setMessage(t('admin.login.verificationCodeSent'));
        setFailedAttempts(0); // Сбрасываем счетчик при успехе
      } else {
        const newFailedAttempts = failedAttempts + 1;
        setFailedAttempts(newFailedAttempts);
        
        // После первой ошибки показываем AccessDenied
        if (newFailedAttempts >= 1) {
          setShowAccessDenied(true);
        } else {
          setError(data.message || t('admin.auth.invalidCredentials'));
        }
      }
    } catch (err) {
      console.error('AdminLogin: Ошибка сети или fetch:', err);
      const newFailedAttempts = failedAttempts + 1;
      setFailedAttempts(newFailedAttempts);
      
      // При ошибке сети также показываем AccessDenied
      if (newFailedAttempts >= 1) {
        setShowAccessDenied(true);
      } else {
        setError(t('admin.auth.loginError'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  // --- ОБРАБОТЧИК ШАГА 2 ---
  const handleSubmitVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/owner/verify-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          code: verificationCode,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success && data.status === 'verified') {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminLoginTime', new Date().toISOString());
        onLogin(true);
      } else {
        const newFailedAttempts = failedAttempts + 1;
        setFailedAttempts(newFailedAttempts);
        
        // При ошибке верификации показываем AccessDenied
        if (newFailedAttempts >= 1) {
          setShowAccessDenied(true);
        } else {
          setError(data.message || t('admin.login.invalidVerificationCode'));
        }
      }
    } catch (err) {
      console.error('AdminLogin: Ошибка сети или fetch при верификации:', err);
      const newFailedAttempts = failedAttempts + 1;
      setFailedAttempts(newFailedAttempts);
      
      // При ошибке сети показываем AccessDenied
      if (newFailedAttempts >= 1) {
        setShowAccessDenied(true);
      } else {
        setError(t('admin.auth.loginError'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Если показываем AccessDenied
  if (showAccessDenied) {
    return (
      <AccessDenied 
        onBack={() => {
          setShowAccessDenied(false);
          setStep('login');
          setFailedAttempts(0);
          setError('');
          setFormData({ email: '', accessCode: '', password: '' });
          setVerificationCode('');
          // Возвращаемся к анкете (скрываем админ-логин)
          onLogin(false);
        }} 
      />
    );
  }

  // --- ШАГ 2: ВЕРИФИКАЦИЯ ---
  if (step === 'verify') {
    return (
      <>
        <style>{`
          body, html {
            overflow: hidden !important;
            height: 100vh !important;
            position: fixed;
            width: 100%;
          }
        `}</style>
        <div className="app" style={{
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          background: 'transparent',
          overflow: 'hidden'
        }}>
          <AuroraCanvas />
          <LanguageSwitcher />

        <div style={{
          width: '100%',
          maxWidth: '400px',
          maxHeight: '90vh',
          background: 
            'radial-gradient(70% 55% at 24% 20%, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0) 32%), radial-gradient(95% 80% at 80% 82%, rgba(62, 205, 255, 0.25), rgba(62, 205, 255, 0) 46%), linear-gradient(160deg, rgba(5, 40, 82, 0.95) 0%, rgba(4, 62, 118, 0.98) 45%, rgba(7, 94, 152, 1) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          padding: '24px 28px',
          color: '#ffffff',
          boxShadow: 
            '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.2) inset',
          position: 'relative',
          overflow: 'hidden',
          animation: 'slideInScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          backdropFilter: 'blur(16px)',
          transform: 'translateY(-2vh)'
        }}>
        {/* Декоративные элементы */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(10, 186, 181, 0.15) 0%, transparent 70%)',
          animation: 'rotate 20s linear infinite',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-30%',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle, rgba(28, 197, 192, 0.1) 0%, transparent 70%)',
          animation: 'rotate 15s linear infinite reverse',
          pointerEvents: 'none'
        }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Логотип вместо иконки */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <div style={{
                position: 'relative',
                width: '90px',
                height: '90px',
                margin: '0 auto'
              }}>
                {/* Внешнее кольцо */}
                <div style={{
                  position: 'absolute',
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  border: '2px solid rgba(10, 186, 181, 0.3)',
                  animation: 'rotateRing 3s linear infinite',
                  top: 0,
                  left: 0
                }} />
                {/* Среднее кольцо */}
                <div style={{
                  position: 'absolute',
                  width: '77px',
                  height: '77px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  animation: 'rotateRing 2s linear infinite reverse',
                  top: '6.5px',
                  left: '6.5px'
                }} />
                {/* Основной логотип */}
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '3px solid rgba(255, 255, 255, 0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 
                    '0 10px 30px rgba(10, 186, 181, 0.5), 0 0 0 3px rgba(255, 255, 255, 0.1) inset, 0 0 60px rgba(10, 186, 181, 0.3)',
                  animation: 'pulseGlow 2.5s ease-in-out infinite',
                  position: 'relative',
                  zIndex: 2,
                  padding: '0',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={adminLogoImage} 
                    alt="SUSHI ICON" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      animation: 'bounceMail 2s ease-in-out infinite'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Заголовок с анимацией */}
            <h1 style={{
              color: '#ffffff',
              fontSize: '22px',
              fontWeight: '800',
              textAlign: 'center',
              margin: '0 0 10px 0',
              textShadow: '0 2px 12px rgba(10, 186, 181, 0.5), 0 0 30px rgba(10, 186, 181, 0.3)',
              letterSpacing: '0.03em',
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}>
              {t('admin.login.verificationTitle')}
            </h1>

            {/* Сообщение с улучшенным дизайном */}
            {message && (
                  <div style={{
                    textAlign: 'center',
                    color: '#ffffff',
                    marginBottom: '14px',
                    fontSize: '12px',
                    lineHeight: '1.4',
                    fontWeight: '500',
                    padding: '10px 16px',
                    background: 'linear-gradient(135deg, rgba(10, 186, 181, 0.25) 0%, rgba(28, 197, 192, 0.2) 100%)',
                    borderRadius: '10px',
                    border: '1px solid rgba(10, 186, 181, 0.4)',
                    boxShadow: '0 4px 16px rgba(10, 186, 181, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    animation: 'fadeInUp 0.8s ease-out 0.4s both',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                      animation: 'shimmer 3s infinite'
                    }} />
                    <span style={{ position: 'relative', zIndex: 1 }}>
                      {message}
                    </span>
                    {/* --- НАЧАЛО ИЗМЕНЕНИЯ --- */}
                    {/* Добавляем предупреждение о спаме (ПЕРЕМЕЩЕНО СЮДА) */}
                    {step === 'verify' && (
                      <p style={{
                        fontSize: '11px',
                        color: '#ffffff',
                        opacity: 0.8,
                        textAlign: 'center',
                        margin: '-8px 0 12px 0', // Скорректированы отступы
                        animation: 'fadeInUp 0.8s ease-out 0.5s both'
                      }}>
                        {t('admin.login.verificationSpamWarning', "P.S. Please check your spam folder!")}
                      </p>
                    )}
                  </div>
            )}

            {/* Форма с улучшенным дизайном */}
            <form onSubmit={handleSubmitVerification} style={{ display: 'flex', flexDirection: 'column', gap: '12px', animation: 'fadeInUp 0.8s ease-out 0.6s both' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontWeight: '700',
                  color: '#ffffff',
                  fontSize: '13px',
                  marginBottom: '8px',
                  textShadow: '0 2px 8px rgba(10, 186, 181, 0.4), 0 0 20px rgba(10, 186, 181, 0.2)',
                  letterSpacing: '0.02em'
                }}>
                  {t('admin.login.verificationCodeLabel')} *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    name="verificationCode"
                    value={verificationCode}
                    onChange={handleCodeChange}
                    placeholder="000000"
                    maxLength={6}
                    required
                    autoComplete="one-time-code"
                    inputMode="numeric"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '10px',
                      fontSize: '22px',
                      fontWeight: '700',
                      boxSizing: 'border-box',
                      background: '#ffffff',
                      color: '#0a0f1a',
                      textAlign: 'center',
                      letterSpacing: '0.3em',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                      fontFamily: 'monospace'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(10, 186, 181, 0.8)';
                      e.target.style.boxShadow = '0 8px 32px rgba(10, 186, 181, 0.4), 0 0 0 4px rgba(10, 186, 181, 0.1)';
                      e.target.style.transform = 'translateY(-4px) scale(1.02)';
                      e.target.style.background = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.background = '#ffffff';
                    }}
                  />
                  {/* Индикатор прогресса */}
                  <div style={{
                    marginTop: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '5px',
                    alignItems: 'center'
                  }}>
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: i < verificationCode.length 
                            ? 'linear-gradient(135deg, #0ABAB5, #1CC5C0)'
                            : 'rgba(255, 255, 255, 0.2)',
                          transition: 'all 0.3s ease',
                          transform: i < verificationCode.length ? 'scale(1.2)' : 'scale(1)',
                          boxShadow: i < verificationCode.length 
                            ? '0 0 12px rgba(10, 186, 181, 0.8)' 
                            : 'none',
                          animation: i < verificationCode.length ? 'pulseDot 1.5s ease-in-out infinite' : 'none'
                        }}
                      />
                    ))}
                    <span style={{
                      marginLeft: '6px',
                      fontSize: '11px',
                      color: '#ffffff',
                      fontWeight: '600',
                      opacity: 0.9,
                      fontFamily: 'monospace'
                    }}>
                      {verificationCode.length}/6
                    </span>
                  </div>
                </div>
              </div>

              {error && (
                <div style={{
                  padding: '12px 18px',
                  background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.95) 0%, rgba(200, 35, 51, 0.95) 100%)',
                  border: '2px solid rgba(220, 53, 69, 0.6)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '12px',
                  textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
                  fontWeight: '600',
                  textAlign: 'center',
                  boxShadow: '0 6px 24px rgba(220, 53, 69, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  animation: 'shakeError 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    animation: 'shimmer 2s infinite'
                  }} />
                  <span style={{ position: 'relative', zIndex: 1 }}>
                    {error}
                  </span>
                </div>
              )}

              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2px' }}>
                <InteractiveHoverButton
                  text={t('admin.login.backButton')}
                  className="button button--secondary"
                  type="button"
                  onClick={() => {
                    setStep('login');
                    setError('');
                    setMessage('');
                    setVerificationCode('');
                  }}
                />
                <InteractiveHoverButton
                  text={isLoading ? t('admin.login.verifying') : t('admin.login.loginButton')}
                  className="button button--primary"
                  type="submit"
                  disabled={isLoading || verificationCode.length < 4}
                />
              </div>
            </form>
          </div>
        </div>

        <style>{`
          @keyframes slideInScale {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(30px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes rotateRing {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulseGlow {
            0%, 100% { 
              transform: scale(1);
              box-shadow: 0 10px 30px rgba(10, 186, 181, 0.5), 0 0 0 4px rgba(255, 255, 255, 0.1) inset, 0 0 60px rgba(10, 186, 181, 0.3);
            }
            50% { 
              transform: scale(1.05);
              box-shadow: 0 15px 40px rgba(10, 186, 181, 0.7), 0 0 0 6px rgba(255, 255, 255, 0.15) inset, 0 0 80px rgba(10, 186, 181, 0.5);
            }
          }
          @keyframes bounceMail {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-8px) rotate(-5deg); }
            75% { transform: translateY(-8px) rotate(5deg); }
          }
          @keyframes floatParticle {
            0%, 100% { 
              opacity: 0.3;
              transform: translate(-50%, -50%) translateY(-70px) scale(1);
            }
            50% { 
              opacity: 1;
              transform: translate(-50%, -50%) translateY(-85px) scale(1.2);
            }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          @keyframes shakeError {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
            20%, 40%, 60%, 80% { transform: translateX(8px); }
          }
          @keyframes pulseDot {
            0%, 100% { 
              transform: scale(1);
              opacity: 1;
            }
            50% { 
              transform: scale(1.3);
              opacity: 0.8;
            }
          }
        `}</style>
      </div>
      </>
    );
  }

  // --- ШАГ 1: ВВОД КРЕДЕНШИАЛОВ ---
  return (
    <div className="app" style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px',
      background: 'transparent'
    }}>
      <AuroraCanvas />
      <LanguageSwitcher />

      <div style={{
        width: '100%',
        maxWidth: '480px',
        background: 
          'radial-gradient(70% 55% at 24% 20%, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0) 32%), radial-gradient(95% 80% at 80% 82%, rgba(62, 205, 255, 0.25), rgba(62, 205, 255, 0) 46%), linear-gradient(160deg, rgba(5, 40, 82, 0.95) 0%, rgba(4, 62, 118, 0.98) 45%, rgba(7, 94, 152, 1) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        padding: '32px 36px',
        color: '#ffffff',
        boxShadow: 
          '0 8px 24px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset',
        position: 'relative',
        animation: 'slideIn 0.6s ease-out',
        backdropFilter: 'blur(12px)'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Иконка и заголовок */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '3px solid rgba(255, 255, 255, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 6px 20px rgba(10, 186, 181, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.8) inset',
              animation: 'pulse 2s ease-in-out infinite',
              padding: '0',
              overflow: 'hidden'
            }}>
              <img 
                src={adminLogoImage} 
                alt="SUSHI ICON" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
            </div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: '800',
              color: '#ffffff',
              margin: '0 0 6px 0',
              textShadow: '0 2px 8px rgba(10, 186, 181, 0.4), 0 0 20px rgba(10, 186, 181, 0.2)',
              letterSpacing: '0.02em'
            }}>
              {t('admin.login.title')}
            </h1>
            <p style={{
              color: '#ffffff',
              fontSize: '14px',
              margin: 0,
              fontWeight: '500',
              opacity: 0.9
            }}>
              {t('admin.login.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmitCredentials} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
              <label style={{
                display: 'block',
                fontWeight: '700',
                color: '#ffffff',
                fontSize: '14px',
                marginBottom: '8px',
                textShadow: '0 2px 6px rgba(10, 186, 181, 0.3), 0 0 15px rgba(10, 186, 181, 0.15)'
              }}>
                {t('admin.login.emailLabel')} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('admin.login.emailPlaceholder')}
                required
                autoComplete="email"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '500',
                  boxSizing: 'border-box',
                  background: '#ffffff',
                  color: '#0a0f1a',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontWeight: '700',
                color: '#ffffff',
                fontSize: '14px',
                marginBottom: '8px',
                textShadow: '0 2px 6px rgba(10, 186, 181, 0.3), 0 0 15px rgba(10, 186, 181, 0.15)'
              }}>
                {t('admin.login.accessCodeLabel')} *
              </label>
              <input
                type="text"
                name="accessCode"
                value={formData.accessCode}
                onChange={handleInputChange}
                placeholder={t('admin.login.accessCodePlaceholder')}
                required
                autoComplete="off"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '500',
                  boxSizing: 'border-box',
                  background: '#ffffff',
                  color: '#0a0f1a',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.background = '#ffffff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = '#ffffff';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontWeight: '700',
                color: '#ffffff',
                fontSize: '14px',
                marginBottom: '8px',
                textShadow: '0 2px 6px rgba(10, 186, 181, 0.3), 0 0 15px rgba(10, 186, 181, 0.15)'
              }}>
                {t('admin.login.passwordLabel')} *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder={t('admin.login.passwordPlaceholder')}
                required
                autoComplete="current-password"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '500',
                  boxSizing: 'border-box',
                  background: '#ffffff',
                  color: '#0a0f1a',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.background = '#ffffff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = '#ffffff';
                }}
              />
            </div>

            {error && (
              <div style={{
                padding: '10px 14px',
                background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.95) 0%, rgba(200, 35, 51, 0.95) 100%)',
                border: '2px solid rgba(220, 53, 69, 0.5)',
                borderRadius: '10px',
                color: '#ffffff',
                fontSize: '14px',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                fontWeight: '600',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(220, 53, 69, 0.4)',
                animation: 'shake 0.5s ease-in-out'
              }}>
                {error}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
              <InteractiveHoverButton
                text={isLoading ? t('admin.login.checking') : t('admin.login.nextButton')}
                className="button button--primary"
                type="submit"
                disabled={isLoading}
              />
            </div>
          </form>

          <div             style={{
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(10, 186, 181, 0.2)',
              textAlign: 'center',
              fontSize: '13px',
              color: '#ffffff',
              opacity: 0.8
            }}>
            <p style={{ margin: '0 0 16px 0', fontWeight: '500', color: '#ffffff', opacity: 0.85 }}>
              {t('admin.login.warning')}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InteractiveHoverButton
                text={t('admin.login.backToFormButton')}
                className="button button--secondary"
                type="button"
                onClick={clearAuth}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;
