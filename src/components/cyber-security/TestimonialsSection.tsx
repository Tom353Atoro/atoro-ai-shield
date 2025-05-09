
import React from 'react';
import TestimonialSection from '@/components/shared/TestimonialSection';

const TestimonialsSection = () => {
  // Security-specific testimonials
  const securityTestimonials = [
    {
      quote: "Atoro's security assessment identified critical vulnerabilities our internal team had missed. Their remediation guidance was clear and actionable, significantly improving our security posture.",
      author: "Michael Zhang",
      title: "CTO",
      company: "CloudSecure",
      rating: 5
    }, {
      quote: "The Security Team as a Service model gave us enterprise-grade protection without the overhead of building an in-house security department. It's been transformative for our compliance journey.",
      author: "Sarah Johnson",
      title: "COO",
      company: "DataShield",
      rating: 4.5
    }, {
      quote: "Working with Atoro for our SOC 2 compliance was seamless. They guided us through the entire process and helped us achieve certification on our first attempt.",
      author: "David Rivera",
      title: "Head of Engineering",
      company: "SecureStack",
      rating: 5
    }
  ];

  return (
    <TestimonialSection 
      testimonials={securityTestimonials} 
      title="What Our Security Clients Say" 
      description="Read how we've helped companies like yours strengthen their security posture." 
      variant="featured" 
      showRatings={true} 
      bgColor="bg-white" 
    />
  );
};

export default TestimonialsSection;
