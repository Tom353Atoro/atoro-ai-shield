
import React from 'react';
import TestimonialSection from '@/components/shared/TestimonialSection';

const testimonials = [
  {
    quote: "Atoro's AI governance service helped us build a responsible AI framework that satisfied both our leadership and EU regulators. Their ISO 42001 expertise was invaluable.",
    author: "Sophia Rodriguez",
    title: "CTO",
    company: "DataSync AI",
    rating: 5
  },
  {
    quote: "We were concerned about AI compliance but didn't know where to start. Atoro provided a clear roadmap that was both practical and comprehensive.",
    author: "Michael Chen",
    title: "Head of AI Products",
    company: "NeuraTech",
    rating: 5
  },
  {
    quote: "Working with Atoro made our AI risk assessment process smooth and thorough. Their insights helped us prevent potential issues before deployment.",
    author: "Emma Watson",
    title: "CISO",
    company: "QuantumSoft",
    rating: 4.5
  }
];

const TestimonialsSection = () => {
  return (
    <TestimonialSection 
      testimonials={testimonials}
      title="What Our Clients Say"
      description="See how we've helped SaaS companies implement robust AI governance frameworks"
      variant="grid"
      showRatings={true}
      bgColor="bg-white"
    />
  );
};

export default TestimonialsSection;
