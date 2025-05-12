import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TestimonialItem } from '@/types';

/**
 * Props for the TestimonialCard component
 * @property {TestimonialItem} testimonial - The testimonial data
 * @property {string} className - Optional additional CSS classes
 * @property {boolean} showRating - Whether to display the rating stars
 * @property {boolean} animated - Whether to apply hover animations
 */
export interface TestimonialCardProps {
  testimonial: TestimonialItem;
  className?: string;
  showRating?: boolean;
  animated?: boolean;
}

/**
 * TestimonialCard Component
 * 
 * A card component for displaying client testimonials with quote, author info, and star rating.
 * Used in testimonial sections across service pages.
 * 
 * @example
 * ```tsx
 * <TestimonialCard
 *   testimonial={{
 *     quote: "Atoro's team was excellent to work with...",
 *     author: "Sarah Johnson",
 *     title: "CTO",
 *     company: "TechCorp",
 *     avatarSrc: "/avatars/sarah.png",
 *     rating: 4.5
 *   }}
 *   showRating={true}
 * />
 * ```
 */
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className = '',
  showRating = true,
  animated = true,
}) => {
  const { quote, author, title, company, avatarSrc, rating } = testimonial;
  
  // Generate full and half stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-atoro-green text-atoro-green" />);
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-atoro-green" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="h-4 w-4 fill-atoro-green text-atoro-green" />
          </div>
        </div>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <Card className={`
      border border-gray-100 
      ${animated ? 'hover:border-atoro-green/30 hover:shadow-md transition-all' : ''} 
      overflow-hidden h-full
      ${className}
    `}>
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <blockquote className="text-gray-700 italic">"{quote}"</blockquote>
          </div>
          
          <div className="mt-auto pt-4 flex items-center">
            {avatarSrc && (
              <div className="mr-3">
                <img 
                  src={avatarSrc} 
                  alt={author} 
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            )}
            
            <div>
              <div className="font-semibold">{author}</div>
              <div className="text-gray-600 text-sm">{title}, {company}</div>
              
              {showRating && (
                <div className="flex mt-1 items-center">
                  {renderStars()}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard; 