import { ClientLogoItem } from '@/types';
import { 
  clientLogosData, 
  getClientLogosByIndustry, 
  getClientLogosByIds, 
  getRandomClientLogos,
  getLogosForService 
} from '@/data/clientLogos';

/**
 * Hook to access client logos data consistently throughout the app
 */
export function useClientLogos() {
  return {
    /**
     * Get all client logos
     */
    getAllLogos: (): ClientLogoItem[] => Object.values(clientLogosData),
    
    /**
     * Get client logos by industry
     * @param industry Industry to filter by
     */
    getLogosByIndustry: (industry: string): ClientLogoItem[] => getClientLogosByIndustry(industry),
    
    /**
     * Get client logos by specific IDs
     * @param ids Array of logo IDs to retrieve
     */
    getLogosByIds: (ids: (string | number)[]): ClientLogoItem[] => getClientLogosByIds(ids),
    
    /**
     * Get a random selection of logos
     * @param count Number of logos to return (default: 3)
     */
    getRandomLogos: (count: number = 3): ClientLogoItem[] => getRandomClientLogos(count),
    
    /**
     * Get logos suitable for specific services
     * @param service Name of the service
     */
    getLogosForService: (service: string): ClientLogoItem[] => getLogosForService(service),
    
    /**
     * Get a single logo by ID
     * @param id Logo ID to retrieve
     */
    getLogo: (id: string | number): ClientLogoItem | undefined => clientLogosData[id.toString()],
    
    /**
     * Get all available industries from the logos database
     */
    getAllIndustries: (): string[] => {
      const industries = new Set<string>();
      Object.values(clientLogosData).forEach(logo => {
        logo.industries?.forEach(industry => industries.add(industry));
      });
      return Array.from(industries).sort();
    }
  };
} 