import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * ===========================
 * COMMON UI ELEMENTS
 * ===========================
 */

/**
 * Badge properties used across various UI components
 */
export interface BadgeProps {
  /** Text displayed inside the badge */
  text: string;
  /** Optional CSS class overrides */
  className?: string;
  /** Optional custom background color class */
  bgColorClass?: string;
  /** Optional custom text color class */
  textColorClass?: string;
}

/**
 * Standard button properties used across the site
 */
export interface ButtonProps {
  /** Text displayed on the button */
  text: string;
  /** URL the button navigates to when clicked */
  href: string;
  /** Whether this is a primary or secondary button */
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  /** Optional CSS class overrides */
  className?: string;
  /** Optional ARIA label for accessibility */
  ariaLabel?: string;
  /** Optional on click handler */
  onClick?: () => void;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Whether to open link in new tab */
  openInNewTab?: boolean;
}

/**
 * Common SEO metadata properties
 */
export interface SEOProps {
  /** Page title for browser tab and search engines */
  pageTitle: string;
  /** Meta description for search engine results */
  metaDescription: string;
  /** Optional canonical URL */
  canonicalUrl?: string;
  /** Optional OG image URL */
  ogImageUrl?: string;
  /** Optional structured data in JSON-LD format */
  structuredData?: Record<string, unknown>;
}

/**
 * ===========================
 * SERVICE PAGE TYPES
 * ===========================
 */

/**
 * Hero section properties used on service pages
 */
export interface ServiceHeroProps {
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
  imageUrl?: string;
  /** Optional badge text displayed above the title */
  badgeText?: string;
  /** Optional CSS class for background gradient/color */
  backgroundClass?: string;
}

/**
 * Client logo item used in logo showcase sections
 */
export interface ClientLogoItem {
  /** Unique identifier for the logo */
  id: number | string;
  /** Company/client name */
  name: string;
  /** Path to the logo image */
  imagePath: string;
  /** Alt text for accessibility */
  altText?: string;
  /** Industries the client operates in (for filtering) */
  industries?: string[];
}

/**
 * Standard service section wrapper props
 */
export interface ServiceSectionProps {
  /** Optional section ID for anchor links */
  id?: string;
  /** Optional CSS class overrides */
  className?: string;
  /** Section content */
  children: ReactNode;
}

/**
 * Testimonial item structure
 */
export interface TestimonialItem {
  /** The testimonial text */
  quote: string;
  /** Name of the person giving the testimonial */
  author: string;
  /** Job title of the testimonial author */
  title: string;
  /** Company name of the testimonial author */
  company: string;
  /** Rating out of 5 */
  rating: number;
  /** Optional path to the author's avatar image */
  avatarSrc?: string;
}

/**
 * Main service page properties
 */
export interface ServicePageProps {
  /** SEO metadata */
  seo: SEOProps;
  /** Hero section properties */
  heroProps: ServiceHeroProps;
  /** Whether to show client logos section */
  showClientLogos?: boolean;
  /** Client logos data */
  clientLogos?: ClientLogoItem[];
  /** Title for client logos section */
  clientLogosTitle?: string;
  /** Description for client logos section */
  clientLogosDescription?: string;
  /** Background color for client logos section */
  clientLogosBgColor?: string;
  /** Overview section content */
  overviewSection: ReactNode;
  /** Optional benefits section content */
  benefitsSection?: ReactNode;
  /** Optional process section content */
  processSection?: ReactNode;
  /** Optional additional sections */
  additionalSections?: ReactNode[];
  /** Optional testimonials data */
  testimonials?: TestimonialItem[];
  /** Title for testimonials section */
  testimonialsTitle?: string;
  /** Description for testimonials section */
  testimonialsDescription?: string;
  /** Badge text for testimonials section */
  testimonialsBadgeText?: string;
  /** Background color for testimonials section */
  testimonialsBgColor?: string;
  /** Optional FAQ section content */
  faqSection?: ReactNode;
  /** Optional CTA section content */
  ctaSection?: ReactNode;
}

/**
 * ===========================
 * SERVICE SECTION TYPES
 * ===========================
 */

/**
 * Overview feature item structure
 */
