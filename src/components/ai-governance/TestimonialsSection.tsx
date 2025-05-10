
import React from 'react';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Atoro's AI governance service helped us build a responsible AI framework that satisfied both leadership and EU regulators.",
      author: "Sophia Rodriguez",
      title: "CTO",
      company: "DataSync AI",
      rating: 5
    },
    {
      quote: "We were concerned about AI compliance but didn't know where to start. Atoro provided a clear roadmap that was practical and comprehensive.",
      author: "Michael Chen",
      title: "Head of AI Products",
      company: "NeuraTech",
      rating: 5
    },
    {
      quote: "Working with Atoro made our AI risk assessment process smooth and thorough. Their insights helped us prevent potential issues.",
      author: "Emma Watson",
      title: "CISO",
      company: "QuantumSoft",
      rating: 4.5
    }
  ];

  return (
    <AnimatedTestimonials
      title="What Our Clients Say"
      description="See how we've helped SaaS companies implement robust AI governance frameworks"
      badgeText="AI Governance Excellence"
      testimonials={testimonials}
    />
  );
};

export default TestimonialsSection;
