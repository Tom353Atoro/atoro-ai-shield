
import React, { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ServiceSectionWrapperProps {
  children: ReactNode;
  title?: string;
  description?: string;
  badgeText?: string;
  badgeClassName?: string;
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  bgColor?: string;
  centered?: boolean;
}

const ServiceSectionWrapper: React.FC<ServiceSectionWrapperProps> = ({
  children,
  title,
  description,
  badgeText,
  badgeClassName = "bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20",
  className = "py-12",
  containerClassName,
  headerClassName = "mb-10",
  bgColor = "bg-white",
  centered = true,
}) => {
  return (
    <section className={cn(className, bgColor)}>
      <Container className={containerClassName}>
        {(title || description || badgeText) && (
          <div className={cn(
            "mb-10", 
            headerClassName,
            centered ? "text-center" : "text-left"
          )}>
            {badgeText && (
              <Badge className={cn("mb-3", badgeClassName)}>
                {badgeText}
              </Badge>
            )}
            {title && <h2 className="mb-3">{title}</h2>}
            {description && (
              <p className={cn(
                "text-gray-700",
                centered ? "max-w-2xl mx-auto" : ""
              )}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default ServiceSectionWrapper;
