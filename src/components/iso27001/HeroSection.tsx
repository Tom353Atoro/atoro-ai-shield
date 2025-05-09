
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-16 pb-8 bg-gradient-to-br from-atoro-blue to-black text-white relative overflow-hidden">
      {/* Light overlay pattern for visibility */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-grid-white/10"></div>
      </div>
      
      {/* Hero content with improved contrast */}
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10 pt-10">
          <div>
            <div className="flex items-center mb-3">
              <Shield className="h-6 w-6 mr-2 text-atoro-green" />
              <span className="text-gray-200 font-medium">ISO 27001 Implementation</span>
            </div>
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-atoro-green">Fast-track</span> Your ISO 27001 Certification
            </h1>
            <p className="text-lg mb-6 opacity-90">
              Streamlined ISO 27001 implementation for SaaS companies. Get certified in half the time with our expert-led process.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                Start Your ISO 27001 Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Book a Consultation
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-atoro-green mr-2" />
                <span className="text-sm">50% Faster Implementation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-atoro-green mr-2" />
                <span className="text-sm">Dedicated Compliance Expert</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-atoro-green mr-2" />
                <span className="text-sm">100% Success Rate</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img 
              alt="ISO 27001 Certification Process" 
              className="object-cover w-full rounded-lg" 
              src="/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png" 
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
