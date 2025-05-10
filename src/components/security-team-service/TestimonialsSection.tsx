
import React from 'react';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const TestimonialsSection = () => {
  // Service-specific testimonials
  const serviceTestimonials = [{
    quote: "Atoro's Security Team as a Service model gave us enterprise-grade protection without the overhead of building an in-house security team.",
    author: "Sarah Johnson",
    title: "COO",
    company: "DataShield",
    rating: 5
  }, {
    quote: "Working with Atoro for our SOC 2 compliance was seamless. Their team guided us through the entire process, helping us achieve certification.",
    author: "David Rivera",
    title: "Head of Engineering",
    company: "SecureStack",
    rating: 5
  }, {
    quote: "Having Atoro manage our Drata implementation saved us countless hours and helped us close enterprise deals that required SOC 2 certification.",
    author: "Michael Zhang",
    title: "CTO",
    company: "CloudSecure",
    rating: 4.5
  }];

  return (
    <AnimatedTestimonials 
      testimonials={serviceTestimonials} 
      title="What Our Clients Say" 
      description="Read how we've helped companies like yours build world-class security programs" 
      badgeText="Security Excellence" 
      bgColor="bg-white" 
    />
  );
};

export default TestimonialsSection;
