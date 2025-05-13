
// Add TestimonialItem interface if it doesn't exist
export interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatarSrc?: string;
  rating: number;
}

// Add ClientLogoItem if it doesn't exist
export interface ClientLogoItem {
  id: number | string;
  name: string;
  imagePath: string;
  altText?: string;
  industries?: string[]; // Added industries property
}

// Add other types if needed
export interface SEOProps {
  pageTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  structuredData?: any; // Add structuredData property
}

export interface OverviewFeature {
  icon: any;
  title: string;
  description: string;
  iconColor?: string;
  iconBgColor?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  highlightColor?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

// Add missing section props
export interface FAQSectionProps {
  badgeText?: string;
  title: string;
  description?: string;
  faqs: FAQItem[];
  className?: string;
  id?: string;
}

export interface CTASectionProps {
  badgeText?: string;
  title: React.ReactNode;
  description?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
  className?: string;
  id?: string;
  imageUrl?: string;
  imageAlt?: string;
}
