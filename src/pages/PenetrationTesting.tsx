import React from 'react';
import { Bug, Network, ServerCog, Shield, Lock, FileText } from 'lucide-react';
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
 * Penetration Testing Service Page
 * 
 * Standardized implementation of the Penetration Testing service page using the
 * established component architecture.
 */
const PenetrationTesting: React.FC = () => {
  // SEO metadata
  const seoData: SEOProps = {
    pageTitle: "Penetration Testing Services | Atoro AI Shield",
    metaDescription: "Our penetration testing services simulate real-world cyber attacks to identify vulnerabilities before malicious actors can exploit them, protecting your business and customer data.",
    canonicalUrl: "https://www.atoroaishield.com/services/cyber-security/penetration-testing",
    ogImageUrl: "/lovable-uploads/1b5ef3e0-1624-4c80-b9f0-33d25a819c7b.png"
  };

  // Penetration testing specific testimonials
  const testimonials: TestimonialItem[] = [
    {
      quote: "Atoro's penetration testing uncovered vulnerabilities our automated scans missed. Their detailed remediation steps helped us fix issues quickly and effectively.",
      author: "Alex Thompson",
      title: "CTO",
      company: "SecureStack",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      rating: 5
    }, 
    {
      quote: "The penetration testing team at Atoro combines technical excellence with practical business context. They understand what matters most to our organization.",
      author: "Jennifer Wu",
      title: "CISO",
      company: "DataTrust",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      rating: 4.5
    }, 
    {
      quote: "What impressed me most was the clear communication throughout the testing process. No technical jargon - just straightforward explanations of our security risks.",
      author: "Marcus Levi",
      title: "Head of DevOps",
      company: "CloudNative",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      rating: 5
    }
  ];
  
  // Client logos data
  const clientLogos: ClientLogoItem[] = [
    {
      id: 1,
      name: "SecureStack",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      altText: "SecureStack logo"
    },
    {
      id: 2,
      name: "DataTrust",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png",
      altText: "DataTrust logo"
    },
    {
      id: 3,
      name: "CloudNative",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      altText: "CloudNative logo"
    },
    {
      id: 4,
      name: "SecureTech",
      imagePath: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png",
      altText: "SecureTech logo"
    },
    {
      id: 5,
      name: "DataSafe",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png",
      altText: "DataSafe logo"
    }
  ];
  
  // Overview section features
  const overviewFeatures: OverviewFeature[] = [
    {
      icon: Bug,
      title: "Web Application Testing",
      description: "Identify security flaws in your web applications, APIs, and customer-facing portals.",
      iconColor: "text-atoro-green"
    },
    {
      icon: Network,
      title: "Infrastructure Testing",
      description: "Secure your network, cloud infrastructure, and internal systems from potential breaches.",
      iconColor: "text-atoro-teal"
    },
    {
      icon: ServerCog,
      title: "DevSecOps Integration",
      description: "Embed security testing into your CI/CD pipeline for continuous vulnerability detection.",
      iconColor: "text-atoro-blue"
    }
  ];

  // Benefits section data
  const benefits: BenefitItem[] = [
    {
      title: "Identify Critical Vulnerabilities",
      description: "Discover security flaws that automated tools miss with thorough manual testing."
    },
    {
      title: "Meet Compliance Requirements",
      description: "Satisfy security testing requirements for SOC 2, ISO 27001, PCI DSS, and other frameworks."
    },
    {
      title: "Reduce Security Incidents",
      description: "Proactively fix vulnerabilities before they can be exploited by attackers."
    },
    {
      title: "Prioritize Remediation Efforts",
      description: "Focus your security resources on the most critical vulnerabilities with context-aware risk ratings."
    },
    {
      title: "Validate Security Controls",
      description: "Verify that your existing security measures are working as intended and identify gaps."
    },
    {
      title: "Build Customer Trust",
      description: "Demonstrate your commitment to security with regular penetration testing."
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "Scoping",
      description: "Define testing objectives, scope, and methodologies to align with your business goals."
    },
    {
      stepNumber: 2,
      title: "Reconnaissance",
      description: "Gather intelligence on target systems to understand potential attack vectors."
    },
    {
      stepNumber: 3,
      title: "Vulnerability Assessment",
      description: "Identify security weaknesses through automated and manual testing techniques."
    },
    {
      stepNumber: 4,
      title: "Exploitation",
      description: "Safely attempt to exploit discovered vulnerabilities to confirm their impact."
    },
    {
      stepNumber: 5,
      title: "Analysis & Reporting",
      description: "Document findings with clear remediation steps prioritized by business risk."
    }
  ];

  // FAQ section data
  const faqs: FAQItem[] = [
    {
      question: "What types of penetration testing do you offer?",
      answer: "We offer multiple types of penetration testing including web application testing, API security assessments, network penetration testing, cloud security assessments, mobile application testing, and social engineering evaluations. Our approach can be tailored to your specific technical environment and business requirements."
    },
    {
      question: "How often should we conduct penetration tests?",
      answer: "For most organizations, we recommend conducting penetration tests at least annually and after any significant changes to your infrastructure or applications. Companies in high-risk industries or those managing sensitive data may benefit from more frequent testing, such as quarterly or bi-annually. Compliance requirements might also dictate specific testing frequencies."
    },
    {
      question: "What's the difference between a vulnerability scan and a penetration test?",
      answer: "Vulnerability scanning uses automated tools to identify known security issues, while penetration testing combines automated tools with manual techniques to simulate real-world attacks. Penetration tests go beyond identification to include attempted exploitation, determination of business impact, and exploration of complex attack chains that automated tools cannot discover."
    },
    {
      question: "Will penetration testing disrupt our systems or services?",
      answer: "We take precautions to minimize disruption during testing. Most testing can be conducted without impacting operations, but some tests (particularly in production environments) carry minimal risk. We always discuss potential impacts during scoping, schedule intensive testing during off-hours when necessary, and maintain constant communication during the testing process."
    },
    {
      question: "How do you protect the sensitive data discovered during testing?",
      answer: "We treat all client data with the utmost confidentiality. Our penetration testing team follows strict security protocols for handling sensitive information. All testing data is encrypted both in transit and at rest, and findings are shared through secure channels. We can also sign additional confidentiality agreements specific to your organization's requirements."
    }
  ];

  return (
    <StandardServicePage
      seo={seoData}
      
      heroProps={{
        title: <><span className="text-atoro-green">Uncover</span> What Attackers See</>,
        description: "Our penetration testing services simulate real-world cyber attacks to identify vulnerabilities before malicious actors can exploit them, protecting your business and customer data.",
        primaryButtonText: "Schedule a Penetration Test",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/resources/pentest-guide",
        imageUrl: "/lovable-uploads/1b5ef3e0-1624-4c80-b9f0-33d25a819c7b.png",
        badgeText: "Penetration Testing",
        backgroundClass: "bg-gradient-to-br from-atoro-dark-teal to-black"
      }}
      
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by Security-Conscious Organizations"
      clientLogosDescription="We help companies across industries identify and remediate security vulnerabilities"
      
      overviewSection={
        <StandardOverviewSection
          badgeText="Our Approach"
          title="Comprehensive Security Testing"
          description="Our penetration tests go beyond automated scanning to find the vulnerabilities that matter most to your business."
          features={overviewFeatures}
        />
      }
      
      benefitsSection={
        <StandardBenefitsSection
          badgeText="Benefits"
          title="Why Penetration Testing Matters"
          description="Regular penetration testing provides critical insights to strengthen your security posture and protect your business."
          benefits={benefits}
          imageUrl="/lovable-uploads/pentest-benefits.png"
          imageAlt="Penetration testing benefits illustration"
        />
      }
      
      processSection={
        <StandardProcessSection
          badgeText="Our Process"
          title="Our Testing Methodology"
          description="We follow a structured approach to ensure thorough security assessment with minimal business disruption."
          steps={processSteps}
        />
      }
      
      testimonials={testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Read how our penetration testing has helped organizations improve their security posture."
      testimonialsBadgeText="Client Testimonials"
      
      faqSection={
        <StandardFAQSection
          badgeText="FAQ"
          title="Penetration Testing FAQs"
          description="Get answers to common questions about our penetration testing service."
          faqs={faqs}
        />
      }
      
      ctaSection={
        <StandardCTASection
          badgeText="Get Started"
          title={<>Ready to <span className="text-atoro-green">Secure</span> Your Systems?</>}
          description="Contact us today to schedule a penetration test and uncover vulnerabilities before attackers do."
          primaryButtonText="Schedule a Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="Download Penetration Testing Guide"
          secondaryButtonLink="/resources/pentest-guide"
          imageUrl="/lovable-uploads/pentest-cta.png"
        />
      }
    />
  );
};

export default PenetrationTesting;
