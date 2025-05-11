
import React from 'react';
import ServiceCTASection from '@/components/shared/ServiceCTASection';
import { tokens } from '@/lib/designTokens';

const CTASection = () => {
  return (
    <ServiceCTASection 
      title="Ready to Implement ISO 27701?"
      description="Whether you already have ISO 27001 or are starting fresh, our expert consultants can guide you through the entire ISO 27701 implementation and certification process."
      primaryButtonText="Schedule a Consultation"
      primaryButtonId="iso27701-consultation-btn"
      primaryButtonLink="/contact"
      secondaryButtonText="Download ISO 27701 Guide"
      secondaryButtonLink="/resources/iso-27701-guide"
      backgroundClass={tokens.colors.bg.greenLight}
    />
  );
};

export default CTASection;
