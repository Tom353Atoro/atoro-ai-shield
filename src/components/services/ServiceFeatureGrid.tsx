
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceFeatureGridProps {
  children: ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  maxWidth?: string;
  centered?: boolean;
}

const ServiceFeatureGrid: React.FC<ServiceFeatureGridProps> = ({
  children,
  className,
  columns = 3,
  gap = 'md',
  maxWidth,
  centered = false,
}) => {
  const gapMap = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };
  
  const columnsMap = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <div 
      className={cn(
        "grid grid-cols-1",
        columnsMap[columns],
        gapMap[gap],
        centered ? "mx-auto" : "",
        maxWidth,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ServiceFeatureGrid;
