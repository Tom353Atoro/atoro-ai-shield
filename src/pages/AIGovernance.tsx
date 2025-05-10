
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import HeroSection from '@/components/ai-governance/HeroSection';
import ServicesSection from '@/components/ai-governance/ServicesSection';
import FeaturedServiceSection from '@/components/ai-governance/FeaturedServiceSection';
import ApproachSection from '@/components/ai-governance/ApproachSection';
import ClientSection from '@/components/ai-governance/ClientSection';
import TestimonialsSection from '@/components/ai-governance/TestimonialsSection';
import CTASection from '@/components/ai-governance/CTASection';

const AIGovernance = () => {
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
      
      {/* Client Logos */}
      <ClientSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
    </ServiceLayout>
  );
};

export default AIGovernance;
