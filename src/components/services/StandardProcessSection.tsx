import React from 'react';
import { Container } from '@/components/ui/Container';
import { ProcessStep as ProcessStepType } from '@/types';
import { SectionHeader, ProcessStep } from '@/components/ui';

export interface StandardProcessSectionProps {
  badgeText: string;
  title: string | React.ReactNode;
  description: string;
  steps: ProcessStepType[];
  className?: string;
  bgColor?: string;
  layout?: 'horizontal' | 'vertical';
}

/**
 * StandardProcessSection Component
 * 
 * A standardized section for displaying service process steps.
 */
const StandardProcessSection: React.FC<StandardProcessSectionProps> = ({
  badgeText,
  title,
  description,
  steps,
  className = '',
  bgColor = 'bg-gray-50',
  layout = 'horizontal'
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

        <div className={`mt-12 grid ${layout === 'horizontal' ? 'md:grid-cols-4' : 'md:grid-cols-1'} gap-8`}>
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
              layout={layout}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StandardProcessSection; 