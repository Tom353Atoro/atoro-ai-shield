
import React from 'react';
import { Shield, FileSearch, Lock } from 'lucide-react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceFeatureGrid from '@/components/services/ServiceFeatureGrid';
import ServiceCard from '@/components/services/ServiceCard';
import { tokens } from '@/lib/designTokens';

const ServicesSection = () => {
  // Service card data
  const serviceCards = [
    {
      title: "Penetration Testing",
      description: "Identify vulnerabilities in your application with thorough security testing by our experts.",
      icon: <Shield className="text-atoro-green" />,
      linkText: "Learn more",
      linkUrl: "/services/cyber-security/penetration-testing"
    }, 
    {
      title: "ISO 27001 Implementation",
      description: "Structured approach to implementing the ISO 27001 framework for information security.",
      icon: <FileSearch className="text-atoro-green" />,
      linkText: "Learn more", 
      linkUrl: "/services/iso-27001"
    }, 
    {
      title: "SOC 2 Readiness",
      description: "Prepare your organization for SOC 2 certification with our comprehensive audit readiness program.",
      icon: <Lock className="text-atoro-green" />,
      linkText: "Learn more",
      linkUrl: "/services/cyber-security/soc2"
    }
  ];

  return (
    <ServiceSectionWrapper
      title="Comprehensive Security Solutions"
      description="Embed protection into your development lifecycle without slowing you down. Reduce breach risks, accelerate compliance, and build customer trust."
      badgeText="Our Services"
      badgeClassName="bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20"
      className={tokens.spacing.section.md}
      bgColor={tokens.colors.bg.white}
      centered={true}
    >
      <ServiceFeatureGrid columns={3} gap="md" maxWidth="max-w-5xl" centered={true}>
        {serviceCards.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            linkText={service.linkText}
            linkUrl={service.linkUrl}
            hoverEffect={true}
          />
        ))}
      </ServiceFeatureGrid>
    </ServiceSectionWrapper>
  );
};

export default ServicesSection;
