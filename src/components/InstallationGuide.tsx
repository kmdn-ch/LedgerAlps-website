import React, { useState } from 'react';
import { Download, Terminal, CheckCircle2, AlertTriangle, ExternalLink, Copy, Check, Info, Shield } from 'lucide-react';
import { LINKS } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { useGitHubRelease } from '../hooks/useGitHubRelease';

export const InstallationGuide: React.FC = () => {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const { t } = useLanguage();
  const { release } = useGitHubRelease();

  const psCommand = `Get-FileHash .\\LedgerAlps-Setup-x64.exe -Algorithm SHA256`;

  const copyCmd = () => {
    navigator.clipboard.writeText(psCommand);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="installation" className="py-16 sm:py-24 border-t border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-[#f7931a]/10 text-[#f7931a] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 border border-[#f7931a]/20">
            {t.installation.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            {t.installation.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            {t.installation.subtitle}
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-5">
          {/* Step 1 */}
          <div className="p-6 sm:p-7 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-8 h-8 rounded-sm bg-[#f7931a]/10 border border-[#f7931a]/20 text-[#f7931a] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                01
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1.5">
                  {t.installation.step1Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-4">
                  {t.installation.step1Desc} (<code className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-xs font-mono text-[#f7931a]">.exe</code>).
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    id="install-step-download-btn"
                    href={release.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0B1524] text-white hover:bg-[#f7931a] dark:bg-white dark:text-[#0B1524] dark:hover:bg-[#f7931a] dark:hover:text-white text-xs font-semibold transition-all shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t.hero.downloadWindows} ({release.version})</span>
                  </a>
                  <a
                    href={LINKS.githubReleases}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-slate-700 dark:text-gray-300 text-xs font-medium border border-black/10 dark:border-white/10 transition-colors"
                  >
                    <span>{t.installation.step1Releases}</span>
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 (SmartScreen instructions) */}
          <div className="p-6 sm:p-7 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-8 h-8 rounded-sm bg-[#f7931a]/10 border border-[#f7931a]/20 text-[#f7931a] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                02
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {t.installation.step2Title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase font-semibold px-2 py-0.5 rounded-sm bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    {t.installation.step2Important}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {t.installation.step2Desc}
                </p>

                {/* Visual Step Simulation Box */}
                <div className="p-4 rounded-md bg-[#0A0A0A] text-white text-xs space-y-2 border border-white/10 mb-3 shadow-inner">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{t.installation.smartscreenTitle}</span>
                  </div>
                  <p className="text-gray-300 pl-6">
                    {t.installation.smartscreenStep1}
                  </p>
                  <p className="text-gray-300 pl-6">
                    {t.installation.smartscreenStep2}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <Shield className="w-3.5 h-3.5 text-[#f7931a] shrink-0" />
                  <span>
                    {t.installation.smartscreenNote}{' '}
                    <a
                      href={LINKS.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f7931a] hover:underline font-medium"
                    >
                      github.com/kmdn-ch/LedgerAlps
                    </a>.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 sm:p-7 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-8 h-8 rounded-sm bg-[#f7931a]/10 border border-[#f7931a]/20 text-[#f7931a] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                03
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1.5">
                  {t.installation.step3Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-3 leading-relaxed">
                  {t.installation.step3Desc}
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f7931a]" />
                  <span>{t.installation.step3Sub}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-6 sm:p-7 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-8 h-8 rounded-sm bg-[#f7931a]/10 border border-[#f7931a]/20 text-[#f7931a] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                04
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1.5">
                  {t.installation.step4Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-3 leading-relaxed">
                  {t.installation.step4Desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-3">
                  <div className="p-3.5 rounded-md bg-slate-50 dark:bg-[#161616] border border-black/5 dark:border-white/5">
                    <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                      {t.installation.configCompany}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 leading-snug block">
                      {t.installation.configCompanySub}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-md bg-slate-50 dark:bg-[#161616] border border-black/5 dark:border-white/5">
                    <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                      {t.installation.configIban}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 leading-snug block">
                      {t.installation.configIbanSub}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-md bg-slate-50 dark:bg-[#161616] border border-black/5 dark:border-white/5">
                    <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                      {t.installation.configVat}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 leading-snug block">
                      {t.installation.configVatSub}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#f7931a] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.installation.readyTag}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Checksum Box */}
        <div className="mt-6 p-5 rounded-lg bg-white dark:bg-[#111111] border border-black/5 dark:border-white/5 shadow-xs">
          <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 dark:text-white mb-2">
            <Terminal className="w-3.5 h-3.5 text-[#f7931a]" />
            <span>{t.installation.checksumTitle}</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-gray-400 mb-3">
            {t.installation.checksumDesc}
          </p>
          <div className="flex items-center justify-between p-2.5 rounded-md bg-[#0A0A0A] text-gray-200 font-mono text-xs overflow-x-auto border border-white/10">
            <code>{psCommand}</code>
            <button
              type="button"
              onClick={copyCmd}
              className="ml-3 shrink-0 px-2.5 py-1 rounded-sm bg-white/10 hover:bg-white/20 text-gray-200 text-xs flex items-center gap-1 transition-colors"
            >
              {copiedCmd ? <Check className="w-3 h-3 text-[#f7931a]" /> : <Copy className="w-3 h-3" />}
              <span>{copiedCmd ? t.installation.copiedBtn : t.installation.copyBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
