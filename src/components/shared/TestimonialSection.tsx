
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, StarHalf, StarOff } from 'lucide-react';

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
  company?: string;
  avatarSrc?: string;
  companyLogoSrc?: string;
  rating?: number; // out of 5
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

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial, className }: { testimonial: Testimonial; className?: string }) => (
    <Card className={cn(
      "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full",
      "transition-all duration-300 hover:shadow-md",
      className
    )}>
      <CardHeader className="pb-2 pt-2">
        {showRatings && testimonial.rating && (
          <div className="mb-2">{renderStarRating(testimonial.rating)}</div>
        )}
        {/* Quote mark */}
        <div className="text-6xl font-serif text-atoro-blue/10 absolute top-4 left-4">"</div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700 relative z-10">
          {testimonial.quote}
        </p>
      </CardContent>
      
      <CardFooter className="flex items-center gap-3 pt-4 mt-auto">
        {showAvatars && (
          <Avatar className="h-10 w-10 border border-gray-200">
            {testimonial.avatarSrc && <AvatarImage src={testimonial.avatarSrc} alt={testimonial.author} />}
            <AvatarFallback className="bg-atoro-blue/10 text-atoro-teal">
              {getInitials(testimonial.author)}
            </AvatarFallback>
          </Avatar>
        )}
        
        <div className="flex flex-col">
          <div className="font-medium">{testimonial.author}</div>
          <div className="text-sm text-gray-500">
            {testimonial.title}
            {testimonial.company && `, ${testimonial.company}`}
          </div>
        </div>
      </CardFooter>
    </Card>
  );

  // Render Grid Layout
  const GridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard 
          key={`${testimonial.author}-${index}`} 
          testimonial={testimonial} 
          className={cn("animate-fade-in", { "delay-100": index === 1, "delay-200": index === 2 }, cardClassName)}
        />
      ))}
    </div>
  );

  // Render Carousel Layout
  const CarouselLayout = () => (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={`${testimonial.author}-${index}`} className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard testimonial={testimonial} className={cardClassName} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );

  // Render Featured Layout (one main testimonial, two smaller ones)
  const FeaturedLayout = () => {
    const [featured, ...rest] = testimonials;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-2 animate-fade-in">
          <TestimonialCard 
            testimonial={featured} 
            className={cn("border-atoro-blue/20", cardClassName)} 
          />
        </div>
        
        {rest.slice(0, 2).map((testimonial, index) => (
          <TestimonialCard 
            key={`${testimonial.author}-${index}`} 
            testimonial={testimonial} 
            className={cn("animate-fade-in", { "delay-100": index === 0, "delay-200": index === 1 }, cardClassName)}
          />
        ))}
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
