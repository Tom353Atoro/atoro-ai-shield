
import React from 'react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceFeatureGrid from '@/components/services/ServiceFeatureGrid';
import ServiceCard from '@/components/services/ServiceCard';
import { Shield, Clock, Users, BadgeCheck, FileCheck, Globe } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-atoro-blue" />,
      title: "Enhanced Security Posture",
      description: "Implement robust controls that protect your data and systems from evolving threats."
    },
    {
      icon: <Clock className="h-6 w-6 text-atoro-green" />,
      title: "Accelerated Certification",
      description: "Cut certification time by 50% with our streamlined approach and expert guidance."
    },
    {
      icon: <Globe className="h-6 w-6 text-atoro-teal" />,
      title: "Competitive Advantage",
      description: "Stand out to enterprise clients by demonstrating your commitment to security."
    },
    {
      icon: <Users className="h-6 w-6 text-atoro-blue" />,
      title: "Increased Customer Trust",
      description: "Build stronger relationships with customers through proven security practices."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-atoro-green" />,
      title: "Simplified Compliance",
      description: "Meet multiple regulatory requirements with a single comprehensive framework."
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-atoro-teal" />,
      title: "Risk Reduction",
      description: "Identify and mitigate security risks before they impact your business."
    }
  ];

  return (
    <ServiceSectionWrapper
      title="Benefits of ISO 27001 Certification"
      description="ISO 27001 certification offers multiple benefits for your SaaS business, from enhanced security to increased customer trust."
      className="py-16 bg-gray-50"
      centered={true}
    >
      <ServiceFeatureGrid columns={3} gap="md">
        {benefits.map((benefit, index) => (
          <ServiceCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            iconContainerClassName="p-3 bg-atoro-teal/5 rounded-lg"
          />
        ))}
      </ServiceFeatureGrid>
    </ServiceSectionWrapper>
  );
};

export default BenefitsSection;
