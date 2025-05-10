
import React from 'react';
import UnifiedHero from '@/components/shared/UnifiedHero';
import { tokens } from '@/lib/designTokens';

const HeroSection = () => {
  return (
    <UnifiedHero
      layout="two-column"
      title="Move Fast with Confidence"
      subtitle="In the SaaS world, a single security slip-up can break customer trust. Our holistic cyber security solutions help you move quickly without compromising safety."
      primaryButtonText="Book a Security Assessment"
      primaryButtonLink="/contact"
      backgroundClass={tokens.gradients.heroDarkTeal}
      imageUrl="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg"
      imageAlt="Cyber security data visualization"
    />
  );
};

export default HeroSection;
