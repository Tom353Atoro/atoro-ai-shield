
import React from 'react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceProcessList from '@/components/services/ServiceProcessList';
import { tokens } from '@/lib/designTokens';

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "We conduct a comprehensive gap analysis against privacy requirements and assess your current data practices."
    },
    {
      number: "02",
      title: "Planning",
      description: "Our team develops a tailored roadmap for achieving compliance, prioritizing critical requirements."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the plan, drafting policies, setting up processes, and implementing technical measures."
    },
    {
      number: "04",
      title: "Maintenance",
      description: "Ongoing support ensures your privacy program adapts to regulatory changes and business growth."
    }
  ];

  return (
    <ServiceSectionWrapper
      className={tokens.spacing.section.xl}
      title="Our Data Privacy Implementation Process"
      description="We take a systematic approach to building your privacy program, ensuring no detail is missed and compliance is achieved efficiently."
      headerClassName="mb-16"
    >
      <ServiceProcessList 
        steps={processSteps} 
        direction="horizontal"
        variant="numbered"
        accentColor={`${tokens.colors.text.teal} ${tokens.colors.border.teal}`}
        stepGap="md"
      />
    </ServiceSectionWrapper>
  );
};

export default ProcessSection;
