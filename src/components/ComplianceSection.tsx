import React from 'react';
import { ShieldCheck, AlertTriangle, Info, ExternalLink, FileCheck, CheckCircle2, Lock, Scale } from 'lucide-react';
import { LINKS } from '../data/siteData';
import { SwissFlag } from './SwissFlag';
import { useLanguage } from '../context/LanguageContext';

export const ComplianceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="conformite-suisse" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f7931a]/10 text-[#f7931a] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 border border-[#f7931a]/20">
              <SwissFlag size="xs" />
              <span>{t.compliance.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
              {t.compliance.mainTitle}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              {t.compliance.mainSubtitle}
            </p>
          </div>

          <a
            href={LINKS.complianceRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#0B1524] text-white dark:bg-white dark:text-[#0B1524] hover:bg-[#f7931a] dark:hover:bg-[#f7931a] dark:hover:text-white font-semibold text-xs transition-all shrink-0 shadow-xs"
          >
            <FileCheck className="w-4 h-4" />
            <span>{t.compliance.viewRulesGitHub}</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Live Banner Previews (Exact copy from real software) */}
        <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 shadow-sm space-y-3 mb-10">
          <div className="text-[11px] font-mono font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f7931a]"></span>
            <span>{t.compliance.notificationLabel}</span>
          </div>

          {/* Banner 1 */}
          <div className="rounded-md border border-amber-400 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 px-4 py-3 flex items-center justify-between gap-3 text-xs sm:text-sm font-sans shadow-2xs">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-300 mr-2">
                  {t.compliance.banner1Tag}
                </span>
                <span className="font-semibold">
                  {t.compliance.banner1Text}
                </span>
              </div>
            </div>
            <span className="text-amber-600 dark:text-amber-400 text-xs font-mono">›</span>
          </div>

          {/* Banner 2 */}
          <div className="rounded-md border border-sky-300 bg-sky-50 dark:bg-sky-950/40 text-sky-950 dark:text-sky-200 px-4 py-3 flex items-center justify-between gap-3 text-xs sm:text-sm font-sans shadow-2xs">
            <div className="flex items-center gap-2.5">
              <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
              <div>
                <span className="font-bold text-[11px] uppercase tracking-wider text-sky-700 dark:text-sky-300 mr-2">
                  {t.compliance.banner2Tag}
                </span>
                <span className="font-medium text-slate-800 dark:text-sky-100">
                  {t.compliance.banner2Text}
                </span>
              </div>
            </div>
            <span className="text-sky-600 dark:text-sky-400 text-xs font-mono">›</span>
          </div>
        </div>

        {/* 3 Pillars of Swiss Compliance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: nLPD */}
          <div className="p-6 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#f7931a]/10 text-[#f7931a] flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.compliance.pillar1Title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
              {t.compliance.pillar1Desc}
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-gray-300 pt-2 border-t border-black/5 dark:border-white/5">
              {t.compliance.pillar1Items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f7931a] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 2: Swiss Payment Standards (SIX) */}
          <div className="p-6 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.compliance.pillar2Title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
              {t.compliance.pillar2Desc}
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-gray-300 pt-2 border-t border-black/5 dark:border-white/5">
              {t.compliance.pillar2Items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f7931a] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 3: CO Art. 957 / 958f */}
          <div className="p-6 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#0B1524]/10 dark:bg-white/10 text-[#0B1524] dark:text-white flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.compliance.pillar3Title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
              {t.compliance.pillar3Desc}
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-gray-300 pt-2 border-t border-black/5 dark:border-white/5">
              {t.compliance.pillar3Items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f7931a] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
