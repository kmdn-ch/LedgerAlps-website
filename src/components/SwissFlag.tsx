import React from 'react';

interface SwissFlagProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  rounded?: boolean;
  shadow?: boolean;
}

/**
 * Official Swiss Flag Component
 * Compliant with the Swiss Coat of Arms Protection Act (RS 232.21, Annex 1):
 * - Aspect ratio: 1:1 (Square 32x32)
 * - Arms length: 1/6 longer than wide (width 6, branch length 7, ratio 7:6)
 * - Official Swiss Red: Pantone 485 C (#DA291C)
 */
export const SwissFlag: React.FC<SwissFlagProps> = ({
  size = 'sm',
  className = '',
  rounded = true,
  shadow = true,
}) => {
  const sizeClasses = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 overflow-hidden select-none aspect-square ${
        sizeClasses[size]
      } ${rounded ? 'rounded-[2px]' : 'rounded-none'} ${
        shadow ? 'shadow-xs ring-1 ring-black/10' : ''
      } ${className}`}
      role="img"
      aria-label="Drapeau Suisse (Conforme RS 232.21)"
      title="Suisse (CH) — Conforme RS 232.21"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
      >
        {/* Official Swiss Red Field (1:1 Square) */}
        <rect width="32" height="32" fill="#DA291C" />
        
        {/* Official Swiss Cross (Arms width 6, length 7 each, margin 6 on a 32x32 grid: ratio 7/6) */}
        <path
          d="M13,6 h6 v7 h7 v6 h-7 v7 h-6 v-7 H6 v-6 h7 z"
          fill="#FFFFFF"
        />
      </svg>
    </span>
  );
};
