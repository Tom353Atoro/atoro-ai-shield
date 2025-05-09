
import React from 'react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceFeatureGrid from '@/components/services/ServiceFeatureGrid';
import ServiceCard from '@/components/services/ServiceCard';
import { FileText, ShieldAlert, Lightbulb } from 'lucide-react';
import { tokens } from '@/lib/designTokens';

const ProcessSection = () => {
  return (
    <ServiceSectionWrapper
      title="Our Assessment Process"
      description="Our structured approach ensures we identify and address all potential risks in your AI systems"
      className={tokens.spacing.section.lg}
      bgColor="bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <ServiceFeatureGrid columns={3} gap="md">
          {[
            {
              step: 1,
              title: "Discovery & Analysis",
              description: "We examine your AI systems, data sources, and decision-making processes to identify key risk areas.",
              icon: <FileText className="h-6 w-6 text-atoro-blue" />
            },
            {
              step: 2,
              title: "Risk Evaluation",
              description: "We assess identified risks against regulatory requirements and industry best practices.",
              icon: <ShieldAlert className="h-6 w-6 text-atoro-blue" />
            },
            {
              step: 3,
              title: "Recommendations",
              description: "We deliver practical, prioritized recommendations to mitigate risks and improve AI governance.",
              icon: <Lightbulb className="h-6 w-6 text-atoro-blue" />
            }
          ].map((step) => (
            <ServiceCard
              key={step.step}
              title={`${step.step}. ${step.title}`}
              description={step.description}
              icon={step.icon}
              iconContainerClassName="p-3 bg-atoro-blue/10 rounded-lg"
            />
          ))}
        </ServiceFeatureGrid>
      </div>
    </ServiceSectionWrapper>
  );
};

export default ProcessSection;
