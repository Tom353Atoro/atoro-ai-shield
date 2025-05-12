import React from 'react';
import { Shield, Lock, FileText } from 'lucide-react';
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
 * ISO 27701 Service Page
 * 
 * Standardized implementation of the ISO 27701 service page using the
 * established component architecture.
 */
const ISO27701: React.FC = () => {
  // SEO metadata
  const seoData: SEOProps = {
    pageTitle: "ISO 27701 Privacy Implementation & Certification | Atoro AI Shield",
    metaDescription: "Extend your information security management system with privacy controls. Our experts guide you through the ISO 27701 implementation process.",
    canonicalUrl: "https://www.atoroaishield.com/services/cyber-security/iso-27701",
    ogImageUrl: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png"
  };

  // ISO 27701 specific testimonials
  const testimonials: TestimonialItem[] = [
    {
      quote: "Atoro's ISO 27701 implementation was structured and efficient. Their expertise helped us extend our ISO 27001 certification with minimal disruption.",
      author: "James Wilson",
      title: "Information Security Officer",
      company: "DataSecure Technologies",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      rating: 5
    }, 
    {
      quote: "The gap assessment provided by Atoro gave us clear visibility into what we needed to address for ISO 27701.",
      author: "Elena Martinez",
      title: "Privacy Director",
      company: "CloudPrivacy Solutions",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      rating: 4.5
    }, 
    {
      quote: "Implementing ISO 27701 with Atoro has significantly streamlined our approach to privacy management.",
      author: "Michael Chang",
      title: "CTO",
      company: "SecureData Systems",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      rating: 5
    }
  ];

  // Client logos data
  const clientLogos: ClientLogoItem[] = [
    {
      id: 1,
      name: "DataCorp",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      altText: "DataCorp logo"
    },
    {
      id: 2,
      name: "Innovex",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png",
      altText: "Innovex logo"
    },
    {
      id: 3,
      name: "PrivacyTech",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      altText: "PrivacyTech logo"
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
      title: "Privacy Framework",
      description: "ISO 27701 provides a framework for managing privacy information and extending your existing information security management system.",
      iconColor: "text-atoro-blue"
    },
    {
      icon: Lock,
      title: "GDPR Alignment",
      description: "The standard is designed to help organizations align with privacy regulations like GDPR, CCPA, and other data protection requirements.",
      iconColor: "text-atoro-green"
    },
    {
      icon: FileText,
      title: "Built on ISO 27001",
      description: "ISO 27701 extends ISO 27001 with privacy-specific controls, making it ideal for organizations that already have ISO 27001 certification.",
      iconColor: "text-atoro-teal"
    }
  ];

  // Benefits section data
  const benefits: BenefitItem[] = [
    {
      title: "Demonstrate Privacy Commitment",
      description: "Show stakeholders, clients, and regulators your organization's commitment to protecting personal information."
    },
    {
      title: "Regulatory Compliance",
      description: "Align with key privacy regulations like GDPR, CCPA, and others through a structured, certified approach."
    },
    {
      title: "Build on Existing ISO 27001",
      description: "Leverage your existing ISO 27001 implementation to efficiently add privacy controls without duplicating effort."
    },
    {
      title: "Competitive Advantage",
      description: "Differentiate your organization in the market by demonstrating certified privacy practices."
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "Gap Assessment",
      description: "We evaluate your current privacy practices against ISO 27701 requirements to identify gaps and create an implementation roadmap."
    },
    {
      stepNumber: 2,
      title: "Privacy Risk Assessment",
      description: "We help you identify privacy risks and design controls to mitigate them within your existing information security framework."
    },
    {
      stepNumber: 3,
      title: "PIMS Documentation",
      description: "Our team assists in developing required documentation for the Privacy Information Management System (PIMS)."
    },
    {
      stepNumber: 4,
      title: "Implementation Support",
      description: "We help implement privacy controls and mechanisms for ongoing management of personal information."
    },
    {
      stepNumber: 5,
      title: "Certification Audit Support",
      description: "We provide support during the certification audit process to help you achieve ISO 27701 certification."
    }
  ];

  // FAQ section data
  const faqs: FAQItem[] = [
    {
      question: "What is ISO 27701?",
      answer: "ISO 27701 is an extension to ISO 27001 that provides a framework for implementing, maintaining, and continually improving a Privacy Information Management System (PIMS). It adds privacy-specific requirements and controls to help organizations manage the processing of personal information."
    },
    {
      question: "Do we need ISO 27001 before implementing ISO 27701?",
      answer: "While ISO 27701 is designed as an extension to ISO 27001, you can implement both standards simultaneously. However, having ISO 27001 already in place makes the ISO 27701 implementation process more efficient since you'll already have the core information security management system established."
    },
    {
      question: "How does ISO 27701 help with GDPR compliance?",
      answer: "ISO 27701 was developed with GDPR requirements in mind. It provides a structured framework for implementing many of the privacy principles and requirements found in GDPR, including data subject rights, privacy by design, and privacy impact assessments. While certification doesn't guarantee GDPR compliance, it demonstrates a systematic approach to privacy management."
    },
    {
      question: "How long does ISO 27701 certification take?",
      answer: "For organizations that already have ISO 27001 certification, ISO 27701 implementation typically takes 2-4 months. If implementing both standards together, the process may take 4-6 months. The timeline depends on your organization's size, complexity, and existing privacy practices."
    },
    {
      question: "What are the benefits of ISO 27701 over self-attested privacy compliance?",
      answer: "Third-party certification provides independent verification of your privacy practices, increasing credibility with customers, partners, and regulators. It also provides a structured framework for privacy management that ensures comprehensive coverage of privacy risks and continuous improvement over time."
    }
  ];

  return (
    <StandardServicePage
      seo={seoData}
      
      heroProps={{
        title: <><span className="text-atoro-green">ISO 27701</span> Privacy Certification</>,
        description: "Extend your information security management system with privacy controls. Our experts guide you through the ISO 27701 implementation process efficiently.",
        primaryButtonText: "Schedule a Consultation",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/services/privacy",
        imageUrl: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
        badgeText: "Privacy Management",
        backgroundClass: "bg-gradient-to-br from-atoro-blue to-atoro-dark-teal"
      }}
      
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by Leading Organizations"
      clientLogosDescription="We've helped companies across industries achieve ISO 27701 certification"
      
      overviewSection={
        <StandardOverviewSection
          badgeText="Understanding ISO 27701"
          title="What is ISO 27701?"
          description="ISO 27701 is a privacy extension to ISO 27001 that provides a framework for implementing a Privacy Information Management System (PIMS). It helps organizations protect personal information and demonstrate compliance with privacy regulations."
          features={overviewFeatures}
        />
      }
      
      benefitsSection={
        <StandardBenefitsSection
          badgeText="Why ISO 27701"
          title="Benefits of ISO 27701 Certification"
          description="Implementing ISO 27701 delivers significant advantages for organizations that process personal information."
          benefits={benefits}
          imageUrl="/lovable-uploads/iso27701-benefits.png"
          imageAlt="ISO 27701 benefits illustration"
        />
      }
      
      processSection={
        <StandardProcessSection
          badgeText="Our Approach"
          title="ISO 27701 Implementation Process"
          description="Our proven methodology streamlines the path to ISO 27701 certification, building on your existing information security practices."
          steps={processSteps}
        />
      }
      
      testimonials={testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Hear from organizations that have successfully achieved ISO 27701 certification with our help."
      testimonialsBadgeText="ISO 27701 Excellence"
      
      faqSection={
        <StandardFAQSection
          badgeText="ISO 27701 FAQ"
          title="Frequently Asked Questions"
          description="Get answers to common questions about ISO 27701 certification and our implementation approach."
          faqs={faqs}
        />
      }
      
      ctaSection={
        <StandardCTASection
          badgeText="Get Started"
          title={<>Ready to <span className="text-atoro-green">Enhance</span> Your Privacy Management?</>}
          description="Book a free consultation with our privacy experts to discuss your ISO 27701 certification needs and how we can help."
          primaryButtonText="Schedule a Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/resources/iso-27701-guide"
          imageUrl="/lovable-uploads/iso27701-cta.png"
        />
      }
    />
  );
};

export default ISO27701;
