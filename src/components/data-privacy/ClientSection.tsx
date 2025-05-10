
import React from 'react';
import SharedClientSection from '@/components/shared/ClientSection';

const ClientSection = () => {
  return (
    <SharedClientSection 
      // Removing the title and description to avoid redundancy
      bgColor="bg-gray-50"
    />
  );
};

export default ClientSection;
