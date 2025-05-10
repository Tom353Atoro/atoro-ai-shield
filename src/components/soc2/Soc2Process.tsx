
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Shield, Clock } from 'lucide-react';

const Soc2Process = () => {
  return (
    <section className="py-16 bg-atoro-teal/5">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Approach</Badge>
          <h2 className="mb-3">Streamlined SOC 2 Compliance</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We simplify the SOC 2 process with our expert guidance and automated platform, 
            helping you achieve compliance quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FileText className="text-atoro-green" />,
            title: "Gap Assessment",
            description: "Identify areas where your current security practices fall short of SOC 2 requirements."
          }, {
            icon: <Shield className="text-atoro-green" />,
            title: "Controls Implementation",
            description: "Implement the necessary controls to meet the SOC 2 Trust Service Criteria."
          }, {
            icon: <Clock className="text-atoro-green" />,
            title: "Audit Preparation",
            description: "Prepare for your SOC 2 audit with our expert guidance and automated platform."
          }].map((step, index) => (
            <Card key={index} className="border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-atoro-teal/5 rounded-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Soc2Process;
