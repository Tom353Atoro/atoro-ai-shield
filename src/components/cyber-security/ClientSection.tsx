
import React from 'react';
import LogoCarousel from '@/components/shared/LogoCarousel';

const ClientSection = () => {
  // Client logos for carousel
  const clientLogos = [
    {
      id: 1,
      name: "DataCorp",
      imagePath: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png"
    },
    {
      id: 2,
      name: "Innovex",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png"
    },
    {
      id: 3,
      name: "PrivacyTech",
      imagePath: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png"
    },
    {
      id: 4,
      name: "SecureTech",
      imagePath: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png"
    },
    {
      id: 5,
      name: "CloudNet",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png"
    }
  ];
  
  return (
    <LogoCarousel 
      logos={clientLogos} 
      title="Trusted by Leading Organizations" 
      description="We've helped companies across industries strengthen their security posture"
      className="bg-gray-50"
    />
  );
};

export default ClientSection;
