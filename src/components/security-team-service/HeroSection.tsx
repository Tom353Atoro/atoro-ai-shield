
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-atoro-dark-teal to-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0 bg-hero-pattern"></div>
      
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <Badge className="mb-4 bg-atoro-green/20 text-atoro-green hover:bg-atoro-green/30">Virtual Security Team</Badge>
            <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your Complete <span className="text-atoro-green">Virtual Security Department</span>
            </h1>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Get enterprise-grade security and compliance without the overhead of an in-house team. 
              Our experts become an extension of your organization, handling everything from daily security operations to compliance certifications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                Schedule a Security Assessment
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-atoro-green to-atoro-blue opacity-30 blur-sm rounded-lg"></div>
              <img 
                alt="Security Team Service" 
                className="relative w-full rounded-lg shadow-lg object-cover max-h-[400px]" 
                src="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg" 
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
