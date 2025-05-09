
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';

// Import refactored section components
import HeroSection from '@/components/cyber-security/HeroSection';
import ClientSection from '@/components/cyber-security/ClientSection';
import ServicesSection from '@/components/cyber-security/ServicesSection';
import FeaturedServiceSection from '@/components/cyber-security/FeaturedServiceSection';
import TestimonialsSection from '@/components/cyber-security/TestimonialsSection';
import CTASection from '@/components/cyber-security/CTASection';

const CyberSecurity = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Client logos */}
      <ClientSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Security Team as a Service - Featured Service */}
      <FeaturedServiceSection />

      {/* Customer Testimonials - Security specific */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </ServiceLayout>
  );
};

export default CyberSecurity;
