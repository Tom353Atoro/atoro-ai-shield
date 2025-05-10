
import React from 'react';
import SharedClientSection from '@/components/shared/ClientSection';

const ClientSection = () => {
  return (
    <SharedClientSection 
      // Removing the title and description to avoid redundancy with the "Trusted by" text
      // that already appears in the LogoBanner component
      bgColor="bg-gray-50"
    />
  );
};

export default ClientSection;
