
import React from 'react';
import { cn } from '@/lib/utils';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from '../TestimonialSection';

interface FeaturedLayoutProps {
  testimonials: Testimonial[];
  showRatings?: boolean;
  showAvatars?: boolean;
  cardClassName?: string;
}

const FeaturedLayout: React.FC<FeaturedLayoutProps> = ({ 
  testimonials, 
  showRatings = false,
  showAvatars = true,
  cardClassName 
}) => {
  const [featured, ...rest] = testimonials;
  
  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <TestimonialCard 
          testimonial={featured}
          showRatings={showRatings}
          showAvatars={showAvatars} 
          className={cn("border-atoro-blue/20 shadow-md", cardClassName)} 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rest.slice(0, 3).map((testimonial, index) => (
          <TestimonialCard 
            key={`${testimonial.author}-${index}`} 
            testimonial={testimonial}
            showRatings={showRatings}
            showAvatars={showAvatars}
            className={cn(
              "animate-fade-in", 
              { "delay-100": index === 0, "delay-200": index === 1, "delay-300": index === 2 }, 
              cardClassName
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedLayout;
