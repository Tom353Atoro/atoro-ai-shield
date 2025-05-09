
import React from 'react';
import { Brain, FileSearch, Shield } from 'lucide-react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceFeatureGrid from '@/components/services/ServiceFeatureGrid';
import ServiceCard from '@/components/services/ServiceCard';
import { tokens } from '@/lib/designTokens';

const RiskAssessmentSection = () => {
  const services = [{
    icon: <Brain className={tokens.colors.brand.green} />,
    title: "EU AI Act Compliance",
    description: "Navigate the complex regulatory landscape of the EU AI Act with our specialized compliance assessments and roadmaps."
  }, {
    icon: <FileSearch className={tokens.colors.brand.green} />,
    title: "AI Risk Assessment",
    description: "Comprehensive evaluation of your AI systems for potential ethical, legal, and operational risks."
  }, {
    icon: <Shield className={tokens.colors.brand.green} />,
    title: "Responsible AI Framework",
    description: "Implement a tailored framework that ensures responsible AI development and deployment within your organization."
  }];

  return (
    <ServiceSectionWrapper
      badgeText="Our Services"
      title="AI Risk Assessment & Compliance" 
      description="Identify and mitigate risks in your AI systems with our comprehensive assessment services, designed to align with emerging regulations and industry best practices."
      className={tokens.spacing.section.md}
      badgeClassName="bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20"
      bgColor="bg-white"
    >
      <ServiceFeatureGrid columns={3} gap="md">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            iconContainerClassName="p-3 bg-atoro-teal/5 rounded-lg"
            variant="default"
            hoverEffect={true}
          />
        ))}
      </ServiceFeatureGrid>
    </ServiceSectionWrapper>
  );
};

export default RiskAssessmentSection;
