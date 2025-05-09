
import React from 'react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { tokens } from '@/lib/designTokens';

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
  stepGap?: 'sm' | 'md' | 'lg';
  stepClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  connectorClassName?: string;
}

const ServiceProcessList: React.FC<ServiceProcessListProps> = ({
  steps,
  className,
  direction = 'horizontal',
  variant = 'numbered',
  accentColor = 'text-atoro-green border-atoro-green',
  stepGap = 'md',
  stepClassName,
  titleClassName,
  descriptionClassName,
  connectorClassName,
}) => {
  // Map gap sizes
  const gapMap = {
    sm: 'gap-4',
    md: 'gap-8',
    lg: 'gap-12',
  };

  // Map step width based on direction
  const stepWidthMap = {
    horizontal: {
      container: 'grid grid-cols-1 md:grid-cols-4 gap-8',
      step: 'flex flex-col',
    },
    vertical: {
      container: 'space-y-8',
      step: 'flex flex-row',
    },
  };

  // Generate connector styles based on direction
  const getConnectorStyles = (index: number) => {
    if (index >= steps.length - 1) return ''; // No connector for last item
    
    if (direction === 'horizontal') {
      return cn(
        "md:after:content-[''] md:after:absolute md:after:top-5 md:after:left-5 md:after:w-[calc(100%-10px)] md:after:h-0.5 md:after:bg-atoro-green/10",
        connectorClassName
      );
    }
    
    return cn(
      "after:content-[''] after:absolute after:top-10 after:left-5 after:w-0.5 after:h-[calc(100%-10px)] after:bg-atoro-green/10",
      connectorClassName
    );
  };

  return (
    <div className={cn(
      stepWidthMap[direction].container,
      gapMap[stepGap],
      className
    )}>
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={cn(
            "relative",
            stepWidthMap[direction].step,
            getConnectorStyles(index),
            stepClassName
          )}
        >
          <div className="flex items-center mb-4">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center font-semibold mr-3 flex-shrink-0",
              variant === 'numbered' ? `bg-atoro-green/10 ${accentColor}` : ''
            )}>
              {variant === 'numbered' ? (
                <span>{step.number}</span>
              ) : (
                step.icon || <span>{step.number}</span>
              )}
            </div>
            <h3 className={cn("font-semibold", titleClassName)}>{step.title}</h3>
          </div>
          <p className={cn(
            "text-gray-600 text-sm",
            direction === 'vertical' ? "pl-14" : "",
            descriptionClassName
          )}>
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceProcessList;
