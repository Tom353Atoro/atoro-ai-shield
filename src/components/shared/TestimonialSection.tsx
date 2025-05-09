import React, { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import * as EmblaCarousel from "embla-carousel-react";
import TestimonialCard from './testimonials/TestimonialCard';
import GridLayout from './testimonials/GridLayout';
import CarouselLayout from './testimonials/CarouselLayout';
import FeaturedLayout from './testimonials/FeaturedLayout';

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
  company?: string;
  avatarSrc?: string;
  companyLogoSrc?: string;
  rating?: number; // out of 5
  date?: string; // Optional date field
};

export type TestimonialVariant = 'grid' | 'carousel' | 'featured';

export interface TestimonialSectionProps {
  testimonials: Testimonial[];
  title?: string;
  description?: string;
  variant?: TestimonialVariant;
  className?: string;
  cardClassName?: string;
  showRatings?: boolean;
  showAvatars?: boolean;
  bgColor?: string;
  sectionId?: string;
  autoScrollInterval?: number; // Time in ms between auto-scrolling
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
  title = 'Trusted by Innovative SaaS Leaders',
  description = 'See why fast-growing companies choose us to handle their security, privacy, and AI governance needs.',
  variant = 'grid',
  className,
  cardClassName,
  showRatings = false,
  showAvatars = true,
  bgColor = 'bg-gray-50',
  sectionId,
  autoScrollInterval = 5000, // Default to 5 seconds
}) => {
  // For auto-scrolling functionality
  const [emblaRef, emblaApi] = EmblaCarousel.emblaCarouselReact({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scrolling effect
  useEffect(() => {
    if (!emblaApi || variant !== 'carousel') return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoScrollInterval);

    // Update current index on scroll
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);

    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, autoScrollInterval, variant]);

  // Select layout based on variant
  const renderLayout = () => {
    switch (variant) {
      case 'carousel':
        return (
          <CarouselLayout 
            testimonials={testimonials}
            showRatings={showRatings}
            showAvatars={showAvatars}
            cardClassName={cardClassName}
            emblaRef={emblaRef}
            emblaApi={emblaApi}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        );
      case 'featured':
        return (
          <FeaturedLayout 
            testimonials={testimonials}
            showRatings={showRatings}
            showAvatars={showAvatars}
            cardClassName={cardClassName}
          />
        );
      case 'grid':
      default:
        return (
          <GridLayout 
            testimonials={testimonials}
            showRatings={showRatings}
            showAvatars={showAvatars}
            cardClassName={cardClassName}
          />
        );
    }
  };

  return (
    <section className={cn("py-20", bgColor, className)} id={sectionId}>
      <Container>
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && <h2 className="mb-4">{title}</h2>}
            {description && <p className="text-lg text-gray-700">{description}</p>}
          </div>
        )}
        
        {renderLayout()}
      </Container>
    </section>
  );
};

export default TestimonialSection;
