
import React from 'react';
import { Container } from '@/components/ui/Container';

interface LogoItem {
  id: string | number;
  name?: string;
  src: string;
  imagePath?: string;
  alt?: string;
  width?: number;
}

interface LogoGridProps {
  logos: LogoItem[];
  title?: string;
  description?: string;
  className?: string;
}

const LogoGrid: React.FC<LogoGridProps> = ({
  logos,
  title = "Trusted Certifications",
  description,
  className = "",
}) => {
  return (
    <section className={`py-12 ${className}`}>
      <Container>
        <div className="text-center mb-8">
          {title && <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>}
          {description && <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={logo.src || logo.imagePath} 
                alt={logo.alt || `${logo.name || 'Logo'}`}
                className="max-h-16 max-w-full object-contain"
                style={{ 
                  width: logo.width ? `${logo.width}px` : 'auto',
                }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LogoGrid;
