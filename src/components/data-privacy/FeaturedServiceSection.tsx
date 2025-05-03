
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const FeaturedServiceSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Featured Service</Badge>
            <h2 className="text-white mb-4">Virtual Data Protection Officer</h2>
            <p className="text-lg mb-6 opacity-90">
              Get qualified privacy leadership without the cost of a full-time hire. Our vDPO service
              provides the expertise you need to navigate complex privacy regulations and protect your business.
            </p>
            
            <ul className="space-y-3 mb-6">
              {["Regulatory representation", "Compliance oversight", "Staff training", "Incident response"].map((feature, index) => <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-atoro-green flex-shrink-0" />
                  <span>{feature}</span>
                </li>)}
            </ul>
            
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
              <Link to="/services/data-privacy/vdpo">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-5">Common Privacy Challenges</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                  <span className="text-atoro-green">1</span>
                </div>
                <span>Navigating complex and changing regulations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                  <span className="text-atoro-green">2</span>
                </div>
                <span>Meeting data subject access request obligations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                  <span className="text-atoro-green">3</span>
                </div>
                <span>Implementing privacy by design in development</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                  <span className="text-atoro-green">4</span>
                </div>
                <span>Managing cross-border data transfers legally</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedServiceSection;
