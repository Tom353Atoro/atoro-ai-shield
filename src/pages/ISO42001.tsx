import React from 'react';
import { Brain, Scale, CircuitBoard, CheckCircle } from 'lucide-react';
import StandardServicePage from '@/components/services/StandardServicePage';
import StandardOverviewSection from '@/components/services/StandardOverviewSection';
import StandardBenefitsSection from '@/components/services/StandardBenefitsSection';
import StandardProcessSection from '@/components/services/StandardProcessSection';
import StandardCTASection from '@/components/services/StandardCTASection';
import {
  TestimonialItem,
  ClientLogoItem,
  OverviewFeature,
  BenefitItem,
  ProcessStep,
  SEOProps
} from '@/types';

/**
 * ISO 42001 Service Page
 * 
 * Standardized implementation of the ISO 42001 service page using the
 * established component architecture.
 */
const ISO42001: React.FC = () => {
  // SEO metadata
  const seoData: SEOProps = {
    pageTitle: "ISO 42001 Implementation & Certification | Atoro AI Shield",
    metaDescription: "Deploy robust AI governance frameworks with our ISO 42001 implementation service, ensuring your AI systems meet international standards for trust and transparency.",
    canonicalUrl: "https://www.atoroaishield.com/services/ai-governance/iso-42001",
    ogImageUrl: "/lovable-uploads/iso42001-hero.jpg"
  };

  // ISO 42001 specific testimonials
  const testimonials: TestimonialItem[] = [
    {
      quote: "Atoro guided us through the entire ISO 42001 certification process with expertise and efficiency. Their approach made implementation straightforward.",
      author: "David Keller",
      title: "Chief AI Officer",
      company: "Neuron Analytics",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      rating: 5
    },
    {
      quote: "The ISO 42001 implementation program provided by Atoro was comprehensive and tailored to our specific needs.",
      author: "Sarah Johnson",
      title: "Head of Compliance",
      company: "TechForward",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      rating: 4.5
    },
    {
      quote: "Working with Atoro on our ISO 42001 certification was a game-changer for our AI governance approach. Their expertise helped us implement a robust framework that meets international standards.",
      author: "Michael Chen",
      title: "AI Ethics Director",
      company: "DataAI Systems",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      rating: 5
    }
  ];
  
  // Client logos data
  const clientLogos: ClientLogoItem[] = [
    {
      id: 1,
      name: "Neuron Analytics",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      altText: "Neuron Analytics logo"
    },
    {
      id: 2,
      name: "TechForward",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png",
      altText: "TechForward logo"
    },
    {
      id: 3,
      name: "DataAI Systems",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      altText: "DataAI Systems logo"
    },
    {
      id: 4,
      name: "AIEthics",
      imagePath: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png",
      altText: "AIEthics logo"
    },
    {
      id: 5,
      name: "ML Innovations",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png",
      altText: "ML Innovations logo"
    }
  ];
  
  // Overview section features
  const overviewFeatures: OverviewFeature[] = [
    {
      icon: Brain,
      title: "Ethical AI Development",
      description: "ISO 42001 provides a structured approach to developing and deploying AI systems that are ethical, unbiased, and responsible.",
      iconColor: "text-atoro-blue"
    },
    {
      icon: Scale,
      title: "Regulatory Alignment",
      description: "Stay ahead of emerging AI regulations like the EU AI Act by implementing a governance framework that aligns with global best practices.",
      iconColor: "text-atoro-green"
    },
    {
      icon: CircuitBoard,
      title: "Integrated Framework",
      description: "ISO 42001 integrates with existing management systems like ISO 27001, providing a cohesive approach to managing AI and information security.",
      iconColor: "text-atoro-teal"
    }
  ];

  // Benefits section data
  const benefits: BenefitItem[] = [
    {
      title: "Demonstrate AI Trustworthiness",
      description: "Build confidence with customers and partners by showing your commitment to responsible AI practices."
    },
    {
      title: "Align with Global Regulations",
      description: "Meet requirements of the EU AI Act and other emerging AI regulations through a recognized international standard."
    },
    {
      title: "Reduce AI Risk",
      description: "Identify and mitigate risks associated with AI system failures, bias, and ethical concerns."
    },
    {
      title: "Competitive Differentiation",
      description: "Stand out in the market as an organization committed to ethical AI development and deployment."
    },
    {
      title: "Improve AI Development",
      description: "Establish consistent AI development lifecycle processes and enhance data governance."
    },
    {
      title: "Enhanced Monitoring",
      description: "Implement robust monitoring of AI system performance and incorporate ethical considerations into design."
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "Gap Analysis",
      description: "We assess your current AI systems and governance practices against ISO 42001 requirements."
    },
    {
      stepNumber: 2,
      title: "Implementation Plan",
      description: "A customized roadmap is developed to address gaps and establish compliant AI governance."
    },
    {
      stepNumber: 3,
      title: "Documentation & Controls",
      description: "We help develop required policies, procedures, and technical controls for AI management."
    },
    {
      stepNumber: 4,
      title: "Audit & Certification",
      description: "Our team guides you through the certification audit process with confidence."
    }
  ];

  return (
    <StandardServicePage
      seo={seoData}
      
      heroProps={{
        title: <><span className="text-atoro-green">ISO 42001</span> Implementation</>,
        description: "Deploy robust AI governance frameworks with our ISO 42001 implementation service, ensuring your AI systems meet international standards for trust and transparency.",
        primaryButtonText: "Book a Consultation",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/resources/iso-42001-guide",
        imageUrl: "/lovable-uploads/iso42001-hero.jpg",
        badgeText: "AI Governance",
        backgroundClass: "bg-gradient-to-br from-atoro-teal to-atoro-blue"
      }}
      
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by AI Innovators"
      clientLogosDescription="We've helped organizations implement ISO 42001 to establish responsible AI governance"
      
      overviewSection={
        <StandardOverviewSection
          badgeText="Understanding ISO 42001"
          title="What is ISO 42001?"
          description="ISO 42001 is the world's first global standard for artificial intelligence management systems. It provides a framework for organizations to demonstrate responsible and ethical AI governance, ensuring your AI systems are trustworthy, transparent, and aligned with regulations."
          features={overviewFeatures}
        />
      }
      
      benefitsSection={
        <StandardBenefitsSection
          badgeText="ISO 42001 Benefits"
          title="Why Implement ISO 42001?"
          description="ISO 42001 provides a framework for responsible AI management that builds trust and ensures compliance."
          benefits={benefits}
          imageUrl="/lovable-uploads/iso42001-benefits.png"
          imageAlt="ISO 42001 benefits illustration"
        />
      }
      
      processSection={
        <StandardProcessSection
          badgeText="ISO 42001"
          title="ISO 42001 Implementation Process"
          description="Our structured approach ensures your AI management system meets ISO 42001 requirements efficiently."
          steps={processSteps}
        />
      }
      
      testimonials={testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Hear from organizations that have successfully implemented ISO 42001 with our guidance."
      testimonialsBadgeText="ISO 42001 Success Stories"
      
      ctaSection={
        <StandardCTASection
          badgeText="Get Started"
          title={<>Ready to <span className="text-atoro-green">Implement</span> ISO 42001?</>}
          description="Contact us today to learn how our ISO 42001 implementation service can help you establish responsible AI governance."
          primaryButtonText="Book a Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="Download ISO 42001 Guide"
          secondaryButtonLink="/resources/iso-42001-guide"
          imageUrl="/lovable-uploads/iso42001-cta.png"
        />
      }
    />
  );
};

export default ISO42001;
