import React from 'react';
import { Github, Linkedin, Facebook, Download, Code2, ExternalLink, ShieldCheck, Scale, FileText } from 'lucide-react';
import { LINKS } from '../data/siteData';
import { BrandLogo } from './BrandLogo';
import { SwissFlag } from './SwissFlag';
import { useLanguage } from '../context/LanguageContext';
import { useGitHubRelease } from '../hooks/useGitHubRelease';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { release } = useGitHubRelease();

  return (
    <footer id="main-footer" className="border-t border-black/5 dark:border-white/5 bg-slate-50 dark:bg-[#070707] text-slate-600 dark:text-gray-400 text-xs sm:text-sm">
      {/* Top CTA Banner */}
      <div className="border-b border-black/5 dark:border-white/5 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
              {t.footer.ctaTitle}
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm mt-1">
              {t.footer.ctaSubtitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              id="footer-download-btn"
              href={release.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0B1524] text-white hover:bg-[#f7931a] dark:bg-white dark:text-[#0B1524] dark:hover:bg-[#f7931a] dark:hover:text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>{t.footer.ctaDownloadBtn} ({release.version})</span>
            </a>
            <a
              id="footer-github-btn"
              href={LINKS.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-slate-700 dark:text-gray-300 font-medium text-xs sm:text-sm border border-black/10 dark:border-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{t.footer.ctaGithubBtn}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer 4-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand info (2 columns on lg) */}
        <div className="lg:col-span-2 space-y-3.5">
          <div className="flex items-center gap-2.5">
            <BrandLogo size="sm" />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
            {t.footer.brandDescription}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400 font-medium pt-1">
            <span className="inline-flex items-center gap-1.5">
              <SwissFlag size="xs" />
              <span>{t.footer.swissNorms}</span>
            </span>
            <span>•</span>
            <span>{t.footer.openSourceLicense}</span>
          </div>
        </div>

        {/* Column 1: Quick Navigation */}
        <div className="space-y-3">
          <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            {t.footer.navigationTitle}
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#avantages" className="hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors">
                {t.footer.navAdvantages}
              </a>
            </li>
            <li>
              <a href="#apercu-logiciel" className="hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors">
                {t.footer.navScreenshots}
              </a>
            </li>
            <li>
              <a href="#conformite-suisse" className="hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors">
                {t.footer.navCompliance}
              </a>
            </li>
            <li>
              <a href="#qr-facture" className="hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors">
                {t.footer.navQr}
              </a>
            </li>
            <li>
              <a href="#installation" className="hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors">
                {t.footer.navInstall}
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors">
                {t.footer.navFaq}
              </a>
            </li>
            <li>
              <a href="#comparatif" className="hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors">
                {t.footer.navComparison}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Legal & Compliance */}
        <div className="space-y-3">
          <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#f7931a]" />
            <span>{t.footer.legalTitle}</span>
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#conformite-suisse" className="hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors flex items-center gap-1">
                <span>{t.footer.legalSwissLaw}</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.fedlex.admin.ch/eli/cc/2022/491/fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors flex items-center gap-1 group"
              >
                <span>{t.footer.legalNlpdFedlex}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
              </a>
            </li>
            <li>
              <a
                href="https://www.six-group.com/fr/products-services/banking-services/standardization/payment-standards/qr-bill.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors flex items-center gap-1 group"
              >
                <span>{t.footer.legalSixNorms}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
              </a>
            </li>
            <li>
              <a
                href={LINKS.complianceRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors flex items-center gap-1 group"
              >
                <span>{t.footer.legalComplianceRepo}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social & Resources */}
        <div className="space-y-3">
          <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            {t.footer.communityTitle}
          </h4>
          <div className="space-y-2">
            {/* LinkedIn */}
            <a
              id="social-link-linkedin"
              href="https://www.linkedin.com/company/109814032/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400 hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors group"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>{t.footer.linkLinkedin}</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
            </a>

            {/* Facebook */}
            <a
              id="social-link-facebook"
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400 hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors group"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>{t.footer.linkFacebook}</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
            </a>

            {/* GitHub Profile */}
            <a
              id="social-link-github-profile"
              href={LINKS.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400 hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors group"
            >
              <Github className="w-3.5 h-3.5" />
              <span>{t.footer.linkGithubProfile}</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
            </a>

            {/* GitHub Repo */}
            <a
              id="social-link-github-repo"
              href={LINKS.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400 hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors group"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{t.footer.linkGithubRepo}</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
            </a>

            {/* GitHub Releases */}
            <a
              id="social-link-github-releases"
              href={LINKS.githubReleases}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400 hover:text-[#f7931a] dark:hover:text-[#f7931a] transition-colors group"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.footer.linkReleases}</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Subfooter */}
      <div className="border-t border-black/5 dark:border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} LedgerAlps.ch — {t.footer.rights}</p>
          <p className="flex items-center gap-1.5 font-medium text-[11px]">
            <span>{t.footer.designedForSwitzerland}</span>
            <SwissFlag size="xs" />
          </p>
        </div>
      </div>
    </footer>
  );
};
