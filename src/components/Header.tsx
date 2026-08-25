import React, { useState, useEffect } from 'react';
import { Download, Github, Sun, Moon, Menu, X } from 'lucide-react';
import { LINKS } from '../data/siteData';
import { BrandLogo } from './BrandLogo';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { useGitHubRelease } from '../hooks/useGitHubRelease';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const { release } = useGitHubRelease();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-b border-black/5 dark:border-white/5 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo with Official Swiss Cross */}
        <a
          id="brand-logo-link"
          href="#"
          className="flex items-center gap-2 group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#f7931a] rounded-md"
        >
          <BrandLogo size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-navigation" className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600 dark:text-gray-400">
          <a
            id="nav-link-advantages"
            href="#avantages"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            {t.nav.solution}
          </a>
          <a
            id="nav-link-screenshots"
            href="#apercu-logiciel"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            {t.nav.interface}
          </a>
          <a
            id="nav-link-compliance"
            href="#conformite-suisse"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            {t.nav.compliance}
          </a>
          <a
            id="nav-link-qr"
            href="#qr-facture"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            {t.nav.qrInvoice}
          </a>
          <a
            id="nav-link-install"
            href="#installation"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            {t.nav.install}
          </a>
          <a
            id="nav-link-faq"
            href="#faq"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            {t.nav.faq}
          </a>
          <a
            id="nav-link-github"
            href={LINKS.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#f7931a] hover:text-[#d87c0e] transition-colors font-medium"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </nav>

        {/* Right CTA, Language Switcher & Dark Mode Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Selector Dropdown (FR / DE / IT / ENG) */}
          <LanguageSelector variant="header" />

          {/* Dark Mode Toggle */}
          <button
            id="theme-toggle-button"
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md text-slate-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-black/5 dark:border-white/5 transition-colors focus:outline-hidden"
            aria-label={darkMode ? t.nav.themeLight : t.nav.themeDark}
            title={darkMode ? t.nav.themeLight : t.nav.themeDark}
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#f7931a]" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Windows Download CTA with Live GitHub Version */}
          <a
            id="header-download-cta"
            href="#telecharger"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#0B1524] hover:bg-[#f7931a] dark:bg-[#f7931a] dark:hover:bg-[#d87c0e] dark:text-white rounded-md transition-all duration-200 shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.nav.downloadBtn}</span>
            <span className="hidden lg:inline text-[10px] opacity-80 font-mono">
              {release.version}
            </span>
          </a>

          {/* Mobile menu hamburger */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-black/5 dark:border-white/5 focus:outline-hidden"
            aria-label={t.nav.menuAria}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#0B1524] px-4 pt-3 pb-6 space-y-2.5 shadow-xl"
        >
          {/* Mobile Language Switcher */}
          <LanguageSelector variant="mobile" />

          <a
            href="#avantages"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium rounded-md text-slate-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
          >
            {t.nav.solution}
          </a>
          <a
            href="#apercu-logiciel"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium rounded-md text-slate-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
          >
            {t.nav.interface}
          </a>
          <a
            href="#conformite-suisse"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium rounded-md text-slate-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
          >
            {t.nav.compliance}
          </a>
          <a
            href="#qr-facture"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium rounded-md text-slate-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
          >
            {t.nav.qrInvoice}
          </a>
          <a
            href="#installation"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium rounded-md text-slate-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
          >
            {t.nav.install}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium rounded-md text-slate-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
          >
            {t.nav.faq}
          </a>
          <a
            href={LINKS.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-[#f7931a] hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Github className="w-4 h-4" />
            <span>{t.nav.githubSourceCode}</span>
          </a>
          <div className="pt-2">
            <a
              href="#telecharger"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#f7931a] hover:bg-[#d87c0e] rounded-md transition-all shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>{t.nav.downloadInstaller} ({release.version})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

