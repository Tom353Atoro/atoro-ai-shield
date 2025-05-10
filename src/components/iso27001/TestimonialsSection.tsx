
import React from 'react';
import { Container } from '@/components/ui/Container';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Atoro's ISO 27001 implementation service was transformative. Their streamlined approach helped us achieve certification in just 11 weeks.",
      author: "Michael Chen",
      title: "CTO",
      company: "CloudSecure",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      date: "2024-03",
      rating: 5
    },
    {
      quote: "The ISO 27001 process with Atoro was incredibly efficient. Their team handled complex documentation and helped implement practical security controls.",
      author: "Sarah Johnson",
      title: "Head of Compliance",
      company: "DataShield",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      date: "2023-11",
      rating: 4.5
    },
    {
      quote: "As a fast-growing startup, we needed to get ISO 27001 certified quickly. Atoro delivered a tailored implementation that matched our specific needs.",
      author: "David Rodriguez",
      title: "CEO",
      company: "SecureStack",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      date: "2024-01",
      rating: 5
    }
  ];

  return (
    <AnimatedTestimonials 
      testimonials={testimonials}
      title="What Our Clients Say"
      description="Hear from SaaS companies that have successfully achieved ISO 27001 certification with our help."
      badgeText="ISO 27001 Excellence"
      bgColor="bg-gray-50"
    />
  );
};

export default TestimonialsSection;
