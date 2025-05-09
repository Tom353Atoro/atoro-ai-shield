
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundColorClass?: string;
  imageUrl?: string;
  imageAlt?: string;
  accentTextClassName?: string;
  accentText?: string;
  titleClassName?: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink = '#',
  secondaryButtonText,
  secondaryButtonLink = '#',
  backgroundColorClass = 'bg-gradient-to-br from-atoro-teal to-black',
  imageUrl,
  imageAlt = 'Service illustration',
  accentTextClassName = 'text-atoro-green',
  accentText,
  titleClassName = 'mb-4 text-3xl md:text-4xl lg:text-5xl'
}) => {
  // Function to add accent color to the first part of the title if accentText is provided
  const renderTitle = () => {
    if (accentText) {
      return (
        <h1 className={titleClassName}>
          <span className={accentTextClassName}>{accentText}</span> {title}
        </h1>
      );
    }
    return <h1 className={titleClassName}>{title}</h1>;
  };

  return (
    <section className={`pt-16 pb-8 ${backgroundColorClass} text-white relative overflow-hidden`}>
      {/* Light overlay pattern for visibility */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-grid-white/10"></div>
      </div>
      
      {/* Hero content */}
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            {renderTitle()}
            <p className="text-lg mb-6 opacity-90">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              {primaryButtonText && (
                <Button 
                  size="lg" 
                  className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green"
                  asChild
                >
                  <Link to={primaryButtonLink}>{primaryButtonText}</Link>
                </Button>
              )}
              
              {secondaryButtonText && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              )}
            </div>
          </div>
          
          {imageUrl && (
            <div className="hidden md:block">
              <img 
                alt={imageAlt} 
                className="object-cover w-full rounded-lg" 
                src={imageUrl} 
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ServiceHero;
