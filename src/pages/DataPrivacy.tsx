
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import TestimonialSection from '@/components/shared/TestimonialSection';
import LogoBanner from '@/components/home/LogoBanner';

// Import refactored components
import HeroSection from '@/components/data-privacy/HeroSection';
import ServicesSection from '@/components/data-privacy/ServicesSection';
import FeaturedServiceSection from '@/components/data-privacy/FeaturedServiceSection';
import ProcessSection from '@/components/data-privacy/ProcessSection';
import CTASection from '@/components/data-privacy/CTASection';

const DataPrivacy = () => {
  // Privacy-specific testimonials
  const privacyTestimonials = [
    {
      quote: "Atoro's vDPO service transformed our approach to data privacy. They helped us navigate complex regulations while maintaining our development velocity.",
      author: "Emma Richardson",
      title: "CTO",
      company: "DataFocus",
      rating: 5
    }, {
      quote: "Working with Atoro gave us the privacy expertise we needed without hiring a full-time DPO. Their team handled GDPR compliance end-to-end, saving us countless hours.",
      author: "Daniel Chen",
      title: "CEO",
      company: "UserFirst",
      rating: 4.5
    }, {
      quote: "The documentation and processes Atoro implemented for our privacy program impressed even our most demanding enterprise clients during security reviews.",
      author: "Sophie Martinez",
      title: "COO",
      company: "CloudPrivacy",
      rating: 5
    }
  ];
  
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Client Logo Section */}
      <section className="py-12 bg-gray-50">
        <LogoBanner />
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Virtual DPO as a Service - Featured Service */}
      <FeaturedServiceSection />

      {/* Customer Testimonials - Privacy specific */}
      <TestimonialSection 
        testimonials={privacyTestimonials} 
        title="What Our Privacy Clients Say" 
        description="Read how we've helped companies like yours strengthen their privacy posture." 
        variant="featured" 
        showRatings={true} 
        bgColor="bg-white" 
      />

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <CTASection />
    </ServiceLayout>
  );
};

export default DataPrivacy;
