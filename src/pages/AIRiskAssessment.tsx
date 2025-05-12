import React from 'react';
import { Brain, FileSearch, Shield, FileText, ShieldAlert, Lightbulb } from 'lucide-react';
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
 * AI Risk Assessment Service Page
 * 
 * Standardized implementation of the AI Risk Assessment service page using the
 * established component architecture.
 */
const AIRiskAssessment: React.FC = () => {
  // SEO metadata
  const seoData: SEOProps = {
    pageTitle: "AI Risk Assessment Services | Atoro AI Shield",
    metaDescription: "Identify and mitigate risks in your AI systems with our comprehensive assessment methodology, ensuring compliance with emerging regulations and ethical standards.",
    canonicalUrl: "https://www.atoroaishield.com/services/ai-governance/ai-risk-assessment",
    ogImageUrl: "/lovable-uploads/ai-risk-assessment-hero.jpg"
  };

  // AI Risk Assessment specific testimonials
  const testimonials: TestimonialItem[] = [
    {
      quote: "Atoro's AI risk assessment helped us identify and mitigate risks we hadn't considered. Their expertise in both AI technology and governance was invaluable.",
      author: "Alex Chen",
      title: "CTO",
      company: "AI Innovations",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      rating: 5
    },
    {
      quote: "The structured approach to AI risk assessment provided clarity and direction for our compliance efforts.",
      author: "Sophia Rodriguez",
      title: "Head of Compliance",
      company: "DataTech Solutions",
      avatarSrc: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
      rating: 4.5
    },
    {
      quote: "Implementing Atoro's recommendations significantly improved our AI risk profile, helping us meet regulatory requirements while maintaining innovation.",
      author: "Michael Johnson",
      title: "AI Ethics Officer",
      company: "TechSolutions Inc",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      rating: 5
    }
  ];
  
  // Client logos data
  const clientLogos: ClientLogoItem[] = [
    {
      id: 1,
      name: "AI Innovations",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      altText: "AI Innovations logo"
    },
    {
      id: 2,
      name: "DataTech Solutions",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png",
      altText: "DataTech Solutions logo"
    },
    {
      id: 3,
      name: "TechSolutions Inc",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      altText: "TechSolutions Inc logo"
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
      title: "EU AI Act Compliance",
      description: "Navigate the complex regulatory landscape of the EU AI Act with our specialized compliance assessments and roadmaps.",
      iconColor: "text-atoro-purple"
    },
    {
      icon: FileSearch,
      title: "AI Risk Assessment",
      description: "Comprehensive evaluation of your AI systems for potential ethical, legal, and operational risks.",
      iconColor: "text-atoro-blue"
    },
    {
      icon: Shield,
      title: "Responsible AI Framework",
      description: "Implement a tailored framework that ensures responsible AI development and deployment within your organization.",
      iconColor: "text-atoro-teal"
    }
  ];

  // Benefits section data
  const benefits: BenefitItem[] = [
    {
      title: "Regulatory Compliance",
      description: "Ensure your AI systems comply with emerging regulations like the EU AI Act and industry-specific requirements."
    },
    {
      title: "Risk Mitigation",
      description: "Identify and address potential ethical, legal, and operational risks before they impact your business."
    },
    {
      title: "Enhanced Trust",
      description: "Build trust with customers, stakeholders, and regulators by demonstrating responsible AI practices."
    },
    {
      title: "Competitive Advantage",
      description: "Differentiate your organization by implementing industry-leading AI governance practices."
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "Discovery & Analysis",
      description: "We examine your AI systems, data sources, and decision-making processes to identify key risk areas."
    },
    {
      stepNumber: 2,
      title: "Risk Evaluation",
      description: "We assess identified risks against regulatory requirements and industry best practices."
    },
    {
      stepNumber: 3,
      title: "Recommendations",
      description: "We deliver practical, prioritized recommendations to mitigate risks and improve AI governance."
    },
    {
      stepNumber: 4,
      title: "Implementation Support",
      description: "We provide guidance and support to help you implement our recommendations effectively."
    },
    {
      stepNumber: 5,
      title: "Ongoing Monitoring",
      description: "We help you establish processes for continuous monitoring and assessment of AI risks."
    }
  ];

  return (
    <StandardServicePage
      seo={seoData}
      
      heroProps={{
        title: <><span className="text-atoro-green">AI Risk</span> Assessment</>,
        description: "Identify and mitigate risks in your AI systems with our comprehensive assessment methodology, ensuring compliance with emerging regulations and ethical standards.",
        primaryButtonText: "Schedule Assessment",
        primaryButtonLink: "/contact",
        secondaryButtonText: "Download Guide",
        secondaryButtonLink: "/resources/ai-risk-guide",
        badgeText: "AI Governance",
        imageUrl: "/lovable-uploads/ai-risk-assessment-hero.jpg",
        backgroundClass: "bg-gradient-to-br from-atoro-purple to-atoro-blue"
      }}
      
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by AI Innovators"
      clientLogosDescription="We've helped organizations across industries implement responsible AI practices"
      
      overviewSection={
        <StandardOverviewSection
          badgeText="Our Services"
          title="AI Risk Assessment & Compliance"
          description="Identify and mitigate risks in your AI systems with our comprehensive assessment services, designed to align with emerging regulations and industry best practices."
          features={overviewFeatures}
        />
      }
      
      benefitsSection={
        <StandardBenefitsSection
          badgeText="Why AI Risk Assessment"
          title="Benefits of AI Risk Assessment"
          description="Proactive risk assessment delivers significant advantages for organizations developing or deploying AI systems."
          benefits={benefits}
          imageUrl="/lovable-uploads/ai-risk-benefits.png"
          imageAlt="AI Risk Assessment benefits illustration"
        />
      }
      
      processSection={
        <StandardProcessSection
          badgeText="Our Approach"
          title="Our Assessment Process"
          description="Our structured approach ensures we identify and address all potential risks in your AI systems."
          steps={processSteps}
        />
      }
      
      testimonials={testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Read how our AI risk assessment services have helped organizations implement responsible AI practices."
      testimonialsBadgeText="AI Governance Excellence"
      
      ctaSection={
        <StandardCTASection
          badgeText="Get Started"
          title={<>Ready to <span className="text-atoro-green">Assess</span> Your AI Risks?</>}
          description="Book a free consultation with our AI governance experts to discuss your needs and how our risk assessment service can help."
          primaryButtonText="Schedule Assessment"
          primaryButtonLink="/contact"
          secondaryButtonText="Download Guide"
          secondaryButtonLink="/resources/ai-risk-guide"
          imageUrl="/lovable-uploads/ai-risk-cta.png"
        />
      }
    />
  );
};

export default AIRiskAssessment;
