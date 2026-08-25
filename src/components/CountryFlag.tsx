import React from 'react';
import { SwissFlag } from './SwissFlag';
import { Language } from '../i18n/translations';

interface CountryFlagProps {
  code: Language | 'ch' | 'gb' | 'uk';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  rounded?: boolean;
}

export const UkFlag: React.FC<{ size?: 'xs' | 'sm' | 'md' | 'lg'; className?: string; rounded?: boolean }> = ({
  size = 'sm',
  className = '',
  rounded = true,
}) => {
  const sizeClasses = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 overflow-hidden select-none ${
        sizeClasses[size]
      } ${rounded ? 'rounded-[3px]' : 'rounded-none'} shadow-xs ring-1 ring-black/10 ${className}`}
      role="img"
      aria-label="Drapeau Royaume-Uni"
      title="English / UK"
    >
      <svg
        viewBox="0 0 60 40"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="60" height="40" fill="#012169" />
        {/* White Diagonals */}
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#FFFFFF" strokeWidth="8" />
        {/* Red Diagonals (Counterchanged) */}
        <path d="M0 0 L30 20 M60 40 L30 20" stroke="#C8102E" strokeWidth="3" />
        <path d="M60 0 L30 20 M0 40 L30 20" stroke="#C8102E" strokeWidth="3" />
        {/* White St George Cross */}
        <path d="M30 0 v40 M0 20 h60" stroke="#FFFFFF" strokeWidth="12" />
        {/* Red St George Cross */}
        <path d="M30 0 v40 M0 20 h60" stroke="#C8102E" strokeWidth="7" />
      </svg>
    </span>
  );
};

export const CountryFlag: React.FC<CountryFlagProps> = ({
  code,
  size = 'sm',
  className = '',
  rounded = true,
}) => {
  if (code === 'en' || code === 'gb' || code === 'uk') {
    return <UkFlag size={size} className={className} rounded={rounded} />;
  }

  // All Swiss languages (fr, de, it, ch) use the official Swiss flag
  return <SwissFlag size={size} className={className} rounded={rounded} />;
};
