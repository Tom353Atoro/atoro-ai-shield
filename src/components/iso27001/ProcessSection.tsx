
import React from 'react';
import { Container } from '@/components/ui/Container';
import { FileCheck, Shield, Users, BadgeDollarSign } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <FileCheck className="h-10 w-10 text-atoro-blue" />,
      number: "01",
      title: "Gap Analysis",
      description: "We assess your current security posture against ISO 27001 requirements, identifying gaps and creating a tailored implementation plan.",
      timeline: "Week 1-2"
    },
    {
      icon: <Shield className="h-10 w-10 text-atoro-green" />,
      number: "02",
      title: "Documentation & Controls",
      description: "We develop all required policies, procedures, and implement necessary security controls aligned with your business needs.",
      timeline: "Week 3-8"
    },
    {
      icon: <Users className="h-10 w-10 text-atoro-teal" />,
      number: "03",
      title: "Internal Audit",
      description: "We conduct a comprehensive internal audit to ensure compliance and readiness for certification assessment.",
      timeline: "Week 9-10"
    },
    {
      icon: <BadgeDollarSign className="h-10 w-10 text-atoro-blue" />,
      number: "04",
      title: "Certification",
      description: "We guide you through the certification process, preparing your team for auditor interviews and documentation reviews.",
      timeline: "Week 11-12"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our 4-Step ISO 27001 Implementation Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A streamlined approach that gets you certified in 12 weeks, not the typical 6-12 months.
          </p>
        </div>
        
        <div className="relative">
          {/* Process timeline connector line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:rtl' : ''}`}
              >
                {/* Timeline marker for desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-atoro-blue z-10"></div>
                
                {/* Step content */}
                <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className={`flex items-center mb-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-bold text-gray-200">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="inline-block bg-atoro-blue/10 text-atoro-blue text-sm font-medium px-3 py-1 rounded-full">
                    {step.timeline}
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium">Ready to start your ISO 27001 journey?</p>
          <button className="mt-4 bg-atoro-green text-white px-6 py-3 rounded-md font-medium hover:bg-atoro-teal transition-colors">
            Schedule Your Gap Analysis
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
