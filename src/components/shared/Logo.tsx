
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'white';
  href?: string;
}

const Logo = ({ 
  className, 
  size = 'medium', 
  variant = 'default',
  href = '/'
}: LogoProps) => {
  // Define size classes based on the size prop
  const sizeClasses = {
    small: 'h-6',
    medium: 'h-8 md:h-10',
    large: 'h-12 md:h-16'
  };
  
  // Define variants
  let logoSrc;
  
  if (variant === 'white') {
    logoSrc = "/lovable-uploads/atoro-logo.png";
  } else {
    logoSrc = "/lovable-uploads/8d13129b-c156-4ec7-b2ef-bbd0364fb711.png";
  }
  
  const logo = (
    <img 
      src={logoSrc}
      alt="Atoro Logo" 
      className={cn(sizeClasses[size], className)}
      width="auto"
    />
  );

  // If href is provided, wrap in Link component
  if (href) {
    return (
      <Link to={href} className="inline-block">
        {logo}
      </Link>
    );
  }
  
  // Otherwise just return the logo
  return logo;
};

export default Logo;
