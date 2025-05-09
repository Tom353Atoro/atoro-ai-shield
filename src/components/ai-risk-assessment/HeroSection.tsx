
import React from 'react';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import { tokens } from '@/lib/designTokens';

const HeroSection = () => {
  return (
    <ServiceHeroSection
      title="AI Risk Assessment"
      description="Comprehensive evaluation of your AI systems for potential ethical, legal, and operational risks with actionable remediation plans."
      primaryButtonText="Schedule Assessment"
      primaryButtonLink="#contact"
      secondaryButtonText="Learn About ISO 42001"
      secondaryButtonLink="/services/ai-governance/iso-42001"
      backgroundClass={tokens.gradients.sectionTeal}
    />
  );
};

export default HeroSection;
