
import React from 'react';
import UnifiedHero from '@/components/shared/UnifiedHero';
import { tokens } from '@/lib/designTokens';

const HeroSection = () => {
  return (
    <UnifiedHero
      layout="two-column"
      title="Not Afterthought"
      highlightText="Privacy by Design,"
      highlightTextClassName={tokens.colors.text.green}
      subtitle="Turn complex privacy regulations into a competitive advantage. Our data privacy solutions handle compliance while you focus on building your product."
      primaryButtonText="Request Privacy Assessment"
      primaryButtonLink="/contact"
      backgroundClass={tokens.gradients.heroDarkTeal}
      imageUrl="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg"
      imageAlt="Data privacy visualization"
    />
  );
};

export default HeroSection;
