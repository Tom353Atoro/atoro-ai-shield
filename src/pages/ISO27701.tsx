
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';
import LogoCarousel from '@/components/shared/LogoCarousel';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';

// Import ISO 27701 specific components
import HeroSection from '@/components/iso27701/HeroSection';
import ProcessSection from '@/components/iso27701/ProcessSection';
import BenefitsSection from '@/components/iso27701/BenefitsSection';
import CTASection from '@/components/iso27701/CTASection';

const ISO27701 = () => {
  // ISO 27701 specific testimonials
  const isoTestimonials = [
    {
      quote: "Atoro's ISO 27701 implementation process was structured and efficient. Their team's expertise helped us extend our existing ISO 27001 certification with minimal disruption.",
      author: "James Wilson",
      title: "Information Security Officer",
      company: "DataSecure Technologies",
      rating: 5
    }, {
      quote: "The gap assessment provided by Atoro gave us clear visibility into what we needed to address for ISO 27701. Their guidance throughout the certification process was invaluable.",
      author: "Elena Martinez",
      title: "Privacy Director",
      company: "CloudPrivacy Solutions",
      rating: 4.5
    }, {
      quote: "Implementing ISO 27701 with Atoro has significantly streamlined our approach to privacy management and helped us meet multiple compliance requirements simultaneously.",
      author: "Michael Chang",
      title: "CTO",
      company: "SecureData Systems",
      rating: 5
    }
  ];

  // Client logos
  const clientLogos = [
    {
      id: 1,
      name: "DataCorp",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png"
    },
    {
      id: 2,
      name: "Innovex",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png"
    },
    {
      id: 3,
      name: "PrivacyTech",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png"
    },
    {
      id: 4,
      name: "SecureTech",
      imagePath: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png"
    },
    {
      id: 5,
      name: "CloudNet",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png"
    }
  ];
  
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Client logos */}
      <LogoCarousel 
        logos={clientLogos} 
        title="Trusted by Leading Organizations" 
        description="We've helped companies across industries achieve ISO 27701 certification"
        className="bg-gray-50"
      />

      {/* Implementation Process Section */}
      <ProcessSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Customer Testimonials - Updated to use AnimatedTestimonials */}
      <AnimatedTestimonials 
        testimonials={isoTestimonials} 
        title="What Our Clients Say" 
        description="Read how we've helped organizations implement ISO 27701 and strengthen their privacy posture."
        badgeText="ISO 27701 Excellence"
        bgColor="bg-white" 
      />

      {/* CTA Section */}
      <CTASection />
    </ServiceLayout>
  );
};

export default ISO27701;
