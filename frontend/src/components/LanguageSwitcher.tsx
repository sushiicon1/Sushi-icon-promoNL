import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Список языков
const languages = [
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "da", name: "Dansk", flag: "🇩🇰" },
  { code: "lb", name: "Lëtzebuergesch", flag: "🇱🇺" },
  { code: "no", name: "Norsk", flag: "🇳🇴" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
];

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [scrollTop, setScrollTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragCurrentY, setDragCurrentY] = useState(0);
  const [dragVelocity, setDragVelocity] = useState(0);
  const [lastDragTime, setLastDragTime] = useState(0);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [lastWheelTime, setLastWheelTime] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "ru");
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Фильтруем языки по поисковому запросу
  const filteredLanguages = languages.filter(language => 
    language.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    language.code.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const totalLanguages = filteredLanguages.length;

  const handleLanguageChange = (languageCode: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    console.log('Changing language to:', languageCode);
    setCurrentLanguage(languageCode);
    setSearchQuery(""); // Очищаем поиск при выборе языка
    
    // Сохраняем язык в localStorage вручную для гарантии
    localStorage.setItem('i18nextLng', languageCode);
    
    i18n.changeLanguage(languageCode).then(() => {
      console.log('Language changed successfully to:', languageCode);
      console.log('Current i18n language:', i18n.language);
      console.log('Saved language in localStorage:', localStorage.getItem('i18nextLng'));
      // Принудительно обновляем компонент
      setIsMenuHovered(false);
    }).catch((error) => {
      console.error('Error changing language:', error);
    });
  };

  const handleScrollDown = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 60; // Высота одного элемента
      const newScrollTop = Math.min(
        container.scrollTop + scrollAmount,
        container.scrollHeight - container.clientHeight
      );
      container.scrollTo({ top: newScrollTop, behavior: 'smooth' });
    }
  };

  const handleScrollUp = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 60; // Высота одного элемента
      const newScrollTop = Math.max(container.scrollTop - scrollAmount, 0);
      container.scrollTo({ top: newScrollTop, behavior: 'smooth' });
    }
  };

  // Обработка колесика мыши - прокрутка списка
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const currentTime = Date.now();
    const timeDelta = currentTime - lastWheelTime;
    
    // Рассчитываем скорость прокрутки
    const speed = Math.abs(e.deltaY) / (timeDelta || 1);
    setScrollVelocity(speed);
    setLastWheelTime(currentTime);
    
    // Прокручиваем список
    if (e.deltaY > 0) {
      handleScrollDown();
    } else if (e.deltaY < 0) {
      handleScrollUp();
    }
  };

  // Обработка клавиатуры - прокрутка списка
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      handleScrollUp();
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      handleScrollDown();
    } else if (e.key === 'PageUp') {
      e.preventDefault();
      handleScrollUp();
    } else if (e.key === 'PageDown') {
      e.preventDefault();
      handleScrollDown();
    }
  };

  // Обработка начала перетаскивания
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStartY(clientY);
    setDragCurrentY(clientY);
    setDragVelocity(0);
    setLastDragTime(Date.now());
  };

  // Обработка движения во время перетаскивания
  const handleDragMove = (e: MouseEvent | TouchEvent)  => {
    if (!isDragging) return;
    
    e.preventDefault();
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const currentTime = Date.now();
    const timeDelta = currentTime - lastDragTime;
    
    if (timeDelta > 0) {
      const velocity = (clientY - dragCurrentY) / timeDelta;
      setDragVelocity(velocity);
    }
    
    setDragCurrentY(clientY);
    setLastDragTime(currentTime);
  };

  // Обработка окончания перетаскивания
  const handleDragEnd = () => {
    if (!isDragging) return;
    
    const dragDistance = dragCurrentY - dragStartY;
    const threshold = 20; // Уменьшенный порог для более чувствительного перетаскивания
    const velocityThreshold = 0.5; // Порог скорости для инерционного переключения
    
    // Учитываем как расстояние, так и скорость
    const shouldSwitch = Math.abs(dragDistance) > threshold || Math.abs(dragVelocity) > velocityThreshold;
    
    if (shouldSwitch) {
      if (dragDistance > 0 || dragVelocity > 0) {
        // Перетаскивание вниз - прокрутка вниз
        handleScrollDown();
      } else {
        // Перетаскивание вверх - прокрутка вверх
        handleScrollUp();
      }
    }
    
    setIsDragging(false);
    setDragStartY(0);
    setDragCurrentY(0);
    setDragVelocity(0);
    setLastDragTime(0);
  };

  // Добавляем обработчики событий
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleDragMove(e);
    const handleMouseUp = () => handleDragEnd();
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Предотвращаем скролл страницы
      handleDragMove(e);
    };
    const handleTouchEnd = () => handleDragEnd();

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove, { passive: false });
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('touchcancel', handleTouchEnd); // Обрабатываем отмену touch
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isDragging, dragCurrentY, dragStartY, dragVelocity, lastDragTime]);

  // Отслеживание изменений языка
  useEffect(() => {
    // Устанавливаем русский язык по умолчанию, если язык не выбран пользователем
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (!savedLanguage) {
      i18n.changeLanguage('ru');
      setCurrentLanguage('ru');
    } else {
      setCurrentLanguage(i18n.language);
    }
    
    console.log('LanguageSwitcher initialized with language:', i18n.language);
    console.log('Available languages:', i18n.languages);
    console.log('Total languages in component:', languages.length);
    
    const handleLanguageChange = (lng: string) => {
      console.log('Language changed event received:', lng);
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuHovered(false);
        setSearchQuery(""); // Очищаем поиск при закрытии
      }
    };

    if (isMenuHovered) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuHovered]);

  // Фокус на поле поиска при открытии меню
  useEffect(() => {
    if (isMenuHovered && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isMenuHovered]);

  // Инерционная прокрутка
  useEffect(() => {
    if (scrollVelocity > 0.5) {
      const interval = setInterval(() => {
        setScrollVelocity(prev => {
          if (prev <= 0.1) {
            clearInterval(interval);
            return 0;
          }
          return prev * 0.9; // Замедляем со временем
        });
        
        // Продолжаем прокрутку пока есть скорость
        if (scrollVelocity > 0) {
          const steps = Math.ceil(scrollVelocity);
          if (scrollVelocity > 0) {
            handleScrollDown();
          } else {
            handleScrollUp();
          }
        }
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [scrollVelocity]);

  return (
    <div className="language-switcher">
      <div className="language-switcher__dropdown">
        <button 
          className="language-switcher__button"
          title={t("languages.switchLanguage")}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsMenuHovered(!isMenuHovered);
          }}
        >
          <span className="language-switcher__current">
            {languages.find(lang => lang.code === currentLanguage)?.flag || "🌐"}
          </span>
          <span className="language-switcher__arrow">▼</span>
        </button>
        <div 
          ref={menuRef}
          className={`language-switcher__menu ${isDragging ? 'language-switcher__menu--dragging' : ''} ${isMenuHovered ? 'language-switcher__menu--hovered' : ''} ${scrollVelocity > 1 ? 'language-switcher__menu--fast-scroll' : ''}`}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onWheel={handleWheel}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsMenuHovered(true)}
          onMouseLeave={() => setIsMenuHovered(false)}
          tabIndex={0}
        >
          <div className="language-switcher__drag-indicator" />
          
          {/* Поле поиска */}
          <div className="language-switcher__search">
            <input
              ref={searchInputRef}
              type="text"
              placeholder={t("languages.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="language-switcher__search-input"
              onKeyDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
            />
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="language-switcher__scroll-container"
            onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
          >
            {filteredLanguages.map((language, index) => (
              <button
                key={language.code}
                className={`language-switcher__option ${
                  currentLanguage === language.code ? "language-switcher__option--active" : ""
                }`}
                onClick={(e) => {
                  console.log('Language button clicked:', language.code);
                  handleLanguageChange(language.code, e);
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <span className="language-switcher__flag">{language.flag}</span>
                <span className="language-switcher__name">{language.name}</span>
              </button>
            ))}
          </div>
          
          <div className="language-switcher__position-info">
            {searchQuery ? t("languages.found", { count: totalLanguages }) : t("languages.allLanguages", { count: totalLanguages })}
          </div>
        </div>
      </div>
    </div>
  );
}
