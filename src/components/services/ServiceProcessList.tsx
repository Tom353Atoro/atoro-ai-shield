
import React from 'react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ProcessStep {
  number: string | number;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface ServiceProcessListProps {
  steps: ProcessStep[];
  className?: string;
  direction?: 'horizontal' | 'vertical';
  variant?: 'numbered' | 'icon';
  accentColor?: string;
}

const ServiceProcessList: React.FC<ServiceProcessListProps> = ({
  steps,
  className,
  direction = 'horizontal',
  variant = 'numbered',
  accentColor = 'text-atoro-green border-atoro-green',
}) => {
  return (
    <div className={cn(
      "w-full",
      direction === 'horizontal' ? 'grid grid-cols-1 md:grid-cols-4 gap-8' : 'space-y-8',
      className
    )}>
      {steps.map((step, index) => (
        <div key={index} className={cn("relative", direction === 'horizontal' && index < steps.length - 1 && "md:after:content-[''] md:after:absolute md:after:top-5 md:after:left-5 md:after:w-[calc(100%-10px)] md:after:h-0.5 md:after:bg-atoro-green/10")}>
          <div className="flex items-center mb-4">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center font-semibold mr-3",
              variant === 'numbered' ? `bg-atoro-green/10 ${accentColor}` : ''
            )}>
              {variant === 'numbered' ? (
                <span>{step.number}</span>
              ) : (
                step.icon || <span>{step.number}</span>
              )}
            </div>
            <h3 className="font-semibold">{step.title}</h3>
          </div>
          <p className="text-gray-600 text-sm pl-14">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceProcessList;
