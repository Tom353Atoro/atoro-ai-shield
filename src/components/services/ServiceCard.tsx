import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconContainerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  onClick?: () => void;
  // Add missing properties
  linkText?: string;
  linkUrl?: string;
  hoverEffect?: boolean;
  variant?: string;
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
  linkText,
  linkUrl,
  hoverEffect = false,
  variant = 'default',
}) => {
  return (
    <Card 
      className={cn(
        "border border-gray-100 hover:border-atoro-green/30 transition-all overflow-hidden group h-full",
        hoverEffect && "hover:shadow-md",
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
        {linkText && linkUrl && (
          <div className="mt-4 text-center">
            <Link 
              to={linkUrl} 
              className="inline-flex items-center text-atoro-green hover:text-atoro-teal transition-colors text-sm font-medium"
            >
              {linkText}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
