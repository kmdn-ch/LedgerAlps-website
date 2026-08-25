import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CountryFlag } from './CountryFlag';

interface LanguageSelectorProps {
  variant?: 'header' | 'mobile' | 'compact';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'header' }) => {
  const { language, setLanguage, availableLanguages, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentOption = availableLanguages.find((l) => l.code === language) || availableLanguages[0];

  if (variant === 'mobile') {
    return (
      <div className="pt-2 pb-1 border-t border-black/5 dark:border-white/5">
        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
          <CountryFlag code={language} size="xs" />
          <span>{t.nav.langSelect}</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {availableLanguages.map((item) => {
            const isSelected = item.code === language;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                className={`flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-md transition-all ${
                  isSelected
                    ? 'bg-[#f7931a] text-white font-bold shadow-xs'
                    : 'bg-black/5 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10'
                }`}
              >
                <CountryFlag code={item.code} size="xs" />
                <span>{item.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="language-selector-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md text-slate-700 dark:text-gray-200 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 transition-all focus:outline-hidden focus:ring-1 focus:ring-[#f7931a]"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t.nav.langSelect}
        title={t.nav.langSelect}
      >
        <CountryFlag code={currentOption.code} size="xs" />
        <span className="font-bold tracking-wide uppercase">{currentOption.shortLabel}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 opacity-60 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="language-dropdown-menu"
          role="listbox"
          className="absolute right-0 mt-1.5 w-44 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/50 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {availableLanguages.map((item) => {
            const isSelected = item.code === language;
            return (
              <button
                key={item.code}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setLanguage(item.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors text-left ${
                  isSelected
                    ? 'bg-[#f7931a]/10 text-[#f7931a] font-bold dark:bg-[#f7931a]/15'
                    : 'text-slate-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <CountryFlag code={item.code} size="sm" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#f7931a] shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
