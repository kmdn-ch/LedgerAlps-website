import { FAQItem, FeatureItem, InstallationStep } from '../types';

export const LINKS = {
  githubRepo: 'https://github.com/kmdn-ch/LedgerAlps',
  githubReleases: 'https://github.com/kmdn-ch/LedgerAlps/releases',
  windowsInstaller: 'https://github.com/kmdn-ch/LedgerAlps/releases/latest',
  githubProfile: 'https://github.com/kmdn-ch',
  linkedin: 'https://www.linkedin.com/company/109814032/',
  facebook: 'https://www.facebook.com/profile.php?id=61579481109390',
  website: 'https://ledgeralps.ch',
  complianceRepo: 'https://github.com/kmdn-ch/LedgerAlps/tree/main/compliance',
};

export const APP_INFO = {
  name: 'LedgerAlps',
  domain: 'ledgeralps.ch',
  tagline: 'Facturation suisse moderne, 100% on-premise et libre.',
  version: 'v1.5.4',
  releaseDate: '2026',
  license: 'Open Source (MIT / Libre)',
  targetOs: 'Windows 10 / 11 (64-bit)',
  sha256Sample: 'a89c27f3948e9102c11438902b3780512803b9b47e246104e76a6b57912d098e',
};

export const FEATURES: FeatureItem[] = [
  {
    id: 'on-premise',
    title: '100% On-Premise & Hors-Ligne',
    subtitle: 'Vos finances restent chez vous',
    description: 'Aucun serveur externe, aucun cloud obligatoire, aucune dépendance internet. Votre base de données réside localement sur votre disque dur dans votre infrastructure.',
    iconName: 'HardDrive',
    badge: 'Confidentialité totale',
  },
  {
    id: 'swiss-qr',
    title: 'QR-Facture & Normes Suisses (SIX)',
    subtitle: 'Conformité bancaire SPS',
    description: 'Génération instantanée de QR-Factures conformes aux directives suisses SIX Interbank Clearing, QR-IBAN, référence structurée QR, et taux de TVA suisses actuels (8.1%, 2.6%, 3.8%).',
    iconName: 'QrCode',
    badge: 'Normes SIX',
  },
  {
    id: 'free-opensource',
    title: 'Gratuit & 100% Open Source',
    subtitle: 'Liberté absolue et pérennité',
    description: 'Pas de modèle freemium déguisé, pas de limite artificielle sur le nombre de factures ou de clients. Le code source est entièrement auditable et libre d\'accès.',
    iconName: 'Github',
    badge: 'Sans abonnement',
  },
  {
    id: 'ultra-lightweight',
    title: 'Ultra Réactif & Performance Pure',
    subtitle: 'Démarrage instantané & Zéro latence',
    description: 'Architecture ultra-rapide optimisée pour Windows. Consommation mémoire minimale, interface fluide et export PDF vectoriel haute définition pour vos impressions.',
    iconName: 'Cpu',
    badge: 'Haute Performance',
  },
];

