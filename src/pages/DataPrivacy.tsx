
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCTA from '@/components/services/ServiceCTA';
import FeaturedServiceSection from '@/components/data-privacy/FeaturedServiceSection';
import ServicesSection from '@/components/data-privacy/ServicesSection';
import ProcessSection from '@/components/data-privacy/ProcessSection';

const DataPrivacy = () => {
  return (
    <Layout>
      {/* Using our unified ServiceHero component */}
      <ServiceHero 
        accentText="Privacy by Design"
        title="Not Afterthought"
        subtitle="Turn complex privacy regulations into a competitive advantage. Our data privacy solutions handle compliance while you focus on building your product."
        primaryButtonText="Request Privacy Assessment"
        primaryButtonLink="#contact"
        imageUrl="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg"
      />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Featured Service Section */}
      <FeaturedServiceSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Using our unified ServiceCTA component */}
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
