
import React from 'react';
import { Container } from '@/components/ui/Container';

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Data Privacy Implementation Process</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We take a systematic approach to building your privacy program, ensuring no detail is missed
            and compliance is achieved efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "01",
              title: "Assessment",
              description: "We conduct a comprehensive gap analysis against privacy requirements and assess your current data practices."
            },
            {
              number: "02",
              title: "Planning",
              description: "Our team develops a tailored roadmap for achieving compliance, prioritizing critical requirements."
            },
            {
              number: "03",
              title: "Implementation",
              description: "We execute the plan, drafting policies, setting up processes, and implementing technical measures."
            },
            {
              number: "04",
              title: "Maintenance",
              description: "Ongoing support ensures your privacy program adapts to regulatory changes and business growth."
            }
          ].map((step, index) => (
            <div key={index} className="border border-gray-100 rounded-lg p-8 relative hover:shadow-md transition-shadow bg-gradient-to-b from-white to-gray-50">
              <span className="absolute top-0 right-0 p-4 font-bold text-4xl text-gray-100">{step.number}</span>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
