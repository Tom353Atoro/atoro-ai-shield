
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import NeetoCalPopup from '@/components/shared/NeetoCalPopup';

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonId: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonsClassName?: string;
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
  backgroundClass = "bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10",
  className = "py-12",
  contentClassName = "text-center max-w-2xl mx-auto",
  titleClassName = "mb-4",
  descriptionClassName = "text-gray-700 mb-6",
  buttonsClassName = "flex flex-col sm:flex-row gap-4 justify-center",
  primaryButtonClassName = "bg-atoro-green text-atoro-teal hover:bg-atoro-light-green",
  secondaryButtonClassName = "border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5",
  primaryButtonOnClick,
  secondaryButtonOnClick,
}) => {
  return (
    <section className={cn(className, backgroundClass)}>
      <Container>
        <div className={contentClassName}>
          <h2 className={titleClassName}>{title}</h2>
          <p className={descriptionClassName}>
            {description}
          </p>
          <div className={buttonsClassName}>
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
        </div>
      </Container>
    </section>
  );
};

export default ServiceCTA;
