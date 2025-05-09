
import React, { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { spacing } from '@/lib/designSystem';

interface SectionWrapperProps {
  children: ReactNode;
  title?: string;
  description?: string;
  badgeText?: string;
  badgeClassName?: string;
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  bgColor?: string;
  spacingSize?: 'default' | 'compact' | 'minimal' | 'spacious';
  containerSize?: 'default' | 'narrow' | 'wide';
  centered?: boolean;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  title,
  description,
  badgeText,
  badgeClassName = "bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20",
  className,
  containerClassName,
  headerClassName = "mb-10",
  bgColor = "bg-white",
  spacingSize = 'default',
  containerSize = 'default',
  centered = true,
  id,
}) => {
  return (
    <section 
      className={cn(
        spacing.section[spacingSize],
        bgColor,
        className
      )}
      id={id}
    >
      <Container className={cn(containerClassName)}>
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
                "text-gray-700 max-w-3xl",
                centered ? "mx-auto" : ""
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

export default SectionWrapper;
