
import React from 'react';
import { Container } from '@/components/ui/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';

const CaseStudyOverview = () => {
  return (
    <SectionWrapper
      title="Overview"
      className="py-16"
      bgColor="bg-white"
      centered={true}
      containerSize="narrow"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-center text-gray-700 leading-relaxed">
          On 1 April 2025, Atoro achieved ISO 42001 certification through A-LIGN, demonstrating leadership in responsible AI governance. This achievement positions Atoro as Europe's first cyber-compliance agency to receive this prestigious certification, setting a new standard in the industry.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default CaseStudyOverview;
