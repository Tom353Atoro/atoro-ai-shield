
import React from 'react';
import LogoBanner from '@/components/home/LogoBanner';
import SectionWrapper from '@/components/shared/SectionWrapper';

interface ClientSectionProps {
  title?: string;
  description?: string;
  className?: string;
  bgColor?: string;
  spacingSize?: 'default' | 'compact' | 'minimal' | 'spacious';
}

const ClientSection: React.FC<ClientSectionProps> = ({
  title = "Trusted by Industry Leaders",
  description,
  className,
  bgColor = "bg-gray-50",
  spacingSize = "compact"
}) => {
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
