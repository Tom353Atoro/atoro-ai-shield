import React from 'react';
import { ShieldCheck, Users, Zap } from 'lucide-react';
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
 * Virtual AI Governance Officer (vAIGO) Service Page
 * 
 * Standardized implementation of the vAIGO service page using the
 * established component architecture.
 */
const VAIGO: React.FC = () => {
  // SEO metadata
  const seoData: SEOProps = {
    pageTitle: "Virtual AI Governance Officer (vAIGO) | Atoro AI Shield",
    metaDescription: "Get expert AI governance leadership without the cost of a full-time hire. Our Virtual AI Governance Officer service helps implement responsible AI practices.",
    canonicalUrl: "https://www.atoroaishield.com/services/cyber-security/vaigo",
    ogImageUrl: "/lovable-uploads/ai-governance-hero.jpg"
  };

  // VAIGO specific testimonials
  const testimonials: TestimonialItem[] = [
    {
      quote: "Atoro's virtual AI Governance Officer service has been instrumental in helping us implement responsible AI practices while maintaining our development velocity.",
      author: "Elena Rodriguez",
      title: "CTO",
      company: "AI Solutions Inc",
      avatarSrc: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      rating: 5
    },
    {
      quote: "Our vAIGO consultant helped us navigate complex regulatory requirements for our machine learning products, saving us significant time and potential compliance issues.",
      author: "Michael Chang",
      title: "Head of AI",
      company: "TechInnovate",
      avatarSrc: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png",
      rating: 4.5
    },
    {
      quote: "Having Atoro's expertise as our virtual AI Governance Officer made all the difference in building trust with our enterprise clients who were concerned about AI ethics.",
      author: "Sophia Williams",
      title: "CEO",
      company: "DataSmart Analytics",
      avatarSrc: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      rating: 5
    }
  ];

  // Client logos data
  const clientLogos: ClientLogoItem[] = [
    {
      id: 1,
      name: "AI Solutions Inc",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
      altText: "AI Solutions Inc logo"
    },
    {
      id: 2,
      name: "TechInnovate",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png",
      altText: "TechInnovate logo"
    },
    {
      id: 3,
      name: "DataSmart Analytics",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      altText: "DataSmart Analytics logo"
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
      icon: ShieldCheck,
      title: "Expert AI Governance",
      description: "Access experienced AI governance specialists who understand both technical implementation and regulatory requirements.",
      iconColor: "text-atoro-teal"
    },
    {
      icon: Users,
      title: "Flexible Engagement",
      description: "Get the expertise you need without the cost of a full-time hire, with customizable engagement options to fit your business.",
      iconColor: "text-atoro-green"
    },
    {
      icon: Zap,
      title: "Accelerated Compliance",
      description: "Implement AI governance frameworks faster with proven approaches and ready-to-deploy policies and procedures.",
      iconColor: "text-atoro-blue"
    }
  ];

  // Benefits section data
  const benefits: BenefitItem[] = [
    {
      title: "Reduced Risk",
      description: "Identify and mitigate AI ethics and compliance risks before they become costly problems or reputation damage."
    },
    {
      title: "Faster Time-to-Market",
      description: "Implement governance practices that enable responsible innovation without slowing down your development cycles."
    },
    {
      title: "Cost Efficiency",
      description: "Access specialist expertise at a fraction of the cost of hiring a full-time AI governance officer."
    },
    {
      title: "Enterprise Trust",
      description: "Build trust with enterprise clients by demonstrating your commitment to responsible AI development and deployment."
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "Initial Assessment",
      description: "We evaluate your current AI governance practices, technology stack, and business objectives to create a tailored approach."
    },
    {
      stepNumber: 2,
      title: "Governance Framework Design",
      description: "We develop a practical AI governance framework aligned with your organizational needs and relevant regulations."
    },
    {
      stepNumber: 3,
      title: "Policy & Process Implementation",
      description: "We help implement AI governance policies, processes, and tools that integrate with your existing development workflow."
    },
    {
      stepNumber: 4,
      title: "Team Training",
      description: "We train your team on responsible AI practices and how to use the governance framework effectively."
    },
    {
      stepNumber: 5,
      title: "Ongoing Support & Monitoring",
      description: "We provide continuous advice, monitoring, and updates to ensure your AI systems remain compliant as regulations evolve."
    }
  ];

  // FAQ section data
  const faqs: FAQItem[] = [
    {
      question: "What exactly does a Virtual AI Governance Officer do?",
      answer: "A Virtual AI Governance Officer helps organizations implement and maintain ethical AI practices by establishing governance frameworks, policies, and processes. This includes risk assessments, compliance checks, documentation practices, and helping teams integrate responsible AI principles into their development workflow."
    },
    {
      question: "How is this different from hiring a consultant?",
      answer: "Unlike a one-time consulting engagement, our vAIGO service provides ongoing support and expertise. We become an extension of your team, available for regular meetings, reviews, and guidance as your AI systems evolve, but without the cost and commitment of a full-time hire."
    },
    {
      question: "Which regulations does your vAIGO service help with?",
      answer: "Our vAIGO specialists are knowledgeable about key AI regulations and standards including the EU AI Act, NIST AI Risk Management Framework, ISO/IEC 42001, sector-specific regulations, and emerging global AI governance requirements."
    },
    {
      question: "How much time commitment is required from our team?",
      answer: "We design our engagement to minimize disruption to your team. Typically, we need 2-4 hours per week from key stakeholders during the initial setup phase, and then 1-2 hours per week for ongoing governance activities. We adapt to your schedule and needs."
    },
    {
      question: "Can you support AI systems that are already in production?",
      answer: "Yes, we can help with both new AI development and existing systems. For systems already in production, we conduct a thorough assessment, identify any compliance gaps, and implement governance processes that minimize disruption while ensuring responsible practices."
    }
  ];

  return (
    <StandardServicePage
      seo={seoData}
      
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
      
      clientLogos={clientLogos}
      clientLogosTitle="Trusted by AI Innovators"
      clientLogosDescription="We've helped companies of all sizes implement ethical AI systems with our vAIGO service"
      
      overviewSection={
        <StandardOverviewSection
          badgeText="What is vAIGO?"
          title="Virtual AI Governance Officer"
          description="Our vAIGO service provides the AI governance expertise you need, when you need it, without the overhead of a full-time hire. Get practical guidance on responsible AI implementation that balances innovation with compliance."
          features={overviewFeatures}
        />
      }
      
      benefitsSection={
        <StandardBenefitsSection
          badgeText="Why vAIGO"
          title="Benefits of vAIGO Service"
          description="Implementing responsible AI governance delivers significant advantages for your organization."
          benefits={benefits}
          imageUrl="/lovable-uploads/vaigo-benefits.png"
          imageAlt="vAIGO benefits illustration"
        />
      }
      
      processSection={
        <StandardProcessSection
          badgeText="Our Approach"
          title="How Our vAIGO Service Works"
          description="We provide a structured yet flexible approach to implementing AI governance in your organization."
          steps={processSteps}
        />
      }
      
      testimonials={testimonials}
      testimonialsTitle="What Our Clients Say"
      testimonialsDescription="Read how our vAIGO service has helped companies maintain responsible AI practices while focusing on innovation."
      testimonialsBadgeText="vAIGO Success Stories"
      
      faqSection={
        <StandardFAQSection
          badgeText="vAIGO FAQ"
          title="Frequently Asked Questions"
          description="Get answers to common questions about our Virtual AI Governance Officer service."
          faqs={faqs}
        />
      }
      
      ctaSection={
        <StandardCTASection
          badgeText="Get Started"
          title={<>Ready to <span className="text-atoro-green">Strengthen</span> Your AI Governance?</>}
          description="Book a free consultation with our AI governance experts to discuss your needs and how our vAIGO service can help."
          primaryButtonText="Schedule vAIGO Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/resources/vaigo-guide"
          imageUrl="/lovable-uploads/vaigo-cta.png"
        />
      }
    />
  );
};

export default VAIGO; 