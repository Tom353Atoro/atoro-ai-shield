
import React from 'react';
import { Container } from '@/components/ui/Container';
import { OverviewFeature } from '@/types';
import { SectionHeader, FeatureCard } from '@/components/ui';

export interface StandardOverviewSectionProps {
  badgeText: string;
  title: string | React.ReactNode;
  description: string;
  features: OverviewFeature[];
  className?: string;
  bgColor?: string;
  id?: string;
}

/**
 * StandardOverviewSection Component
 * 
 * A standardized section for displaying service overview with featured capabilities.
 */
const StandardOverviewSection: React.FC<StandardOverviewSectionProps> = ({
  badgeText,
  title,
  description,
  features,
  className = '',
  bgColor = 'bg-white',
  id
}) => {
  return (
    <section id={id} className={`py-12 ${bgColor} ${className}`}>
      <Container>
        <SectionHeader
          badgeText={badgeText}
          title={title}
          description={description}
          textAlign="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StandardOverviewSection; 
