
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Helmet } from 'react-helmet';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const TestimonialCarouselDemo = () => {
  const testimonials = [
    {
      quote: "Atoro transformed our approach to compliance. Their team made the ISO 27001 process straightforward and efficient.",
      author: "Sarah Johnson",
      title: "CTO",
      company: "TechNova Inc.",
      rating: 5
    },
    {
      quote: "The audit preparation was excellent. Atoro's methodology saved us months of work and stress.",
      author: "Michael Chen",
      title: "Head of Security",
      company: "DataSphere",
      rating: 4.5
    },
    {
      quote: "Working with Atoro on our compliance journey was the best decision we made this year. Highly recommended.",
      author: "Elena Rodriguez",
      title: "CEO",
      company: "CloudSecure",
      rating: 5
    }
  ];
  
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Testimonial Carousel Demo | Internal | Atoro</title>
      </Helmet>
      <Container className="py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Testimonial Carousel Demo</h1>
        
        <div className="mb-16">
          <AnimatedTestimonials 
            testimonials={testimonials} 
            title="What Our Clients Say"
            description="Read how we've helped companies like yours achieve their security and compliance goals"
            badgeText="Client Success Stories"
          />
        </div>
      </Container>
    </Layout>
  );
};

export default TestimonialCarouselDemo;
