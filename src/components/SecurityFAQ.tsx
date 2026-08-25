import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SecurityFAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<string | null>(t.faq.items[0]?.id || 'faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-[#f7931a]/10 text-[#f7931a] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 border border-[#f7931a]/20">
            {t.faq.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            {t.faq.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {t.faq.items.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-gray-400 dark:text-gray-500">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed border-t border-black/5 dark:border-white/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Security badge footer note */}
        <div className="mt-8 p-5 rounded-lg bg-[#f7931a]/5 border border-[#f7931a]/20 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-9 h-9 rounded-md bg-[#f7931a]/10 text-[#f7931a] flex items-center justify-center shrink-0 border border-[#f7931a]/20">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-xs text-slate-700 dark:text-gray-300">
            <span className="font-semibold text-slate-900 dark:text-white block sm:inline mr-1">
              {t.faq.zeroTelemetryTitle}
            </span>
            {t.faq.zeroTelemetryText}
          </div>
        </div>
      </div>
    </section>
  );
};
