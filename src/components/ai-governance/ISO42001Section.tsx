
import React from 'react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceProcessList from '@/components/services/ServiceProcessList';
import { tokens } from '@/lib/designTokens';

const ISO42001Section = () => {
  const implementationSteps = [
    {
      number: "01",
      title: "Gap Analysis",
      description: "We assess your current AI systems and governance practices against ISO 42001 requirements."
    },
    {
      number: "02",
      title: "Implementation Plan",
      description: "A customized roadmap is developed to address gaps and establish compliant AI governance."
    },
    {
      number: "03",
      title: "Documentation & Controls",
      description: "We help develop required policies, procedures, and technical controls for AI management."
    },
    {
      number: "04",
      title: "Audit & Certification",
      description: "Our team guides you through the certification audit process with confidence."
    }
  ];

  return (
    <ServiceSectionWrapper
      badgeText="ISO 42001"
      title="ISO 42001 Implementation Process"
      description="Our structured approach ensures your AI management system meets ISO 42001 requirements efficiently."
      className={tokens.spacing.section.lg}
      bgColor="bg-white"
    >
      <ServiceProcessList
        steps={implementationSteps}
        direction="horizontal"
        variant="numbered"
        accentColor={`${tokens.colors.text.teal} ${tokens.colors.border.teal}`}
      />
    </ServiceSectionWrapper>
  );
};

export default ISO42001Section;
