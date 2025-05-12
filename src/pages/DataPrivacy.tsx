import React from 'react';
import PillarPageTemplate from '@/components/layout/PillarPageTemplate';
import ServicesSection from '@/components/data-privacy/ServicesSection';
import FeaturedServiceSection from '@/components/data-privacy/FeaturedServiceSection';
import ApproachSection from '@/components/data-privacy/ApproachSection';
import ClientSection from '@/components/data-privacy/ClientSection';
import CTASection from '@/components/data-privacy/CTASection';

const DataPrivacy = () => {
  // Extract testimonials from TestimonialsSection component
  const testimonials = [
    {
      quote: "Atoro transformed our privacy program from a compliance burden to a business advantage. Their practical approach made implementation straightforward.",
      author: "Jennifer Chen",
      title: "Chief Privacy Officer",
      company: "DataSecure",
      rating: 5
    },
    {
      quote: "The privacy compliance roadmap Atoro developed for us was clear, actionable, and tailored to our specific business needs.",
      author: "Michael Rodriguez",
      title: "General Counsel",
      company: "CloudProtect",
      rating: 4.5
    },
    {
      quote: "Atoro's privacy expertise helped us navigate complex regulations across multiple jurisdictions with confidence.",
      author: "Sarah Thompson",
      title: "CTO",
      company: "PrivacyShield",
      rating: 5
    }
  ];

  return (
    <PillarPageTemplate
      heroProps={{
        title: <><span className="text-atoro-green">Data Privacy</span> Solutions</>,
        description: "Navigate complex privacy regulations with confidence. Our data privacy expertise helps you protect customer data while maintaining business agility.",
        primaryButtonText: "Schedule Privacy Assessment",
        primaryButtonLink: "/contact",
        badgeText: "Privacy Solutions",
        backgroundClass: "bg-gradient-to-br from-atoro-blue to-atoro-teal"
      }}
      testimonials={testimonials}
      testimonialsBadgeText="Privacy Excellence"
      servicesSection={<ServicesSection />}
      featuredServiceSection={<FeaturedServiceSection />}
      approachSection={<ApproachSection />}
      clientSection={<ClientSection />}
      ctaSection={<CTASection />}
    />
  );
};

export default DataPrivacy;
