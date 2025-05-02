
import React, { useState } from 'react';
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
              className="flex items-center justify-center h-24 bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
            >
              {!loadedImages[logo.id.toString()] && (
                <Skeleton className="w-full h-16 rounded-md" />
              )}
              <img
                src={logo.imagePath}
                alt={logo.alt || `${logo.name} logo`}
                className={cn(
                  "max-h-16 mx-auto object-contain transition-opacity duration-300",
                  loadedImages[logo.id.toString()] ? "opacity-100" : "opacity-0"
                )}
                style={{ 
                  width: logo.width ? `${logo.width}px` : 'auto',
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
