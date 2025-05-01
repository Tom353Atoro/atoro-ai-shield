
import React from 'react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Atoro transformed our security posture in weeks, not months. Their expertise in both AI and security helped us implement robust safeguards without slowing down our development cycles.",
      author: "Sarah Chen",
      title: "CTO, TechVantage",
    },
    {
      quote: "Working with Atoro's vCISO service gave us enterprise-grade security leadership that we could never have afforded with a traditional in-house hire. Game-changer for our Series A journey.",
      author: "Marcus Johnson",
      title: "CEO, DataPulse",
    },
    {
      quote: "Their integrated approach to security, privacy, and AI governance helped us achieve multiple compliance certifications simultaneously, opening doors to enterprise clients.",
      author: "Elena Rodriguez",
      title: "COO, CloudStack",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Trusted by Innovative SaaS Leaders</h2>
          <p className="text-lg text-gray-700">
            See why fast-growing companies choose Atoro to handle their security, privacy, and AI governance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className={cn(
                "bg-white p-8 rounded-2xl shadow-sm border border-gray-100",
                "relative flex flex-col h-full"
              )}
            >
              {/* Quote mark */}
              <div className="text-6xl font-serif text-atoro-purple/10 absolute top-4 left-4">"</div>
              
              <div className="flex-grow">
                <p className="text-gray-700 relative z-10 mb-6">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="mt-4">
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
