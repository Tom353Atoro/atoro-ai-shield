
import React from 'react';
import ServiceFeaturedSection from '@/components/services/ServiceFeaturedSection';
import { tokens } from '@/lib/designTokens';

const FeaturedServiceSection = () => {
  const features = [
    "Regulatory representation", 
    "Compliance oversight", 
    "Staff training", 
    "Incident response"
  ];

  const challenges = [
    { number: "1", text: "Navigating complex and changing regulations" },
    { number: "2", text: "Meeting data subject access request obligations" },
    { number: "3", text: "Implementing privacy by design in development" },
    { number: "4", text: "Managing cross-border data transfers legally" }
  ];

  return (
    <ServiceFeaturedSection
      badgeText="Featured Service"
      title="Virtual Data Protection Officer"
      description="Get qualified privacy leadership without the cost of a full-time hire. Our vDPO service provides the expertise you need to navigate complex privacy regulations and protect your business."
      features={features}
      challenges={challenges}
      ctaText="Learn More"
      ctaLink="/services/data-privacy/vdpo"
      backgroundClass={tokens.gradients.sectionTeal}
    />
  );
};

export default FeaturedServiceSection;
