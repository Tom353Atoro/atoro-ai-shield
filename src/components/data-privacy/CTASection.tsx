
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">Turn Privacy into a Competitive Advantage</h2>
          <p className="text-gray-700 mb-6">
            With Atoro handling your data privacy, you can reassure customers and regulators alike – all while keeping
            your focus on building a great product. Schedule a call today to discuss your specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
              <Link to="/resources/privacy-assessment">Get a Free Privacy Checklist</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
