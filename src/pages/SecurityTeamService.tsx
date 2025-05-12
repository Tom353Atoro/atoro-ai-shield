import React from 'react';
import { Shield, FileSearch, Users, Clock, CheckCircle } from 'lucide-react';
import StandardServicePage from '@/components/services/StandardServicePage';
import StandardOverviewSection from '@/components/services/StandardOverviewSection';
import StandardBenefitsSection from '@/components/services/StandardBenefitsSection';
import StandardProcessSection from '@/components/services/StandardProcessSection';
import StandardFAQSection from '@/components/services/StandardFAQSection';
import StandardCTASection from '@/components/services/StandardCTASection';
import TeamSection from '@/components/security-team-service/TeamSection';
import CertificationSection from '@/components/security-team-service/CertificationSection';
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

/**
 * Security Team as a Service Page
 * 
 * Standardized implementation of the Security Team as a Service page using the
 * established component architecture.
 */
const SecurityTeamService: React.FC = () => {
  // SEO metadata
  const seoData: SEOProps = {
    pageTitle: "Security Team as a Service | Atoro AI Shield",
    metaDescription: "Access dedicated security expertise without the cost and complexity of building an in-house team. Scale security capabilities as your business grows.",
    canonicalUrl: "https://www.atoroaishield.com/services/cyber-security/security-team-aas",
    ogImageUrl: "/lovable-uploads/security-team-service.png"
  };

  // Security Team specific testimonials
  const testimonials: TestimonialItem[] = [
    {
      quote: "Atoro's security team has become an extension of our company. Their expertise helped us navigate complex compliance requirements while maintaining our development velocity.",
      author: "Michael Chen",
      title: "CTO",
      company: "FinTech Solutions",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      rating: 5
    }, 
    {
      quote: "Having access to Atoro's security experts has been transformative for our business. We get enterprise-level security capabilities without the overhead of building a team from scratch.",
      author: "Sarah Johnson",
      title: "CEO",
      company: "HealthData Corp",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      rating: 4.5
    }, 
    {
      quote: "What's impressed me most is how Atoro's security team understands our business objectives. They don't just focus on security for security's sake - they align it with our growth goals.",
      author: "David Williams",
      title: "COO",
      company: "CloudScale Systems",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      rating: 5
    }
  ];
  
  // Client logos data
  const clientLogos: ClientLogoItem[] = [
    {
      id: 1,
      name: "FinTech Solutions",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      altText: "FinTech Solutions logo"
    },
    {
      id: 2,
      name: "HealthData Corp",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png",
      altText: "HealthData Corp logo"
    },
    {
      id: 3,
      name: "CloudScale Systems",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      altText: "CloudScale Systems logo"
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
      icon: Shield,
      title: "Security Leadership",
      description: "Fractional CISO and security management to guide your security strategy and implementation.",
      iconColor: "text-atoro-green"
    },
    {
      icon: FileSearch,
      title: "Compliance Support",
      description: "Expert guidance for SOC 2, ISO 27001, GDPR, and other regulatory requirements.",
      iconColor: "text-atoro-teal"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Access to security analysts, engineers, and consultants matched to your needs.",
      iconColor: "text-atoro-blue"
    },
    {
      icon: Clock,
      title: "Flexible Engagement",
      description: "Scale services up or down based on your business requirements and growth.",
      iconColor: "text-atoro-green"
    }
  ];

  // Benefits section data
  const benefits: BenefitItem[] = [
    {
      title: "Cost-Effective Security",
      description: "Get enterprise-grade security capabilities without the cost of building an in-house team."
    },
    {
      title: "Diverse Expertise",
      description: "Access specialized security professionals without multiple full-time hires."
    },
    {
      title: "Flexible Scaling",
      description: "Adjust security resources based on your current business needs and growth."
    },
    {
      title: "Seamless Integration",
      description: "Our security team works alongside your existing IT and development staff."
    },
    {
      title: "Business-Aligned Security",
      description: "Security guidance that supports rather than hinders your business objectives."
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "Assessment",
      description: "We evaluate your current security posture, business needs, and compliance requirements."
    },
    {
      stepNumber: 2,
      title: "Team Selection",
      description: "We assign security professionals with the specific expertise your organization needs."
    },
    {
      stepNumber: 3,
      title: "Integration",
      description: "Our team integrates with your existing workflows and establishes communication protocols."
    },
    {
      stepNumber: 4,
      title: "Execution",
      description: "We implement security controls, policies, and practices aligned with your business goals."
    },
    {
      stepNumber: 5,
      title: "Ongoing Support",
      description: "Regular reviews and adjustments to ensure your security program evolves with your business."
    }
  ];

  // FAQ section data
  const faqs: FAQItem[] = [
    {
      question: "How is this different from hiring security consultants?",
      answer: "Unlike traditional consultants who engage for a specific project or limited period, our Security Team as a Service provides ongoing, dedicated security expertise. We become an extension of your team, offering consistent support, proactive guidance, and the flexibility to scale up or down as needed."
    },
    {
      question: "What types of security experts are available?",
      answer: "Our team includes security architects, compliance specialists, penetration testers, cloud security engineers, application security experts, security analysts, and fractional CISOs. We match security professionals to your specific needs and industry requirements."
    },
    {
      question: "How much does the service cost?",
      answer: "Our pricing is based on the level of expertise, time commitment, and specific services required. We offer flexible engagement models starting from part-time security leadership (fractional CISO) to comprehensive security team packages. This approach typically saves 40-60% compared to building an equivalent in-house team."
    },
    {
      question: "Is this a good fit for companies that need to meet compliance requirements?",
      answer: "Absolutely. Our service is ideal for companies working toward SOC 2, ISO 27001, GDPR, HIPAA, and other compliance frameworks. We have specialists in various compliance domains who can guide your certification journey and help maintain ongoing compliance."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience with SaaS, fintech, healthcare technology, AI/ML companies, and other technology-focused businesses. Our team members bring industry-specific knowledge that ensures security measures are appropriate for your regulatory landscape and business context."
    }
  ];
  
  // Additional sections specific to this service
  const AdditionalSections = [
    // Team Section with expert profiles
    <TeamSection key="team-section" />,
    
    // Certification Section showcasing industry certifications
    <CertificationSection key="certification-section" />
  ];

  return (
    <StandardServicePage
      seo={seoData}
      
      heroProps={{
        title: <><span className="text-atoro-green">Expert</span> Security Team On Demand</>,
        description: "Access dedicated security expertise without the cost and complexity of building an in-house team. Scale security capabilities as your business grows.",
        primaryButtonText: "Get Security Support",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/resources/security-team-guide",
        imageUrl: "/lovable-uploads/security-team-service.png",
        badgeText: "Security Team as a Service",
        backgroundClass: "bg-gradient-to-br from-atoro-dark-teal to-black"
      }}
      
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by Growing Companies"
      clientLogosDescription="We provide security expertise to organizations across industries"
      
      overviewSection={
        <StandardOverviewSection
          badgeText="Our Approach"
          title="Dedicated Security Expertise On Demand"
          description="Our Security Team as a Service provides your organization with specialized expertise without the cost of building and maintaining an in-house security team."
          features={overviewFeatures}
        />
      }
      
      benefitsSection={
        <StandardBenefitsSection
          badgeText="Benefits"
          title="Why Choose Our Security Team Service"
          description="Our security team service provides enterprise-grade security capabilities with the flexibility and cost-effectiveness your business needs."
          benefits={benefits}
          imageUrl="/lovable-uploads/security-team-benefits.png"
          imageAlt="Security team benefits illustration"
        />
      }
      
      processSection={
        <StandardProcessSection
          badgeText="Our Process"
          title="How We Work With You"
          description="Our structured approach ensures a smooth integration of security expertise into your organization."
          steps={processSteps}
        />
      }
      
      additionalSections={AdditionalSections}
      
      testimonials={testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Hear from organizations that have strengthened their security with our dedicated team service."
      testimonialsBadgeText="Client Testimonials"
      
      faqSection={
        <StandardFAQSection
          badgeText="FAQ"
          title="Frequently Asked Questions"
          description="Get answers to common questions about our Security Team as a Service offering."
          faqs={faqs}
        />
      }
      
      ctaSection={
        <StandardCTASection
          badgeText="Get Started"
          title={<>Ready to <span className="text-atoro-green">Strengthen</span> Your Security Team?</>}
          description="Contact us today to discuss how our security experts can support your business objectives."
          primaryButtonText="Schedule a Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="Download Service Overview"
          secondaryButtonLink="/resources/security-team-guide"
          imageUrl="/lovable-uploads/security-team-cta.png"
        />
      }
    />
  );
};

export default SecurityTeamService; 