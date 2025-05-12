import React from 'react';
import { Shield, LockKeyhole, FileCheck } from 'lucide-react';
import StandardServicePage from '@/components/services/StandardServicePage';
import StandardOverviewSection from '@/components/services/StandardOverviewSection';
import StandardBenefitsSection from '@/components/services/StandardBenefitsSection';
import StandardProcessSection from '@/components/services/StandardProcessSection';
import StandardFAQSection from '@/components/services/StandardFAQSection';
import StandardCTASection from '@/components/services/StandardCTASection';
import CertificationLogos from '@/components/shared/CertificationLogos';
import { ServiceSection } from '@/components/services/StandardServicePage';
import {
  TestimonialItem,
  ClientLogoItem,
  OverviewFeature,
  BenefitItem,
  ProcessStep,
  FAQItem,
  SEOProps
} from '@/types';
import ClientLogos from '@/components/services/ClientLogos';

/**
 * ISO 27001 Service Page
 * 
 * Demonstrates the use of standardized components for a service page implementation.
 */
const Iso27001Service: React.FC = () => {
  // SEO metadata
  const seoData: SEOProps = {
    pageTitle: "ISO 27001 Implementation & Certification | Atoro AI Shield",
    metaDescription: "Streamlined ISO 27001 implementation for SaaS companies. Get certified in half the time with our expert-led process.",
    canonicalUrl: "https://www.atoroaishield.com/services/cyber-security/iso-27001",
    ogImageUrl: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png"
  };

  // ISO 27001 specific testimonials
  const testimonials: TestimonialItem[] = [
    {
      quote: "Atoro's ISO 27001 implementation service was transformative. Their streamlined approach helped us achieve certification in just 11 weeks.",
      author: "Michael Chen",
      title: "CTO",
      company: "CloudSecure",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      rating: 5
    },
    {
      quote: "The ISO 27001 process with Atoro was incredibly efficient. Their team handled complex documentation and helped implement practical security controls.",
      author: "Sarah Johnson",
      title: "Head of Compliance",
      company: "DataShield",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      rating: 4.5
    },
    {
      quote: "As a fast-growing startup, we needed to get ISO 27001 certified quickly. Atoro delivered a tailored implementation that matched our specific needs.",
      author: "David Rodriguez",
      title: "CEO",
      company: "SecureStack",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      rating: 5
    }
  ];

  // Client logos data
  const clientLogos: ClientLogoItem[] = [
    {
      id: 1,
      name: "CloudSecure",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      altText: "CloudSecure logo"
    },
    {
      id: 2,
      name: "DataShield",
      imagePath: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      altText: "DataShield logo"
    },
    {
      id: 3,
      name: "SecureStack",
      imagePath: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      altText: "SecureStack logo"
    },
    {
      id: 4,
      name: "TechSecurity",
      imagePath: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png",
      altText: "TechSecurity logo"
    },
    {
      id: 5,
      name: "SecureCloud",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png",
      altText: "SecureCloud logo"
    }
  ];

  // Overview section features
  const overviewFeatures: OverviewFeature[] = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "ISO 27001 helps you protect all forms of information, whether digital, cloud-based, or physical, through a comprehensive risk management approach.",
      iconColor: "text-atoro-blue"
    },
    {
      icon: LockKeyhole,
      title: "Business Enabler",
      description: "Far from being just a compliance checklist, ISO 27001 is a business enabler that helps you win more clients and access global markets.",
      iconColor: "text-atoro-green"
    },
    {
      icon: FileCheck,
      title: "Proven Framework",
      description: "The standard provides a proven framework that helps you identify, analyze, and implement controls to mitigate information security risks.",
      iconColor: "text-atoro-teal"
    }
  ];

  // Benefits section data
  const benefits: BenefitItem[] = [
    {
      title: "Win More Clients",
      description: "ISO 27001 certification demonstrates your commitment to data security, helping you win contracts with larger organizations that require certified vendors."
    },
    {
      title: "Reduce Security Incidents",
      description: "Implementing ISO 27001 controls helps you identify and address security vulnerabilities before they can be exploited by attackers."
    },
    {
      title: "Streamline Compliance",
      description: "ISO 27001 provides a foundation that makes it easier to comply with other regulations like GDPR, HIPAA, and industry-specific standards."
    },
    {
      title: "Build Customer Trust",
      description: "Showing your certification builds confidence with clients that their data is protected according to international best practices."
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "Gap Assessment",
      description: "We evaluate your current security posture against ISO 27001 requirements to identify gaps and create a tailored implementation roadmap."
    },
    {
      stepNumber: 2,
      title: "Risk Assessment & ISMS Design",
      description: "We help you identify information security risks and design an Information Security Management System (ISMS) tailored to your organization."
    },
    {
      stepNumber: 3,
      title: "Documentation & Implementation",
      description: "Our team assists in developing required documentation and implementing security controls based on your risk assessment."
    },
    {
      stepNumber: 4,
      title: "Internal Audit & Training",
      description: "We conduct internal audits to ensure compliance and provide training to your team on maintaining the ISMS effectively."
    },
    {
      stepNumber: 5,
      title: "Certification Audit Support",
      description: "We provide full support during the certification audit process, helping you address any findings and achieve certification."
    }
  ];

  // FAQ section data
  const faqs: FAQItem[] = [
    {
      question: "How long does ISO 27001 certification typically take?",
      answer: "With Atoro's streamlined approach, most companies can achieve certification in 3-6 months. Our fastest implementation was completed in just 11 weeks. The timeline depends on your organization's size, complexity, and existing security controls."
    },
    {
      question: "Do we need to implement all ISO 27001 controls?",
      answer: "No. ISO 27001 follows a risk-based approach, meaning you implement controls based on your specific risks. Some controls may not be applicable to your organization, which is documented in the Statement of Applicability (SoA)."
    },
    {
      question: "How much does ISO 27001 certification cost?",
      answer: "The cost varies based on your organization's size, complexity, and current security maturity. Our implementation services typically range from $25,000 to $75,000, with additional costs for the certification audit conducted by an accredited certification body."
    },
    {
      question: "How often do we need to renew ISO 27001 certification?",
      answer: "ISO 27001 certification is valid for three years. However, you'll need to undergo surveillance audits annually to maintain your certification. After three years, a recertification audit is required."
    },
    {
      question: "Can our internal team handle ISO 27001 implementation without assistance?",
      answer: "While it's possible, most organizations benefit from expert guidance. ISO 27001 implementation requires specialized knowledge of information security practices, risk assessment methodologies, and the standard's requirements. Our consultants bring experience from dozens of successful implementations, helping you avoid common pitfalls and achieve certification faster."
    },
    {
      question: "Will ISO 27001 implementation disrupt our business operations?",
      answer: "Our approach minimizes disruption by integrating security controls into existing business processes whenever possible. We schedule implementation activities to accommodate your operational needs and focus on practical, efficient security measures rather than bureaucratic overhead."
    }
  ];

  // Certification logos section
  const CertificationLogosSection = () => (
    <ServiceSection className="py-16 bg-white">
      <CertificationLogos 
        title="Industry-Standard Certifications" 
        description="Our security practices and implementation methodologies are backed by industry-recognized certifications."
      />
    </ServiceSection>
  );

  return (
    <StandardServicePage
      seo={seoData}
      
      heroProps={{
        title: <><span className="text-atoro-green">Fast-track</span> Your ISO 27001 Certification</>,
        description: "Streamlined ISO 27001 implementation for SaaS companies. Get certified in half the time with our expert-led process.",
        primaryButtonText: "Start Your ISO 27001 Journey",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Book a Consultation",
        secondaryButtonLink: "/contact",
        imageUrl: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
        badgeText: "ISO 27001 Implementation",
        backgroundClass: "bg-gradient-to-br from-atoro-teal to-atoro-blue"
      }}
      
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by Leading Organizations"
      clientLogosDescription="We've helped companies across industries achieve ISO 27001 certification"
      
      overviewSection={
        <StandardOverviewSection
          badgeText="Understanding ISO 27001"
          title="What is ISO 27001?"
          description="ISO 27001 is the international standard for information security management. It provides a framework for establishing, implementing, maintaining, and continually improving an information security management system (ISMS) within your organization."
          features={overviewFeatures}
        />
      }
      
      benefitsSection={
        <StandardBenefitsSection
          badgeText="Why ISO 27001"
          title="Benefits of ISO 27001 Certification"
          description="Implementing ISO 27001 delivers tangible benefits that go beyond just security compliance."
          benefits={benefits}
          imageUrl="/lovable-uploads/iso27001-benefits.png"
          imageAlt="ISO 27001 benefits illustration"
        />
      }
      
      processSection={
        <StandardProcessSection
          badgeText="Our Approach"
          title="ISO 27001 Implementation Process"
          description="Our proven methodology streamlines the path to ISO 27001 certification, making the process efficient and effective."
          steps={processSteps}
        />
      }
      
      additionalSections={[
        <CertificationLogosSection key="certification-logos" />
      ]}
      
      testimonials={testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Hear from SaaS companies that have successfully achieved ISO 27001 certification with our help."
      testimonialsBadgeText="ISO 27001 Excellence"
      
      faqSection={
        <StandardFAQSection
          badgeText="ISO 27001 FAQ"
          title="Frequently Asked Questions"
          description="Get answers to common questions about ISO 27001 certification and our implementation approach."
          faqs={faqs}
        />
      }
      
      ctaSection={
        <StandardCTASection
          badgeText="Get Started"
          title={<>Ready to <span className="text-atoro-green">Strengthen</span> Your Security Posture?</>}
          description="Book a free consultation with our security experts to discuss your ISO 27001 certification needs and how we can help."
          primaryButtonText="Schedule a Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/resources/iso-27001-guide"
          imageUrl="/lovable-uploads/iso27001-cta.png"
        />
      }
    >
      <ClientLogos 
        service="iso27001" 
        title="Trusted by Leading Organizations" 
        description="Join these companies who achieved ISO 27001 certification with Atoro AI Shield" 
      />
    </StandardServicePage>
  );
};

export default Iso27001Service;
