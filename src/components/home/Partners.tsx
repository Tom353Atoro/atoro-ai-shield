
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

  // Fix: Added return statement with JSX content
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with the best in the industry to deliver quality service to our clients.
          </p>
          {/* Toggle edit mode button */}
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? 'Done Editing' : 'Edit Partners'}
          </Button>
        </div>

        {/* Platform Partners */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Platform Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.platform.map(partner => (
              <PartnerLogo 
                key={partner.id} 
                partner={partner} 
                onRemove={editMode ? () => removePartner('platform', partner.id) : undefined} 
              />
            ))}
          </div>
        </div>

        {/* Audit Partners */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">Audit Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.audit.map(partner => (
              <PartnerLogo 
                key={partner.id} 
                partner={partner} 
                onRemove={editMode ? () => removePartner('audit', partner.id) : undefined} 
              />
            ))}
          </div>
        </div>

        {/* Add partner form - only shown in edit mode */}
        {editMode && (
          <Card className="mt-12 p-6">
            <h3 className="text-xl font-semibold mb-4">Add New Partner</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  className="w-full p-2 border rounded"
                  value={newPartner.category}
                  onChange={(e) => setNewPartner({...newPartner, category: e.target.value})}
                >
                  <option value="platform">Platform Partner</option>
                  <option value="audit">Audit Partner</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Partner Name</label>
                <Input
                  value={newPartner.name}
                  onChange={(e) => setNewPartner({...newPartner, name: e.target.value})}
                  placeholder="Partner name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Logo URL</label>
                <Input
                  value={newPartner.logo}
                  onChange={(e) => setNewPartner({...newPartner, logo: e.target.value})}
                  placeholder="https://example.com/logo.png"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Logo Width (px)</label>
                <Input
                  type="number"
                  value={newPartner.width}
                  onChange={(e) => setNewPartner({...newPartner, width: parseInt(e.target.value) || 150})}
                  placeholder="150"
                />
              </div>
              <Button onClick={addPartner} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Partner
              </Button>
            </div>
          </Card>
        )}
      </Container>
    </section>
  );
};

export default Partners;
