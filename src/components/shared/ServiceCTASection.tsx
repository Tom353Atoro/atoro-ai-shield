
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { CTASectionProps } from '@/types';

const ServiceCTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink,
  backgroundClass = "bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10",
  badgeText,
  className,
  id
}) => {
  return (
    <SectionWrapper
      id={id}
      className={className}
      bgColor={backgroundClass}
      spacingSize="md"
      containerSize="md"
      title={title}
      description={description}
      badgeText={badgeText}
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button 
          size="lg" 
          className="bg-atoro-teal text-white hover:bg-atoro-teal/90" 
          asChild
        >
          <Link to={primaryButtonLink}>{primaryButtonText}</Link>
        </Button>
        
        {secondaryButtonText && (
          <Button 
            size="lg" 
            variant="outline" 
            className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" 
            asChild
          >
            <Link to={secondaryButtonLink || "#"}>{secondaryButtonText}</Link>
          </Button>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ServiceCTASection;
