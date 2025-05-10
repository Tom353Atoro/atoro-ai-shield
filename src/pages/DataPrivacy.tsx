
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceCTA from '@/components/services/ServiceCTA';
import HeroSection from '@/components/data-privacy/HeroSection';
import ServicesSection from '@/components/data-privacy/ServicesSection';
import FeaturedServiceSection from '@/components/data-privacy/FeaturedServiceSection';
import ApproachSection from '@/components/data-privacy/ApproachSection';
import ClientSection from '@/components/data-privacy/ClientSection';
import TestimonialsSection from '@/components/data-privacy/TestimonialsSection';

const DataPrivacy = () => {
  return (
    <Layout>
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
