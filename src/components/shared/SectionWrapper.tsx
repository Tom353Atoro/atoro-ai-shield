
import React, { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { tokens } from '@/lib/designTokens';

export interface SectionWrapperProps {
  children: ReactNode;
  title?: string;
  description?: string;
  badgeText?: string;
  badgeClassName?: string;
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  bgColor?: string;
  spacingSize?: 'sm' | 'md' | 'lg' | 'xl' | 'default' | 'compact' | 'minimal' | 'spacious' | 'narrow';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'narrow';
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
  spacingSize = 'lg',
  containerSize = 'lg',
  centered = true,
  id,
}) => {
  // Map legacy spacing values to new system
  const getSpacingClass = (size: string) => {
    switch(size) {
      case 'default': return tokens.spacing.section.md;
      case 'compact': return tokens.spacing.section.sm;
      case 'minimal': return 'py-4';
      case 'spacious': return tokens.spacing.section.xl;
      case 'narrow': return tokens.spacing.section.md;
      default: return tokens.spacing.section[size as 'sm' | 'md' | 'lg' | 'xl'] || tokens.spacing.section.md;
    }
  };

  // Map legacy container values to new system
  const getContainerClass = (size: string) => {
    switch(size) {
      case 'narrow': return 'max-w-4xl mx-auto';
      default: return tokens.spacing.container[size as 'sm' | 'md' | 'lg' | 'xl'] || tokens.spacing.container.lg;
    }
  };

  return (
    <section 
      className={cn(
        getSpacingClass(spacingSize),
        bgColor,
        className
      )}
      id={id}
    >
      <Container className={cn(
        getContainerClass(containerSize),
        containerClassName
      )}>
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
