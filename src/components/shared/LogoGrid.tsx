
import React from 'react';

const LogoGrid: React.FC = () => {
  // Placeholder logos, replace with actual client logos
  const logos = [
    { id: 1, src: "/lovable-uploads/5c1f26c2-fb1a-41c2-9088-86b87a45c090.png", alt: "Client Logo 1" },
    { id: 2, src: "/lovable-uploads/92f8da33-0880-48be-815f-a45d074582db.png", alt: "Client Logo 2" },
    { id: 3, src: "/lovable-uploads/4d060603-ad02-4190-9beb-cdb340b18bbc.png", alt: "Client Logo 3" },
    { id: 4, src: "/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png", alt: "Client Logo 4" },
    { id: 5, src: "/lovable-uploads/9b3556f3-0651-4ed7-b0d6-42ede4d99feb.png", alt: "Client Logo 5" }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {logos.map((logo) => (
        <div key={logo.id} className="flex items-center justify-center">
          <img 
            src={logo.src} 
            alt={logo.alt}
            className="h-10 md:h-12 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
