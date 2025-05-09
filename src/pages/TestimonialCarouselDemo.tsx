
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import TestimonialCarousel from '@/components/shared/testimonials/TestimonialCarousel';

const TestimonialCarouselDemo = () => {
  const testimonials = [
    {
      quote: "I've always enjoyed working with the Atoro team. From Tom all the way through to the rest of the team, their service has been professional and top quality while always ensuring excellent communication and feedback.",
      author: "Yass Omar",
      title: "Head of Legal",
      company: "Heidi Health",
      avatarSrc: "/lovable-uploads/c3b2775f-5246-4ccc-b27c-85e69efbe307.png",
      date: "2024-03-15",
    },
    {
      quote: "The Atoro team were fantastic to work with - they kept us organised and communicated effectively over Slack, email, and weekly check-ins so that we could meet our target deadline to be GDPR compliant within 12 weeks.",
      author: "Vanessa Liu",
      title: "CEO",
      company: "Sugarwork",
      avatarSrc: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      date: "2023-11-10",
    },
    {
      quote: "They are professional, knowledgeable, and responsive. We consistently felt confident in their strong expertise and appreciated their guidance throughout the entire SOC2 certification process.",
      author: "Camil Blanaru",
      title: "CTO",
      company: "Prezly BV",
      avatarSrc: "/lovable-uploads/0587c9dd-34df-40fd-98e6-d1e687f36909.png",
      date: "2024-01-22",
    },
    {
      quote: "Atoro guided us through the entire ISO 27001 certification process with a hands-on approach. Their team were thorough, kept us informed throughout, and ensured we were fully prepared for the certification audit.",
      author: "Henrik Dannert",
      title: "CEO",
      company: "Heartpace",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      date: "2024-02-05",
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Auto-rotating Testimonial Carousel</h2>
            <p className="text-lg text-gray-700">
              This carousel automatically rotates, pauses on hover/touch, and lazy loads images.
              It includes navigation indicators and displays testimonials with avatar, quote, name, role, and date.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel testimonials={testimonials} autoplayDelay={5000} />
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default TestimonialCarouselDemo;