export interface OverviewFeature {
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
 * Overview section properties
 */
export interface OverviewSectionProps {
  /** Optional badge text displayed above the title */
  badgeText?: string;
  /** Section title */
  title: string;
  /** Main description text */
  description: string;
  /** Features to display */
  features: OverviewFeature[];
  /** Optional CSS class overrides */
  className?: string;
  /** Optional section ID for anchor links */
  id?: string;
}

/**
 * Benefit item structure
 */
export interface BenefitItem {
  /** Benefit title */
  title: string;
  /** Benefit description */
  description: string;
  /** Optional custom icon */
  icon?: ReactNode;
  /** Optional CSS class for title color */
  highlightColor?: string;
}

/**
 * Benefits section properties
 */
export interface BenefitsSectionProps {
  /** Optional badge text displayed above the title */
  badgeText?: string;
  /** Section title */
  title: string;
  /** Optional main description text */
  description?: string;
  /** Benefits to display */
  benefits: BenefitItem[];
  /** Optional CSS class overrides */
  className?: string;
  /** Optional section ID for anchor links */
  id?: string;
  /** Optional URL to image */
  imageUrl?: string;
  /** Optional alt text for image */
  imageAlt?: string;
  /** Optional CSS class for title highlight color */
  highlightColor?: string;
}

/**
 * Process step item structure
 */
export interface ProcessStep {
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Optional custom icon */
  icon?: ReactNode;
  /** Step number */
  stepNumber: number;
  /** Optional CSS class for title color */
  highlightColor?: string;
}

/**
 * Process section properties
 */
export interface ProcessSectionProps {
  /** Optional badge text displayed above the title */
  badgeText?: string;
  /** Section title */
  title: string;
  /** Optional main description text */
  description?: string;
  /** Process steps to display */
  steps: ProcessStep[];
  /** Optional CSS class overrides */
  className?: string;
  /** Optional section ID for anchor links */
  id?: string;
}

/**
 * FAQ item structure
 */
export interface FAQItem {
  /** Question text */
  question: string;
  /** Answer content, can be string or ReactNode */
  answer: ReactNode;
}

/**
 * FAQ section properties
 */
export interface FAQSectionProps {
  /** Optional badge text displayed above the title */
  badgeText?: string;
  /** Section title */
  title: string;
  /** Optional main description text */
  description?: string;
  /** FAQ items to display */
  faqs: FAQItem[];
  /** Optional CSS class overrides */
  className?: string;
  /** Optional section ID for anchor links */
  id?: string;
}

/**
 * CTA section properties
 */
export interface CTASectionProps {
  /** Optional badge text displayed above the title */
  badgeText?: string;
  /** Section title, can contain HTML/JSX */
  title: ReactNode;
  /** Optional description text */
  description?: string;
  /** Primary button text */
  primaryButtonText: string;
  /** Primary button link */
  primaryButtonLink: string;
  /** Optional secondary button text */
  secondaryButtonText?: string;
  /** Optional secondary button link */
  secondaryButtonLink?: string;
  /** Optional CSS class overrides */
  className?: string;
  /** Optional CSS class for background gradient/color */
  backgroundClass?: string;
  /** Optional section ID for anchor links */
  id?: string;
  /** Optional URL to image */
  imageUrl?: string;
  /** Optional alt text for image */
  imageAlt?: string;
}

/**
 * ===========================
 * ERROR HANDLING TYPES
 * ===========================
 */

/**
 * Error boundary component props
 */
export interface ErrorBoundaryProps {
  /** React node to render when an error occurs */
  fallback: ReactNode;
  /** Component tree that the error boundary wraps */
  children: ReactNode;
  /** Optional callback for error handling */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

/**
 * Error boundary state
 */
export interface ErrorBoundaryState {
  /** Whether an error has occurred */
  hasError: boolean;
  /** The error that occurred */
  error?: Error;
}

/**
 * ===========================
 * API RESPONSE TYPES
 * ===========================
 */

/**
 * Generic API response structure
 */
export interface ApiResponse<T> {
  /** Status of the API response */
  status: 'success' | 'error';
  /** Response data */
  data?: T;
  /** Error message if status is 'error' */
  error?: string;
  /** HTTP status code */
  statusCode: number;
}

/**
 * Contact form submission data
 */
export interface ContactFormData {
  /** Full name of the contact */
  name: string;
  /** Email address */
  email: string;
  /** Company name */
  company: string;
  /** Message content */
  message: string;
  /** How they heard about us */
  referralSource?: string;
  /** Service they're interested in */
  serviceInterest?: string;
} 