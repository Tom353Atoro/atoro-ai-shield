
import React from 'react';
import { Container } from '@/components/ui/Container';
import TestimonialCarousel from '@/components/shared/testimonials/TestimonialCarousel';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Atoro's ISO 27001 implementation service was transformative for our business. Their streamlined approach helped us achieve certification in just 11 weeks, and the process was surprisingly painless.",
      author: "Michael Chen",
      title: "CTO",
      company: "CloudSecure",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      date: "2024-03"
    },
    {
      quote: "The ISO 27001 certification process with Atoro was incredibly efficient. Their team handled all the complex documentation and helped us implement practical security controls that made sense for our SaaS business.",
      author: "Sarah Johnson",
      title: "Head of Compliance",
      company: "DataShield",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      date: "2023-11"
    },
    {
      quote: "As a fast-growing startup, we needed to get ISO 27001 certified quickly to close enterprise deals. Atoro delivered a tailored implementation that matched our specific needs and helped us achieve certification on our first attempt.",
      author: "David Rodriguez",
      title: "CEO",
      company: "SecureStack",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      date: "2024-01"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from SaaS companies that have successfully achieved ISO 27001 certification with our help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCarousel key={index} testimonials={[testimonial]} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
