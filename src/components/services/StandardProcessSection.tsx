import React, { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { ServiceSection } from './StandardServicePage';

export interface ProcessStep {
  title: string;
  description: string;
  icon?: ReactNode;
  stepNumber: number;
  highlightColor?: string;
}

export interface StandardProcessSectionProps {
  badgeText?: string;
  title: string;
  description?: string;
  steps: ProcessStep[];
  className?: string;
  id?: string;
}

/**
 * StandardProcessSection - A standardized component for service process sections
 * 
 * This component provides a consistent layout for showing the process/steps
 * involved in a service with numbered steps.
 */
const StandardProcessSection: React.FC<StandardProcessSectionProps> = ({
  badgeText,
  title,
  description,
  steps,
  className = "bg-white",
  id = "process"
}) => {
  return (
    <ServiceSection id={id} className={`py-16 ${className}`}>
      <div className="text-center mb-12">
        {badgeText && (
          <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">
            {badgeText}
          </Badge>
        )}
        <h2 className="mb-3">{title}</h2>
        {description && (
          <p className="text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="relative">
        {/* Optional connector line between steps */}
        <div className="absolute left-[29px] top-0 bottom-0 w-1 bg-gray-200 hidden md:block" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={`step-${index}`} className="flex gap-6 relative">
              <div className="flex-shrink-0 z-10">
                {step.icon ? (
                  <div className="rounded-full h-14 w-14 flex items-center justify-center bg-atoro-teal text-white font-bold text-lg">
                    {step.icon}
                  </div>
                ) : (
                  <div className="rounded-full h-14 w-14 flex items-center justify-center bg-atoro-teal text-white font-bold text-lg">
                    {step.stepNumber}
                  </div>
                )}
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-2 ${step.highlightColor || 'text-atoro-dark-teal'}`}>
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ServiceSection>
  );
};

export default StandardProcessSection; 