
import React from 'react';
import { AnimatedTestimonials as UIAnimatedTestimonials } from "@/components/ui/animated-testimonials";
import type { Testimonial as UITestimonial } from "@/components/ui/animated-testimonials";

// Define the shared testimonial type that was previously imported
export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company?: string;
  avatarSrc?: string;
  rating?: number;
}

// Adapter function to convert from the shared testimonial format to the UI component format
const convertToUITestimonial = (testimonial: Testimonial, index: number): UITestimonial => {
  return {
    id: index,
    name: testimonial.author,
    role: testimonial.title,
    company: testimonial.company || '',
    content: testimonial.quote,
    rating: testimonial.rating || 5,
    avatar: testimonial.avatarSrc || `https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${(index * 11) % 99}.jpg`,
  };
};

// Adapter function to convert from testimonial object used in some components to UI format
const convertGenericToUITestimonial = (testimonial: any, index: number): UITestimonial => {
  return {
    id: index,
    name: testimonial.author || testimonial.name,
    role: testimonial.title || testimonial.role,
    company: testimonial.company || '',
    content: testimonial.quote || testimonial.content,
    rating: testimonial.rating || 5,
    avatar: testimonial.avatarSrc || testimonial.avatar || 
      `https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${(index * 11) % 99}.jpg`,
  };
};

interface AnimatedTestimonialsProps {
  testimonials: Array<Testimonial | any>;
  title?: string;
  description?: string;
  badgeText?: string;
  variant?: 'default' | 'grid' | 'carousel' | 'featured'; // For backward compatibility
  className?: string;
  showRatings?: boolean;
  bgColor?: string;
  trustedCompanies?: string[];
  trustedCompaniesTitle?: string;
}

const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials,
  title = "What Our Clients Say",
  description,
  badgeText = "Client Testimonials",
  className,
  bgColor,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by companies worldwide",
}) => {
  // Convert the testimonials to the format expected by the UI component
  const uiTestimonials = testimonials.map((testimonial, index) => {
    if ('quote' in testimonial) {
      return convertToUITestimonial(testimonial as Testimonial, index);
    }
    return convertGenericToUITestimonial(testimonial, index);
  });

  // Extract company names for the trusted companies section
  const companies = trustedCompanies.length > 0 
    ? trustedCompanies 
    : testimonials.map(t => t.company || '').filter(Boolean);

  return (
    <UIAnimatedTestimonials
      title={title}
      subtitle={description}
      badgeText={badgeText}
      testimonials={uiTestimonials}
      className={`${bgColor || ''} ${className || ''}`}
      trustedCompanies={companies.length > 0 ? Array.from(new Set(companies)) : []}
      trustedCompaniesTitle={trustedCompaniesTitle}
    />
  );
};

export default AnimatedTestimonials;
