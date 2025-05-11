
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Award, Check, Link, Users } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';

const ResultCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all hover:border-atoro-green/30">
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-atoro-green/10 text-atoro-green">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-atoro-teal">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  </div>
);

const CaseStudyResults = () => {
  const results = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "European Leadership",
      description: "First consultancy in Europe to earn ISO 42001 certification, establishing Atoro as a market leader."
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "Integrated Compliance",
      description: "Consolidated AI + security assessments with ISO 42001 / 27001 cross-walks for streamlined compliance."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Enhanced Services",
      description: "AI now integrated across nearly every business function while preserving people-first service."
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Market Advantage",
      description: "Stronger market position to guide clients through EU AI Act compliance requirements."
    }
  ];

  return (
    <SectionWrapper
      title="Results & Impact"
      description="Our ISO 42001 certification journey delivered significant business outcomes"
      badgeText="Outcomes"
      badgeClassName="bg-atoro-green/20 text-atoro-green"
      className="py-16"
      bgColor="bg-atoro-teal/5"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((result, index) => (
          <ResultCard 
            key={index}
            icon={result.icon}
            title={result.title}
            description={result.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CaseStudyResults;
