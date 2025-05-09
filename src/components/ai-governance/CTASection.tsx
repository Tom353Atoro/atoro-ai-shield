
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NeetoCalPopup from '@/components/shared/NeetoCalPopup';

const CTASection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">Ready for Responsible AI?</h2>
          <p className="text-gray-700 mb-6">
            Let our AI governance experts help you implement a framework that ensures your AI 
            systems are ethical, transparent, and compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" id="ai-consultation-btn">
              Schedule a Consultation
            </Button>
            <NeetoCalPopup elementSelector="#ai-consultation-btn" />
            
            <Button size="lg" variant="outline" className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal/5" asChild>
              <Link to="/resources/ai-governance">Download AI Governance Guide</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
