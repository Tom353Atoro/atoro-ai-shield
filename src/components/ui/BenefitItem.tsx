import React from 'react';
import { CheckCircle } from 'lucide-react';

/**
 * Props for the BenefitItem component
 * @property {string} title - Benefit title
 * @property {string} description - Benefit description
 * @property {React.ReactNode} icon - Optional custom icon (defaults to CheckCircle)
 * @property {string} iconColor - CSS class for icon color (default: "text-atoro-green")
 * @property {string} className - Optional additional CSS classes
 * @property {boolean} vertical - Whether to display the benefit in vertical layout (title above description)
 */
export interface BenefitItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconColor?: string;
  className?: string;
  vertical?: boolean;
}

/**
 * BenefitItem Component
 * 
 * A component for displaying individual benefits with an icon, title, and description.
 * Used extensively in benefits sections across service pages.
 * 
 * @example
 * ```tsx
 * <BenefitItem
 *   title="Reduce Security Incidents"
 *   description="Proactively fix vulnerabilities before they can be exploited by attackers."
 * />
 * ```
 */
const BenefitItem: React.FC<BenefitItemProps> = ({
  title,
  description,
  icon,
  iconColor = 'text-atoro-green',
  className = '',
  vertical = false,
}) => {
  const Icon = icon || <CheckCircle className={`h-5 w-5 ${iconColor} flex-shrink-0 ${vertical ? '' : 'mt-0.5'}`} />;

  if (vertical) {
    return (
      <div className={`p-4 ${className}`}>
        <div className="flex items-center mb-2">
          {Icon}
          <h3 className="font-semibold ml-2">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      {Icon}
      <div>
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem; 