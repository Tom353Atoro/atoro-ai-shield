
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ISO42001Section = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Featured Framework</Badge>
            <h2 className="text-white mb-4">ISO 42001 Implementation</h2>
            <p className="text-lg mb-6 opacity-90">
              ISO 42001 is the world's first international standard for AI management systems. Build trust and demonstrate 
              your commitment to responsible AI practices with our expert implementation guidance.
            </p>
            
            <ul className="space-y-3 mb-6">
              {[
                "Implement globally recognized AI governance standards",
                "Align AI systems with regulatory requirements",
                "Establish clear accountability and risk management processes",
                "Build stakeholder trust through transparent AI governance"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
              <Link to="/services/ai-governance/iso-42001">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-5">ISO 42001 Implementation Process</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                  <span className="text-atoro-green">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Gap Assessment</h4>
                  <p className="text-sm opacity-80">Evaluate current AI governance against ISO 42001 requirements</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                  <span className="text-atoro-green">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Policy Development</h4>
                  <p className="text-sm opacity-80">Create AI governance policies and procedures</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                  <span className="text-atoro-green">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Implementation</h4>
                  <p className="text-sm opacity-80">Deploy AI governance framework and controls</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                  <span className="text-atoro-green">4</span>
                </div>
                <div>
                  <h4 className="font-medium">Certification Support</h4>
                  <p className="text-sm opacity-80">Prepare for and navigate the certification process</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ISO42001Section;
