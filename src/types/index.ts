
export interface ClientLogoItem {
  id: string | number;
  name: string;
  imagePath: string;
  altText?: string;
  industries?: string[];
}

export interface SEOProps {
  pageTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  structuredData?: Record<string, any>;
}

export interface CTASectionProps {
  title: string | React.ReactNode;
  description: string;
  primaryButtonText: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
  badgeText?: string;
  className?: string;
  id?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface FAQSectionProps {
  title?: string | React.ReactNode;
  description?: string;
  faqs: Array<FAQItem>;
  badgeText?: string;
  className?: string;
  id?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
  avatarSrc?: string;
}

// Add missing type definitions
export interface BenefitItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  highlightColor?: string;
}

export interface OverviewFeature {
  icon: React.ComponentType;
  title: string;
  description: string;
  iconColor?: string;
  iconBgColor?: string;
}

export interface ProcessStep {
  stepNumber?: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

// Additional type for UnifiedHero
export interface UnifiedHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
  badgeText?: string;
  backgroundClass?: string;
}

// Export types from service-page.ts to prevent duplication
export * from './service-page';
