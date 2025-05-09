
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-10">
          <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">ISO 42001 Benefits</Badge>
          <h2 className="text-3xl font-bold mb-3">Why Implement ISO 42001?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            ISO 42001 provides a framework for responsible AI management that builds trust and ensures compliance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Business Benefits</h3>
            <ul className="space-y-3">
              {[
                "Demonstrate AI trustworthiness to customers and partners",
                "Align with EU AI Act requirements and global regulations",
                "Reduce risks associated with AI system failures",
                "Create competitive differentiation in the market"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Technical Benefits</h3>
            <ul className="space-y-3">
              {[
                "Establish consistent AI development lifecycle processes",
                "Improve data governance and quality control",
                "Enhance monitoring of AI system performance",
                "Incorporate ethical considerations into AI design"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-blue flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
