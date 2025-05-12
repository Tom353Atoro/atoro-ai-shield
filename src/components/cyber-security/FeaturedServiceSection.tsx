import React from 'react';
import ServiceFeaturedSection from '@/components/services/ServiceFeaturedSection';
import { tokens } from '@/lib/designTokens';

const FeaturedServiceSection = () => {
  // Featured service data
  const featuredServiceFeatures = [
    "On-demand security expertise", 
    "Continuous threat monitoring", 
    "Regular security assessments", 
    "Incident response support"
  ];

  const featuredServiceChallenges = [
    { number: "1", text: "Keeping up with evolving security threats" },
    { number: "2", text: "Meeting enterprise client security requirements" },
    { number: "3", text: "Balancing security with development velocity" },
    { number: "4", text: "Achieving compliance without dedicated resources" }
  ];

  return (
    <ServiceFeaturedSection
      badgeText="Featured Service"
      title="Security Team as a Service"
      description="Get a dedicated virtual security department without the overhead of building an in-house team. Our experts become an extension of your organization, providing ongoing security oversight and guidance."
      features={featuredServiceFeatures}
      challenges={featuredServiceChallenges}
      ctaText="Learn More"
      ctaLink="/services/cyber-security/security-team-aas"
      backgroundClass={tokens.gradients.sectionTeal}
    />
  );
};

export default FeaturedServiceSection;
