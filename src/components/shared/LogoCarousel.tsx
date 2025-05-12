
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

// Define the type for each logo item
interface LogoItem {
  id: string | number;
  name: string;
  imagePath: string;
  alt?: string;
  width?: number;
}

// Props for the LogoCarousel component
interface LogoCarouselProps {
  logos: LogoItem[];
  title?: string;
  description?: string;
  className?: string;
  autoScroll?: boolean;
  scrollInterval?: number;
  showControls?: boolean;
  speed?: number;
}

/**
 * LogoCarousel Component
 * Displays logos in a scrolling carousel with grayscale hover effect
 * 
 * @param logos - Array of logo objects with id, name, and image path
 * @param title - Optional title for the carousel section
 * @param description - Optional description text
 * @param className - Optional additional CSS classes
 * @param autoScroll - Whether to auto-scroll the carousel (default: true)
 * @param scrollInterval - Time in ms between auto-scrolls (default: 1500)
 * @param showControls - Whether to show navigation controls (default: true)
 * @param speed - Transition speed in ms (default: 300)
 */
const LogoCarousel: React.FC<LogoCarouselProps> = ({
  logos,
  title,
  description,
  className = '',
  autoScroll = true,
  scrollInterval = 1500,
  showControls = true,
  speed = 300
}) => {
  const [loaded, setLoaded] = useState<{[key: string]: boolean}>({});

  // Handle image load events
  const handleImageLoad = (id: string | number) => {
    setLoaded(prev => ({ ...prev, [id.toString()]: true }));
  };

  return (
    <section className={cn('py-10', className)}>
      <div className="container mx-auto px-4">
        {/* Title and description */}
        {(title || description) && (
          <div className="text-center mb-10">
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {description && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>}
          </div>
        )}
        
        {/* Logo carousel */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {logos.map((logo) => (
              <CarouselItem 
                key={logo.id} 
                className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="flex items-center justify-center h-24 bg-gray-100 hover:bg-white p-4 rounded-lg shadow-sm transition-all duration-300">
                  {!loaded[logo.id.toString()] && (
                    <Skeleton className="w-full h-12 rounded-md" />
                  )}
                  <img
                    src={logo.imagePath}
                    alt={logo.alt || `${logo.name} logo`}
                    className={cn(
                      "max-h-12 mx-auto object-contain transition-all duration-300 filter grayscale hover:grayscale-0",
                      loaded[logo.id.toString()] ? "opacity-100" : "opacity-0"
                    )}
                    style={{ 
                      width: logo.width ? `${logo.width}px` : 'auto',
                    }}
                    onLoad={() => handleImageLoad(logo.id)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {showControls && (
            <>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default LogoCarousel;
