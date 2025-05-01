
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const FlagshipService = () => {
  const benefits = [
    'Enterprise-grade security leadership',
    'Real-time guidance and support',
    'Audit-ready compliance documentation',
    'Integrated cyber, privacy, and AI governance',
    'Predictable monthly pricing',
    'Dedicated virtual security department',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-atoro-blue/5 to-atoro-purple/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-atoro-purple bg-atoro-purple/10 rounded-full">
              Our Flagship Service
            </div>
            <h2 className="mb-6">Security Team <span className="gradient-text">as a Service</span></h2>
            <p className="text-lg text-gray-700 mb-6">
              Roll all three pillars into a dedicated virtual department—giving you enterprise-grade security leadership, 
              real-time guidance, and audit-ready compliance for a predictable monthly fee.
            </p>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" asChild>
              <Link to="/services/security-team-aas">Learn More</Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-atoro-blue/20 to-atoro-purple/20 overflow-hidden relative">
              {/* This would be replaced with an actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Security Team Illustration
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-atoro-light-blue rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-atoro-light-purple rounded-lg -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FlagshipService;
