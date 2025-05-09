
import React from 'react';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import { tokens } from '@/lib/designTokens';

const HeroSection = () => {
  return (
    <ServiceHeroSection
      title="Implementation & Certification"
      highlightText="ISO 27701"
      description="Extend your information security management system with robust privacy controls through 
      ISO 27701 implementation, demonstrating your commitment to protecting personal data."
      primaryButtonText="Get ISO 27701 Ready"
      primaryButtonLink="/contact"
      backgroundClass={tokens.gradients.sectionTeal}
      imageUrl="/lovable-uploads/9f3d1218-65c3-4355-b308-c4b8da789cc6.jpg"
      imageAlt="ISO 27701 certification illustration"
    />
  );
};

export default HeroSection;
