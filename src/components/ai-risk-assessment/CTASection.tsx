
import React from 'react';
import ServiceCTASection from '@/components/shared/ServiceCTASection';

const CTASection = () => {
  return (
    <ServiceCTASection 
      title="Ready to Assess Your AI Risk?"
      description="Get a complete evaluation of your AI systems and clear recommendations for improvement."
      primaryButtonText="Schedule an Assessment"
      primaryButtonId="ai-risk-assessment-btn"
    />
  );
};

export default CTASection;
