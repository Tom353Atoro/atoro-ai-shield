
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconContainerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  className,
  iconContainerClassName,
  titleClassName,
  descriptionClassName,
  onClick,
}) => {
  return (
    <Card 
      className={cn(
        "border border-gray-100 hover:border-atoro-green/30 hover:shadow-md transition-all overflow-hidden group h-full",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="pt-6">
        {icon && (
          <div className="mb-4 flex justify-center">
            <div className={cn("p-3 bg-atoro-teal/5 rounded-lg", iconContainerClassName)}>
              {icon}
            </div>
          </div>
        )}
        <h3 className={cn("text-xl font-semibold mb-2 text-center", titleClassName)}>
          {title}
        </h3>
        <p className={cn("text-gray-600 text-center text-sm", descriptionClassName)}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
