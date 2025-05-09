
import React from 'react';
import ServiceCTASection from '@/components/shared/ServiceCTASection';
import { tokens } from '@/lib/designTokens';

const CTASection = () => {
  return (
    <ServiceCTASection
      title="Secure Your Foundation"
      description="Even if you're a startup, your security can be enterprise-grade. Let our experts help you strengthen your cyber defenses without slowing down your innovation."
      primaryButtonText="Book a Free Consultation"
      primaryButtonId="cyber-security-consultation-btn" 
      secondaryButtonText="Get a Free Security Checklist"
      secondaryButtonLink="/resources/security-assessment"
      backgroundClass={tokens.colors.bg.greenLight}
    />
  );
};

export default CTASection;
