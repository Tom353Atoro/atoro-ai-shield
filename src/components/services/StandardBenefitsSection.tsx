import React from 'react';
import { Container } from '@/components/ui/Container';
import { BenefitItem as BenefitItemType } from '@/types';
import { SectionHeader, BenefitItem } from '@/components/ui';

export interface StandardBenefitsSectionProps {
  badgeText: string;
  title: string | React.ReactNode;
  description: string;
  benefits: BenefitItemType[];
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
  bgColor?: string;
}

/**
 * StandardBenefitsSection Component
 * 
 * A standardized section for displaying service benefits.
 */
const StandardBenefitsSection: React.FC<StandardBenefitsSectionProps> = ({
  badgeText,
  title,
  description,
  benefits,
  imageUrl,
  imageAlt = "Benefits illustration",
  className = '',
  bgColor = 'bg-white'
}) => {
  return (
    <section className={`py-16 ${bgColor} ${className}`}>
      <Container>
        <SectionHeader
          badgeText={badgeText}
          title={title}
          description={description}
          textAlign="center"
        />

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              title={benefit.title}
              description={benefit.description}
              className="mb-4"
            />
          ))}
        </div>

        {imageUrl && (
          <div className="mt-12 flex justify-center">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="max-w-full md:max-w-3xl rounded-lg shadow-md"
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default StandardBenefitsSection; 