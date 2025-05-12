import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PenetrationTestingBenefits = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Benefits</Badge>
            <h2 className="text-white mb-4">Why Choose Our Penetration Testing</h2>
            <p className="text-lg mb-6 opacity-90">
              Our penetration testing services provide more than just a list of vulnerabilities. We deliver actionable insights that help you build a stronger security posture.
            </p>
            
            <ul className="space-y-3 mb-6">
              {[
                "Experienced security professionals with industry certifications",
                "Clear, business-focused reporting that prioritizes critical issues",
                "Remediation guidance tailored to your technology stack",
                "Compliance support for SOC 2, ISO 27001, and other frameworks"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                  <span>{feature}</span>
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
            <h3 className="text-xl font-semibold mb-5">Types of Testing We Offer</h3>
            <ul className="space-y-4">
              {[
                "Black Box Testing - Simulating external attacker perspective",
                "Gray Box Testing - Limited knowledge assessment",
                "White Box Testing - Full system access for comprehensive review",
                "Red Team Exercises - Advanced attack simulation scenarios"
              ].map((type, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">{index + 1}</span>
                  </div>
                  <span>{type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PenetrationTestingBenefits; 