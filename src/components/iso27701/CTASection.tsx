
import React from 'react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { tokens } from '@/lib/designTokens';

const CTASection = () => {
  return (
    <ServiceSectionWrapper
      className="py-12"
      bgColor={tokens.colors.bg.greenLight}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mb-4">Ready to Implement ISO 27701?</h2>
        <p className="text-gray-700 mb-6">
          Whether you already have ISO 27001 or are starting fresh, our expert consultants can guide you through 
          the entire ISO 27701 implementation and certification process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
            <Link to="/resources/iso-27701-guide">Download ISO 27701 Guide</Link>
          </Button>
        </div>
      </div>
    </ServiceSectionWrapper>
  );
};

export default CTASection;
