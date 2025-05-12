import React from 'react';
import { Shield, UserCog, Database } from 'lucide-react';
import StandardServicePage from '@/components/services/StandardServicePage';
import StandardOverviewSection from '@/components/services/StandardOverviewSection';
import StandardBenefitsSection from '@/components/services/StandardBenefitsSection';
import StandardProcessSection from '@/components/services/StandardProcessSection';
import StandardFAQSection from '@/components/services/StandardFAQSection';
import StandardCTASection from '@/components/services/StandardCTASection';
import {
  TestimonialItem,
  ClientLogoItem,
  OverviewFeature,
  BenefitItem,
  ProcessStep,
  FAQItem,
  SEOProps
} from '@/types';

/**
 * Virtual DPO Service Page
 * 
 * Standardized implementation of the Virtual DPO service page using the
 * established component architecture.
 */
const VDPO: React.FC = () => {
  // SEO metadata
  const seoData: SEOProps = {
    pageTitle: "Virtual Data Protection Officer (vDPO) Service | Atoro AI Shield",
    metaDescription: "Get qualified privacy leadership without the cost of a full-time hire. Our Virtual DPO service provides the expertise you need to navigate privacy regulations.",
    canonicalUrl: "https://www.atoroaishield.com/services/data-privacy/vdpo",
    ogImageUrl: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg"
  };

  // VDPO specific testimonials
  const testimonials: TestimonialItem[] = [
    {
      quote: "Having Atoro's Virtual DPO service has given us peace of mind knowing our privacy compliance is in expert hands without the cost of a full-time hire.",
      author: "Claire Thompson",
      title: "COO",
      company: "SaaSPlatform",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      rating: 5
    }, 
    {
      quote: "Our Virtual DPO from Atoro helped us navigate complex GDPR requirements while scaling our European operations. Their expertise has been invaluable.",
      author: "Michael Reeves",
      title: "CTO",
      company: "DataFlow",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      rating: 4.5
    }, 
    {
      quote: "The ongoing support from our Virtual DPO has transformed our approach to privacy. They've helped us build privacy into our product development process.",
      author: "Emma Larsson",
      title: "Head of Product",
      company: "PrivacyTech",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      rating: 5
    }
  ];

  // Client logos data
  const clientLogos: ClientLogoItem[] = [
    {
      id: 1,
      name: "TechCorp",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      altText: "TechCorp logo"
    },
    {
      id: 2,
      name: "Innovex",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png",
      altText: "Innovex logo"
    },
    {
      id: 3,
      name: "DataFlow",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      altText: "DataFlow logo"
    },
    {
      id: 4,
      name: "SecureTech",
      imagePath: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png",
      altText: "SecureTech logo"
    },
    {
      id: 5,
      name: "CloudNet",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png",
      altText: "CloudNet logo"
    }
  ];
  
  // Overview section features
  const overviewFeatures: OverviewFeature[] = [
    {
      icon: Shield,
      title: "Privacy Expertise",
      description: "Get access to qualified data protection professionals who understand privacy regulations and how to implement them effectively.",
      iconColor: "text-atoro-blue"
    },
    {
      icon: UserCog,
      title: "Flexible Support",
      description: "Our Virtual DPO service scales with your business needs, providing the right level of support without full-time overhead costs.",
      iconColor: "text-atoro-green"
    },
    {
      icon: Database,
      title: "GDPR Compliance",
      description: "Meet your GDPR Article 37 requirements for designating a Data Protection Officer with our certified privacy professionals.",
      iconColor: "text-atoro-teal"
    }
  ];

  // Benefits section data
  const benefits: BenefitItem[] = [
    {
      title: "Cost Efficiency",
      description: "Access DPO expertise at a fraction of the cost of hiring a full-time Data Protection Officer."
    },
    {
      title: "Reduced Compliance Risk",
      description: "Stay compliant with evolving privacy regulations through continuous expert guidance and monitoring."
    },
    {
      title: "Accelerated Privacy Program",
      description: "Implement effective privacy practices faster with proven methodologies and ready-to-use templates."
    },
    {
      title: "Business Continuity",
      description: "Maintain consistent privacy oversight without disruptions from staff turnover or absences."
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "Initial Assessment",
      description: "We evaluate your current privacy practices, data processing activities, and compliance needs to create a tailored approach."
    },
    {
      stepNumber: 2,
      title: "Privacy Program Design",
      description: "We develop privacy policies, procedures, and documentation aligned with your business operations and relevant regulations."
    },
    {
      stepNumber: 3,
      title: "Implementation Support",
      description: "We help you implement privacy controls, data subject request processes, and breach response protocols."
    },
    {
      stepNumber: 4,
      title: "Staff Training",
      description: "We provide role-specific privacy training to ensure your team understands their responsibilities."
    },
    {
      stepNumber: 5,
      title: "Ongoing Management",
      description: "We deliver continuous oversight, conducting periodic reviews and providing guidance on privacy matters as they arise."
    }
  ];

  // FAQ section data
  const faqs: FAQItem[] = [
    {
      question: "What exactly does a Virtual DPO do?",
      answer: "A Virtual DPO serves as your organization's Data Protection Officer, helping you comply with privacy regulations like GDPR. This includes monitoring compliance, providing advice on data protection impact assessments, training staff, cooperating with supervisory authorities, and serving as a contact point for data subjects and authorities."
    },
    {
      question: "How is a Virtual DPO different from a consultant?",
      answer: "Unlike a one-time consultant, a Virtual DPO provides ongoing support and takes formal responsibility as your designated DPO. We become an extension of your team, available for regular activities and advice while fulfilling the statutory role required by GDPR Article 37."
    },
    {
      question: "Do we legally need a DPO?",
      answer: "Under GDPR, you need a DPO if: (1) you're a public authority, (2) your core activities require regular and systematic monitoring of individuals on a large scale, or (3) you process special categories of data on a large scale. Even if not legally required, many organizations voluntarily appoint a DPO as a best practice."
    },
    {
      question: "How much time will our team need to spend working with the Virtual DPO?",
      answer: "We design our service to be efficient with your team's time. Typically, we require 2-4 hours per week from key stakeholders during initial setup, then 1-2 hours monthly for regular activities. We can adjust based on your specific needs and compliance requirements."
    },
    {
      question: "Can a Virtual DPO help with privacy compliance outside the EU?",
      answer: "Yes, our Virtual DPOs are knowledgeable about various privacy regulations worldwide, including CCPA/CPRA (California), LGPD (Brazil), PIPEDA (Canada), and other emerging privacy frameworks. We can help you develop a global privacy program that addresses multiple jurisdictions."
    }
  ];

  return (
    <StandardServicePage
      seo={seoData}
      
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
      
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by Leading SaaS Companies"
      clientLogosDescription="We've helped companies of all sizes implement effective privacy programs with our Virtual DPO service"
      
      overviewSection={
        <StandardOverviewSection
          badgeText="What is a Virtual DPO?"
          title="Virtual Data Protection Officer"
          description="Our Virtual DPO service provides the privacy expertise you need to meet regulatory requirements and build trust with customers, without the overhead of a full-time hire."
          features={overviewFeatures}
        />
      }
      
      benefitsSection={
        <StandardBenefitsSection
          badgeText="Why Virtual DPO"
          title="Benefits of Our Virtual DPO Service"
          description="Our Virtual DPO service delivers significant advantages compared to hiring a full-time DPO or managing privacy in-house."
          benefits={benefits}
          imageUrl="/lovable-uploads/vdpo-benefits.png"
          imageAlt="Virtual DPO benefits illustration"
        />
      }
      
      processSection={
        <StandardProcessSection
          badgeText="Our Approach"
          title="How Our Virtual DPO Service Works"
          description="We provide a structured yet flexible approach to privacy compliance that adapts to your business needs."
          steps={processSteps}
        />
      }
      
      testimonials={testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Read how our Virtual DPO service has helped companies maintain privacy compliance while focusing on their core business."
      testimonialsBadgeText="Virtual DPO Success Stories"
      
      faqSection={
        <StandardFAQSection
          badgeText="Virtual DPO FAQ"
          title="Frequently Asked Questions"
          description="Get answers to common questions about our Virtual DPO service."
          faqs={faqs}
        />
      }
      
      ctaSection={
        <StandardCTASection
          badgeText="Get Started"
          title={<>Ready to <span className="text-atoro-green">Strengthen</span> Your Privacy Program?</>}
          description="Book a free consultation with our privacy experts to discuss your needs and how our Virtual DPO service can help."
          primaryButtonText="Schedule vDPO Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/resources/vdpo-guide"
          imageUrl="/lovable-uploads/vdpo-cta.png"
        />
      }
    />
  );
};

export default VDPO; 