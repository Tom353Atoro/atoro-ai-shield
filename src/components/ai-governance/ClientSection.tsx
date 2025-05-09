
import React from 'react';
import LogoBanner from '@/components/home/LogoBanner';
import SectionWrapper from '@/components/shared/SectionWrapper';

const ClientSection = () => {
  return (
    <SectionWrapper 
      className="py-12" 
      bgColor="bg-gray-50"
      spacingSize="compact"
    >
      <LogoBanner />
    </SectionWrapper>
  );
};

export default ClientSection;
