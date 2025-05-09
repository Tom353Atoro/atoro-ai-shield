
import React from 'react';
import ServiceCTA from '@/components/services/ServiceCTA';

const CTASection = () => {
  return (
    <ServiceCTA 
      title="Ready to Assess Your AI Risk?"
      description="Get a complete evaluation of your AI systems and clear recommendations for improvement."
      primaryButtonText="Schedule an Assessment"
      primaryButtonId="ai-risk-assessment-btn"
    />
  );
};

export default CTASection;
