
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceCTA from '@/components/services/ServiceCTA';
import FeaturedServiceSection from '@/components/data-privacy/FeaturedServiceSection';
import ServicesSection from '@/components/data-privacy/ServicesSection';
import ProcessSection from '@/components/data-privacy/ProcessSection';
import HeroSection from '@/components/data-privacy/HeroSection';
import TestimonialsSection from '@/components/data-privacy/TestimonialsSection';

const DataPrivacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Featured Service Section */}
      <FeaturedServiceSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <ServiceCTA 
        title="Turn Privacy into a Competitive Advantage"
        description="With Atoro handling your data privacy, you can reassure customers and regulators alike – all while keeping your focus on building a great product."
        primaryButtonText="Book a Free Consultation"
        primaryButtonId="privacy-consultation-btn"
        secondaryButtonText="Get a Free Privacy Checklist"
        secondaryButtonLink="/resources/privacy-assessment"
      />
    </Layout>
  );
};

export default DataPrivacy;
