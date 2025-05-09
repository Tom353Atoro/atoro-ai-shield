
import React from 'react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceProcessList from '@/components/services/ServiceProcessList';
import { FileCheck, Shield, Users, BadgeCheck } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: <FileCheck className="h-6 w-6 text-atoro-blue" />,
      number: "01",
      title: "Gap Analysis",
      description: "We assess your current security posture against ISO 27001 requirements, identifying gaps and creating a tailored implementation plan."
    },
    {
      icon: <Shield className="h-6 w-6 text-atoro-green" />,
      number: "02",
      title: "Documentation & Controls",
      description: "We develop all required policies, procedures, and implement necessary security controls aligned with your business needs."
    },
    {
      icon: <Users className="h-6 w-6 text-atoro-teal" />,
      number: "03",
      title: "Internal Audit",
      description: "We conduct a comprehensive internal audit to ensure compliance and readiness for certification assessment."
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-atoro-blue" />,
      number: "04",
      title: "Certification",
      description: "We guide you through the certification process, preparing your team for auditor interviews and documentation reviews."
    }
  ];

  return (
    <ServiceSectionWrapper
      title="Our 4-Step ISO 27001 Implementation Process"
      description="A streamlined approach that gets you certified in 12 weeks, not the typical 6-12 months."
      className="py-16 bg-white"
      centered={true}
    >
      <ServiceProcessList 
        steps={processSteps} 
        direction="horizontal" 
        accentColor="text-atoro-green border-atoro-green"
      />
      
      <div className="mt-16 text-center">
        <p className="text-lg font-medium">Ready to start your ISO 27001 journey?</p>
        <button className="mt-4 bg-atoro-green text-atoro-teal px-6 py-3 rounded-md font-medium hover:bg-atoro-teal transition-colors">
          Schedule Your Gap Analysis
        </button>
      </div>
    </ServiceSectionWrapper>
  );
};

export default ProcessSection;
