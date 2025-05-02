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
  partner,
  onRemove
}: {
  partner: typeof partnersData.platform[0];
  onRemove?: () => void;
}) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <Card className="relative flex items-center justify-center h-24 p-4">
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
      {onRemove && (
        <button 
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </Card>
  );
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
      [newPartner.category as keyof typeof partnersData]: [
        ...prev[newPartner.category as keyof typeof partnersData], 
        {
          id: Date.now(), // Generate unique ID
          name: newPartner.name,
          logo: newPartner.logo,
          width: newPartner.width
        }
      ]
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
  
  return (
    <section className="py-12">
      <Container>
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">Our Partners</h2>
            <p className="text-lg text-gray-600 mt-2">
              We collaborate with industry-leading platforms and audit firms
            </p>
          </div>
          <Button
            onClick={() => setEditMode(!editMode)}
            variant="outline"
            className="hidden"
          >
            {editMode ? "Done" : "Edit Partners"}
          </Button>
        </div>

        {/* Platform partners */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Platform Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.platform.map(partner => (
              <PartnerLogo 
                key={partner.id} 
                partner={partner} 
                onRemove={editMode ? () => removePartner('platform', partner.id as number) : undefined}
              />
            ))}
          </div>
        </div>

        {/* Audit partners */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Audit Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.audit.map(partner => (
              <PartnerLogo 
                key={partner.id} 
                partner={partner} 
                onRemove={editMode ? () => removePartner('audit', partner.id as number) : undefined}
              />
            ))}
          </div>
        </div>

        {/* Add new partner form (visible only in edit mode) */}
        {editMode && (
          <Card className="p-6 mt-8">
            <h3 className="text-lg font-semibold mb-4">Add New Partner</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select 
                  value={newPartner.category} 
                  onChange={e => setNewPartner({...newPartner, category: e.target.value})}
                  className="w-full rounded-md border border-gray-300 p-2"
                >
                  <option value="platform">Platform Partner</option>
                  <option value="audit">Audit Partner</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Partner Name</label>
                <Input 
                  value={newPartner.name} 
                  onChange={e => setNewPartner({...newPartner, name: e.target.value})} 
                  placeholder="e.g., Vanta"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Logo URL</label>
                <Input 
                  value={newPartner.logo} 
                  onChange={e => setNewPartner({...newPartner, logo: e.target.value})} 
                  placeholder="https://example.com/logo.png"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Width (px)</label>
                <Input 
                  type="number" 
                  value={newPartner.width} 
                  onChange={e => setNewPartner({...newPartner, width: Number(e.target.value)})} 
                  placeholder="150"
                />
              </div>
              <div className="md:col-span-2 lg:col-span-4 flex justify-end">
                <Button onClick={addPartner} disabled={!newPartner.name || !newPartner.logo}>
                  <Plus className="h-4 w-4 mr-2" /> Add Partner
                </Button>
              </div>
            </div>
          </Card>
        )}
      </Container>
    </section>
  );
};

export default Partners;
