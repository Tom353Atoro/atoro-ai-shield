
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white bg-hero-pattern">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-atoro-light-purple/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-atoro-light-blue/30 to-transparent rounded-full blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">
            <span className="gradient-text">AI-First Security</span>{' '}
            <span className="block mt-2">for Fast-Growing SaaS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10 max-w-3xl mx-auto">
            Europe's first ISO 42001 certified AI security consultancy, uniting cyber security, data privacy, and AI governance under one fixed-price, outcome-driven model.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Book a Call</Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
          
          <div className="mt-16 md:mt-20">
            <p className="text-sm text-gray-500 mb-4">Trusted by innovative SaaS companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Placeholder logos - would be replaced with actual client logos */}
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item} 
                  className={cn(
                    "h-8 w-24 bg-gray-200 rounded",
                    "flex items-center justify-center text-gray-400 text-xs"
                  )}
                >
                  Client Logo
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
