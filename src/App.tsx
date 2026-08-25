import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AppScreenshots } from './components/AppScreenshots';
import { ComplianceSection } from './components/ComplianceSection';
import { SwissQrShowcase } from './components/SwissQrShowcase';
import { InstallationGuide } from './components/InstallationGuide';
import { Comparison } from './components/Comparison';
import { SecurityFAQ } from './components/SecurityFAQ';
import { Footer } from './components/Footer';

export default function App() {
  // Light theme by default
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('ledgeralps_theme_preference');
      if (savedTheme === 'dark') return true;
      if (savedTheme === 'light') return false;
    }
    return false; // Default: Light theme
  });

  // Apply or remove dark mode class to html root
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('ledgeralps_theme_preference', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('ledgeralps_theme_preference', 'light');
    }
  }, [darkMode]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-white via-[#f8fafc] to-white text-slate-900 dark:from-[#0B1524] dark:via-[#070D18] dark:to-[#0B1524] dark:text-[#F8FAFC] transition-colors duration-200 selection:bg-[#f7931a] selection:text-white">
        {/* Top Navigation */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Content Sections */}
        <main id="main-content">
          <Hero />
          <AppScreenshots />
          <ComplianceSection />
          <Features />
          <SwissQrShowcase />
          <InstallationGuide />
          <Comparison />
          <SecurityFAQ />
        </main>

        {/* Footer with Social Links */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

