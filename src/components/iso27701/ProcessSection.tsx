
import React from 'react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceFeatureGrid from '@/components/services/ServiceFeatureGrid';
import ServiceCard from '@/components/services/ServiceCard';
import { Shield, FileText } from 'lucide-react';

const ProcessSection = () => {
  const services = [
    {
      icon: <Shield className="text-atoro-green" />,
      title: "Gap Assessment",
      description: "Evaluate your current ISO 27001 implementation against ISO 27701 requirements to identify privacy-specific gaps."
    }, 
    {
      icon: <FileText className="text-atoro-green" />,
      title: "PIMS Development",
      description: "Develop and implement the additional controls and documentation required for a complete Privacy Information Management System."
    }, 
    {
      icon: <Shield className="text-atoro-green" />,
      title: "Certification Support",
      description: "Prepare for and guide you through the certification audit process with our experienced consultants."
    }
  ];

  return (
    <ServiceSectionWrapper
      badgeText="Our Approach"
      title="ISO 27701 Implementation Process"
      description="As an extension of ISO 27001, ISO 27701 adds privacy-specific requirements to create a comprehensive Privacy Information Management System (PIMS)."
      bgColor="bg-white"
    >
      <ServiceFeatureGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            hoverEffect={true}
          />
        ))}
      </ServiceFeatureGrid>
    </ServiceSectionWrapper>
  );
};

export default ProcessSection;
