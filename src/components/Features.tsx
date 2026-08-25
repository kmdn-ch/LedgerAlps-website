import React from 'react';
import { HardDrive, QrCode, Github, Cpu, ShieldCheck } from 'lucide-react';
import { SwissFlag } from './SwissFlag';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  HardDrive: <HardDrive className="w-5 h-5 text-[#f7931a]" />,
  QrCode: <QrCode className="w-5 h-5 text-[#f7931a]" />,
  Github: <Github className="w-5 h-5 text-[#f7931a]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#f7931a]" />,
};

const idIconMapping: Record<string, string> = {
  'on-premise': 'HardDrive',
  'swiss-qr': 'QrCode',
  'free-opensource': 'Github',
  'ultra-lightweight': 'Cpu',
};

export const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="avantages" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-[#f7931a]/10 text-[#f7931a] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 border border-[#f7931a]/20">
            {t.features.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            {t.features.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.features.cards.map((feat) => {
            const iconKey = idIconMapping[feat.id] || 'HardDrive';
            return (
              <div
                key={feat.id}
                id={`feature-card-${feat.id}`}
                className="p-6 sm:p-8 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 hover:border-[#f7931a]/40 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-md bg-[#f7931a]/10 border border-[#f7931a]/20 flex items-center justify-center">
                    {iconMap[iconKey] || <ShieldCheck className="w-5 h-5 text-[#f7931a]" />}
                  </div>
                  {feat.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#f7931a] bg-[#f7931a]/10 px-2.5 py-0.5 rounded-sm border border-[#f7931a]/20">
                      {feat.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  {feat.title}
                </h3>
                <div className="text-xs font-mono text-[#f7931a] mb-3">
                  {feat.subtitle}
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Swiss Compliance Highlight Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 border-l-4 border-l-[#f7931a] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#f7931a]">
              <SwissFlag size="xs" />
              <span>{t.features.swissCardTitle}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
              {t.features.swissCardDesc}
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm max-w-2xl">
              {t.features.swissCardSub}
            </p>
          </div>
          <a
            href="#conformite-suisse"
            className="shrink-0 px-6 py-3 rounded-md bg-[#0B1524] text-white hover:bg-[#f7931a] dark:bg-white dark:text-[#0B1524] dark:hover:bg-[#f7931a] dark:hover:text-white font-semibold text-xs transition-all shadow-xs"
          >
            {t.features.viewComplianceBtn}
          </a>
        </div>
      </div>
    </section>
  );
};

