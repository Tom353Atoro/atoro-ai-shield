
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  contentClassName?: string;
  iconContainerClassName?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
  contentClassName,
  iconContainerClassName = "p-3 bg-atoro-teal/5 rounded-lg"
}) => {
  return (
    <Card 
      className={cn(
        "border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full",
        className
      )}
    >
      <CardContent className={cn("pt-6", contentClassName)}>
        {icon && (
          <div className="mb-4 flex justify-center">
            <div className={iconContainerClassName}>
              {icon}
            </div>
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-center text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
