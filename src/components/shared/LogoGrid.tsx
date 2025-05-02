
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';

// Define the type for each logo item
interface LogoItem {
  id: string | number;
  name: string;
  imagePath: string;
  alt?: string;
  width?: number;
}

// Props for the LogoGrid component
interface LogoGridProps {
  logos: LogoItem[];
  title?: string;
  description?: string;
  className?: string;
}

/**
 * LogoGrid Component
 * Displays a responsive grid of logos
 * 
 * @param logos - Array of logo objects with id, name, and image path
 * @param title - Optional title for the logo section
 * @param description - Optional description text
 * @param className - Optional additional CSS classes
 */
const LogoGrid: React.FC<LogoGridProps> = ({
  logos,
  title,
  description,
  className = ''
}) => {
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});
  const isMobile = useIsMobile();

  const handleImageLoad = (id: string | number) => {
    setLoadedImages(prev => ({
      ...prev,
      [id.toString()]: true
    }));
  };

  return (
    <section className={cn('py-12', className)}>
      <div className="container mx-auto px-4">
        {/* Title and description */}
        {(title || description) && (
          <div className="text-center mb-10">
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {description && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>}
          </div>
        )}
        
        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="flex items-center justify-center h-32 bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
            >
              {!loadedImages[logo.id.toString()] && (
                <Skeleton className="w-full h-20 rounded-md" />
              )}
              <img
                src={logo.imagePath}
                alt={logo.alt || `${logo.name} logo`}
                className={cn(
                  "object-contain transition-opacity duration-300",
                  loadedImages[logo.id.toString()] ? "opacity-100" : "opacity-0"
                )}
                style={{ 
                  width: logo.width ? `${isMobile ? logo.width * 0.9 : logo.width * 1.3}px` : 'auto',
                  maxHeight: isMobile ? '60px' : '80px'
                }}
                onLoad={() => handleImageLoad(logo.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
