
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-16 pb-8 bg-gradient-to-br from-atoro-dark-teal to-black text-white relative overflow-hidden">
      {/* Light overlay pattern for visibility */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-grid-white/10"></div>
      </div>
      
      {/* Hero content with improved contrast */}
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              <span className="text-atoro-green">Innovate</span> with Confidence
            </h1>
            <p className="text-lg mb-6 opacity-90">
              ISO 42001 certification support and virtual AI Governance Officer (vAIGO) services that keep your 
              machine-learning features ethical, secure, and compliant.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                AI Risk Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore AI Services
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img alt="AI governance visualization" className="object-cover w-full rounded-lg" src="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
