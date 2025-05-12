import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import PenetrationTestingOverview from '@/components/penetration-testing/PenetrationTestingOverview';
import PenetrationTestingProcess from '@/components/penetration-testing/PenetrationTestingProcess';
import PenetrationTestingBenefits from '@/components/penetration-testing/PenetrationTestingBenefits';
import PenetrationTestingCTA from '@/components/penetration-testing/PenetrationTestingCTA';
import PenetrationTestingFAQ from '@/components/penetration-testing/PenetrationTestingFAQ';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const PenetrationTesting = () => {
  // Penetration testing specific testimonials
  const pentestTestimonials = [
    {
      quote: "Atoro's penetration testing uncovered vulnerabilities our automated scans missed. Their detailed remediation steps helped us fix issues quickly and effectively.",
      author: "Alex Thompson",
      title: "CTO",
      company: "SecureStack",
      rating: 5
    }, {
      quote: "The penetration testing team at Atoro combines technical excellence with practical business context. They understand what matters most to our organization.",
      author: "Jennifer Wu",
      title: "CISO",
      company: "DataTrust",
      rating: 4.5
    }, {
      quote: "What impressed me most was the clear communication throughout the testing process. No technical jargon - just straightforward explanations of our security risks.",
      author: "Marcus Levi",
      title: "Head of DevOps",
      company: "CloudNative",
      rating: 5
    }
  ];
  
  return (
    <ServicePageTemplate
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
      serviceSections={
        <>
          {/* Overview Section */}
          <PenetrationTestingOverview />
          
          {/* Benefits Section */}
          <PenetrationTestingBenefits />
          
          {/* Process Section */}
          <PenetrationTestingProcess />
          
          {/* Testimonials after process */}
          <AnimatedTestimonials 
            testimonials={pentestTestimonials} 
            title="What Our Clients Say"
            description="Read how our penetration testing has helped organizations improve their security posture."
            badgeText="Client Testimonials"
            bgColor="bg-white"
          />
        </>
      }
      testimonials={undefined}
      faqSection={<PenetrationTestingFAQ />}
      ctaSection={<PenetrationTestingCTA />}
    />
  );
};

export default PenetrationTesting;
