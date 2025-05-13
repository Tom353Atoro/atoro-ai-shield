
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
}

// Add other types if needed
export interface SEOProps {
  pageTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
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
