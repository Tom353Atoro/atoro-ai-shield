import React from 'react';
import { Brain, FileCode, Settings } from 'lucide-react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceFeatureGrid from '@/components/services/ServiceFeatureGrid';
import ServiceCard from '@/components/services/ServiceCard';
import { tokens } from '@/lib/designTokens';

const ServicesSection = () => {
  const services = [{
    icon: <Brain className={tokens.colors.brand.green} />,
    title: "AI Risk Assessment",
    description: "Comprehensive evaluation of AI systems for potential risks, biases, and compliance gaps.",
    link: "/services/ai-governance/ai-risk-assessment",
    linkText: "Learn more"
  }, {
    icon: <FileCode className={tokens.colors.brand.green} />,
    title: "ISO 42001 Support",
    description: "Guidance for implementing the ISO standard for AI management systems.",
    link: "/services/ai-governance/iso-42001",
    linkText: "Learn more"
  }, {
    icon: <Settings className={tokens.colors.brand.green} />,
    title: "vAIGO Services",
    description: "Virtual AI Governance Officer to oversee your AI operations and compliance.",
    link: "/services/ai-governance/vaigo",
    linkText: "Learn more"
  }];

  return (
    <ServiceSectionWrapper
      badgeText="Our Services"
      title="AI Governance Solutions"
      description="Our AI governance framework ensures your AI systems operate ethically, transparently, and in compliance with emerging regulations."
      className={tokens.spacing.section.md}
      bgColor="bg-white"
    >
      <ServiceFeatureGrid columns={3} gap="md">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            linkText={service.linkText}
            linkUrl={service.link}
            iconContainerClassName="p-3 bg-atoro-teal/5 rounded-lg"
            hoverEffect={true}
          />
        ))}
      </ServiceFeatureGrid>
    </ServiceSectionWrapper>
  );
};

export default ServicesSection;
