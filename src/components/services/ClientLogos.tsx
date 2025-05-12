import React from 'react';
import { Logos3 } from '@/components/ui/logos3';
import { ClientLogoItem } from '@/types';

interface ClientLogosProps {
  logos: ClientLogoItem[];
  title?: string;
  description?: string;
  className?: string;
  bgColor?: string;
  autoScroll?: boolean;
}

/**
 * ClientLogos Component
 * Displays client logos with title and description
 * 
 * @param logos - Array of logo objects with id, name, and image path
 * @param title - Optional title for the logos section
 * @param description - Optional description text
 * @param className - Optional additional CSS classes
 * @param bgColor - Background color class (default: "bg-background")
 */
const ClientLogos: React.FC<ClientLogosProps> = ({
  logos,
  title,
  description,
  className = '',
  bgColor = "bg-background",
}) => {
  return (
    <Logos3
      title={title}
      description={description}
      logos={logos}
      className={className}
      bgColor={bgColor}
    />
  );
};

export default ClientLogos; 