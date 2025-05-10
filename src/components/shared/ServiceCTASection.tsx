
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { tokens } from '@/lib/designTokens';
import NeetoCalPopup from '@/components/shared/NeetoCalPopup';

interface ServiceCTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonId?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
  className?: string;
}

const ServiceCTASection: React.FC<ServiceCTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonId,
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink,
  backgroundClass = tokens.gradients.ctaLight,
  className,
}) => {
  return (
    <SectionWrapper
      title={title}
      description={description}
      className={className}
      bgColor={backgroundClass}
      spacingSize="default"
      containerSize="narrow"
      centered={true}
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" 
          id={primaryButtonId}
          asChild
        >
          <Link to={primaryButtonLink}>
            {primaryButtonText}
          </Link>
        </Button>
        
        {primaryButtonId && <NeetoCalPopup elementSelector={`#${primaryButtonId}`} />}
        
        {secondaryButtonText && secondaryButtonLink && (
          <Button 
            size="lg" 
            variant="outline" 
            className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5"
            asChild
          >
            <Link to={secondaryButtonLink}>
              {secondaryButtonText}
            </Link>
          </Button>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ServiceCTASection;
