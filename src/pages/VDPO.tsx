import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const VDPO = () => {
  // VDPO specific testimonials
  const vdpoTestimonials = [
    {
      quote: "Having Atoro's Virtual DPO service has given us peace of mind knowing our privacy compliance is in expert hands without the cost of a full-time hire.",
      author: "Claire Thompson",
      title: "COO",
      company: "SaaSPlatform",
      rating: 5
    }, {
      quote: "Our Virtual DPO from Atoro helped us navigate complex GDPR requirements while scaling our European operations. Their expertise has been invaluable.",
      author: "Michael Reeves",
      title: "CTO",
      company: "DataFlow",
      rating: 4.5
    }, {
      quote: "The ongoing support from our Virtual DPO has transformed our approach to privacy. They've helped us build privacy into our product development process.",
      author: "Emma Larsson",
      title: "Head of Product",
      company: "PrivacyTech",
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
        title: <><span className="text-atoro-blue">Virtual DPO</span> Service</>,
        description: "Get qualified privacy leadership without the cost of a full-time hire. Our Virtual DPO service provides the expertise you need to navigate complex privacy regulations and protect your business.",
        primaryButtonText: "Schedule vDPO Consultation",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/resources/vdpo-guide",
        imageUrl: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
        badgeText: "Virtual DPO Service",
        backgroundClass: "bg-gradient-to-br from-atoro-blue to-black"
      }}
      clientLogosData={clientLogos}
      clientLogosTitle="Trusted by Leading SaaS Companies"
      clientLogosDescription="We've helped companies of all sizes implement effective privacy programs with our Virtual DPO service"
      serviceSections={
        <>
          {/* Testimonials */}
          <AnimatedTestimonials 
            testimonials={vdpoTestimonials} 
            title="What Our Clients Say"
            description="Read how our Virtual DPO service has helped companies maintain privacy compliance while focusing on their core business."
            badgeText="Virtual DPO Success Stories"
            bgColor="bg-white"
          />
        </>
      }
      testimonials={undefined}
      faqSection={undefined}
      ctaSection={undefined}
    />
  );
};

export default VDPO; 