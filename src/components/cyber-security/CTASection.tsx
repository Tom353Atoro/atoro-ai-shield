
import React from 'react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { tokens } from '@/lib/designTokens';

const CTASection = () => {
  return (
    <ServiceSectionWrapper
      className={tokens.spacing.section.md}
      bgColor={tokens.colors.bg.greenLight}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mb-4">Secure Your Foundation</h2>
        <p className="text-gray-700 mb-6">
          Even if you're a startup, your security can be enterprise-grade. Let our experts help you
          strengthen your cyber defenses without slowing down your innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
            <Link to="/contact">Book a Free Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
            <Link to="/resources/security-assessment">Get a Free Security Checklist</Link>
          </Button>
        </div>
      </div>
    </ServiceSectionWrapper>
  );
};

export default CTASection;
