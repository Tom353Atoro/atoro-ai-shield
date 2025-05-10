
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import HeroSection from '@/components/data-privacy/HeroSection';
import ServicesSection from '@/components/data-privacy/ServicesSection';
import FeaturedServiceSection from '@/components/data-privacy/FeaturedServiceSection';
import ApproachSection from '@/components/data-privacy/ApproachSection';
import ClientSection from '@/components/data-privacy/ClientSection';
import TestimonialsSection from '@/components/data-privacy/TestimonialsSection';
import CTASection from '@/components/data-privacy/CTASection';

const DataPrivacy = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Featured Service Section */}
      <FeaturedServiceSection />
      
      {/* Approach Section */}
      <ApproachSection />
      
      {/* Client Section */}
      <ClientSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
    </ServiceLayout>
  );
};

export default DataPrivacy;
