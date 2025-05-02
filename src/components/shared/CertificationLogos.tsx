
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
  // CERTIFICATION LOGOS
  const certificationLogos = [
    {
      id: 1,
      name: "SOC 2",
      imagePath: "/lovable-uploads/63ef7bec-da6c-47d4-84a5-9850570d144b.png",
      alt: "SOC 2 Certification",
      width: 140
    },
    {
      id: 2,
      name: "GDPR",
      imagePath: "/lovable-uploads/4cc54b2b-b104-494e-be46-2976451d834c.png",
      alt: "GDPR Compliance Certification",
      width: 140
    },
    {
      id: 3,
      name: "ISO 27001",
      imagePath: "/lovable-uploads/81d0cbb3-5fd3-4565-a7d0-df73812e5490.png",
      alt: "ISO 27001 Certification",
      width: 140
    },
    {
      id: 4,
      name: "HIPAA",
      imagePath: "/lovable-uploads/1b5ef3e0-1624-4c80-b9f0-33d25a819c7b.png",
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
