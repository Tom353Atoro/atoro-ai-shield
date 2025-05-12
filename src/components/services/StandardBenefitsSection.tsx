import React, { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { ServiceSection } from './StandardServicePage';

export interface BenefitItem {
  title: string;
  description: string;
  icon?: ReactNode;
  highlightColor?: string;
}

export interface StandardBenefitsSectionProps {
  badgeText?: string;
  title: string;
  description?: string;
  benefits: BenefitItem[];
  className?: string;
  id?: string;
  imageUrl?: string;
  imageAlt?: string;
  highlightColor?: string;
}

/**
 * StandardBenefitsSection - A standardized component for service benefits sections
 * 
 * This component provides a consistent layout for showing the benefits of a service
 * with a list of features and an optional image.
 */
const StandardBenefitsSection: React.FC<StandardBenefitsSectionProps> = ({
  badgeText,
  title,
  description,
  benefits,
  className = "bg-gray-50",
  id = "benefits",
  imageUrl,
  imageAlt = "Service benefits illustration",
  highlightColor = "text-atoro-green",
}) => {
  return (
    <ServiceSection id={id} className={`py-16 ${className}`}>
      <div className="flex flex-col items-center text-center mb-10">
        {badgeText && (
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">
            {badgeText}
          </Badge>
        )}
        <h2 className="mb-3">{title}</h2>
        {description && (
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            {description}
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={`benefit-${index}`} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  {benefit.icon || <CheckCircle className={highlightColor} size={20} />}
                </div>
                <div>
                  <h3 className={`font-semibold text-lg mb-1 ${benefit.highlightColor || highlightColor}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {imageUrl && (
          <div className="order-1 md:order-2">
            <img 
              src={imageUrl} 
              alt={imageAlt}
              className="rounded-lg w-full shadow-lg object-cover" 
              loading="lazy"
            />
          </div>
        )}
      </div>
    </ServiceSection>
  );
};

export default StandardBenefitsSection; 