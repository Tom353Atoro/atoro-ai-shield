
import React from 'react';
import { Container } from '@/components/ui/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { tokens } from '@/lib/designTokens';

const ApproachSection = () => {
  return (
    <SectionWrapper
      title="Our Approach to Cyber Security"
      description="How we think about security for fast-growing SaaS companies"
      badgeText="Our Philosophy"
      badgeClassName="bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20"
      bgColor="bg-white"
      spacingSize="default"
    >
      <Container className="max-w-4xl">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            At Atoro, we believe that effective security doesn't have to slow down innovation. Our approach is built around 
            the understanding that security should be an enabler for fast-growing SaaS companies, not a roadblock.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Instead of overwhelming you with complex security frameworks, we focus on pragmatic, 
            outcome-driven strategies that align with your business goals. We identify the security measures that 
            will have the biggest impact on your risk profile and customer trust, then implement them efficiently.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Our security experts become an extension of your team, providing the specialized knowledge 
            you need without the overhead of building an in-house security department. This partnership model 
            ensures you can move quickly while maintaining the robust security posture that enterprise 
            clients and regulators expect.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ApproachSection;
