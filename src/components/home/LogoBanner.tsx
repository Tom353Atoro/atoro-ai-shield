
import React from 'react';
import LogoCarousel from '@/components/shared/LogoCarousel';

/**
 * LogoBanner Component
 * 
 * Displays a smooth, fast-scrolling banner of partner logos
 * 
 * HOW TO UPDATE:
 * 1. Upload your logo images to the public/logos directory
 * 2. Update the logoData array below with your logo information
 * 3. For each logo, provide a unique id, name, and path to the image
 * 4. Optionally set width and alt text for each logo
 */
const LogoBanner: React.FC = () => {
  // This is the array of logos you should modify when updating your logos
  const logoData = [
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
    },
    {
      id: 5,
      name: "Clutch",
      imagePath: "/lovable-uploads/855b40a9-957c-452d-8ce6-f0318e60dea6.png",
      alt: "Clutch Logo",
      width: 130
    }
  ];

  return (
    <LogoCarousel
      logos={logoData}
      title="Our Technology Partners"
      description="We work with leading technology providers to deliver exceptional solutions."
      className="bg-gray-50"
      autoScroll={true}
      scrollInterval={1500}  // Faster scrolling (from 2000ms to 1500ms)
      speed={300}  // Quicker transitions (from 500ms to 300ms)
    />
  );
};

export default LogoBanner;
