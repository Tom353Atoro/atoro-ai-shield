import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import GDPROverview from '@/components/gdpr/GDPROverview';
import GDPRBenefits from '@/components/gdpr/GDPRBenefits';
import GDPRProcess from '@/components/gdpr/GDPRProcess';
import GDPRFAQ from '@/components/gdpr/GDPRFAQ';
import GDPRCTA from '@/components/gdpr/GDPRCTA';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const GDPRCompliance = () => {
  // GDPR specific testimonials
  const gdprTestimonials = [
    {
      quote: "Atoro's GDPR implementation saved us countless hours and helped us avoid potential fines. Their expertise in applying the regulations to our specific business was invaluable.",
      author: "Maria Schmidt",
      title: "DPO",
      company: "DataTrust Inc",
      rating: 5
    }, {
      quote: "The GDPR gap analysis Atoro performed was thorough and pragmatic. We now have a clear roadmap to compliance that aligns with our business goals.",
      author: "Thomas Beaumont",
      title: "CIO",
      company: "CloudSecure",
      rating: 4.5
    }, {
      quote: "Working with Atoro on our GDPR compliance program gave us confidence when expanding into European markets. Their ongoing support has been excellent.",
      author: "Sarah Johnson",
      title: "General Counsel",
      company: "TechInnovate",
      rating: 5
    }
  ];

  // Client logos for the client logos section
  const clientLogos = [
    {
      id: 1,
      name: "TechCorp",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png"
    },
    {
      id: 2,
      name: "Innovex",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png"
    },
    {
      id: 3,
      name: "DataFlow",
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
    <ServicePageTemplate
      heroProps={{
        title: <><span className="text-atoro-green">GDPR Compliance</span> for SaaS Companies</>,
        description: "Transform complex GDPR requirements into practical, business-friendly solutions that protect user data while enabling your business to thrive in the European market.",
        primaryButtonText: "Schedule GDPR Assessment",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/resources/gdpr-guide",
        imageUrl: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
        badgeText: "GDPR Compliance",
        backgroundClass: "bg-gradient-to-br from-atoro-teal to-black"
      }}
      clientLogosData={clientLogos}
      clientLogosTitle="Trusted by Leading SaaS Companies"
      clientLogosDescription="We've helped companies of all sizes achieve and maintain GDPR compliance"
      serviceSections={
        <>
          {/* Overview Section */}
          <GDPROverview />
          
          {/* Benefits Section */}
          <GDPRBenefits />
          
          {/* Process Section */}
          <GDPRProcess />
          
          {/* Testimonials after process */}
          <AnimatedTestimonials 
            testimonials={gdprTestimonials} 
            title="What Our Clients Say"
            description="Read how we've helped companies achieve GDPR compliance while growing their business."
            badgeText="GDPR Success Stories"
            bgColor="bg-white"
          />
        </>
      }
      testimonials={undefined}
      faqSection={<GDPRFAQ />}
      ctaSection={<GDPRCTA />}
    />
  );
};

export default GDPRCompliance;
