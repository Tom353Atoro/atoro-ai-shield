
import React from 'react';
import { CTASectionProps } from '@/types';
import ServiceSection from './ServiceSection';

const StandardCTASection: React.FC<CTASectionProps> = ({
  badgeText,
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className,
  backgroundClass,
  id,
  imageUrl,
  imageAlt
}) => {
  return (
    <ServiceSection id={id} className={`${backgroundClass || 'bg-gradient-to-br from-blue-600 to-blue-800'} text-white ${className || ''}`}>
      {/* CTA content would go here */}
      <div className="max-w-4xl mx-auto text-center">
        {badgeText && (
          <div className="inline-block px-3 py-1 bg-white bg-opacity-20 text-white rounded-full text-sm font-medium mb-4">
            {badgeText}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && <p className="text-xl opacity-90 mb-8">{description}</p>}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={primaryButtonLink}
            className="px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-md font-medium transition-colors"
          >
            {primaryButtonText}
          </a>
          {secondaryButtonText && (
            <a
              href={secondaryButtonLink || '#'}
              className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:bg-opacity-10 rounded-md font-medium transition-colors"
            >
              {secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </ServiceSection>
  );
};

export default StandardCTASection;
