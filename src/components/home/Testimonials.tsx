
import React from 'react';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've always enjoyed working with the Atoro team. Their service has been professional and top quality while maintaining excellent communication.",
      author: "Yass Omar",
      title: "Head of Legal",
      company: "Heidi Health",
      avatarSrc: "/lovable-uploads/c3b2775f-5246-4ccc-b27c-85e69efbe307.png",
    },
    {
      quote: "The Atoro team kept us organized and communicated effectively. We met our GDPR compliance deadline within 12 weeks.",
      author: "Vanessa Liu",
      title: "CEO",
      company: "Sugarwork",
      avatarSrc: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
    },
    {
      quote: "They are professional, knowledgeable, and responsive. We felt confident in their expertise throughout the SOC2 certification process.",
      author: "Camil Blanaru",
      title: "CTO",
      company: "Prezly BV",
      avatarSrc: "/lovable-uploads/0587c9dd-34df-40fd-98e6-d1e687f36909.png",
    },
    {
      quote: "Atoro guided us through ISO 27001 certification with a hands-on approach. They kept us informed and fully prepared for the audit.",
      author: "Henrik Dannert",
      title: "CEO",
      company: "Heartpace",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
    },
  ];

  return (
    <AnimatedTestimonials 
      testimonials={testimonials}
      title="What Our Clients Say"
      description="Don't just take our word for it. See what our customers have to say about their experience working with Atoro Security."
      badgeText="Client Success Stories"
      bgColor="bg-gray-50"
    />
  );
};

export default Testimonials;
