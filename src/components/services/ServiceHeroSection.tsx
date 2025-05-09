
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { tokens } from '@/lib/designTokens';

interface ServiceHeroSectionProps {
  badgeText?: string;
  title: string;
  highlightText?: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string; 
  secondaryButtonLink?: string;
  imageUrl?: string;
  imageAlt?: string;
  backgroundClass?: string;
  className?: string;
}

const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({
  badgeText,
  title,
  highlightText,
  description,
  primaryButtonText,
  primaryButtonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink = '#',
  imageUrl,
  imageAlt = 'Service illustration',
  backgroundClass = tokens.gradients.heroDarkTeal,
  className,
}) => {
  // Create title with highlight if provided
  const renderTitle = () => {
    if (highlightText) {
      return (
        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
          <span className="text-atoro-green">{highlightText}</span> {title}
        </h1>
      );
    }
    return <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">{title}</h1>;
  };

  return (
    <section className={cn("pt-16 pb-8 text-white relative overflow-hidden", backgroundClass, className)}>
      {/* Light overlay pattern for visibility */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-grid-white/10"></div>
      </div>
      
      {/* Hero content with improved contrast */}
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            {badgeText && (
              <Badge className="mb-4 bg-atoro-green/20 text-atoro-green hover:bg-atoro-green/30">
                {badgeText}
              </Badge>
            )}
            {renderTitle()}
            <p className="text-lg mb-6 opacity-90">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              {primaryButtonText && (
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                  <Link to={primaryButtonLink}>
                    {primaryButtonText}
                  </Link>
                </Button>
              )}
              {secondaryButtonText && (
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to={secondaryButtonLink}>
                    {secondaryButtonText}
                  </Link>
                </Button>
              )}
            </div>
          </div>
          {imageUrl && (
            <div className="hidden md:block">
              <img alt={imageAlt} className="object-cover w-full rounded-lg" src={imageUrl} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ServiceHeroSection;
