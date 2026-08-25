import React from 'react';
import { SwissFlag } from './SwissFlag';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtext = false,
  className = '',
}) => {
  const fontSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl sm:text-4xl',
  };

  const flagSizes: Record<'sm' | 'md' | 'lg', 'xs' | 'sm' | 'md'> = {
    sm: 'xs',
    md: 'xs',
    lg: 'sm',
  };

  const flagPositions = {
    sm: '-top-1.5 -right-3.5',
    md: '-top-2 -right-4',
    lg: '-top-2.5 -right-5',
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="relative inline-flex items-center font-bold tracking-tight text-slate-900 dark:text-white font-sans">
        <span className={fontSizes[size]}>LedgerAlp</span>
        <span className="relative">
          <span className={fontSizes[size]}>s</span>
          {/* Swiss Flag Red Square Badge replacing any text mention */}
          <span className={`absolute ${flagPositions[size]}`}>
            <SwissFlag size={flagSizes[size]} rounded={true} />
          </span>
        </span>
      </div>

      {showSubtext && (
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#f7931a] font-semibold ml-4 px-2 py-0.5 rounded-sm bg-[#f7931a]/10 border border-[#f7931a]/20">
          Open Source
        </span>
      )}
    </div>
  );
};
