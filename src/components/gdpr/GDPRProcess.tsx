import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';

const GDPRProcess = () => {
  return (
    <section className="py-16 bg-atoro-teal/5">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Process</Badge>
          <h2 className="mb-3">GDPR Compliance Journey</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our structured approach guides you through the entire GDPR compliance process, from initial assessment to ongoing compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[{
            number: "01",
            title: "Assessment",
            description: "Identify existing compliance gaps, unique risk factors, and organizational needs."
          }, {
            number: "02",
            title: "Planning",
            description: "Develop a tailored roadmap with priorities based on risk level and business impact."
          }, {
            number: "03",
            title: "Implementation",
            description: "Deploy policies, procedures, and technical measures to achieve compliance."
          }, {
            number: "04",
            title: "Maintenance",
            description: "Ongoing support, training, and updates to ensure continued compliance with GDPR requirements."
          }].map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-atoro-green/10 text-atoro-green flex items-center justify-center font-semibold mr-3">
                  {step.number}
                </div>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm pl-14">{step.description}</p>
              {index < 3 && <div className="hidden md:block absolute top-5 left-5 w-[calc(100%-10px)] h-0.5 bg-atoro-green/10"></div>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GDPRProcess; 