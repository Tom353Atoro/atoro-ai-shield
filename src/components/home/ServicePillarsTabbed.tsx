
import React from 'react';
import { Link } from 'react-router-dom';
import { FeatureTabs } from '@/components/ui/feature-tabs';
import { Shield, FileKey, Brain } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ServicePillarsTabbed = () => {
  const isMobile = useIsMobile();
  
  const serviceTabs = [
    {
      value: "cyber-security",
      icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-atoro-green" />,
      label: "Cyber Security",
      content: {
        badge: "Security Services",
        title: "Proactive Cyber Security for SaaS",
        description: 
          "Proactive penetration testing, ISO 27001 implementation, SOC 2 readiness, and continuous vCISO oversight that harden your cloud stack without slowing deployment.",
        buttonText: "Learn More",
        buttonLink: "/services/cyber-security",
        imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
        imageAlt: "Cyber Security visualization",
      },
    },
    {
      value: "data-privacy",
      icon: <FileKey className="h-4 w-4 sm:h-5 sm:w-5 text-atoro-blue" />,
      label: "Data Privacy",
      content: {
        badge: "Privacy Management",
        title: "Turn Regulatory Complexity into an Edge",
        description:
          "GDPR programs, DPO-as-a-Service, and automated privacy ops that turn regulatory complexity into a competitive edge.",
        buttonText: "Learn More",
        buttonLink: "/services/data-privacy",
        imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
        imageAlt: "Data privacy visualization",
      },
    },
    {
      value: "ai-governance",
      icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-atoro-teal" />,
      label: "AI Governance",
      content: {
        badge: "AI Solutions",
        title: "Keep ML Features Ethical and Compliant",
        description:
          "ISO 42001 certification support and virtual AI Governance Officer (vAIGO) services that keep your machine-learning features ethical, secure, and compliant.",
        buttonText: "Learn More",
        buttonLink: "/services/ai-governance",
        imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
        imageAlt: "AI governance visualization",
      },
    },
  ];

  return (
    <FeatureTabs
      badge="Our Services"
      heading="Our Three Integrated Pillars"
      description="We protect and empower SaaS businesses through three tightly integrated service pillars, designed to work together seamlessly."
      tabs={serviceTabs}
      backgroundClass="gradient-bg-subtle"
      className="overflow-hidden"
    />
  );
};

export default ServicePillarsTabbed;
