
import React from 'react';
import Layout from '@/components/layout/Layout';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const TestimonialCarouselDemo = () => {
  const testimonials = [
    {
      quote: "Atoro's ISO 27001 implementation service was transformative for our business. Their streamlined approach helped us achieve certification in just 11 weeks, and the process was surprisingly painless.",
      author: "Michael Chen",
      title: "CTO",
      company: "CloudSecure",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      date: "2024-03",
      rating: 5
    },
    {
      quote: "The ISO 27001 certification process with Atoro was incredibly efficient. Their team handled all the complex documentation and helped us implement practical security controls that made sense for our SaaS business.",
      author: "Sarah Johnson",
      title: "Head of Compliance",
      company: "DataShield",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      date: "2023-11",
      rating: 4.5
    },
    {
      quote: "As a fast-growing startup, we needed to get ISO 27001 certified quickly to close enterprise deals. Atoro delivered a tailored implementation that matched our specific needs and helped us achieve certification on our first attempt.",
      author: "David Rodriguez",
      title: "CEO",
      company: "SecureStack",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      date: "2024-01",
      rating: 5
    }
  ];

  return (
    <Layout>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Testimonial Carousel Demo</h1>
            <p className="text-lg text-gray-600">
              Showcasing our animated testimonials component.
            </p>
          </div>
        </div>
      </section>
      
      {/* Default Carousel */}
      <AnimatedTestimonials 
        testimonials={testimonials} 
        title="Default Animated Testimonials"
        description="The standard animated testimonials view with all default settings"
        bgColor="bg-white"
        badgeText="Default Style"
      />
      
      {/* Featured Variant */}
      <AnimatedTestimonials 
        testimonials={testimonials} 
        title="Featured Testimonials"
        description="The featured variant with larger testimonials"
        variant="featured"
        badgeText="Featured Style"
        bgColor="bg-gray-50"
      />
      
      {/* Grid Variant */}
      <AnimatedTestimonials 
        testimonials={testimonials}
        title="Grid Testimonials" 
        description="Testimonials arranged in a grid layout"
        variant="grid"
        badgeText="Grid Style"
        bgColor="bg-white"
      />
    </Layout>
  );
};

export default TestimonialCarouselDemo;
