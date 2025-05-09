
import React from 'react';
import ServiceFeaturedSection from '@/components/services/ServiceFeaturedSection';
import { tokens } from '@/lib/designTokens';

const FeaturedServiceSection = () => {
  const features = [
    "Comprehensive risk management framework", 
    "Documented AI development lifecycle", 
    "Ethical AI principles integration", 
    "Regulatory compliance alignment"
  ];

  const challenges = [
    { number: "1", text: "Keeping up with evolving AI regulations" },
    { number: "2", text: "Identifying and mitigating AI bias and risks" },
    { number: "3", text: "Implementing comprehensive AI governance frameworks" },
    { number: "4", text: "Balancing innovation with compliance requirements" }
  ];

  return (
    <ServiceFeaturedSection
      badgeText="Featured Service"
      title="ISO 42001 Implementation"
      description="Establish a certified AI management system that demonstrates your commitment to responsible AI. Our ISO 42001 implementation guidance helps you develop robust governance processes for your machine learning operations."
      features={features}
      challenges={challenges}
      ctaText="Learn More"
      ctaLink="/services/ai-governance/iso-42001"
      backgroundClass={tokens.gradients.sectionTeal}
    />
  );
};

export default FeaturedServiceSection;
