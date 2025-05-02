
import React from 'react';

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
  className = '',
}) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Optional title and description */}
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">{title}</h2>
        )}
        {description && (
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">{description}</p>
        )}

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center p-4 h-24">
              <img
                src={logo.imagePath}
                alt={logo.alt || `${logo.name} logo`}
                width={logo.width || 150}
                className="max-h-16 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
