
import React from 'react';
import ServiceFeaturedSection from '@/components/services/ServiceFeaturedSection';
import { tokens } from '@/lib/designTokens';

const BenefitsSection = () => {
  const features = [
    "Demonstrate compliance with multiple privacy regulations (GDPR, CCPA, etc.)",
    "Build upon existing ISO 27001 investment and infrastructure",
    "Improve stakeholder trust and confidence in your privacy practices",
    "Streamline compliance efforts across multiple regulations",
    "Reduce the risk of privacy breaches and associated penalties",
    "Create competitive differentiation in privacy-conscious markets"
  ];

  const challenges = [
    { number: "1", text: "Months 1-2: Gap Analysis - Assessment of existing privacy controls against ISO 27701" },
    { number: "2", text: "Months 3-5: Implementation - Development of policies, procedures, and technical controls" },
    { number: "3", text: "Month 6: Internal Audit - Verification of compliance through internal assessments" },
    { number: "4", text: "Months 7-8: Certification Audit - External auditor assessment and certification" }
  ];

  return (
    <ServiceFeaturedSection
      title="Why Implement ISO 27701?"
      description="ISO 27701 certification offers numerous advantages for organizations handling personal data."
      features={features}
      challenges={challenges}
      ctaText="Start Your ISO 27701 Journey"
      ctaLink="/contact"
      backgroundClass={tokens.gradients.sectionTeal}
      challengesSectionTitle="ISO 27701 Implementation Timeline"
    />
  );
};

export default BenefitsSection;
