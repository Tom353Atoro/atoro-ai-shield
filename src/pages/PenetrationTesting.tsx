
import React from 'react';
import { Shield, Bug, Lock, FileCheck, BarChart3, Users } from 'lucide-react';
import StandardServicePage from '@/components/services/StandardServicePage';
import StandardOverviewSection from '@/components/services/StandardOverviewSection';
import StandardBenefitsSection from '@/components/services/StandardBenefitsSection';
import StandardProcessSection from '@/components/services/StandardProcessSection';
import StandardFAQSection from '@/components/services/StandardFAQSection';
import StandardCTASection from '@/components/services/StandardCTASection';
import { Container } from '@/components/ui/Container';
import { SectionHeader, FeatureCard, BenefitItem, TestimonialCard } from '@/components/ui';
import {
  TestimonialItem,
  ClientLogoItem,
  OverviewFeature,
  BenefitItem as BenefitItemType,
  ProcessStep,
  FAQItem, 
  SEOProps,
} from '@/types';

// Import the service-page types
import { 
  HeroProps, 
  FeatureCardProps, 
  ProcessStepProps, 
  FAQProps, 
  BenefitItemProps 
} from '@/types/service-page';

import ClientLogos from '@/components/services/ClientLogos';

/**
 * Penetration Testing Service Page
 * Uses standardized service page structure
 */
