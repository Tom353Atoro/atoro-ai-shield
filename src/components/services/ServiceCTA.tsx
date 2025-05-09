
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NeetoCalPopup from '@/components/shared/NeetoCalPopup';

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonId: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonId,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundClass = "bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10"
}) => {
  return (
    <section className={`py-12 ${backgroundClass}`}>
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">{title}</h2>
          <p className="text-gray-700 mb-6">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" 
              id={primaryButtonId}
            >
              {primaryButtonText}
            </Button>
            <NeetoCalPopup elementSelector={`#${primaryButtonId}`} />
            
            {secondaryButtonText && secondaryButtonLink && (
              <Button 
                size="lg" 
                variant="outline" 
                className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" 
                asChild
              >
                <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceCTA;
