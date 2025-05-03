
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import ServicePillars from '@/components/services/ServicePillars';

const MethodologySection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">Our Methodology</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Security Coverage</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our integrated approach ensures all aspects of your security program work together seamlessly
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mt-12 relative">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <ServicePillars />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MethodologySection;
