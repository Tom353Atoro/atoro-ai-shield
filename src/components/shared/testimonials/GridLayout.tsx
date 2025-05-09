
import React from 'react';
import { cn } from '@/lib/utils';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from '../TestimonialSection';

interface GridLayoutProps {
  testimonials: Testimonial[];
  showRatings?: boolean;
  showAvatars?: boolean;
  cardClassName?: string;
}

const GridLayout: React.FC<GridLayoutProps> = ({ 
  testimonials, 
  showRatings = false,
  showAvatars = true,
  cardClassName 
}) => {
  // Display 4 testimonials in a 2x2 grid on larger screens, stack on mobile
  const displayTestimonials = testimonials.slice(0, 4);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {displayTestimonials.map((testimonial, index) => (
        <TestimonialCard 
          key={`${testimonial.author}-${index}`} 
          testimonial={testimonial}
          showRatings={showRatings}
          showAvatars={showAvatars}
          className={cn(
            "animate-fade-in", 
            { 
              "delay-100": index === 1, 
              "delay-200": index === 2,
              "delay-300": index === 3  
            }, 
            cardClassName
          )}
        />
      ))}
    </div>
  );
};

export default GridLayout;
