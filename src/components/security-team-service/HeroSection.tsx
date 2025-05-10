
import React from 'react';
import UnifiedHero from '@/components/shared/UnifiedHero';
import { tokens } from '@/lib/designTokens';

const HeroSection = () => {
  return (
    <UnifiedHero
      layout="two-column"
      badgeText="Virtual Security Team"
      title="Your Complete Virtual Security Department"
      highlightText=""
      subtitle="Get enterprise-grade security and compliance without the overhead of an in-house team. Our experts become an extension of your organization, handling everything from daily security operations to compliance certifications."
      primaryButtonText="Schedule a Security Assessment"
      secondaryButtonText="Learn More"
      backgroundClass="bg-gradient-to-br from-atoro-dark-teal to-black"
      imageUrl="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg"
      imageAlt="Security Team Service"
    />
  );
};

export default HeroSection;
