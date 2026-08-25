export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'security' | 'compliance' | 'general' | 'technical';
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface InstallationStep {
  step: number;
  title: string;
  description: string;
  tip?: string;
  commandOrDetail?: string;
  screenshotLabel?: string;
}
