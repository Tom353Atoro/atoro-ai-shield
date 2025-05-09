
import React from 'react';
import { cn } from '@/lib/utils';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from '../TestimonialSection';
import * as EmblaCarousel from "embla-carousel-react";
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';

interface CarouselLayoutProps {
  testimonials: Testimonial[];
  showRatings?: boolean;
  showAvatars?: boolean;
  cardClassName?: string;
  autoScrollInterval?: number;
  emblaApi?: any;
  emblaRef?: any;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CarouselLayout: React.FC<CarouselLayoutProps> = ({ 
  testimonials, 
  showRatings = false,
  showAvatars = true,
  cardClassName,
  emblaRef,
  emblaApi,
  currentIndex,
  setCurrentIndex
}) => {
  return (
    <div className="relative">
      <div className="mb-8 max-w-4xl mx-auto" ref={emblaRef}>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={`${testimonial.author}-${index}`} className="basis-full">
              <TestimonialCard 
                testimonial={testimonial}
                showRatings={showRatings}
                showAvatars={showAvatars}
                className={cn(cardClassName, "mx-auto max-w-3xl")} 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      
      {/* Custom indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={`indicator-${index}`}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentIndex === index ? "bg-atoro-blue scale-110" : "bg-gray-300"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselLayout;
