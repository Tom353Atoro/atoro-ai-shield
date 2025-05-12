import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

interface VAIGOProps {}

const VAIGO: React.FC<VAIGOProps> = () => {
  // VAIGO specific testimonials
  const vaigoTestimonials = [
    {
      quote: "Atoro's virtual AI Governance Officer service has been instrumental in helping us implement responsible AI practices while maintaining our development velocity.",
      author: "Elena Rodriguez",
      title: "CTO",
      company: "AI Solutions Inc",
      rating: 5
    }, {
      quote: "Our vAIGO consultant helped us navigate complex regulatory requirements for our machine learning products, saving us significant time and potential compliance issues.",
      author: "Michael Chang",
      title: "Head of AI",
      company: "TechInnovate",
      rating: 4.5
    }, {
      quote: "Having Atoro's expertise as our virtual AI Governance Officer made all the difference in building trust with our enterprise clients who were concerned about AI ethics.",
      author: "Sophia Williams",
      title: "CEO",
      company: "DataSmart Analytics",
      rating: 5
    }
  ];

  // Client logos for the client logos section
  const clientLogos = [
    {
      id: 1,
      name: "AI Solutions Inc",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png"
    },
    {
      id: 2,
      name: "TechInnovate",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png"
    },
    {
      id: 3,
      name: "DataSmart Analytics",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png"
    },
    {
      id: 4,
      name: "AIEthics",
      imagePath: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png"
    },
    {
      id: 5,
      name: "ML Innovations",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png"
    }
  ];
  
  return (
    <ServicePageTemplate
      heroProps={{
        title: <>Virtual <span className="text-atoro-teal">AI Governance Officer</span></>,
        description: "Get expert AI governance leadership without the cost of a full-time hire. Our Virtual AI Governance Officer (vAIGO) service provides the expertise you need to implement responsible AI practices.",
        primaryButtonText: "Schedule vAIGO Consultation",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/resources/vaigo-guide",
        imageUrl: "/lovable-uploads/ai-governance-hero.jpg",
        badgeText: "vAIGO Service",
        backgroundClass: "bg-gradient-to-br from-atoro-teal to-black"
      }}
      clientLogosData={clientLogos}
      clientLogosTitle="Trusted by AI Innovators"
      clientLogosDescription="We've helped companies of all sizes implement ethical AI systems with our vAIGO service"
      serviceSections={
        <>
          {/* Testimonials */}
          <AnimatedTestimonials 
            testimonials={vaigoTestimonials} 
            title="What Our Clients Say"
            description="Read how our vAIGO service has helped companies maintain responsible AI practices while focusing on innovation."
            badgeText="vAIGO Success Stories"
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

export default VAIGO; 