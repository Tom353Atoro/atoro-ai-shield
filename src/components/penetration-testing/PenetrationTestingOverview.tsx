import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Bug, Network, ServerCog } from 'lucide-react';

const PenetrationTestingOverview = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Approach</Badge>
          <h2 className="mb-3">Comprehensive Security Testing</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our penetration tests go beyond automated scanning to find the vulnerabilities that matter most to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[{
            icon: <Bug className="text-atoro-green" />,
            title: "Web Application Testing",
            description: "Identify security flaws in your web applications, APIs, and customer-facing portals."
          }, {
            icon: <Network className="text-atoro-green" />,
            title: "Infrastructure Testing",
            description: "Secure your network, cloud infrastructure, and internal systems from potential breaches."
          }, {
            icon: <ServerCog className="text-atoro-green" />,
            title: "DevSecOps Integration",
            description: "Embed security testing into your CI/CD pipeline for continuous vulnerability detection."
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

export default PenetrationTestingOverview; 