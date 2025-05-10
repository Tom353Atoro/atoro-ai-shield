
import React from 'react';
import { Logos3 } from '@/components/ui/logos3';

interface LogoItem {
  id: string | number;
  name: string;
  imagePath: string;
  alt?: string;
  width?: number;
  className?: string;
}

interface ClientLogosProps {
  logos: LogoItem[];
  title?: string;
  description?: string;
  className?: string;
  bgColor?: string;
  autoScroll?: boolean;
}

/**
 * ClientLogos Component
 * Modern auto-scrolling client logos carousel
 * 
 * @param logos - Array of logo objects with id, name, and image path
 * @param title - Optional title for the carousel section
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
