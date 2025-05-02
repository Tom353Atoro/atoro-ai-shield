
import React from 'react';
import TestimonialSection from '@/components/shared/TestimonialSection';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Atoro transformed our security posture in weeks, not months. Their expertise in both AI and security helped us implement robust safeguards without slowing down our development cycles.",
      author: "Sarah Chen",
      title: "CTO, TechVantage",
      rating: 5,
    },
    {
      quote: "Working with Atoro's vCISO service gave us enterprise-grade security leadership that we could never have afforded with a traditional in-house hire. Game-changer for our Series A journey.",
      author: "Marcus Johnson",
      title: "CEO, DataPulse",
      rating: 5,
    },
    {
      quote: "Their integrated approach to security, privacy, and AI governance helped us achieve multiple compliance certifications simultaneously, opening doors to enterprise clients.",
      author: "Elena Rodriguez",
      title: "COO, CloudStack",
      rating: 4.5,
    },
  ];

  return (
    <TestimonialSection 
      testimonials={testimonials}
      showRatings={true}
      variant="grid"
    />
  );
};

export default Testimonials;
