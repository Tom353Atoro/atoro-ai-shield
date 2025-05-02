
import React from 'react';
import LogoGrid from '@/components/shared/LogoGrid';

/**
 * CertificationLogos Component
 * 
 * A static component that displays certification logos in a responsive grid.
 * 
 * HOW TO UPDATE:
 * 1. Upload your certification logo images to the public folder (e.g., public/certifications/)
 * 2. Update the certificationLogos array below with your logo information
 * 3. For each logo, provide a unique id, name, and path to the image
 * 4. Optionally set width and alt text for each logo
 * 
 * @param title - Optional custom title for the section
 * @param description - Optional custom description text
 * @param className - Optional additional CSS classes
 */
interface CertificationLogosProps {
  title?: string;
  description?: string;
  className?: string;
}

const CertificationLogos: React.FC<CertificationLogosProps> = ({
  title = "Industry-Standard Certifications",
  description = "Our security practices and services are backed by industry-recognized certifications.",
  className = "",
}) => {
  // STATIC CERTIFICATION LOGOS
  // Replace these with your actual certification logos
  const certificationLogos = [
    {
      id: 1,
      name: "ISO 27001",
      imagePath: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=150",
      alt: "ISO 27001 Certification",
      width: 140
    },
    {
      id: 2,
      name: "SOC 2 Type II",
      imagePath: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=150",
      alt: "SOC 2 Type II Certification",
      width: 140
    },
    {
      id: 3,
      name: "GDPR Compliant",
      imagePath: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=150",
      alt: "GDPR Compliance Certification",
      width: 140
    },
    {
      id: 4,
      name: "HIPAA Compliant",
      imagePath: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150",
      alt: "HIPAA Compliance Certification",
      width: 140
    }
  ];

  return (
    <LogoGrid
      logos={certificationLogos}
      title={title}
      description={description}
      className={className}
    />
  );
};

export default CertificationLogos;
