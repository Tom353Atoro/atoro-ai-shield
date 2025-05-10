
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import ServiceProcessList from '@/components/services/ServiceProcessList';
import { FileText, Shield, Clock, CheckCircle } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';

const Soc2Process = () => {
  const processSteps = [
    {
      icon: <FileText className="h-6 w-6 text-atoro-green" />,
      number: "01",
      title: "Gap Assessment",
      description: "Identify areas where your current security practices fall short of SOC 2 requirements."
    },
    {
      icon: <Shield className="h-6 w-6 text-atoro-blue" />,
      number: "02",
      title: "Controls Implementation",
      description: "Implement the necessary controls to meet the SOC 2 Trust Service Criteria."
    },
    {
      icon: <Clock className="h-6 w-6 text-atoro-teal" />,
      number: "03",
      title: "Audit Preparation",
      description: "Prepare for your SOC 2 audit with our expert guidance and automated platform."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-atoro-green" />,
      number: "04",
      title: "Certification",
      description: "Successfully complete your audit and achieve SOC 2 certification."
    }
  ];

  return (
    <SectionWrapper
      title="Our 4-Step SOC 2 Implementation Process"
      description="A streamlined approach that makes SOC 2 compliance achievable in weeks, not months."
      className="py-16 bg-atoro-teal/5"
      badgeText="Our Approach"
      centered={true}
    >
      <ServiceProcessList 
        steps={processSteps} 
        direction="horizontal" 
        accentColor="text-atoro-green border-atoro-green"
      />
      
      <div className="mt-16 text-center">
        <p className="text-lg font-medium">Ready to start your SOC 2 journey?</p>
        <button className="mt-4 bg-atoro-green text-atoro-teal px-6 py-3 rounded-md font-medium hover:bg-atoro-light-green transition-colors">
          Schedule Your Gap Analysis
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Soc2Process;
