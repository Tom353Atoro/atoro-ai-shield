
import React from 'react';
import ServiceCTASection from '@/components/shared/ServiceCTASection';

const ISO42001CTASection = () => {
  return (
    <ServiceCTASection
      title="Ready for ISO 42001 Certification?"
      description="Let our experts guide you through the implementation process from gap assessment to certification."
      primaryButtonText="Start ISO 42001 Implementation"
      primaryButtonId="iso42001-implementation-btn"
      secondaryButtonText="Download ISO 42001 Guide"
      secondaryButtonLink="/resources/iso42001-guide"
      backgroundClass="bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10"
    />
  );
};

export default ISO42001CTASection;
