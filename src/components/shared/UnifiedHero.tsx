
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { tokens } from '@/lib/designTokens';
import NeetoCalPopup from '@/components/shared/NeetoCalPopup';

export interface UnifiedHeroProps {
  // Core content
  title: string;
  subtitle: string;
  
  // Layout options
  layout?: 'centered' | 'two-column'; // centered (like homepage) or two-column (like service pages)
  
  // Cycling text options
  enableCyclingText?: boolean;
  cyclingWords?: string[];
  cyclingTextColor?: string; // CSS class for the cycling text color
  
  // Button options
  primaryButtonText?: string;
  primaryButtonLink?: string;
  primaryButtonId?: string; // For connecting with NeetoCal or other tools
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  
  // Design options
  backgroundClass?: string;
  imageUrl?: string;
  imageAlt?: string;
  badgeText?: string;
  
  // Text formatting
  highlightText?: string; // Text to highlight in the title
  highlightTextClassName?: string;
  titleClassName?: string;
  
  // Additional customization
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  
  // Event handlers
  primaryButtonOnClick?: () => void;
  secondaryButtonOnClick?: () => void;
}

const UnifiedHero: React.FC<UnifiedHeroProps> = ({
  // Core content
  title,
  subtitle,
  
  // Layout options
  layout = 'two-column',
  
  // Cycling text options
  enableCyclingText = false,
  cyclingWords = ["Cybersecurity", "Privacy", "AI Governance"],
  cyclingTextColor = "gradient-text",
  
  // Button options
  primaryButtonText,
  primaryButtonLink = '#',
  primaryButtonId,
  secondaryButtonText,
  secondaryButtonLink = '#',
  
  // Design options
  backgroundClass = tokens.gradients.heroDarkTeal,
  imageUrl,
  imageAlt = 'Hero illustration',
  badgeText,
  
  // Text formatting
  highlightText,
  highlightTextClassName = "text-atoro-green",
  titleClassName = 'mb-4 text-3xl md:text-4xl lg:text-5xl',
  
  // Additional customization
  className,
  contentClassName,
  imageClassName,
  
  // Event handlers
  primaryButtonOnClick,
  secondaryButtonOnClick,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');
  
  // Set up word cycling if enabled
  useEffect(() => {
    if (!enableCyclingText) return;
    
    const interval = setInterval(() => {
      // Start fade out
      setFadeState('fade-out');

      // After fade out completes, change word and fade in
      setTimeout(() => {
        setCurrentWordIndex(prev => (prev + 1) % cyclingWords.length);
        setFadeState('fade-in');
      }, 1000); // This duration should match the CSS transition duration
    }, 3000); // Total time each word is displayed

    return () => clearInterval(interval);
  }, [enableCyclingText, cyclingWords.length]);

  // Render title based on layout and options
  const renderTitle = () => {
    // For homepage-style layout with cycling words
    if (enableCyclingText) {
      return (
        <h1 className="mb-6">
          <span className={`${cyclingTextColor} transition-opacity duration-1000 ${fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'}`}>
            {cyclingWords[currentWordIndex]}
          </span>{' '}
          <span className="block mt-2">{title}</span>
        </h1>
      );
    }
    
    // For service page style with highlight
    if (highlightText) {
      return (
        <h1 className={titleClassName}>
          <span className={highlightTextClassName}>{highlightText}</span> {title}
        </h1>
      );
    }
    
    // Default title rendering
    return <h1 className={titleClassName}>{title}</h1>;
  };

  // Determine container content based on layout
  const renderContent = () => {
    // Centered layout (homepage style)
    if (layout === 'centered') {
      return (
        <div className="max-w-4xl mx-auto text-center">
          {badgeText && (
            <Badge className="mb-4 bg-atoro-green/20 text-atoro-green hover:bg-atoro-green/30">
              {badgeText}
            </Badge>
          )}
          
          {renderTitle()}
          
          <p className={cn("text-lg md:text-xl mb-8 md:mb-10", layout === 'centered' ? "mx-auto max-w-3xl" : "")}>
            {subtitle}
          </p>
          
          {(primaryButtonText || secondaryButtonText) && (
            <div className={cn(
              "flex gap-4",
              layout === 'centered' ? "justify-center flex-col sm:flex-row" : "flex-wrap"
            )}>
              {primaryButtonText && (
                <Button 
                  size="lg" 
                  className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green"
                  id={primaryButtonId}
                  onClick={primaryButtonOnClick}
                  asChild={!primaryButtonOnClick}
                >
                  {primaryButtonOnClick ? (
                    primaryButtonText
                  ) : (
                    <Link to={primaryButtonLink}>{primaryButtonText}</Link>
                  )}
                </Button>
              )}
              
              {secondaryButtonText && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className={layout === 'centered' ? "border-gray-700 text-gray-700 hover:bg-gray-100" : "border-white text-white hover:bg-white/10"}
                  onClick={secondaryButtonOnClick}
                  asChild={!secondaryButtonOnClick}
                >
                  {secondaryButtonOnClick ? (
                    secondaryButtonText
                  ) : (
                    <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
                  )}
                </Button>
              )}
            </div>
          )}
          
          {primaryButtonId && <NeetoCalPopup elementSelector={`#${primaryButtonId}`} />}
        </div>
      );
    }
    
    // Two-column layout (service page style)
    return (
      <div className={cn(
        "grid md:grid-cols-2 gap-8 items-center relative z-10",
        contentClassName
      )}>
        <div>
          {badgeText && (
            <Badge className="mb-4 bg-atoro-green/20 text-atoro-green hover:bg-atoro-green/30">
              {badgeText}
            </Badge>
          )}
          
          {renderTitle()}
          
          <p className="text-lg mb-6 opacity-90">
            {subtitle}
          </p>
          
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-wrap gap-3">
              {primaryButtonText && (
                <Button 
                  size="lg" 
                  className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green"
                  id={primaryButtonId}
                  onClick={primaryButtonOnClick}
                  asChild={!primaryButtonOnClick}
                >
                  {primaryButtonOnClick ? (
                    primaryButtonText
                  ) : (
                    <Link to={primaryButtonLink}>{primaryButtonText}</Link>
                  )}
                </Button>
              )}
              
              {secondaryButtonText && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  onClick={secondaryButtonOnClick}
                  asChild={!secondaryButtonOnClick}
                >
                  {secondaryButtonOnClick ? (
                    secondaryButtonText
                  ) : (
                    <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
                  )}
                </Button>
              )}
            </div>
          )}
          
          {primaryButtonId && <NeetoCalPopup elementSelector={`#${primaryButtonId}`} />}
        </div>
        
        {imageUrl && (
          <div className={cn("hidden md:block", imageClassName)}>
            <img 
              alt={imageAlt} 
              className="object-cover w-full rounded-lg" 
              src={imageUrl} 
            />
          </div>
        )}
      </div>
    );
  };

  // Determine section background classes
  const sectionClasses = cn(
    layout === 'centered' ? "pt-24 pb-16" : "pt-16 pb-8",
    layout === 'centered' ? "text-gray-900" : "text-white",
    "relative overflow-hidden",
    backgroundClass,
    className
  );

  return (
    <section className={sectionClasses}>
      {/* Background elements */}
      {layout === 'centered' ? (
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-atoro-light-blue/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-atoro-light-green/40 to-transparent rounded-full blur-3xl" />
        </div>
      ) : (
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-grid-white/10"></div>
        </div>
      )}
      
      {/* Hero content */}
      <Container>
        {renderContent()}
      </Container>
    </section>
  );
};

export default UnifiedHero;