export const INSTALLATION_STEPS: InstallationStep[] = [
  {
    step: 1,
    title: 'Téléchargez l\'installeur Windows officiel',
    description: 'Récupérez la dernière version stable compilée directement depuis le dépôt officiel GitHub Releases.',
    commandOrDetail: 'LedgerAlps-Setup-x64.exe',
    tip: 'Vérifiez que vous téléchargez bien depuis le dépôt vérifié kmdn-ch/LedgerAlps.',
  },
  {
    step: 2,
    title: 'Lancement & Windows SmartScreen',
    description: 'En tant que logiciel open-source sans certificat d\'entreprise payant de signature Microsoft, Windows peut afficher un écran préventif « Windows a protégé votre ordinateur ».',
    commandOrDetail: 'Cliquez sur « Informations complémentaires » puis sur « Exécuter quand même ».',
    tip: 'Ce comportement est standard pour les projets open source indépendants. Vous pouvez vérifier le code source ou le hash SHA256.',
  },
  {
    step: 3,
    title: 'Assistant d\'installation en 3 clics',
    description: 'L\'assistant configure l\'application en local sans installer aucun service d\'arrière-plan indésirable ni télémétrie.',
    commandOrDetail: 'Installation propre dans %LOCALAPPDATA%\\Programs\\LedgerAlps',
    tip: 'Des raccourcis sont créés sur votre bureau et dans le menu Démarrer.',
  },
  {
    step: 4,
    title: 'Configurez vos coordonnées et émettez votre 1ère facture',
    description: 'Renseignez vos coordonnées d\'entreprise suisse (Raison sociale, QR-IBAN, n° IDE/TVA) et générez vos factures avec QR code suisse aux normes SIX.',
    commandOrDetail: 'Prêt à l\'emploi en moins de 2 minutes chrono.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'security',
    question: 'Où sont stockées mes données financières et celles de mes clients ?',
    answer: 'Toutes vos données (clients, factures, articles, coordonnées bancaires, écritures) sont stockées exclusivement en local sur votre ordinateur dans un fichier de base de données local chiffré. Aucune donnée n\'est envoyée sur un serveur distant, aucun compte en ligne n\'est requis.',
  },
  {
    id: 'faq-2',
    category: 'compliance',
    question: 'LedgerAlps est-il conforme au Code des Obligations (CO) et à la nLPD ?',
    answer: 'Oui, parfaitement. Traçabilité complète des écritures, respect de la durée légale de conservation de dix ans (CO art. 958f), gestion simplifiée dite « carnet du lait » (CO art. 957 al. 2) et conformité totale avec la loi fédérale sur la protection des données (nLPD) grâce au stockage strictement local.',
  },
  {
    id: 'faq-3',
    category: 'compliance',
    question: 'Les QR-Factures générées sont-elles conformes aux normes suisses ?',
    answer: 'Absolument. Le module de génération respecte scrupuleusement les spécifications techniques suisses établies par SIX Interbank Clearing (normes SPS / Swiss Payment Standards), incluant la croix suisse au centre du QR, les montants en CHF ou EUR, les lignes de codage et les références QR-IBAN.',
  },
  {
    id: 'faq-4',
    category: 'general',
    question: 'Pourquoi la solution est-elle 100% gratuite ? Quel est le modèle économique ?',
    answer: 'LedgerAlps est un projet open-source développé par KMDN afin de proposer aux indépendants, artisans, petites entreprises (PME) et fiduciaires suisses une alternative locale, pérenne et sans frais récurrents face aux logiciels SaaS coûteux avec abonnement mensuel obligatoire.',
  },
  {
    id: 'faq-5',
    category: 'security',
    question: 'Comment effectuer une sauvegarde de mes factures et exports comptables ?',
    answer: 'Vous pouvez exporter votre base de données locale, générer les exports comptables (Journal général, Grand livre, Balance de vérification en CSV) ou sauvegarder le fichier sur une clé USB, un disque externe ou un NAS sécurisé directement depuis l\'onglet Sauvegardes.',
  },
  {
    id: 'faq-6',
    category: 'technical',
    question: 'Pourquoi Windows affiche-t-il une alerte SmartScreen au premier lancement ?',
    answer: 'Les certificats de signature de code annuels délivrés par Microsoft coûtent plusieurs centaines de francs suisses par an. Pour les projets open-source gratuits, Windows SmartScreen affiche un avertissement préventif standard. Il suffit de cliquer sur « Informations complémentaires » puis « Exécuter quand même ».',
  },
  {
    id: 'faq-7',
    category: 'technical',
    question: 'Y a-t-il de la télémétrie ou des traceurs dans l\'application ?',
    answer: 'Zéro télémétrie, zéro Google Analytics, zéro pistage publicitaire. Vous pouvez utiliser LedgerAlps sans aucune connexion réseau active (mode avion total).',
  },
];

export const COMPARISON_TABLE = [
  {
    feature: 'Stockage des données',
    ledgerAlps: '100% Local (On-Premise)',
    saas: 'Serveurs cloud distants',
    isPositive: true,
  },
  {
    feature: 'Coût d\'utilisation',
    ledgerAlps: '0 CHF / Gratuit à vie',
    saas: '20 à 60 CHF / mois récurrents',
    isPositive: true,
  },
  {
    feature: 'Fonctionnement hors-ligne',
    ledgerAlps: 'Oui, 100% fonctionnel sans internet',
    saas: 'Non, dépendance connexion & pannes',
    isPositive: true,
  },
  {
    feature: 'Conformité QR-Facture SIX & nLPD',
    ledgerAlps: 'Oui, nativement intégrée',
    saas: 'Oui, mais données hébergées',
    isPositive: true,
  },
  {
    feature: 'Code Source Auditable',
    ledgerAlps: '100% Open Source (GitHub)',
    saas: 'Boîte noire propriétaire fermée',
    isPositive: true,
  },
  {
    feature: 'Gestion CO & Carnet du lait',
    ledgerAlps: 'Inclus (CO art. 957 al. 2)',
    saas: 'Souvent en option payante',
    isPositive: true,
  },
];
