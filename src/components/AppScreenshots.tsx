import React, { useState } from 'react';
import {
  LayoutDashboard,
  Lock,
  Settings,
  FileSpreadsheet,
  CheckCircle2,
  ShieldCheck,
  Download,
  Calendar,
  Layers,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  FileText,
  Users,
  Eye,
  BookOpen,
  Scale,
  AlertTriangle,
  Info,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CountryFlag } from './CountryFlag';
import { LINKS } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';

export const AppScreenshots: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'dashboard' | 'compliance' | 'login' | 'settings' | 'reports'>('dashboard');
  const { t } = useLanguage();

  return (
    <section id="apercu-logiciel" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f7931a]/10 text-[#f7931a] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 border border-[#f7931a]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f7931a]"></span>
            <span>{t.screenshots.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            {t.screenshots.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            {t.screenshots.subtitle}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveScreen('dashboard')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-md transition-all ${
              activeScreen === 'dashboard'
                ? 'bg-[#f7931a] text-white shadow-xs'
                : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>{t.screenshots.tabs.dashboard}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen('compliance')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-md transition-all ${
              activeScreen === 'compliance'
                ? 'bg-[#0B1524] text-white dark:bg-white dark:text-[#0B1524] shadow-xs'
                : 'bg-[#0B1524]/5 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-[#0B1524]/10 border border-black/5 dark:border-white/10'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#f7931a]" />
            <span>{t.screenshots.tabs.compliance}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen('login')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-md transition-all ${
              activeScreen === 'login'
                ? 'bg-[#f7931a] text-white shadow-xs'
                : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>{t.screenshots.tabs.login}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen('settings')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-md transition-all ${
              activeScreen === 'settings'
                ? 'bg-[#f7931a] text-white shadow-xs'
                : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>{t.screenshots.tabs.settings}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen('reports')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-md transition-all ${
              activeScreen === 'reports'
                ? 'bg-[#f7931a] text-white shadow-xs'
                : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>{t.screenshots.tabs.reports}</span>
          </button>
        </div>

        {/* Dynamic Static Mockup Container (Pure Visuals, No Editable Inputs) */}
        <div className="rounded-xl bg-white dark:bg-[#09090B] border border-slate-200 dark:border-white/10 p-2 sm:p-4 shadow-lg select-none">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 dark:border-white/10 mb-3 text-xs text-slate-500 dark:text-gray-500 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#f7931a]/80 inline-block"></span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-400">
              <span className="font-semibold text-slate-700 dark:text-gray-300">LedgerAlps</span>
              <span>—</span>
              <span className="hidden sm:inline">
                {activeScreen === 'dashboard' && t.screenshots.windowTitles.dashboard}
                {activeScreen === 'compliance' && t.screenshots.windowTitles.compliance}
                {activeScreen === 'login' && t.screenshots.windowTitles.login}
                {activeScreen === 'settings' && t.screenshots.windowTitles.settings}
                {activeScreen === 'reports' && t.screenshots.windowTitles.reports}
              </span>
            </div>
            <div className="text-[10px] text-[#f7931a] font-bold">
              v1.5.4
            </div>
          </div>

          {/* SCREEN 1: DASHBOARD */}
          {activeScreen === 'dashboard' && (
            <div className="bg-[#F8FAFC] dark:bg-[#070D18] rounded-lg overflow-hidden border border-black/5 dark:border-white/5 flex flex-col md:flex-row min-h-[460px]">
              {/* Left Dark Sidebar */}
              <div className="w-full md:w-56 bg-[#0B1524] text-gray-300 p-4 shrink-0 flex flex-col justify-between border-r border-slate-800/80">
                <div className="space-y-6">
                  {/* KMDN Brand top icon */}
                  <div className="flex items-center gap-2.5 pb-2">
                    <div className="w-7 h-7 bg-white text-[#0B1524] rounded-[3px] font-black text-[10px] flex flex-col items-center justify-center leading-none tracking-tighter">
                      <span>KM</span>
                      <span>DN</span>
                    </div>
                    <span className="font-bold text-sm tracking-tight text-white">KMDN</span>
                  </div>

                  {/* Navigation List */}
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-md bg-[#F97316] text-white font-semibold">
                      <LayoutDashboard className="w-4 h-4 shrink-0" />
                      <span>{t.screenshots.dashboard.navDashboard}</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-md text-gray-400">
                      <FileText className="w-4 h-4 shrink-0" />
                      <span>{t.screenshots.dashboard.navSales}</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-md text-gray-400">
                      <Layers className="w-4 h-4 shrink-0" />
                      <span>{t.screenshots.dashboard.navPurchases}</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-md text-gray-400">
                      <Users className="w-4 h-4 shrink-0" />
                      <span>{t.screenshots.dashboard.navContacts}</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-md text-gray-400">
                      <FileSpreadsheet className="w-4 h-4 shrink-0" />
                      <span>{t.screenshots.dashboard.navJournal}</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-md text-gray-400">
                      <BookOpen className="w-4 h-4 shrink-0" />
                      <span>{t.screenshots.dashboard.navAccounts}</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-md text-gray-400">
                      <Download className="w-4 h-4 shrink-0" />
                      <span>{t.screenshots.dashboard.navReports}</span>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-gray-500 font-mono pt-4 border-t border-white/5">
                  {t.screenshots.dashboard.version}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-4 sm:p-6 text-slate-800 dark:text-gray-100 overflow-y-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 mb-5 border-b border-black/5 dark:border-white/5 gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>{t.screenshots.dashboard.navDashboard}</span>
                      <span className="text-xs text-gray-400 font-normal">ⓘ</span>
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.screenshots.dashboard.todayLabel} — 25.08.2026</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0F172A] text-white dark:bg-white dark:text-black rounded-md text-xs font-semibold shadow-xs">
                    <span>{t.screenshots.dashboard.newInvoiceBtn}</span>
                  </div>
                </div>

                {/* 4 Stat Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                  <div className="p-3 sm:p-4 rounded-lg bg-white dark:bg-[#0B1524] border border-orange-500/30 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase">
                      <span>{t.screenshots.dashboard.statOpenReceivables}</span>
                      <TrendingUp className="w-3.5 h-3.5 text-orange-500" />
                    </div>
                    <div className="text-base sm:text-xl font-bold font-mono text-[#EA580C] mt-1">
                      1 159,00 <span className="text-xs">CHF</span>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 rounded-lg bg-white dark:bg-[#0B1524] border border-black/5 dark:border-white/5 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase">
                      <span>{t.screenshots.dashboard.statOverdue}</span>
                      <AlertCircle className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <div className="text-base sm:text-xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                      0,00 <span className="text-xs">CHF</span>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 rounded-lg bg-white dark:bg-[#0B1524] border border-black/5 dark:border-white/5 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase">
                      <span>{t.screenshots.dashboard.statInvoicesThisMonth}</span>
                      <FileText className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <div className="text-base sm:text-xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                      4
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 rounded-lg bg-white dark:bg-[#0B1524] border border-black/5 dark:border-white/5 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase">
                      <span>{t.screenshots.dashboard.statActiveClients}</span>
                      <Users className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <div className="text-base sm:text-xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                      1
                    </div>
                  </div>
                </div>

                {/* Chiffre d'affaires breakdown table */}
                <div className="rounded-lg bg-white dark:bg-[#0B1524] border border-black/5 dark:border-white/5 p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-3 border-b border-black/5 dark:border-white/5 gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t.screenshots.dashboard.turnoverTitle}
                    </span>
                    <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-0.5 rounded-md text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-[#0F172A] text-white font-medium">{t.screenshots.dashboard.filterYear}</span>
                      <span className="px-2 py-0.5 text-gray-400">{t.screenshots.dashboard.filterMonth}</span>
                      <span className="px-2 py-0.5 text-gray-400">{t.screenshots.dashboard.filterClient}</span>
                    </div>
                  </div>

                  <div className="text-xs font-sans mt-3">
                    <div className="grid grid-cols-5 text-[10px] font-bold uppercase text-gray-400 pb-2 border-b border-black/5 dark:border-white/5">
                      <span>{t.screenshots.dashboard.thPeriod}</span>
                      <span className="text-right">{t.screenshots.dashboard.thInvoiced}</span>
                      <span className="text-right">{t.screenshots.dashboard.thCollected}</span>
                      <span className="text-center">{t.screenshots.dashboard.thItems}</span>
                      <span className="text-right">{t.screenshots.dashboard.thShare}</span>
                    </div>
                    <div className="grid grid-cols-5 py-2.5 items-center font-medium">
                      <span>2026</span>
                      <span className="text-right font-mono font-bold">2 350,00 CHF</span>
                      <span className="text-right font-mono text-gray-400">0,00 CHF</span>
                      <span className="text-center font-mono">2</span>
                      <div className="flex justify-end items-center">
                        <div className="w-16 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
                          <div className="w-full h-full bg-[#f7931a]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 pt-2.5 border-t border-black/5 dark:border-white/5 font-bold">
                      <span>{t.screenshots.dashboard.total}</span>
                      <span className="text-right font-mono">2 350,00 CHF</span>
                      <span className="text-right font-mono text-gray-400">0,00 CHF</span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 text-[10px] text-gray-400 flex items-start gap-1">
                    <span>ⓘ</span>
                    <span>{t.screenshots.dashboard.disclaimer}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 2: COMPLIANCE & NOTIFICATIONS */}
          {activeScreen === 'compliance' && (
            <div className="bg-[#F8FAFC] dark:bg-[#070D18] rounded-lg p-4 sm:p-8 border border-black/5 dark:border-white/5 space-y-6 min-h-[460px]">
              
              {/* Compliance Highlight Explainer */}
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-amber-500 text-white shrink-0 mt-0.5">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {t.screenshots.complianceTab.headerTitle}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-gray-300 mt-0.5">
                      {t.screenshots.complianceTab.headerDesc}
                    </p>
                  </div>
                </div>
                <a
                  href={LINKS.complianceRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#0B1524] text-white dark:bg-white dark:text-[#0B1524] text-xs font-semibold hover:bg-[#f7931a] dark:hover:bg-[#f7931a] dark:hover:text-white transition-colors shrink-0 shadow-xs"
                >
                  <span>{t.screenshots.complianceTab.complianceFolderBtn}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Exact Reproduction of Screenshot notifications */}
              <div className="bg-white dark:bg-[#0B1524] rounded-lg p-4 sm:p-6 border border-black/10 dark:border-white/10 shadow-sm space-y-3">
                
                {/* 1. Yellow Warning Banner: nLPD art. 8 */}
                <div className="rounded-md border border-amber-400 bg-amber-50/90 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 px-3.5 py-2.5 flex items-center justify-between gap-3 text-xs sm:text-sm font-sans shadow-xs">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-bold text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-300 mr-2">
                        {t.screenshots.complianceTab.warning1Tag}
                      </span>
                      <span className="font-semibold">
                        {t.screenshots.complianceTab.warning1Text}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 shrink-0">
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-xs opacity-70">✕</span>
                  </div>
                </div>

                {/* 2. Blue Info Banner: SPS / SIX QR Updates */}
                <div className="rounded-md border border-sky-300 bg-sky-50/80 dark:bg-sky-950/40 text-sky-950 dark:text-sky-200 px-3.5 py-2.5 flex items-center justify-between gap-3 text-xs sm:text-sm font-sans shadow-xs">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-bold text-[11px] uppercase tracking-wider text-sky-700 dark:text-sky-300 mr-2">
                        {t.screenshots.complianceTab.info2Tag}
                      </span>
                      <span className="font-medium text-slate-800 dark:text-sky-100">
                        {t.screenshots.complianceTab.info2Text}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 shrink-0">
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-xs opacity-70">✕</span>
                  </div>
                </div>

                {/* Sub Header as in Screenshot */}
                <div className="flex justify-between items-center pt-4 mt-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t.screenshots.complianceTab.dashboardTitle}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0F172A] text-white dark:bg-white dark:text-black rounded-md text-xs font-semibold">
                    <span>{t.screenshots.complianceTab.newInvoiceBtn}</span>
                  </div>
                </div>

              </div>

              {/* Compliance Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-white dark:bg-[#0B1524] border border-black/5 dark:border-white/5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                    <Scale className="w-4 h-4 text-[#f7931a]" />
                    <span>{t.screenshots.complianceTab.card1Title}</span>
                  </div>
                  <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                    {t.screenshots.complianceTab.card1Desc}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-[#0B1524] border border-black/5 dark:border-white/5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                    <ShieldCheck className="w-4 h-4 text-sky-500" />
                    <span>{t.screenshots.complianceTab.card2Title}</span>
                  </div>
                  <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                    {t.screenshots.complianceTab.card2Desc}
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* SCREEN 3: LOGIN SCREEN */}
          {activeScreen === 'login' && (
            <div className="bg-[#0A101D] text-white rounded-lg p-6 sm:p-10 border border-slate-800">
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Left Security Advice */}
                <div className="space-y-6">
                  {/* Official Logo Box */}
                  <div className="inline-block p-3 bg-white rounded-md">
                    <BrandLogo size="md" />
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{t.screenshots.loginTab.securityTipBadge}</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {t.screenshots.loginTab.securityTipText}
                    </h4>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-sm bg-[#0B1524] text-white flex items-center justify-center shrink-0 border border-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#f7931a]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{t.screenshots.loginTab.localDataTitle}</div>
                        <div className="text-[11px] text-gray-400">{t.screenshots.loginTab.localDataDesc}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-sm bg-[#f7931a]/20 text-[#f7931a] flex items-center justify-center shrink-0 border border-[#f7931a]/30">
                        <Scale className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{t.screenshots.loginTab.complianceCoTitle}</div>
                        <div className="text-[11px] text-gray-400">{t.screenshots.loginTab.complianceCoDesc}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Form Card (Static display, protected) */}
                <div className="bg-[#0E1726] p-6 rounded-lg border border-slate-700/60 shadow-lg space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{t.screenshots.loginTab.formTitle}</h3>
                    <p className="text-xs text-gray-400">{t.screenshots.loginTab.formSubtitle}</p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                        {t.screenshots.loginTab.emailLabel}
                      </span>
                      <div className="w-full px-3 py-2 rounded-md bg-[#0A101D] border border-slate-700 text-gray-300 text-xs font-mono">
                        vous@exemple.ch
                      </div>
                    </div>

                    <div>
                      <span className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                        {t.screenshots.loginTab.passwordLabel}
                      </span>
                      <div className="relative flex items-center justify-between w-full px-3 py-2 rounded-md bg-[#0A101D] border border-slate-700 text-gray-400 text-xs font-mono">
                        <span>••••••••••••</span>
                        <Eye className="w-3.5 h-3.5 text-gray-500" />
                      </div>
                    </div>

                    <div className="w-full py-2.5 rounded-md bg-[#F97316] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md mt-2">
                      <span>{t.screenshots.loginTab.loginBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="pt-2 text-center text-[10px] font-mono text-gray-500">
                    {t.screenshots.loginTab.appVersion}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* SCREEN 4: SETTINGS & 2FA */}
          {activeScreen === 'settings' && (
            <div className="bg-white dark:bg-[#070D18] rounded-lg p-6 border border-black/5 dark:border-white/5 flex flex-col md:flex-row gap-6 min-h-[460px]">
              
              {/* Left Settings Submenu */}
              <div className="w-full md:w-48 space-y-1 text-xs shrink-0 border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 pb-4 md:pb-0 md:pr-4">
                <div className="font-bold text-sm text-slate-900 dark:text-white mb-2 flex items-center gap-1">
                  <span>{t.screenshots.settingsTab.title}</span>
                  <span className="text-xs text-gray-400 font-normal">ⓘ</span>
                </div>
                <div className="text-[11px] text-gray-500 mb-4">{t.screenshots.settingsTab.companyConfig}</div>

                <div className="p-2 rounded-md text-gray-600 dark:text-gray-400">{t.screenshots.settingsTab.menuIdentity}</div>
                <div className="p-2 rounded-md text-gray-600 dark:text-gray-400">{t.screenshots.settingsTab.menuBank}</div>
                <div className="p-2 rounded-md text-gray-600 dark:text-gray-400">{t.screenshots.settingsTab.menuInvoicing}</div>
                <div className="p-2 rounded-md text-gray-600 dark:text-gray-400">{t.screenshots.settingsTab.menuLegal}</div>
                <div className="p-2 rounded-md text-gray-600 dark:text-gray-400">{t.screenshots.settingsTab.menuBackups}</div>
                <div className="p-2 rounded-md text-gray-600 dark:text-gray-400">{t.screenshots.settingsTab.menuMaintenance}</div>
                <div className="p-2 rounded-md bg-[#0F172A] text-white dark:bg-white dark:text-black font-semibold">{t.screenshots.settingsTab.menuAccount}</div>
              </div>

              {/* Settings Main Content */}
              <div className="flex-1 space-y-6 text-xs text-slate-700 dark:text-gray-300">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    {t.screenshots.settingsTab.languageTitle}
                  </div>
                  <p className="text-gray-500 mb-2">{t.screenshots.settingsTab.languageSubtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1.5 rounded-md bg-[#0F172A] text-white font-semibold flex items-center gap-1.5 shadow-xs">
                      <span>文A</span>
                      <CountryFlag code="fr" size="xs" />
                      <span>FR Français</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-md bg-black/5 dark:bg-white/5 text-gray-500 flex items-center gap-1.5 border border-black/5 dark:border-white/5">
                      <span>文A</span>
                      <CountryFlag code="de" size="xs" />
                      <span>DE Deutsch</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-md bg-black/5 dark:bg-white/5 text-gray-500 flex items-center gap-1.5 border border-black/5 dark:border-white/5">
                      <span>文A</span>
                      <CountryFlag code="it" size="xs" />
                      <span>IT Italiano</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-md bg-black/5 dark:bg-white/5 text-gray-500 flex items-center gap-1.5 border border-black/5 dark:border-white/5">
                      <span>文A</span>
                      <CountryFlag code="en" size="xs" />
                      <span>EN English</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/5 space-y-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    {t.screenshots.settingsTab.totpTitle}
                  </div>
                  <p className="text-gray-500 leading-relaxed">
                    {t.screenshots.settingsTab.totpDesc}
                  </p>

                  <div className="p-3.5 rounded-md bg-[#f7931a]/10 border border-[#f7931a]/25 text-[#f7931a] flex items-center justify-between">
                    <div className="flex items-center gap-2 font-medium text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#f7931a] shrink-0" />
                      <span className="text-slate-800 dark:text-gray-200">{t.screenshots.settingsTab.totpActiveText}</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 pt-1">
                    {t.screenshots.settingsTab.totpRemoveBtn}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* SCREEN 5: REPORTS & EXPORTS */}
          {activeScreen === 'reports' && (
            <div className="bg-white dark:bg-[#070D18] rounded-lg p-6 border border-black/5 dark:border-white/5 space-y-6 min-h-[460px]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-black/5 dark:border-white/5 gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{t.screenshots.reportsTab.title}</span>
                    <span className="text-xs text-gray-400 font-normal">ⓘ</span>
                  </h3>
                  <p className="text-xs text-gray-500">{t.screenshots.reportsTab.subtitle}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-md border border-black/5 dark:border-white/5">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  <span>{t.screenshots.reportsTab.dateRange}</span>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                  {t.screenshots.reportsTab.accountingDocsTitle}
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  {t.screenshots.reportsTab.accountingDocsDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Journal général */}
                  <div className="p-4 rounded-lg bg-slate-50/70 dark:bg-[#0B1524] border border-black/5 dark:border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="w-7 h-7 rounded-sm bg-orange-500/10 text-orange-500 flex items-center justify-center mb-2">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{t.screenshots.reportsTab.docJournalTitle}</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed mb-3">
                        {t.screenshots.reportsTab.docJournalDesc}
                      </p>
                    </div>
                    <div className="w-full py-1.5 px-3 rounded-md bg-white dark:bg-slate-800 border border-black/10 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-gray-200 flex items-center justify-center gap-1.5">
                      <Download className="w-3 h-3" />
                      <span>{t.screenshots.reportsTab.downloadCsvBtn}</span>
                    </div>
                  </div>

                  {/* Grand livre */}
                  <div className="p-4 rounded-lg bg-slate-50/70 dark:bg-[#0B1524] border border-black/5 dark:border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="w-7 h-7 rounded-sm bg-orange-500/10 text-orange-500 flex items-center justify-center mb-2">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{t.screenshots.reportsTab.docLedgerTitle}</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed mb-3">
                        {t.screenshots.reportsTab.docLedgerDesc}
                      </p>
                    </div>
                    <div className="w-full py-1.5 px-3 rounded-md bg-white dark:bg-slate-800 border border-black/10 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-gray-200 flex items-center justify-center gap-1.5">
                      <Download className="w-3 h-3" />
                      <span>{t.screenshots.reportsTab.downloadCsvBtn}</span>
                    </div>
                  </div>

                  {/* Balance de vérification */}
                  <div className="p-4 rounded-lg bg-slate-50/70 dark:bg-[#0B1524] border border-black/5 dark:border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="w-7 h-7 rounded-sm bg-orange-500/10 text-orange-500 flex items-center justify-center mb-2">
                        <FileSpreadsheet className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{t.screenshots.reportsTab.docBalanceTitle}</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed mb-3">
                        {t.screenshots.reportsTab.docBalanceDesc}
                      </p>
                    </div>
                    <div className="w-full py-1.5 px-3 rounded-md bg-white dark:bg-slate-800 border border-black/10 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-gray-200 flex items-center justify-center gap-1.5">
                      <Download className="w-3 h-3" />
                      <span>{t.screenshots.reportsTab.downloadCsvBtn}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carnet du lait (CO art. 957) */}
              <div className="p-4 rounded-lg bg-slate-50/70 dark:bg-[#0B1524] border border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-sm bg-orange-500/10 text-orange-500 flex items-center justify-center">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.screenshots.reportsTab.milkBookTitle}
                  </h4>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  {t.screenshots.reportsTab.milkBookDesc}
                </p>
                <div className="p-2.5 rounded-md bg-black/5 dark:bg-white/5 text-[11px] text-gray-500 mb-3">
                  {t.screenshots.reportsTab.milkBookCashBasisNote}
                </div>
                <div className="inline-block px-4 py-2 rounded-md bg-[#0F172A] text-white dark:bg-white dark:text-black text-xs font-semibold">
                  {t.screenshots.reportsTab.generateMilkBookBtn}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
