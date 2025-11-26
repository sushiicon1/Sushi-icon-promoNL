import React from 'react';

interface AdminLockLogoProps {
  size?: number;
  className?: string;
}

const AdminLockLogo: React.FC<AdminLockLogoProps> = ({ size = 80, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      style={{ display: 'block' }}
    >
      {/* Определения градиентов и фильтров */}
      <defs>
        <linearGradient id="lockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8941F" />
        </linearGradient>
        <linearGradient id="keyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8941F" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Белый внешний круг */}
      <circle
        cx="100"
        cy="100"
        r="98"
        fill="#ffffff"
        stroke="none"
      />
      
      {/* Тейл-синий внутренний круг */}
      <circle
        cx="100"
        cy="100"
        r="88"
        fill="#0ABAB5"
        stroke="none"
      />
      
      {/* Золотой замок */}
      <g transform="translate(100, 100)">
        {/* Тень замка */}
        <g opacity="0.3" transform="translate(2, 2)">
          <rect
            x="-25"
            y="10"
            width="50"
            height="50"
            rx="5"
            fill="#000000"
          />
          <path
            d="M -20 10 Q -20 -5, -7.5 -5 Q 5 -5, 5 10"
            fill="none"
            stroke="#000000"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
        
        {/* Тело замка */}
        <rect
          x="-25"
          y="10"
          width="50"
          height="50"
          rx="5"
          fill="url(#lockGradient)"
          stroke="#B8941F"
          strokeWidth="2"
          filter="url(#shadow)"
        />
        
        {/* Дужка замка */}
        <path
          d="M -20 10 Q -20 -5, -7.5 -5 Q 5 -5, 5 10"
          fill="none"
          stroke="url(#lockGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#shadow)"
        />
        
        {/* Ключевое отверстие */}
        <circle
          cx="-7.5"
          cy="35"
          r="8"
          fill="#1a1a1a"
          opacity="0.7"
        />
        
        {/* Блик на замке */}
        <ellipse
          cx="-15"
          cy="20"
          rx="10"
          ry="15"
          fill="rgba(255, 255, 255, 0.4)"
        />
        <ellipse
          cx="-18"
          cy="18"
          rx="5"
          ry="8"
          fill="rgba(255, 255, 255, 0.6)"
        />
      </g>
      
      {/* Золотой ключ */}
      <g transform="translate(100, 100) translate(30, -20) rotate(20)">
        {/* Тень ключа */}
        <g opacity="0.2" transform="translate(1, 1)">
          <circle cx="0" cy="0" r="14" fill="#000000" />
          <rect x="0" y="-4" width="30" height="8" fill="#000000" rx="2" />
          <path d="M 30 -4 L 38 -4 L 36 4 L 30 4 Z" fill="#000000" />
        </g>
        
        {/* Головка ключа (кольцо) */}
        <circle
          cx="0"
          cy="0"
          r="14"
          fill="url(#keyGradient)"
          stroke="#B8941F"
          strokeWidth="2"
          filter="url(#shadow)"
        />
        
        {/* Отверстие в кольце */}
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#1a1a1a"
          opacity="0.6"
        />
        
        {/* Стержень ключа */}
        <rect
          x="0"
          y="-4"
          width="30"
          height="8"
          rx="2"
          fill="url(#keyGradient)"
          stroke="#B8941F"
          strokeWidth="1.5"
          filter="url(#shadow)"
        />
        
        {/* Бородка ключа */}
        <path
          d="M 30 -4 L 38 -4 L 36 4 L 30 4 Z"
          fill="url(#keyGradient)"
          stroke="#B8941F"
          strokeWidth="1.5"
          filter="url(#shadow)"
        />
        
        {/* Детали бородки */}
        <rect x="32" y="-1" width="2" height="2" fill="#1a1a1a" opacity="0.5" />
        <rect x="34" y="1" width="2" height="2" fill="#1a1a1a" opacity="0.5" />
        
        {/* Блик на ключе */}
        <circle
          cx="-3"
          cy="-3"
          r="6"
          fill="rgba(255, 255, 255, 0.5)"
        />
        <ellipse
          cx="15"
          cy="-2"
          rx="8"
          ry="3"
          fill="rgba(255, 255, 255, 0.3)"
        />
      </g>
    </svg>
  );
};

export default AdminLockLogo;

