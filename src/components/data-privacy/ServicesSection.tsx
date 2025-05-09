
import React from 'react';
import { FileKey, Shield, Users } from 'lucide-react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceFeatureGrid from '@/components/services/ServiceFeatureGrid';
import ServiceCard from '@/components/services/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: <Shield className="text-atoro-green" />,
      title: "GDPR Compliance",
      description: "Complete implementation of GDPR requirements tailored to your SaaS business.",
      linkText: "Learn more",
      linkUrl: "/services/data-privacy/gdpr-compliance"
    }, 
    {
      icon: <Shield className="text-atoro-green" />,
      title: "ISO 27701 Implementation",
      description: "Privacy information management system implementation and certification support.",
      linkText: "Learn more",
      linkUrl: "/services/data-privacy/iso-27701"
    }, 
    {
      icon: <Users className="text-atoro-green" />,
      title: "EU Representative",
      description: "Fulfill GDPR Article 27 requirements with our dedicated EU representative services.",
      linkText: "Learn more",
      linkUrl: "/services/data-privacy/eu-representative"
    }
  ];

  return (
    <ServiceSectionWrapper
      badgeText="Our Services"
      title="Comprehensive Privacy Solutions"
      description="Navigate complex regulatory requirements with our end-to-end privacy services. Build trust with customers and meet compliance requirements without slowing innovation."
    >
      <ServiceFeatureGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            linkText={service.linkText}
            linkUrl={service.linkUrl}
          />
        ))}
      </ServiceFeatureGrid>
    </ServiceSectionWrapper>
  );
};

export default ServicesSection;
