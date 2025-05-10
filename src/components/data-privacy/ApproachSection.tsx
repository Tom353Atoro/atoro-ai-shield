
import React from 'react';
import { Container } from '@/components/ui/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { tokens } from '@/lib/designTokens';

const ApproachSection = () => {
  return (
    <SectionWrapper
      title="Our Approach to Data Privacy"
      description="How we think about privacy for modern SaaS companies"
      badgeText="Our Philosophy"
      badgeClassName="bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20"
      bgColor="bg-white"
      spacingSize="default"
    >
      <Container className="max-w-4xl">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            At Atoro, we believe that data privacy is a competitive advantage, not just a compliance requirement. 
            Our approach centers on implementing privacy by design principles that build customer trust while 
            enabling your business to move quickly and innovate.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            We understand that SaaS companies face unique privacy challenges, especially when operating 
            globally. Rather than one-size-fits-all solutions, we create tailored privacy programs 
            that address your specific data flows, business model, and regulatory landscape.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Our privacy experts work alongside your team to implement practical, effective measures 
            that protect user data while supporting your growth objectives. This collaborative approach 
            ensures privacy becomes an integral part of your product development cycle, not an afterthought 
            or obstacle.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ApproachSection;
