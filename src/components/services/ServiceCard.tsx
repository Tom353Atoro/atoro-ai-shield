
import React, { ReactNode } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  contentClassName?: string;
  iconContainerClassName?: string;
  footerClassName?: string;
  linkText?: string;
  linkUrl?: string;
  linkIcon?: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'feature' | 'compact';
  hoverEffect?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
  contentClassName,
  iconContainerClassName = "p-3 bg-atoro-teal/5 rounded-lg",
  footerClassName,
  linkText,
  linkUrl,
  linkIcon = <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />,
  onClick,
  variant = 'default',
  hoverEffect = true,
}) => {
  const cardContent = (
    <>
      <CardContent className={cn(
        "pt-6", 
        variant === 'compact' ? 'p-4' : '',
        contentClassName
      )}>
        {icon && (
          <div className={cn(
            "mb-4", 
            variant === 'compact' ? 'mb-2' : '', 
            "flex justify-center"
          )}>
            <div className={iconContainerClassName}>
              {icon}
            </div>
          </div>
        )}
        <h3 className={cn(
          "font-semibold mb-2 text-center",
          variant === 'feature' ? 'text-2xl' : 'text-xl',
          variant === 'compact' ? 'text-lg' : ''
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-gray-600 text-center",
          variant === 'compact' ? 'text-xs' : 'text-sm'
        )}>
          {description}
        </p>
      </CardContent>
      
      {linkText && linkUrl && (
        <CardFooter className={cn(
          "pt-0 pb-5 flex justify-center",
          footerClassName
        )}>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-atoro-teal group-hover:text-atoro-green group-hover:bg-atoro-green/10 transition-colors" 
            asChild
          >
            <Link to={linkUrl} className="flex items-center gap-1">
              {linkText} {linkIcon}
            </Link>
          </Button>
        </CardFooter>
      )}
    </>
  );

  const cardClasses = cn(
    "border border-gray-100 overflow-hidden h-full",
    hoverEffect ? "hover:border-atoro-green/30 hover:shadow-md transition-all group" : "",
    className
  );

  if (onClick) {
    return (
      <Card className={cn(cardClasses, "cursor-pointer")} onClick={onClick}>
        {cardContent}
      </Card>
    );
  }

  if (linkUrl && !linkText) {
    return (
      <Card className={cardClasses}>
        <Link to={linkUrl} className="block h-full">
          {cardContent}
        </Link>
      </Card>
    );
  }

  return (
    <Card className={cardClasses}>
      {cardContent}
    </Card>
  );
};

export default ServiceCard;
