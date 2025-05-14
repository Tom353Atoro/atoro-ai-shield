
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Hero section properties used on service pages
 */
export interface HeroProps {
  /** Title displayed in the hero section, can contain HTML/JSX */
  title: ReactNode;
  /** Main description text */
  description: string;
  /** Primary action button text */
  primaryButtonText?: string;
  /** Primary action button link */
  primaryButtonLink?: string;
  /** Secondary action button text */
  secondaryButtonText?: string;
  /** Secondary action button link */
  secondaryButtonLink?: string;
  /** URL to the hero image */
  imageUrl?: string; // Made optional to fix errors
  /** Optional badge text displayed above the title */
  badgeText?: string;
  /** Optional CSS class for background gradient/color */
  backgroundClass?: string;
  /** Subtitle text for the hero section */
  subtitle?: string;
  /** @deprecated - Use imageUrl instead */
  imagePath?: string;
  /** @deprecated - Use primaryButtonText instead */
  ctaText?: string;
  /** @deprecated - Use primaryButtonLink instead */
  ctaLink?: string;
}

/**
 * Feature card properties for service overview sections
 */
export interface FeatureCardProps {
  /** Lucide icon component to display */
  icon: LucideIcon;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Optional CSS class for icon color */
  iconColor?: string;
  /** Optional CSS class for icon background */
  iconBgColor?: string;
}

/**
 * Process step properties for service process sections
 */
export interface ProcessStepProps {
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Optional step number */
  stepNumber?: number;
}

/**
 * FAQ item properties for service FAQ sections
 */
export interface FAQProps {
  /** Question text */
  question: string;
  /** Answer content */
  answer: string | ReactNode;
}

/**
 * Benefit item properties for service benefit sections
 */
export interface BenefitItemProps {
  /** Benefit title */
  title: string;
  /** Benefit description */
  description: string;
  /** Optional icon */
  icon?: ReactNode;
  /** Optional title color class */
  highlightColor?: string;
}

/**
 * Standard Service Page Props
 */
export interface StandardServicePageProps {
  /** SEO metadata */
  seo: {
    pageTitle: string;
    metaDescription: string;
    canonicalUrl?: string;
    ogImageUrl?: string;
  };
  /** Hero section props */
  heroProps: HeroProps;
  /** Client logos data */
  clientLogos?: Array<{
    id: number | string;
    name: string;
    imagePath: string;
    altText?: string;
  }>;
  /** Title for client logos section */
  clientLogosTitle?: string;
  /** Description for client logos section */
  clientLogosDescription?: string;
  /** Background color for client logos section */
  clientLogosBgColor?: string;
  /** Whether to show client logos section */
  showClientLogos?: boolean;
  /** Testimonials data */
  testimonials?: Array<{
    quote: string;
    author: string;
    title: string;
    company: string;
    rating: number;
    avatarSrc?: string;
  }>;
  /** Title for testimonials section */
  testimonialsTitle?: string;
  /** Description for testimonials section */
  testimonialsDescription?: string;
  /** Badge text for testimonials section */
  testimonialsBadgeText?: string;
  /** Background color for testimonials section */
  testimonialsBgColor?: string;
  /** Overview section component */
  overviewSection?: ReactNode;
  /** Benefits section component */
  benefitsSection?: ReactNode;
  /** Process section component */
  processSection?: ReactNode;
  /** FAQ section component */
  faqSection?: ReactNode;
  /** CTA section component */
  ctaSection?: ReactNode;
  /** Children components (service sections) */
  children: React.ReactNode;
}

/**
 * Standard Section Components Props
 */
export interface StandardSectionProps {
  /** Optional section ID for anchor links */
  id?: string;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Standard Overview Section Props
 */
export interface StandardOverviewSectionProps extends StandardSectionProps {
  /** Badge text displayed above section title */
  badgeText?: string;
  /** Section title */
  title: string | ReactNode;
  /** Section description */
  description: string;
  /** Features to display in this section */
  features: FeatureCardProps[];
}

/**
 * Standard Benefits Section Props
 */
export interface StandardBenefitsSectionProps extends StandardSectionProps {
  /** Badge text displayed above section title */
  badgeText?: string;
  /** Section title */
  title: string | ReactNode;
  /** Section description */
  description?: string;
  /** Benefits to display in this section */
  benefits: BenefitItemProps[];
  /** URL to image */
  imageUrl?: string;
  /** Alt text for image */
  imageAlt?: string;
  /** Custom highlight color for titles */
  highlightColor?: string;
}

/**
 * Standard Process Section Props
 */
export interface StandardProcessSectionProps extends StandardSectionProps {
  /** Badge text displayed above section title */
  badgeText?: string;
  /** Section title */
  title: string | ReactNode;
  /** Section description */
  description?: string;
  /** Process steps to display */
  steps: ProcessStepProps[];
}

/**
 * Standard CTA Section Props
 */
export interface StandardCTASectionProps extends StandardSectionProps {
  /** Badge text displayed above section title */
  badgeText?: string;
  /** Section title */
  title: ReactNode;
  /** Section description */
  description?: string;
  /** Primary button text */
  primaryButtonText: string;
  /** Primary button link */
  primaryButtonLink: string;
  /** Secondary button text */
  secondaryButtonText?: string;
  /** Secondary button link */
  secondaryButtonLink?: string;
  /** Background class for gradient/color */
  backgroundClass?: string;
  /** URL to image */
  imageUrl?: string;
  /** Alt text for image */
  imageAlt?: string;
}
