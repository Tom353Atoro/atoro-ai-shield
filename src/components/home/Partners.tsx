
import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

// Partner data structure that can be easily modified
export const partnersData = {
  platform: [
    {
      id: 1,
      name: "Vanta",
      logo: "/lovable-uploads/4d060603-ad02-4190-9beb-cdb340b18bbc.png", // Using uploaded image as demo
      width: 150
    },
    {
      id: 2,
      name: "DRATA",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=150",
      width: 180
    }
  ],
  audit: [
    {
      id: 3,
      name: "Tempo Audits",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=150",
      width: 160
    },
    {
      id: 4,
      name: "A-LIGN",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=150",
      width: 140
    }
  ]
};

const PartnerLogo = ({ partner }: { partner: typeof partnersData.platform[0] }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative flex items-center justify-center h-12">
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full rounded" />}
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        width={partner.width}
        height={48}
        className={cn(
          "object-contain max-h-12 transition-all duration-300",
          loaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-center mb-8">Platform Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partnersData.platform.map(partner => (
                <PartnerLogo key={partner.id} partner={partner} />
              ))}
            </div>
          </Card>
          
          <Card className="p-8 bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-center mb-8">Audit Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partnersData.audit.map(partner => (
                <PartnerLogo key={partner.id} partner={partner} />
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
