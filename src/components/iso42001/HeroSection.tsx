
import React from 'react';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import { tokens } from '@/lib/designTokens';

const HeroSection = () => {
  return (
    <ServiceHeroSection
      title="ISO 42001 Implementation"
      subtitle="Build trust in your AI systems with the world's first international standard for AI management. Our implementation services guide you through certification."
      primaryButtonText="Get ISO 42001 Ready"
      primaryButtonLink="#contact"
      backgroundClass="bg-gradient-to-br from-atoro-teal to-atoro-dark-teal"
    />
  );
};

export default HeroSection;
