import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';

const PenetrationTestingProcess = () => {
  return (
    <section className="py-16 bg-atoro-teal/5">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">Our Process</Badge>
          <h2 className="mb-3">How Our Penetration Testing Works</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our structured approach ensures thorough testing while keeping your business goals in focus.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[{
            number: "01",
            title: "Scoping & Planning",
            description: "We work with you to define the scope and objectives of the penetration test."
          }, {
            number: "02",
            title: "Reconnaissance & Testing",
            description: "Our experts use both automated tools and manual techniques to identify vulnerabilities."
          }, {
            number: "03",
            title: "Analysis & Reporting",
            description: "We provide a detailed report of findings with clear remediation recommendations."
          }, {
            number: "04",
            title: "Remediation Support",
            description: "We assist your team in addressing the identified vulnerabilities effectively."
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

export default PenetrationTestingProcess; 