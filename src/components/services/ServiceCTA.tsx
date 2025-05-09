
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import NeetoCalPopup from '@/components/shared/NeetoCalPopup';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { tokens } from '@/lib/designTokens';

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonId: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
  className?: string;
  primaryButtonClassName?: string;
  secondaryButtonClassName?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonOnClick?: () => void;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonId,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundClass = tokens.gradients.ctaLight,
  className,
  primaryButtonClassName = "bg-atoro-green text-atoro-teal hover:bg-atoro-light-green",
  secondaryButtonClassName = "border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5",
  primaryButtonOnClick,
  secondaryButtonOnClick,
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
          className={primaryButtonClassName} 
          id={primaryButtonId}
          onClick={primaryButtonOnClick}
        >
          {primaryButtonText}
        </Button>
        <NeetoCalPopup elementSelector={`#${primaryButtonId}`} />
        
        {secondaryButtonText && secondaryButtonLink && (
          <Button 
            size="lg" 
            variant="outline" 
            className={secondaryButtonClassName} 
            asChild={!secondaryButtonOnClick}
            onClick={secondaryButtonOnClick}
          >
            {secondaryButtonOnClick ? (
              secondaryButtonText
            ) : (
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            )}
          </Button>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ServiceCTA;
