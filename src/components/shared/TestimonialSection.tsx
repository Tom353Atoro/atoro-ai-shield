
import React, { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, StarHalf, StarOff, MessageCircle } from 'lucide-react';
import { useEmblaCarousel } from 'embla-carousel-react';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial, className }: { testimonial: Testimonial; className?: string }) => (
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

  // Render Grid Layout
  const GridLayout = () => {
    // Display 4 testimonials in a 2x2 grid on larger screens, stack on mobile
    const displayTestimonials = testimonials.slice(0, 4);
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={`${testimonial.author}-${index}`} 
            testimonial={testimonial} 
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

  // Render Carousel Layout with auto-scrolling
  const CarouselLayout = () => {
    return (
      <div className="relative">
        <div className="mb-8 max-w-4xl mx-auto" ref={emblaRef}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={`${testimonial.author}-${index}`} className="basis-full">
                <TestimonialCard 
                  testimonial={testimonial} 
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

  // Render Featured Layout (one main testimonial, others in a grid)
  const FeaturedLayout = () => {
    const [featured, ...rest] = testimonials;
    
    return (
      <div className="space-y-8">
        <div className="animate-fade-in">
          <TestimonialCard 
            testimonial={featured} 
            className={cn("border-atoro-blue/20 shadow-md", cardClassName)} 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rest.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard 
              key={`${testimonial.author}-${index}`} 
              testimonial={testimonial} 
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

  // Select layout based on variant
  const renderLayout = () => {
    switch (variant) {
      case 'carousel':
        return <CarouselLayout />;
      case 'featured':
        return <FeaturedLayout />;
      case 'grid':
      default:
        return <GridLayout />;
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
