import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, FileSearch, Users, Clock } from 'lucide-react';

const SecurityTeamOverview = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Approach</Badge>
          <h2 className="mb-3">Dedicated Security Expertise On Demand</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our Security Team as a Service provides your organization with specialized expertise without the cost of building and maintaining an in-house security team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[{
            icon: <Shield className="text-atoro-green" />,
            title: "Security Leadership",
            description: "Fractional CISO and security management to guide your security strategy and implementation."
          }, {
            icon: <FileSearch className="text-atoro-green" />,
            title: "Compliance Support",
            description: "Expert guidance for SOC 2, ISO 27001, GDPR, and other regulatory requirements."
          }, {
            icon: <Users className="text-atoro-green" />,
            title: "Dedicated Team",
            description: "Access to security analysts, engineers, and consultants matched to your needs."
          }, {
            icon: <Clock className="text-atoro-green" />,
            title: "Flexible Engagement",
            description: "Scale services up or down based on your business requirements and growth."
          }].map((service, index) => <Card key={index} className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-atoro-teal/5 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm">{service.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </Container>
    </section>
  );
};

export default SecurityTeamOverview; 