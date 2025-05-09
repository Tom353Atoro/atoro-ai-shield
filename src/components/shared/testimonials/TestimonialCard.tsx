
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Star, StarHalf, StarOff, MessageCircle } from 'lucide-react';
import { Testimonial } from '../TestimonialSection';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  showRatings?: boolean;
  showAvatars?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  className,
  showRatings = false,
  showAvatars = true 
}) => {
  // Function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  // Function to render star ratings
  const renderStarRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-4 h-4 text-yellow-500" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="w-4 h-4 text-yellow-500" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarOff key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return <div className="flex gap-1">{stars}</div>;
  };

  return (
    <Card className={cn(
      "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full",
      "transition-all duration-300 hover:shadow-md hover:border-atoro-blue/20",
      className
    )}>
      <CardHeader className="pb-2 pt-2 relative">
        {showRatings && testimonial.rating && (
          <div className="mb-2">{renderStarRating(testimonial.rating)}</div>
        )}
        <div className="absolute top-4 right-2">
          <MessageCircle className="w-8 h-8 text-atoro-purple/10" />
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700 relative z-10 italic text-lg md:text-xl">
          "{testimonial.quote}"
        </p>
      </CardContent>
      
      <CardFooter className="flex items-center gap-3 pt-4 mt-auto">
        {showAvatars && (
          <Avatar className="h-14 w-14 border border-gray-200 ring-2 ring-atoro-blue/10">
            {testimonial.avatarSrc ? 
              <AvatarImage src={testimonial.avatarSrc} alt={testimonial.author} className="object-cover" /> : 
              <AvatarFallback className="bg-atoro-blue/10 text-atoro-teal">
                {getInitials(testimonial.author)}
              </AvatarFallback>
            }
          </Avatar>
        )}
        
        <div className="flex flex-col">
          <div className="font-medium text-base text-atoro-blue">{testimonial.author}</div>
          <div className="text-sm text-gray-600">
            {testimonial.title}
            {testimonial.company && `, ${testimonial.company}`}
          </div>
          {testimonial.date && (
            <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
