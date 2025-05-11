
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const CaseStudyCTA = () => {
  return (
    <section 
      id="contact-cta"
      className="bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10 py-16 border-t border-gray-100"
    >
      <Container className="max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-atoro-teal">
            Ready to Achieve ISO 42001 Certification?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Combine our firsthand expertise with AI-enhanced methodologies to streamline your path to compliance.
          </p>
          
          <Button 
            size="lg"
            className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green"
            asChild
          >
            <a href="mailto:info@atoro.co">
              <Mail className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudyCTA;
