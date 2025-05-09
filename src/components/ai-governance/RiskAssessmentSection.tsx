
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, FileSearch, Shield } from 'lucide-react';

const RiskAssessmentSection = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Services</Badge>
          <h2 className="mb-3">AI Risk Assessment & Compliance</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Identify and mitigate risks in your AI systems with our comprehensive assessment services,
            designed to align with emerging regulations and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[{
            icon: <Brain className="text-atoro-green" />,
            title: "EU AI Act Compliance",
            description: "Navigate the complex regulatory landscape of the EU AI Act with our specialized compliance assessments and roadmaps."
          }, {
            icon: <FileSearch className="text-atoro-green" />,
            title: "AI Risk Assessment",
            description: "Comprehensive evaluation of your AI systems for potential ethical, legal, and operational risks."
          }, {
            icon: <Shield className="text-atoro-green" />,
            title: "Responsible AI Framework",
            description: "Implement a tailored framework that ensures responsible AI development and deployment within your organization."
          }].map((service, index) => (
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
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RiskAssessmentSection;
