
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import NeetoCalPopup from '@/components/shared/NeetoCalPopup';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { tokens } from '@/lib/designTokens';

interface ServiceCTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonId?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
  className?: string;
  primaryButtonClassName?: string;
  secondaryButtonClassName?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonOnClick?: () => void;
  centered?: boolean;
  id?: string;
}

const ServiceCTASection: React.FC<ServiceCTASectionProps> = ({
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
  centered = true,
  id,
}) => {
  return (
    <SectionWrapper
      className={className}
      bgColor={backgroundClass}
      spacingSize="default"
      containerSize="narrow"
      centered={centered}
      id={id}
    >
      <div className={cn(
        "max-w-2xl",
        centered ? "mx-auto" : ""
      )}>
        <h2 className="mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">
          {description}
        </p>
        <div className={cn(
          "flex gap-4",
          centered ? "justify-center" : "justify-start",
          "flex-col sm:flex-row"
        )}>
          <Button 
            size="lg" 
            className={primaryButtonClassName} 
            id={primaryButtonId}
            onClick={primaryButtonOnClick}
          >
            {primaryButtonText}
          </Button>
          {primaryButtonId && (
            <NeetoCalPopup elementSelector={`#${primaryButtonId}`} />
          )}
          
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
      </div>
    </SectionWrapper>
  );
};

export default ServiceCTASection;
