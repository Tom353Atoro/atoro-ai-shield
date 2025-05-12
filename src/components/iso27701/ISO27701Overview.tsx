import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, BookOpen, CheckSquare } from 'lucide-react';

const ISO27701Overview = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Approach</Badge>
          <h2 className="mb-3">Comprehensive ISO 27701 Implementation</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our ISO 27701 services help you extend your existing ISO 27001 certification with robust privacy controls,
            creating a unified information security and privacy management system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[{
            icon: <Shield className="text-atoro-green" />,
            title: "Gap Analysis",
            description: "Thorough assessment of your current ISO 27001 ISMS to identify privacy control gaps for ISO 27701 certification."
          }, {
            icon: <BookOpen className="text-atoro-green" />,
            title: "Documentation Enhancement",
            description: "Expansion of existing policies and development of privacy-specific documentation to meet ISO 27701 requirements."
          }, {
            icon: <CheckSquare className="text-atoro-green" />,
            title: "Certification Support",
            description: "End-to-end guidance through the certification process, including audit preparation and remediation support."
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

export default ISO27701Overview; 