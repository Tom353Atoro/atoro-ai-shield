
import React from 'react';
import { Container } from '@/components/ui/Container';
import { ProcessStep } from '@/types';
import { SectionHeader, ProcessStep as ProcessStepComponent } from '@/components/ui';

export interface StandardProcessSectionProps {
  badgeText: string;
  title: string | React.ReactNode;
  description: string;
  steps: ProcessStep[];
  className?: string;
  bgColor?: string;
  layout?: 'horizontal' | 'vertical';
  id?: string;
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
  layout = 'horizontal',
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

        <div className={`mt-12 grid ${layout === 'horizontal' ? 'md:grid-cols-4' : 'md:grid-cols-1'} gap-8`}>
          {steps.map((step, index) => (
            <ProcessStepComponent
              key={index}
              stepNumber={step.stepNumber || index + 1}
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
