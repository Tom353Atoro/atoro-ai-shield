
import React from 'react';
import PillarPageTemplate from '@/components/layout/PillarPageTemplate';
import ServicesSection from '@/components/cyber-security/ServicesSection';
import FeaturedServiceSection from '@/components/cyber-security/FeaturedServiceSection';
import ApproachSection from '@/components/cyber-security/ApproachSection';
import CTASection from '@/components/cyber-security/CTASection';
import ClientSection from '@/components/cyber-security/ClientSection';

const CyberSecurity = () => {
  // Security-specific testimonials
  const testimonials = [
    {
      quote: "Atoro's security assessment identified critical vulnerabilities our internal team had missed. Their remediation guidance was clear and actionable.",
      author: "Michael Zhang",
      title: "CTO",
      company: "CloudSecure",
      rating: 5
    }, {
      quote: "The Security Team as a Service model gave us enterprise-grade protection without the overhead of building an in-house security department.",
      author: "Sarah Johnson",
      title: "COO",
      company: "DataShield",
      rating: 4.5
    }, {
      quote: "Working with Atoro for our SOC 2 compliance was seamless. They guided us through the entire process and helped us achieve certification.",
      author: "David Rivera",
      title: "Head of Engineering",
      company: "SecureStack",
      rating: 5
    }
  ];

  return (
    <PillarPageTemplate
      heroProps={{
        title: <><span className="text-atoro-green">Move Fast</span> with Confidence</>,
        description: "In the SaaS world, a single security slip-up can break customer trust. Our holistic cyber security solutions help you move quickly without compromising safety.",
        primaryButtonText: "Book a Security Assessment",
        primaryButtonLink: "/contact",
        badgeText: "Cyber Security",
        imageUrl: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
        backgroundClass: "bg-gradient-to-br from-atoro-dark-teal to-black"
      }}
      testimonials={testimonials}
      testimonialsTitle="What Our Security Clients Say"
      testimonialsDescription="Read how we've helped companies like yours strengthen their security posture."
      testimonialsBadgeText="Security Excellence"
      servicesSection={<ServicesSection />}
      featuredServiceSection={<FeaturedServiceSection />}
      approachSection={<ApproachSection />}
      clientSection={<ClientSection />}
      ctaSection={<CTASection />}
    />
  );
};

export default CyberSecurity;
