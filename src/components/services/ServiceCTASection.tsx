
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { tokens } from '@/lib/designTokens';
import { cn } from '@/lib/utils';
import { CTASectionProps } from '@/types';

const ServiceCTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink = "#",
  backgroundClass = tokens.gradients.ctaLight,
}) => {
  return (
    <section className={cn("py-12", backgroundClass)}>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-4 text-2xl md:text-3xl font-bold">{title}</h2>
          <p className="text-gray-700 mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceCTASection;
