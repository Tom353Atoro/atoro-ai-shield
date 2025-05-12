
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
  imageUrl: string;
  /** Optional badge text displayed above the title */
  badgeText?: string;
  /** Optional CSS class for background gradient/color */
  backgroundClass?: string;
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
