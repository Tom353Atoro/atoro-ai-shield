import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GDPRCTA = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">Ready to Ensure GDPR Compliance?</h2>
          <p className="text-gray-700 mb-6">
            Whether you're just starting your GDPR journey or need to improve your existing compliance program,
            our team of experts can guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
              <Link to="/resources/gdpr-checklist">Download GDPR Readiness Checklist</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GDPRCTA; 