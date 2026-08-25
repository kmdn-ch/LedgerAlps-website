import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { SwissFlag } from './SwissFlag';
import { useLanguage } from '../context/LanguageContext';

export const SwissQrShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'specs'>('preview');
  const { t } = useLanguage();

  return (
    <section id="qr-facture" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f7931a]/10 text-[#f7931a] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 border border-[#f7931a]/20">
            <SwissFlag size="xs" />
            <span>{t.swissQr.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            {t.swissQr.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            {t.swissQr.subtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition-all ${
                activeTab === 'preview'
                  ? 'bg-white dark:bg-[#1A1A1A] text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.swissQr.tabInteractive}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition-all ${
                activeTab === 'specs'
                  ? 'bg-white dark:bg-[#1A1A1A] text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.swissQr.tabSpecs}
            </button>
          </div>
        </div>

        {activeTab === 'preview' ? (
          /* Swiss QR Bill Graphic Mockup */
          <div className="max-w-4xl mx-auto rounded-xl bg-white text-black p-6 sm:p-10 shadow-xl border border-slate-300 font-sans select-none">
            
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
              
              {/* LEFT PART: RÉCÉPISSÉ / EMPFANGSSCHEIN */}
              <div className="md:col-span-4 pr-0 md:pr-8 pb-8 md:pb-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-black mb-4">
                    Récépissé / Empfangsschein
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <div className="font-bold text-[11px] text-black">{t.swissQr.creditor}</div>
                      <div className="font-mono text-xs tracking-wider text-black font-semibold mt-0.5">
                        CH93 0000 0000 0000 0000 0
                      </div>
                      <div className="text-black font-medium">
                        LedgerAlps <span className="bg-slate-300/80 px-1 py-0.2 rounded-xs text-[10px]">KMDN</span>
                      </div>
                      <div className="text-black">Rue Centrale 12</div>
                      <div className="text-black">1003 Lausanne</div>
                    </div>

                    <div className="pt-2">
                      <div className="font-bold text-[11px] text-black">{t.swissQr.payableBy}</div>
                      <div className="text-black font-medium">
                        <span className="bg-slate-300/80 px-1 py-0.2 rounded-xs text-[10px]">Client Débiteur SA</span>
                      </div>
                      <div className="text-black">Avenue de la Gare 4</div>
                      <div className="text-black">8001 Zürich</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Currency & Amount Left */}
                <div className="pt-8 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] font-bold text-black">{t.swissQr.currency}</div>
                    <div className="text-lg font-bold text-black mt-0.5">CHF</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-black">{t.swissQr.amount}</div>
                    <div className="text-lg font-bold font-mono text-black mt-0.5">1'200.00</div>
                  </div>
                </div>
              </div>

              {/* VERTICAL DIVIDER LINE */}
              <div className="hidden md:block w-px bg-black h-full"></div>

              {/* RIGHT PART: PARTIE PAIEMENT / ZAHLTEIL */}
              <div className="md:col-span-7 pl-0 md:pl-8 pt-8 md:pt-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-black mb-6">
                    {t.swissQr.qrTitle}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                    
                    {/* Left Subcolumn: Swiss QR Code & Amount */}
                    <div className="sm:col-span-6 flex flex-col items-start">
                      
                      {/* Swiss QR Code Graphic */}
                      <div className="relative w-48 h-48 bg-white border border-slate-200 p-1 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-black fill-current">
                          {/* Top-Left Corner */}
                          <rect x="5" y="5" width="22" height="22" rx="1" fill="black" />
                          <rect x="9" y="9" width="14" height="14" rx="1" fill="white" />
                          <rect x="12" y="12" width="8" height="8" rx="1" fill="black" />
                          
                          {/* Top-Right Corner */}
                          <rect x="73" y="5" width="22" height="22" rx="1" fill="black" />
                          <rect x="77" y="9" width="14" height="14" rx="1" fill="white" />
                          <rect x="80" y="12" width="8" height="8" rx="1" fill="black" />
                          
                          {/* Bottom-Left Corner */}
                          <rect x="5" y="73" width="22" height="22" rx="1" fill="black" />
                          <rect x="9" y="77" width="14" height="14" rx="1" fill="white" />
                          <rect x="12" y="80" width="8" height="8" rx="1" fill="black" />

                          {/* Data Pattern Modules */}
                          <rect x="32" y="6" width="4" height="4" />
                          <rect x="40" y="6" width="6" height="4" />
                          <rect x="50" y="6" width="4" height="6" />
                          <rect x="58" y="6" width="8" height="4" />
                          
                          <rect x="32" y="14" width="6" height="4" />
                          <rect x="42" y="14" width="4" height="8" />
                          <rect x="52" y="14" width="6" height="4" />
                          <rect x="62" y="14" width="4" height="4" />

                          <rect x="32" y="22" width="4" height="6" />
                          <rect x="48" y="22" width="6" height="4" />
                          <rect x="58" y="22" width="8" height="6" />

                          <rect x="6" y="32" width="6" height="4" />
                          <rect x="16" y="32" width="4" height="6" />
                          <rect x="24" y="32" width="6" height="4" />
                          <rect x="74" y="32" width="4" height="6" />
                          <rect x="84" y="32" width="6" height="4" />

                          <rect x="6" y="42" width="4" height="6" />
                          <rect x="14" y="42" width="8" height="4" />
                          <rect x="26" y="42" width="4" height="6" />
                          <rect x="70" y="42" width="6" height="6" />
                          <rect x="82" y="42" width="8" height="4" />

                          <rect x="6" y="52" width="6" height="4" />
                          <rect x="16" y="52" width="4" height="6" />
                          <rect x="24" y="52" width="6" height="4" />
                          <rect x="74" y="52" width="4" height="6" />
                          <rect x="84" y="52" width="6" height="4" />

                          <rect x="32" y="74" width="6" height="4" />
                          <rect x="42" y="74" width="4" height="8" />
                          <rect x="52" y="74" width="6" height="4" />
                          <rect x="62" y="74" width="4" height="4" />

                          <rect x="32" y="84" width="4" height="6" />
                          <rect x="48" y="84" width="6" height="4" />
                          <rect x="58" y="84" width="8" height="6" />
                          <rect x="74" y="84" width="6" height="6" />
                          <rect x="84" y="84" width="6" height="4" />
                        </svg>

                        {/* Official Swiss Cross in the QR Code (SIX SPS Standard: 7x7mm on 46x46mm QR) */}
                        <div className="absolute inset-0 m-auto w-10 h-10 flex items-center justify-center pointer-events-none">
                          <svg viewBox="0 0 32 32" className="w-full h-full block" shapeRendering="geometricPrecision">
                            <rect width="32" height="32" fill="#000000" />
                            <path d="M13,6 h6 v7 h7 v6 h-7 v7 h-6 v-7 H6 v-6 h7 z" fill="#FFFFFF" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom Currency & Amount Right (under QR) */}
                      <div className="pt-6 grid grid-cols-2 gap-4 w-full">
                        <div>
                          <div className="text-[11px] font-bold text-black">{t.swissQr.currency}</div>
                          <div className="text-lg font-bold text-black mt-0.5">CHF</div>
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-black">{t.swissQr.amount}</div>
                          <div className="text-lg font-bold font-mono text-black mt-0.5">1'200.00</div>
                        </div>
                      </div>

                    </div>

                    {/* Right Subcolumn: Payment Meta */}
                    <div className="sm:col-span-6 space-y-4 text-xs">
                      <div>
                        <div className="font-bold text-[11px] text-black">{t.swissQr.creditor}</div>
                        <div className="font-mono text-xs tracking-wider text-black font-semibold mt-0.5">
                          CH93 0000 0000 0000 0000 0
                        </div>
                        <div className="text-black font-medium">
                          LedgerAlps <span className="bg-slate-300/80 px-1 py-0.2 rounded-xs text-[10px]">KMDN</span>
                        </div>
                        <div className="text-black">Rue Centrale 12</div>
                        <div className="text-black">1003 Lausanne</div>
                      </div>

                      <div>
                        <div className="font-bold text-[11px] text-black">{t.swissQr.reference}</div>
                        <div className="font-mono text-xs text-black font-semibold">
                          21 00000 00003 13947 12854 08453
                        </div>
                      </div>

                      <div>
                        <div className="font-bold text-[11px] text-black">{t.swissQr.unstructuredMessage}</div>
                        <div className="font-mono text-xs text-black font-medium">
                          Facture FA-2026-0042
                        </div>
                      </div>

                      <div>
                        <div className="font-bold text-[11px] text-black">{t.swissQr.payableBy}</div>
                        <div className="text-black font-medium">
                          <span className="bg-slate-300/80 px-1 py-0.2 rounded-xs text-[10px]">Client Débiteur SA</span>
                        </div>
                        <div className="text-black">Avenue de la Gare 4</div>
                        <div className="text-black">8001 Zürich</div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Technical Specs Tab */
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-md bg-[#f7931a]/10 border border-[#f7931a]/20 text-[#f7931a] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {t.swissQr.specsBankingTitle}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-gray-300">
                {t.swissQr.specList.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7931a] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-md bg-[#f7931a]/10 border border-[#f7931a]/20 text-[#f7931a] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {t.swissQr.specsVatTitle}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f7931a] shrink-0 mt-0.5" />
                  <span>{t.swissQr.vatStandardRate}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f7931a] shrink-0 mt-0.5" />
                  <span>{t.swissQr.vatReducedRate}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f7931a] shrink-0 mt-0.5" />
                  <span>{t.swissQr.vatSpecialRate}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f7931a] shrink-0 mt-0.5" />
                  <span>{t.swissQr.vatExemption}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

