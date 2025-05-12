// Export all UI components from a single entry point
export { default as SectionHeader } from './SectionHeader';
export { default as FeatureCard } from './FeatureCard';
export { default as BenefitItem } from './BenefitItem';
export { default as ProcessStep } from './ProcessStep';
export { default as TestimonialCard } from './TestimonialCard';

// Export types
export type { SectionHeaderProps } from './SectionHeader';
export type { FeatureCardProps } from './FeatureCard';
export type { BenefitItemProps } from './BenefitItem';
export type { ProcessStepProps } from './ProcessStep';
export type { TestimonialCardProps } from './TestimonialCard';

/**
 * Atoro AI Shield UI Component Library
 * 
 * This library provides a set of consistent UI components for use across the Atoro AI Shield website.
 * Each component is designed with flexibility in mind while maintaining consistent branding and user experience.
 * 
 * Common Components:
 * - SectionHeader: Badge + Title + Description pattern for section headers
 * - FeatureCard: Card with icon, title, and description for feature highlights
 * - BenefitItem: Title + Description with checkmark icon for benefit lists
 * - ProcessStep: Numbered step with title and description for process flows
 * - TestimonialCard: Client quote, author, and rating for testimonial sections
 * 
 * Usage:
 * import { SectionHeader, FeatureCard } from '@/components/ui';
 * 
 * <SectionHeader 
 *   badgeText="Our Approach" 
 *   title="Security Solutions"
 *   description="Enterprise-grade security for your business."
 * />
 */ 