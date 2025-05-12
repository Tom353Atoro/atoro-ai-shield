
import React from 'react';

interface ServiceSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * ServiceSection Component
 * 
 * A standard wrapper for service page sections with consistent styling
 */
const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  className = '',
  children
}) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default ServiceSection;
