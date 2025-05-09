
import React, { useEffect, useState, useRef } from 'react';
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
 * Displays logos in a scrolling carousel
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
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle image load events
  const handleImageLoad = (id: string | number) => {
    setLoaded(prev => ({ ...prev, [id.toString()]: true }));
  };

  // Set up auto-scroll functionality
  useEffect(() => {
    if (!carouselRef.current || !autoScroll) return;
    
    const interval = setInterval(() => {
      const scrollAmount = 200; // Adjust based on your item width
      if (carouselRef.current) {
        const scrollContainer = carouselRef.current.querySelector('.carousel-content');
        if (scrollContainer) {
          scrollContainer.scrollLeft += scrollAmount;
          
          // Reset to beginning when reached the end
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          if (scrollContainer.scrollLeft >= maxScroll - 10) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }
    }, scrollInterval);
    
    return () => clearInterval(interval);
  }, [autoScroll, scrollInterval]);

  const carouselOptions = {
    align: "start" as const, // Use 'as const' to specify this is a literal type
    loop: true,
    dragFree: true,
    speed: speed
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
        <Carousel 
          ref={carouselRef}
          className="w-full"
        >
          <CarouselContent className="-ml-4 carousel-content">
            {logos.map((logo) => (
              <CarouselItem 
                key={logo.id} 
                className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="flex items-center justify-center h-20 bg-white p-4 rounded-lg">
                  {!loaded[logo.id.toString()] && (
                    <Skeleton className="w-full h-12 rounded-md" />
                  )}
                  <img
                    src={logo.imagePath}
                    alt={logo.alt || `${logo.name} logo`}
                    className={cn(
                      "max-h-12 mx-auto object-contain transition-opacity duration-300",
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
