
import React from 'react';
import { Container } from '@/components/ui/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { tokens } from '@/lib/designTokens';

const ApproachSection = () => {
  return (
    <SectionWrapper
      title="Our Approach to AI Governance"
      description="How we think about responsible AI for innovative companies"
      badgeText="Our Philosophy"
      badgeClassName="bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20"
      bgColor="bg-white"
      spacingSize="default"
    >
      <Container className="max-w-4xl">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            At Atoro, we believe that responsible AI development is the foundation of sustainable 
            innovation. Our approach to AI governance balances the need for robust oversight with 
            the agility required by fast-moving technology companies.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            As Europe's first ISO 42001 certified AI security consultancy, we've developed a 
            pragmatic framework that addresses the ethical, legal, and technical aspects of AI 
            systems. We focus on creating governance structures that prevent AI risks without 
            stifling the creativity and speed that drives your competitive advantage.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Our AI governance experts work closely with your teams to implement practices that 
            ensure your machine learning operations are transparent, fair, and compliant with 
            emerging regulations. This partnership approach ensures you can confidently deploy 
            AI-powered features while maintaining the trust of your users and stakeholders.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ApproachSection;
