
import React from 'react';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Miller",
      role: "Chief Privacy Officer",
      company: "TechFlow Solutions",
      content: "Atoro's data privacy experts transformed our compliance from a headache into a competitive advantage. Their approach to GDPR made our expansion seamless.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "DataSphere",
      content: "When we needed to implement privacy by design, Atoro delivered. Their team understood both regulatory requirements and technical implementation details.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Data Protection Lead",
      company: "SecureCloud Inc",
      content: "Their EU Representative service saved us months of bureaucracy. We now have complete peace of mind for our privacy compliance.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  const trustedCompanies = ["TechFlow", "DataSphere", "SecureCloud", "PrivacyGuard", "DataDefend"];

  return (
    <AnimatedTestimonials
      title="Trusted by Privacy-Conscious Companies"
      description="Our privacy solutions have helped SaaS businesses of all sizes comply with regulations while building customer trust."
      badgeText="Privacy Excellence"
      testimonials={testimonials}
      trustedCompanies={trustedCompanies}
      trustedCompaniesTitle="Trusted by data-driven companies worldwide"
    />
  );
};

export default TestimonialsSection;
