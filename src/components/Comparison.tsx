import React from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Comparison: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="comparatif" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-[#080808]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-[#f7931a]/10 text-[#f7931a] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 border border-[#f7931a]/20">
            {t.comparison.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            {t.comparison.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-black/5 dark:border-white/5 bg-slate-50/70 dark:bg-[#141414] text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-mono">
                  <th className="py-4 px-6">{t.comparison.headerFeature}</th>
                  <th className="py-4 px-6 text-[#f7931a] bg-[#f7931a]/5 font-bold">
                    {t.comparison.headerLedgerAlps}
                  </th>
                  <th className="py-4 px-6">{t.comparison.headerCloudSaas}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-white/5">
                {t.comparison.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-[#f7931a]/[0.02] font-medium text-slate-900 dark:text-white">
                      <div className="flex items-center gap-2 text-[#f7931a]">
                        <Check className="w-4 h-4 shrink-0" />
                        <span className="text-slate-900 dark:text-gray-200">{row.ledgerAlps}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500/80 shrink-0" />
                        <span>{row.cloudSaas}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
