
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const CaseStudyHero = () => {
  const scrollToContactCTA = () => {
    const element = document.getElementById('contact-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-atoro-teal to-atoro-blue pt-24 pb-16 text-white">
      <div className="absolute inset-0 opacity-10 z-0 bg-hero-pattern"></div>
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Atoro Becomes Europe's First ISO 42001-Certified Cyber-Compliance Agency
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Setting the standard for responsible AI governance under the EU AI Act.
          </p>
          
          <Button 
            size="lg"
            className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green"
            onClick={scrollToContactCTA}
          >
            Schedule a Consultation <ArrowDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-12">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
            alt="Abstract visualization representing AI governance and cybersecurity" 
            className="w-full h-56 md:h-72 object-cover rounded-lg shadow-lg"
          />
        </div>
      </Container>
    </section>
  );
};

export default CaseStudyHero;
