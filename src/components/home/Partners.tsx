import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

// Partner data structure that can be easily modified
export const partnersData = {
  platform: [{
    id: 1,
    name: "Vanta",
    logo: "/lovable-uploads/4d060603-ad02-4190-9beb-cdb340b18bbc.png",
    // Using uploaded image as demo
    width: 150
  }, {
    id: 2,
    name: "DRATA",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=150",
    width: 180
  }],
  audit: [{
    id: 3,
    name: "Tempo Audits",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=150",
    width: 160
  }, {
    id: 4,
    name: "A-LIGN",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=150",
    width: 140
  }]
};
const PartnerLogo = ({
  partner,
  onRemove
}: {
  partner: typeof partnersData.platform[0];
  onRemove?: () => void;
}) => {
  const [loaded, setLoaded] = useState(false);
  return <div className="relative flex flex-col items-center">
      <div className="relative flex items-center justify-center h-12 group">
        {!loaded && <Skeleton className="absolute inset-0 w-full h-full rounded" />}
        <img src={partner.logo} alt={`${partner.name} logo`} width={partner.width} height={48} className={cn("object-contain max-h-12 transition-all duration-300", loaded ? "opacity-100" : "opacity-0")} onLoad={() => setLoaded(true)} />
        {onRemove && <button onClick={onRemove} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <X size={14} />
          </button>}
      </div>
      <span className="text-sm text-gray-600 mt-1">{partner.name}</span>
    </div>;
};
const Partners = () => {
  const [editMode, setEditMode] = useState(false);
  const [partners, setPartners] = useState(partnersData);

  // New partner state
  const [newPartner, setNewPartner] = useState({
    category: 'platform',
    name: '',
    logo: '',
    width: 150
  });
  const addPartner = () => {
    if (!newPartner.name || !newPartner.logo) return;
    setPartners(prev => ({
      ...prev,
      [newPartner.category]: [...prev[newPartner.category as keyof typeof partnersData], {
        id: Date.now(),
        // Generate unique ID
        name: newPartner.name,
        logo: newPartner.logo,
        width: newPartner.width
      }]
    }));

    // Reset form
    setNewPartner({
      category: 'platform',
      name: '',
      logo: '',
      width: 150
    });
  };
  const removePartner = (category: keyof typeof partnersData, id: number) => {
    setPartners(prev => ({
      ...prev,
      [category]: prev[category].filter(partner => partner.id !== id)
    }));
  };
  return;
};
export default Partners;