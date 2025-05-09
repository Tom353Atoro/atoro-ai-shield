
import React from 'react';
import TestimonialSection from '@/components/shared/TestimonialSection';

const testimonials = [
  {
    quote: "Atoro guided us through the entire ISO 42001 certification process with expertise and efficiency. Their framework approach made implementation straightforward.",
    author: "David Keller",
    title: "Chief AI Officer",
    company: "Neuron Analytics",
    rating: 5
  },
  {
    quote: "The ISO 42001 implementation program provided by Atoro was comprehensive and tailored to our specific needs. They truly understand AI governance.",
    author: "Sarah Johnson",
    title: "Head of Compliance",
    company: "TechForward",
    rating: 4.5
  }
];

const TestimonialsSection = () => {
  return (
    <TestimonialSection 
      testimonials={testimonials}
      title="ISO 42001 Success Stories"
      description="See how we've helped companies achieve ISO 42001 certification"
      variant="carousel"
      showRatings={true}
      bgColor="bg-gray-50"
    />
  );
};

export default TestimonialsSection;
