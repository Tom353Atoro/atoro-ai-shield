
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-16 pb-8 bg-gradient-to-br from-atoro-teal to-black text-white relative overflow-hidden">
      {/* Light overlay pattern for visibility */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-grid-white/10"></div>
      </div>
      
      {/* Hero content with improved contrast */}
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              <span className="text-atoro-green">Privacy by Design</span>, Not Afterthought
            </h1>
            <p className="text-lg mb-6 opacity-90">
              Turn complex privacy regulations into a competitive advantage. Our data privacy solutions handle
              compliance while you focus on building your product.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                Request Privacy Assessment
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img alt="Data privacy visualization" className="object-cover w-full rounded-lg" src="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
