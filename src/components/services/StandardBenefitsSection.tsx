
import React from 'react';
import { Container } from '@/components/ui/Container';
import { BenefitItem } from '@/types';
import { SectionHeader, BenefitItem as BenefitItemComponent } from '@/components/ui';

export interface StandardBenefitsSectionProps {
  badgeText: string;
  title: string | React.ReactNode;
  description: string;
  benefits: BenefitItem[];
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
  bgColor?: string;
  id?: string;
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
  bgColor = 'bg-white',
  id
}) => {
  return (
    <section id={id} className={`py-16 ${bgColor} ${className}`}>
      <Container>
        <SectionHeader
          badgeText={badgeText}
          title={title}
          description={description}
          textAlign="center"
        />

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitItemComponent
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
