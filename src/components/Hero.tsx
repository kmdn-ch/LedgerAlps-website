import React from 'react';
import { Download, Github, CheckCircle2, ArrowDown, ExternalLink, RefreshCw } from 'lucide-react';
import { LINKS } from '../data/siteData';
import { SwissFlag } from './SwissFlag';
import { useLanguage } from '../context/LanguageContext';
import { useGitHubRelease } from '../hooks/useGitHubRelease';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { release } = useGitHubRelease();

  return (
    <section id="hero-section" className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Swiss Badge with Official Flag Icon */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f7931a]/10 text-[#f7931a] text-xs font-semibold rounded-full mb-6 border border-[#f7931a]/25">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f7931a] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#f7931a]"></span>
          </span>
          <span className="flex items-center gap-1.5 font-bold tracking-tight text-slate-900 dark:text-white">
            <SwissFlag size="xs" />
            <span>{t.hero.topBadgeTag}</span>
          </span>
          <span className="opacity-40">•</span>
          <span className="font-medium text-slate-700 dark:text-gray-300">{t.hero.topBadgeSub}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-950 dark:text-[#F9F9F9] leading-[1.1] mb-6">
          {t.hero.title1}<br />
          <span className="text-[#f7931a]">
            {t.hero.title2}
          </span>
        </h1>

        {/* Action Buttons */}
        <div id="telecharger" className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-6">
          {/* Primary Windows Download */}
          <a
            id="hero-download-windows-btn"
            href={release.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-8 py-3.5 text-sm font-semibold text-white bg-[#f7931a] hover:bg-[#d87c0e] rounded-md transition-all duration-200 group shadow-md shadow-[#f7931a]/15"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>{t.hero.downloadWindows}</span>
          </a>

          {/* GitHub Repository */}
          <a
            id="hero-github-btn"
            href={LINKS.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-700 dark:text-gray-300 bg-white dark:bg-[#0B1524] hover:bg-black/5 dark:hover:bg-white/5 border border-black/10 dark:border-white/10 rounded-md transition-all duration-200"
          >
            <Github className="w-4 h-4 text-slate-900 dark:text-white" />
            <span>{t.hero.sourceCode}</span>
            <ExternalLink className="w-3 h-3 opacity-50" />
          </a>
        </div>

        {/* Version label & Real-Time GitHub Synchronization Tag */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-mono mb-10">
          <span>{t.hero.osRequirements}</span>
          <span>•</span>
          <span className="text-slate-800 dark:text-gray-200 font-semibold">{release.version}</span>
          {release.isLiveSync && (
            <span className="inline-flex items-center gap-1 text-[11px] font-sans px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <RefreshCw className="w-2.5 h-2.5" />
              <span>{t.hero.liveSyncBadge}</span>
            </span>
          )}
        </div>

        {/* Micro-specs Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-black/5 dark:border-white/5 text-xs font-medium text-slate-600 dark:text-gray-400">
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-white dark:bg-[#0B1524] border border-black/5 dark:border-white/5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#f7931a] shrink-0" />
            <span>{t.hero.pillOnPremise}</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-white dark:bg-[#0B1524] border border-black/5 dark:border-white/5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#f7931a] shrink-0" />
            <span>{t.hero.pillSixNorms}</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-white dark:bg-[#0B1524] border border-black/5 dark:border-white/5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#f7931a] shrink-0" />
            <span>{t.hero.pillFree}</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-white dark:bg-[#0B1524] border border-black/5 dark:border-white/5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#f7931a] shrink-0" />
            <span>{t.hero.pillCompliance}</span>
          </div>
        </div>

        {/* Quick Link to Installation steps */}
        <div className="mt-6">
          <a
            href="#installation"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <span>{t.hero.quickInstallLink}</span>
            <ArrowDown className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

