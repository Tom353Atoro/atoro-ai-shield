
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, FileCode, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [{
    icon: <Brain className="text-atoro-green" />,
    title: "AI Risk Assessment",
    description: "Comprehensive evaluation of AI systems for potential risks, biases, and compliance gaps.",
    link: "/services/ai-governance/risk-assessment"
  }, {
    icon: <FileCode className="text-atoro-green" />,
    title: "ISO 42001 Support",
    description: "Guidance for implementing the ISO standard for AI management systems.",
    link: "/services/ai-governance/iso-42001"
  }, {
    icon: <Settings className="text-atoro-green" />,
    title: "vAIGO Services",
    description: "Virtual AI Governance Officer to oversee your AI operations and compliance.",
    link: "/services/ai-governance/vaigo"
  }];

  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Services</Badge>
          <h2 className="mb-3">AI Governance Solutions</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our AI governance framework ensures your AI systems operate ethically, 
            transparently, and in compliance with emerging regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-atoro-teal/5 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm">{service.description}</p>
              </CardContent>
              <CardFooter className="pt-0 pb-5 flex justify-center">
                <Button variant="ghost" size="sm" className="text-atoro-teal group-hover:text-atoro-green group-hover:bg-atoro-green/10 transition-colors" asChild>
                  <Link to={service.link} className="flex items-center gap-1">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
