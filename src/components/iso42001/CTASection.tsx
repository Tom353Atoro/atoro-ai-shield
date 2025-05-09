
import React from 'react';
import ServiceCTA from '@/components/services/ServiceCTA';

const CTASection = () => {
  return (
    <ServiceCTA 
      title="Ready for ISO 42001 Certification?"
      description="Let our experts guide you through the implementation process from gap assessment to certification."
      primaryButtonText="Start ISO 42001 Implementation"
      primaryButtonId="iso42001-implementation-btn"
      secondaryButtonText="Download ISO 42001 Guide"
      secondaryButtonLink="/resources/iso42001-guide"
    />
  );
};

export default CTASection;
