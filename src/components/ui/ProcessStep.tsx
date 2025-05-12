import React from 'react';

/**
 * Props for the ProcessStep component
 * @property {number} stepNumber - The number of the step
 * @property {string} title - Step title
 * @property {string} description - Step description
 * @property {boolean} isLast - Whether this is the last step in the process
 * @property {string} accentColor - CSS class for accent color (default: "text-atoro-green")
 * @property {string} className - Optional additional CSS classes
 * @property {'horizontal' | 'vertical'} layout - Layout direction (default: "horizontal")
 */
export interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  isLast?: boolean;
  accentColor?: string;
  className?: string;
  layout?: 'horizontal' | 'vertical';
}

/**
 * ProcessStep Component
 * 
 * A component for displaying individual steps in a process with a number, title, and description.
 * Used in process sections across service pages.
 * 
 * @example
 * ```tsx
 * <ProcessStep
 *   stepNumber={1}
 *   title="Assessment"
 *   description="We evaluate your current security posture and requirements."
 * />
 * ```
 */
const ProcessStep: React.FC<ProcessStepProps> = ({
  stepNumber,
  title,
  description,
  isLast = false,
  accentColor = 'text-atoro-green',
  className = '',
  layout = 'horizontal',
}) => {
  const stepNumberFormatted = stepNumber < 10 ? `0${stepNumber}` : `${stepNumber}`;
  const connectorClass = layout === 'horizontal' 
    ? 'absolute top-5 left-5 w-[calc(100%-10px)] h-0.5 bg-atoro-green/10' 
    : 'absolute left-5 top-10 h-[calc(100%-30px)] w-0.5 bg-atoro-green/10';

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-full bg-atoro-green/10 ${accentColor} flex items-center justify-center font-semibold mr-3`}>
          {stepNumberFormatted}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm pl-14">{description}</p>
      {!isLast && layout === 'horizontal' && <div className="hidden md:block absolute top-5 left-5 w-[calc(100%-10px)] h-0.5 bg-atoro-green/10"></div>}
      {!isLast && layout === 'vertical' && <div className="hidden md:block absolute left-5 top-10 h-[calc(100%-10px)] w-0.5 bg-atoro-green/10"></div>}
    </div>
  );
};

export default ProcessStep; 