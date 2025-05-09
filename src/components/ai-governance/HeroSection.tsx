
import React from 'react';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import { tokens } from '@/lib/designTokens';

const HeroSection = () => {
  return (
    <ServiceHeroSection
      title="with Confidence"
      highlightText="Innovate"
      description="ISO 42001 certification support and virtual AI Governance Officer (vAIGO) services that keep your machine-learning features ethical, secure, and compliant."
      primaryButtonText="AI Risk Assessment"
      primaryButtonLink="/contact"
      secondaryButtonText="Explore AI Services"
      secondaryButtonLink="/services/ai-governance"
      backgroundClass={tokens.gradients.heroDarkTeal}
      imageUrl="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg"
      imageAlt="AI governance visualization"
    />
  );
};

export default HeroSection;
