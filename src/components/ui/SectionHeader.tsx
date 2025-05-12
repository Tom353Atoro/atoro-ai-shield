import React from 'react';
import { Badge } from '@/components/ui/badge';

/**
 * Props for the SectionHeader component
 * @property {string} badgeText - Text to display in the badge
 * @property {string} title - Section title
 * @property {string} description - Optional section description
 * @property {string} className - Optional additional CSS classes
 * @property {string} badgeClassName - Optional additional CSS classes for the badge
 * @property {string} titleClassName - Optional additional CSS classes for the title
 * @property {string} descriptionClassName - Optional additional CSS classes for the description
 * @property {string} textAlign - Optional text alignment (center, left, right)
 */
export interface SectionHeaderProps {
  badgeText: string;
  title: string | React.ReactNode;
  description?: string;
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  textAlign?: 'center' | 'left' | 'right';
}

/**
 * SectionHeader Component
 * 
 * A consistent header for sections that includes a badge, title, and optional description.
 * Used in overview, benefits, process, and other sections across service pages.
 * 
 * @example
 * ```tsx
 * <SectionHeader 
 *   badgeText="Our Approach" 
 *   title="Comprehensive Security Testing"
 *   description="Our penetration tests go beyond automated scanning."
 * />
 * ```
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  title,
  description,
  className = '',
  badgeClassName = 'bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20',
  titleClassName = '',
  descriptionClassName = 'text-gray-700',
  textAlign = 'center'
}) => {
  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  };

  return (
    <div className={`mb-10 ${alignmentClasses[textAlign]} ${className}`}>
      <Badge className={`mb-3 ${badgeClassName}`}>{badgeText}</Badge>
      <h2 className={`mb-3 ${titleClassName}`}>{title}</h2>
      {description && (
        <p className={`${descriptionClassName} ${textAlign === 'center' ? 'max-w-2xl mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader; 