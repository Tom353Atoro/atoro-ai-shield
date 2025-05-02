
import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

// Partner data structure that can be easily modified
export const partnersData = {
  platform: [{
    id: 1,
    name: "Vanta",
    logo: "/lovable-uploads/5e1e7e8b-6f29-4ef6-896e-b33c052d8769.png",
    width: 150
  }, {
    id: 2,
    name: "DRATA",
    logo: "/lovable-uploads/92f8da33-0880-48be-815f-a45d074582db.png",
    width: 180
  }],
  audit: [{
    id: 3,
    name: "Tempo Audits",
    logo: "/lovable-uploads/2a43c2aa-a14c-448c-8429-8fb1d9c01ee3.png",
    width: 160
  }, {
    id: 4,
    name: "A-LIGN",
    logo: "/lovable-uploads/273bf97c-b513-4a94-8fdd-7a5bc90eb254.png",
    width: 140
  }]
};

const PartnerLogo = ({
  partner
}: {
  partner: typeof partnersData.platform[0];
}) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="flex items-center justify-center px-8">
      {!loaded && <Skeleton className="w-32 h-12" />}
      <img 
        src={partner.logo} 
        alt={`${partner.name} logo`}
        className={cn("max-h-12 object-contain transition-opacity duration-300", 
          loaded ? "opacity-100" : "opacity-0"
        )}
        style={{ width: partner.width ? `${partner.width}px` : 'auto' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Platform Partners Card */}
          <Card className="shadow-md overflow-hidden">
            <div className="p-6 pb-4">
              <h3 className="text-2xl font-bold text-center">Platform Partners</h3>
            </div>
            <div className="flex flex-row justify-around items-center py-8 px-4">
              {partnersData.platform.map(partner => (
                <PartnerLogo key={partner.id} partner={partner} />
              ))}
            </div>
          </Card>

          {/* Audit Partners Card */}
          <Card className="shadow-md overflow-hidden">
            <div className="p-6 pb-4">
              <h3 className="text-2xl font-bold text-center">Audit Partners</h3>
            </div>
            <div className="flex flex-row justify-around items-center py-8 px-4">
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
