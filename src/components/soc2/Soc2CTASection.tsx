
import React from 'react';
import ServiceCTASection from '@/components/shared/ServiceCTASection';

const Soc2CTASection = () => {
  return (
    <ServiceCTASection
      title="Ready to Achieve SOC 2 Compliance?"
      description="Contact us today to learn how our SOC 2 service can help you streamline the compliance process and build trust with your customers."
      primaryButtonText="Get a Free Consultation"
      primaryButtonId="soc2-consultation-btn"
      secondaryButtonText="Download SOC 2 Checklist"
      secondaryButtonLink="/resources/soc2-checklist"
      backgroundClass="bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10"
    />
  );
};

export default Soc2CTASection;
