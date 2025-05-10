
import React from 'react';
import ClientLogos from '@/components/shared/ClientLogos';

const ClientLogoSection = () => {
  // Client logos for security team service
  const clientLogos = [
    {
      id: 1,
      name: "Rewardful",
      imagePath: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png",
      alt: "Rewardful Logo",
      width: 150
    },
    {
      id: 2,
      name: "Pipedrive",
      imagePath: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png", 
      alt: "Pipedrive Logo",
      width: 130
    },
    {
      id: 3,
      name: "RankMath",
      imagePath: "/lovable-uploads/f926ed34-34dd-42fb-8d87-9364b8d59353.png",
      alt: "RankMath Logo",
      width: 140
    },
    {
      id: 4,
      name: "HeartpaceHR",
      imagePath: "/lovable-uploads/12f9a0de-861c-4d03-a543-0682cd8b577e.png",
      alt: "HeartpaceHR Logo",
      width: 160
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <ClientLogos 
        logos={clientLogos}
        title="Our Security Clients"
        description="Organizations that trust our security team services"
        bgColor="bg-gray-50"
      />
    </section>
  );
};

export default ClientLogoSection;
