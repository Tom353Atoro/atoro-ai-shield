import React from 'react';
import { ClientLogoItem } from '@/types';
import { getLogosForService, getRandomClientLogos } from '@/data/clientLogos';
import Image from 'next/image';

interface ClientLogosProps {
  /**
   * Service name to display relevant client logos for
   * Will show appropriate logos for the specified service
   */
  service?: string;
  
  /**
   * Optional array of specific logo IDs to display
   * If provided, overrides the service-based selection
   */
  logoIds?: string[];
  
  /**
   * Optional title above the logos section
   */
  title?: string;
  
  /**
   * Optional description text
   */
  description?: string;
  
  /**
   * Number of logos to display if using random selection
   * @default 3 
   */
  count?: number;
}

/**
 * Displays client logos either based on service relevance or specific IDs
 */
const ClientLogos: React.FC<ClientLogosProps> = ({
  service,
  logoIds,
  title = "Our Clients",
  description = "Trusted by leading organizations",
  count = 3
}) => {
  // Determine which logos to display based on props
  const logosToDisplay: ClientLogoItem[] = React.useMemo(() => {
    if (logoIds && logoIds.length > 0) {
      // If specific logo IDs are provided, use those
      const logos = logoIds.map(id => ({ 
        id: id.toString(),
        name: id, // Fallback name
        imagePath: `/logos/${id}-logo.png` // Fallback path
      })) as ClientLogoItem[];
      return logos;
    } else if (service) {
      // If a service is specified, get relevant logos
      return getLogosForService(service);
    } else {
      // Otherwise, get a random selection
      return getRandomClientLogos(count);
    }
  }, [service, logoIds, count]);

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {title && (
          <h3 className="text-2xl font-semibold text-center mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-gray-600 text-center mb-6">{description}</p>
        )}
        
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
          {logosToDisplay.map((logo) => (
            <div 
              key={logo.id} 
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm"
              style={{ height: '100px', width: '250px' }}
            >
              <Image
                src={logo.imagePath}
                alt={logo.altText || `${logo.name} logo`}
                width={200}
                height={75}
                objectFit="contain"
                className="max-h-14 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 