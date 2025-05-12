
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ServiceSection } from './StandardServicePage';

export interface StandardCTASectionProps {
  badgeText?: string;
  title: React.ReactNode;
  description?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
  backgroundClass?: string;
  id?: string;
  imageUrl?: string;
  imageAlt?: string;
}

/**
 * StandardCTASection - A standardized component for service call-to-action sections
 * 
 * This component provides a consistent layout for CTA sections at the end of service pages
 * with title, description, and action buttons.
 */
const StandardCTASection: React.FC<StandardCTASectionProps> = ({
  badgeText,
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className = "",
  backgroundClass = "bg-gradient-to-br from-atoro-teal to-atoro-blue",
  id = "cta",
  imageUrl,
  imageAlt = "CTA illustration"
}) => {
  return (
    <section id={id} className={`py-16 text-white relative overflow-hidden ${backgroundClass} ${className}`}>
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-grid-white/10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            {badgeText && (
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                {badgeText}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg mb-6 opacity-90 max-w-xl">
                {description}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              <a 
                href={primaryButtonLink}
                className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green px-6 py-3 rounded font-medium inline-block"
                aria-label={primaryButtonText}
              >
                {primaryButtonText}
              </a>
              
              {secondaryButtonText && secondaryButtonLink && (
                <a 
                  href={secondaryButtonLink}
                  className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded font-medium inline-block"
                  aria-label={secondaryButtonText}
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>
          
          {imageUrl && (
            <div className="hidden md:block">
              <img 
                src={imageUrl}
                alt={imageAlt}
                className="object-cover rounded-lg" 
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StandardCTASection; 
