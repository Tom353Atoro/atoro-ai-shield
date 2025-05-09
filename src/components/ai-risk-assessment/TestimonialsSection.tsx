
import React from 'react';
import TestimonialSection from '@/components/shared/TestimonialSection';

const testimonials = [
  {
    quote: "The AI risk assessment identified crucial compliance gaps we would have missed. Atoro's methodical approach saved us from potential regulatory issues.",
    author: "Thomas Grant",
    title: "CIO",
    company: "Algorythm",
    rating: 5
  },
  {
    quote: "Comprehensive yet practical - their assessment translated complex AI risks into clear action items our development team could implement.",
    author: "Leila Martinez",
    title: "VP Engineering",
    company: "DataPoint",
    rating: 4.5
  }
];

const TestimonialsSection = () => {
  return (
    <TestimonialSection 
      testimonials={testimonials}
      title="Assessment Outcomes"
      description="Our AI risk assessments deliver tangible results for SaaS companies"
      variant="grid"
      showRatings={true}
      bgColor="bg-white"
    />
  );
};

export default TestimonialsSection;
