
import React from 'react';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've always enjoyed working with the Atoro team. From Tom all the way through to the rest of the team, their service has been professional and top quality while always ensuring excellent communication and feedback.",
      author: "Yass Omar",
      title: "Head of Legal",
      company: "Heidi Health",
      avatarSrc: "/lovable-uploads/c3b2775f-5246-4ccc-b27c-85e69efbe307.png",
    },
    {
      quote: "The Atoro team were fantastic to work with - they kept us organised and communicated effectively over Slack, email, and weekly check-ins so that we could meet our target deadline to be GDPR compliant within 12 weeks. They also helped answer direct questions posed by customers during security review processes.",
      author: "Vanessa Liu",
      title: "CEO",
      company: "Sugarwork",
      avatarSrc: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
    },
    {
      quote: "They are professional, knowledgeable, and responsive. We consistently felt confident in their strong expertise and appreciated their guidance throughout the entire SOC2 certification process.",
      author: "Camil Blanaru",
      title: "CTO",
      company: "Prezly BV",
      avatarSrc: "/lovable-uploads/0587c9dd-34df-40fd-98e6-d1e687f36909.png",
    },
    {
      quote: "Atoro guided us through the entire ISO 27001 certification process with a hands-on approach. Their team were thorough, kept us informed throughout, and ensured we were fully prepared for the certification audit. They are a great and knowledgeable team to work with. Always on time, care about details but also about having a friendly co-working atmosphere.",
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