const PenetrationTesting = () => {
  // Hero section properties
  const heroProps: HeroProps = {
    title: "Penetration Testing",
    subtitle: "Identify and address security vulnerabilities before attackers do",
    description: "Our expert ethical hackers perform thorough penetration testing to uncover security weaknesses, helping you strengthen your defenses against real-world attacks.",
    imagePath: "/images/services/pentest-hero.png",
    ctaText: "Request a Penetration Test",
    ctaLink: "/contact",
    imageUrl: "/images/services/pentest-hero.png",
  };

  // SEO data
  const seoData: SEOProps = {
    pageTitle: "Penetration Testing Services | Atoro AI Shield",
    metaDescription: "Our expert ethical hackers perform thorough penetration testing to uncover security weaknesses in your web applications, networks, and cloud environments."
  };

  // Overview section features
  const features: FeatureCardProps[] = [
    {
      title: "Web Application Testing",
      description: "Identify vulnerabilities in your web applications and APIs",
      icon: Shield,
    },
    {
      title: "Network Penetration Testing",
      description: "Uncover weaknesses in your network infrastructure",
      icon: Bug,
    },
    {
      title: "Cloud Security Assessment",
      description: "Evaluate security of your cloud environments and configurations",
      icon: Lock,
    },
    {
      title: "Mobile Application Testing",
      description: "Test security of iOS and Android applications",
      icon: FileCheck,
    },
    {
      title: "Social Engineering Tests",
      description: "Assess employee security awareness and susceptibility",
      icon: Users,
    }
  ];

  // Benefits section items
  const benefits: BenefitItemProps[] = [
    {
      title: "Identify Real Vulnerabilities",
      description: "Discover exploitable security issues that automated tools miss"
    },
    {
      title: "Reduce Security Incidents",
      description: "Proactively fix vulnerabilities before attackers can exploit them"
    },
    {
      title: "Meet Compliance Requirements",
      description: "Satisfy penetration testing requirements for SOC 2, PCI DSS, and more"
    },
    {
      title: "Validate Security Controls",
      description: "Verify your existing security measures are working effectively"
    },
    {
      title: "Prioritize Security Investments",
      description: "Focus resources on fixing the most critical security issues first"
    },
    {
      title: "Build Customer Trust",
      description: "Demonstrate your commitment to security to clients and partners"
    }
  ];

  // Process section steps
  const processSteps: ProcessStepProps[] = [
    {
      title: "Scoping & Planning",
      description: "Define testing objectives, scope, and methodology"
    },
    {
      title: "Reconnaissance",
      description: "Gather information about the target environment"
    },
    {
      title: "Vulnerability Discovery",
      description: "Identify potential security weaknesses"
    },
    {
      title: "Exploitation",
      description: "Safely attempt to exploit discovered vulnerabilities"
    },
    {
      title: "Analysis & Documentation",
      description: "Document findings and develop remediation recommendations"
    },
    {
      title: "Reporting & Debriefing",
      description: "Deliver comprehensive report and discuss findings"
    },
    {
      title: "Remediation Guidance",
      description: "Provide support in addressing identified vulnerabilities"
    }
  ];

  // FAQ section questions and answers
  const faqs: FAQProps[] = [
    {
      question: "What types of penetration testing do you offer?",
      answer: "We offer a comprehensive range of penetration testing services including web application testing, network infrastructure testing, mobile application assessment, cloud security testing, API security testing, and social engineering simulations."
    },
    {
      question: "How often should we conduct penetration tests?",
      answer: "We recommend conducting penetration tests at least annually, and additionally after significant changes to your infrastructure, applications, or security controls. Some compliance frameworks like PCI DSS require annual testing."
    },
    {
      question: "What's the difference between a vulnerability scan and a penetration test?",
      answer: "Vulnerability scanning uses automated tools to identify known vulnerabilities. Penetration testing goes further by having skilled security professionals manually attempt to exploit vulnerabilities to determine real-world impact and find issues that automated tools miss."
    },
    {
      question: "How long does a penetration test take?",
      answer: "The duration depends on the scope and complexity of the environment being tested. Typically, a comprehensive application or network penetration test requires 1-3 weeks from initial scoping to final report delivery."
    },
    {
      question: "Will penetration testing disrupt our operations?",
      answer: "We take precautions to minimize disruption. Most testing can be conducted without impact to production systems. For more sensitive tests, we can schedule testing during off-hours or in staging environments."
    }
  ];

  return (
    <StandardServicePage 
      seo={seoData}
      heroProps={{
        title: "Penetration Testing",
        description: "Our expert ethical hackers perform thorough penetration testing to uncover security weaknesses, helping you strengthen your defenses against real-world attacks.",
        primaryButtonText: "Request a Penetration Test",
        primaryButtonLink: "/contact",
        imageUrl: "/images/services/pentest-hero.png",
        badgeText: "Security Testing"
      }}
      overviewSection={
        <StandardOverviewSection 
          badgeText="Overview"
          title="Penetration Testing Services"
          description="Our ethical hackers identify vulnerabilities before malicious actors can exploit them."
          features={features}
          id="overview"
        />
      }
      benefitsSection={
        <StandardBenefitsSection 
          badgeText="Benefits"
          title="Benefits of Penetration Testing"
          description="Regular penetration testing provides numerous security and business advantages."
          benefits={benefits}
          id="benefits"
        />
      }
      processSection={
        <StandardProcessSection 
          badgeText="Process"
          title="Our Penetration Testing Process"
          description="Our methodical approach ensures thorough security assessment and actionable results."
          steps={processSteps}
          id="process"
        />
      }
      faqSection={
        <StandardFAQSection 
          badgeText="FAQ"
          title="Penetration Testing FAQs"
          description="Common questions about our penetration testing services."
          faqs={faqs}
          id="faq"
        />
      }
      ctaSection={
        <StandardCTASection 
          badgeText="Get Started"
          title="Ready to Test Your Security?"
          description="Contact us to discuss your penetration testing needs."
          primaryButtonText="Request a Penetration Test"
          primaryButtonLink="/contact"
          id="cta"
        />
      }
    >
      {/* Add ClientLogos component for penetration testing clients */}
      <ClientLogos 
        service="penetration-testing" 
        title="Securing Industry Leaders" 
        description="These organizations trust Atoro AI Shield with their penetration testing needs" 
      />
    </StandardServicePage>
  );
};

export default PenetrationTesting;
