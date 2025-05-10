
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';

// Import refactored section components
import HeroSection from '@/components/cyber-security/HeroSection';
import ServicesSection from '@/components/cyber-security/ServicesSection';
import FeaturedServiceSection from '@/components/cyber-security/FeaturedServiceSection';
import ApproachSection from '@/components/cyber-security/ApproachSection';
import ClientSection from '@/components/cyber-security/ClientSection';
import TestimonialsSection from '@/components/cyber-security/TestimonialsSection';
import CTASection from '@/components/cyber-security/CTASection';

const CyberSecurity = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Security Team as a Service - Featured Service */}
      <FeaturedServiceSection />

      {/* Approach Section */}
      <ApproachSection />

      {/* Client logos */}
      <ClientSection />

      {/* Customer Testimonials - Security specific */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </ServiceLayout>
  );
};

export default CyberSecurity;
