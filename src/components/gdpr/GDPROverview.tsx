import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, FileKey } from 'lucide-react';

const GDPROverview = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Approach</Badge>
          <h2 className="mb-3">Comprehensive GDPR Implementation</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our GDPR services focus on practical implementation that balances compliance requirements with 
            business needs, ensuring you meet regulations without unnecessary operational burden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[{
            icon: <Shield className="text-atoro-green" />,
            title: "Gap Analysis",
            description: "Thorough assessment of your current practices against GDPR requirements to identify compliance gaps."
          }, {
            icon: <FileKey className="text-atoro-green" />,
            title: "Policy Framework",
            description: "Development of all required policies, procedures, and documentation to demonstrate compliance."
          }, {
            icon: <Shield className="text-atoro-green" />,
            title: "Implementation",
            description: "Practical implementation of necessary technical and organizational measures to protect personal data."
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

export default GDPROverview; 