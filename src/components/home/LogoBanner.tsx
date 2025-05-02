
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
      name: "TechCorp",
      imagePath: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=150",
      alt: "TechCorp Logo",
      width: 150
    },
    {
      id: 2,
      name: "DigitalWave",
      imagePath: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=150", 
      alt: "DigitalWave Logo",
      width: 130
    },
    {
      id: 3,
      name: "InnovateTech",
      imagePath: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=150",
      alt: "InnovateTech Logo",
      width: 140
    },
    {
      id: 4,
      name: "FutureSoft",
      imagePath: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150",
      alt: "FutureSoft Logo",
      width: 160
    },
    {
      id: 5,
      name: "DataFlow",
      imagePath: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=150",
      alt: "DataFlow Logo",
      width: 145
    },
    {
      id: 6,
      name: "CloudNine",
      imagePath: "/lovable-uploads/4d060603-ad02-4190-9beb-cdb340b18bbc.png", 
      alt: "CloudNine Logo",
      width: 150
    },
    {
      id: 7,
      name: "Quantum",
      imagePath: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=150",
      alt: "Quantum Logo",
      width: 135
    },
    {
      id: 8,
      name: "SkyLink",
      imagePath: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=150",
      alt: "SkyLink Logo",
      width: 140
    }
  ];

  return (
    <LogoCarousel
      logos={logoData}
      title="Our Technology Partners"
      description="We work with leading technology providers to deliver exceptional solutions."
      className="bg-gray-50"
      autoScroll={true}
      scrollInterval={2000}
      speed={500}
    />
  );
};

export default LogoBanner;
