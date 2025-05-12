import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GDPRBenefits = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">GDPR Fundamentals</Badge>
            <h2 className="text-white mb-4">Key GDPR Principles</h2>
            <p className="text-lg mb-6 opacity-90">
              Our implementation focuses on embedding these core GDPR principles into your operations, ensuring compliance by design.
            </p>
            
            <ul className="space-y-3 mb-6">
              {[
                "Lawfulness, fairness and transparency",
                "Purpose limitation",
                "Data minimization",
                "Accuracy",
                "Storage limitation",
                "Integrity and confidentiality",
                "Accountability"
              ].map((principle, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-5">GDPR Compliance Benefits</h3>
            <ul className="space-y-4">
              {[
                "Avoid potential fines up to €20 million or 4% of global revenue",
                "Build trust with your European customers and partners",
                "Streamline international data transfers",
                "Differentiate your business with strong privacy practices"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">{index + 1}</span>
                  </div>
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

export default GDPRBenefits; 