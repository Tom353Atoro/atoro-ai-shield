
import React from 'react';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import { tokens } from '@/lib/designTokens';

const HeroSection = () => {
  return (
    <ServiceHeroSection
      badgeText="ISO 27001 Implementation"
      title="Your ISO 27001 Certification"
      highlightText="Fast-track"
      description="Streamlined ISO 27001 implementation for SaaS companies. Get certified in half the time with our expert-led process."
      primaryButtonText="Start Your ISO 27001 Journey"
      primaryButtonLink="/contact"
      secondaryButtonText="Book a Consultation"
      secondaryButtonLink="/contact"
      backgroundClass={tokens.gradients.sectionBlue}
      imageUrl="/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png"
      imageAlt="ISO 27001 Certification Process"
    />
  );
};

export default HeroSection;
