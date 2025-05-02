
import React from 'react';
import LogoGrid from '@/components/shared/LogoGrid';

/**
 * OurPartners Component
 * 
 * Displays partner logos in a responsive grid
 * 
 * HOW TO UPDATE:
 * 1. Upload your logo images to the public/logos directory
 * 2. Update the logoData array below with your logo information
 * 3. For each logo, provide a unique id, name, and path to the image
 * 4. Optionally set width and alt text for each logo
 */
const OurPartners = () => {
  // This is the array of logos you should modify when updating your logos
  const logoData = [
    {
      id: 1,
      name: "TechCorp",
      // Example with a placeholder image
      imagePath: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=150",
      alt: "TechCorp Logo",
      width: 150
    },
    {
      id: 2,
      name: "DigitalWave",
      // Example with a placeholder image
      imagePath: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=150", 
      alt: "DigitalWave Logo",
      width: 130
    },
    {
      id: 3,
      name: "InnovateTech",
      // Example with a placeholder image
      imagePath: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=150",
      alt: "InnovateTech Logo",
      width: 140
    },
    {
      id: 4,
      name: "FutureSoft",
      // Example with a placeholder image
      imagePath: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150",
      alt: "FutureSoft Logo",
      width: 160
    },
    {
      id: 5,
      name: "DataFlow",
      // Example with a placeholder image
      imagePath: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=150",
      alt: "DataFlow Logo",
      width: 145
    },
    {
      id: 6,
      name: "CloudNine",
      // Example with uploaded logo 
      imagePath: "/lovable-uploads/4d060603-ad02-4190-9beb-cdb340b18bbc.png", 
      alt: "CloudNine Logo",
      width: 150
    },
    {
      id: 7,
      name: "Quantum",
      // You would replace this with your own uploaded image
      imagePath: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=150",
      alt: "Quantum Logo",
      width: 135
    },
    {
      id: 8,
      name: "SkyLink",
      // You would replace this with your own uploaded image
      imagePath: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=150",
      alt: "SkyLink Logo",
      width: 140
    }
  ];

  return (
    <LogoGrid
      logos={logoData}
      title="Our Trusted Partners"
      description="We work with leading companies across industries to deliver exceptional security solutions."
      className="bg-gray-50"
    />
  );
};

export default OurPartners;
