
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedServiceSection = () => {
  const features = [
    "Comprehensive risk management framework", 
    "Documented AI development lifecycle", 
    "Ethical AI principles integration", 
    "Regulatory compliance alignment"
  ];

  const challenges = [
    { number: "1", text: "Keeping up with evolving AI regulations" },
    { number: "2", text: "Identifying and mitigating AI bias and risks" },
    { number: "3", text: "Implementing comprehensive AI governance frameworks" },
    { number: "4", text: "Balancing innovation with compliance requirements" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Featured Service</Badge>
            <h2 className="text-white mb-4">ISO 42001 Implementation</h2>
            <p className="text-lg mb-6 opacity-90">
              Establish a certified AI management system that demonstrates your commitment to responsible AI. 
              Our ISO 42001 implementation guidance helps you develop robust governance processes for your machine learning operations.
            </p>
            
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
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
            <h3 className="text-xl font-semibold mb-5">Common AI Governance Challenges</h3>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-atoro-green flex items-center justify-center flex-shrink-0">
                    <span className="text-atoro-green">{challenge.number}</span>
                  </div>
                  <span>{challenge.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedServiceSection;
