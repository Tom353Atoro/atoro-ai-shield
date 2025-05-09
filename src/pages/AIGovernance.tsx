
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCTA from '@/components/services/ServiceCTA';
import ISO42001Section from '@/components/ai-governance/ISO42001Section';
import RiskAssessmentSection from '@/components/ai-governance/RiskAssessmentSection';
import FeaturedServiceSection from '@/components/ai-governance/FeaturedServiceSection';
import ServicesSection from '@/components/ai-governance/ServicesSection';
import LogoBanner from '@/components/home/LogoBanner';
import TestimonialSection from '@/components/shared/TestimonialSection';

const testimonials = [
  {
    quote: "Atoro's AI governance service helped us build a responsible AI framework that satisfied both our leadership and EU regulators. Their ISO 42001 expertise was invaluable.",
    author: "Sophia Rodriguez",
    title: "CTO",
    company: "DataSync AI",
    rating: 5
  },
  {
    quote: "We were concerned about AI compliance but didn't know where to start. Atoro provided a clear roadmap that was both practical and comprehensive.",
    author: "Michael Chen",
    title: "Head of AI Products",
    company: "NeuraTech",
    rating: 5
  },
  {
    quote: "Working with Atoro made our AI risk assessment process smooth and thorough. Their insights helped us prevent potential issues before deployment.",
    author: "Emma Watson",
    title: "CISO",
    company: "QuantumSoft",
    rating: 4.5
  }
];

const AIGovernance = () => {
  return (
    <Layout>
      {/* Updated to use the unified ServiceHero component */}
      <ServiceHero 
        accentText="Innovate"
        title="with Confidence"
        subtitle="ISO 42001 certification support and virtual AI Governance Officer (vAIGO) services that keep your machine-learning features ethical, secure, and compliant."
        primaryButtonText="AI Risk Assessment"
        primaryButtonLink="/services/ai-governance/risk-assessment"
        secondaryButtonText="Explore AI Services"
        secondaryButtonLink="#services"
        imageUrl="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg"
      />
      
      {/* Client Logos */}
      <section className="py-12 bg-gray-50">
        <LogoBanner />
      </section>
      
      {/* ISO42001 Section */}
      <ISO42001Section />
      
      {/* Risk Assessment Section */}
      <RiskAssessmentSection />
      
      {/* Featured Service Section */}
      <FeaturedServiceSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Testimonials */}
      <TestimonialSection 
        testimonials={testimonials}
        title="What Our Clients Say"
        description="See how we've helped SaaS companies implement robust AI governance frameworks"
        variant="grid"
        showRatings={true}
        bgColor="bg-white"
      />
      
      {/* CTA Section - Updated to use the unified ServiceCTA component */}
      <ServiceCTA 
        title="Ready for Responsible AI?"
        description="Let our AI governance experts help you implement a framework that ensures your AI systems are ethical, transparent, and compliant."
        primaryButtonText="Schedule a Consultation"
        primaryButtonId="ai-consultation-btn"
        secondaryButtonText="Download AI Governance Guide"
        secondaryButtonLink="/resources/ai-governance"
      />
    </Layout>
  );
};

export default AIGovernance;
