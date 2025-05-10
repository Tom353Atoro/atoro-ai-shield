import React from 'react';
import ClientLogos from '@/components/shared/ClientLogos';
import LogoBanner from '@/components/home/LogoBanner';
import SectionWrapper from '@/components/shared/SectionWrapper';

interface ClientSectionProps {
  title?: string;
  description?: string;
  className?: string;
  bgColor?: string;
  spacingSize?: 'default' | 'compact' | 'minimal' | 'spacious';
  logos?: Array<{
    id: string | number;
    name: string;
    imagePath: string;
    alt?: string;
    width?: number;
  }>;
}

const ClientSection: React.FC<ClientSectionProps> = ({
  title = "Trusted by Industry Leaders",
  description,
  className,
  bgColor = "bg-gray-50",
  spacingSize = "compact",
  logos
}) => {
  // If specific logos are provided, use ClientLogos directly
  if (logos) {
    return (
      <SectionWrapper 
        title={title}
        description={description}
        className={className} 
        bgColor={bgColor}
        spacingSize={spacingSize}
      >
        <ClientLogos 
          logos={logos}
          title={title}
          description={description}
          bgColor={bgColor}
        />
      </SectionWrapper>
    );
  }
  
  // Otherwise use the default LogoBanner with predefined logos
  return (
    <SectionWrapper 
      title={title}
      description={description}
      className={className} 
      bgColor={bgColor}
      spacingSize={spacingSize}
    >
      <LogoBanner />
    </SectionWrapper>
  );
};

export default ClientSection;
