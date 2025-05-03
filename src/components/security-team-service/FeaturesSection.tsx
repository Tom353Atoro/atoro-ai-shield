
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Bug, FileCheck, Shield, Lock } from 'lucide-react';

const FeaturesSection = () => {
  // Features data
  const features = [{
    title: "Responsive Slack Support",
    description: "Direct access to our security experts with 1-hour SLA during business hours, ensuring your questions never block progress.",
    icon: <MessageSquare className="h-12 w-12 text-atoro-teal p-2 bg-atoro-teal/10 rounded-lg" />
  }, {
    title: "On-Demand Testing",
    description: "Up to 4 comprehensive penetration tests annually, plus continuous vulnerability scanning to identify risks before they become breaches.",
    icon: <Bug className="h-12 w-12 text-atoro-teal p-2 bg-atoro-teal/10 rounded-lg" />
  }, {
    title: "Platform Management",
    description: "Full implementation and management of Drata or Vanta, turning complex compliance workflows into streamlined processes.",
    icon: <FileCheck className="h-12 w-12 text-atoro-teal p-2 bg-atoro-teal/10 rounded-lg" />
  }, {
    title: "Dedicated Experts",
    description: "A named team of security professionals with the specialized expertise you need, without the recruiting challenges.",
    icon: <Shield className="h-12 w-12 text-atoro-teal p-2 bg-atoro-teal/10 rounded-lg" />
  }, {
    title: "Trust Center Deployment",
    description: "Customer-facing security documentation and trust portal to showcase your security posture and expedite security reviews.",
    icon: <Lock className="h-12 w-12 text-atoro-teal p-2 bg-atoro-teal/10 rounded-lg" />
  }];
  
  return (
    <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-white/20 text-white hover:bg-white/30">Core Capabilities</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Comprehensive Security Services</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Everything you need to build a strong security posture and achieve compliance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => <div key={index} className="bg-white/10 p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
              <p className="text-white/80 text-center">{feature.description}</p>
            </div>)}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
