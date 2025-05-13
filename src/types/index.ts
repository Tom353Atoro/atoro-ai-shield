
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
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
}

export interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: Array<{
    question: string;
    answer: string | React.ReactNode;
  }>;
  badgeText?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
  avatarSrc?: string;
}
