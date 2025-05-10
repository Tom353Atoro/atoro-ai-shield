
import React from 'react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceFeatureGrid from '@/components/services/ServiceFeatureGrid';
import ServiceCard from '@/components/services/ServiceCard';
import { Shield, CheckCircle, Users, BadgeCheck, FileCheck, Building } from 'lucide-react';

const Soc2Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-atoro-blue" />,
      title: "Enhanced Security Posture",
      description: "Implement robust controls that protect your data and systems from threats."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-atoro-green" />,
      title: "Customer Trust",
      description: "Show potential clients your commitment to security and data protection."
    },
    {
      icon: <Users className="h-6 w-6 text-atoro-teal" />,
      title: "Competitive Advantage",
      description: "Stand out from competitors who haven't achieved SOC 2 compliance."
    },
    {
      icon: <Building className="h-6 w-6 text-atoro-blue" />,
      title: "Enterprise Readiness",
      description: "Meet the security requirements of larger enterprise customers."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-atoro-green" />,
      title: "Simplified Compliance",
      description: "Streamline multiple compliance requirements with a single framework."
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-atoro-teal" />,
      title: "Risk Reduction",
      description: "Identify and mitigate security risks before they impact your business."
    }
  ];

  return (
    <ServiceSectionWrapper
      title="Benefits of SOC 2 Compliance"
      description="SOC 2 certification offers multiple benefits for your business, from enhanced security to increased customer trust."
      className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white"
      centered={true}
    >
      <ServiceFeatureGrid columns={3} gap="md">
        {benefits.map((benefit, index) => (
          <ServiceCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            iconContainerClassName="p-3 bg-white/10 rounded-lg"
            className="bg-white/10 border-white/20"
            titleClassName="text-white"
            descriptionClassName="text-white/80"
          />
        ))}
      </ServiceFeatureGrid>
    </ServiceSectionWrapper>
  );
};

export default Soc2Benefits;
