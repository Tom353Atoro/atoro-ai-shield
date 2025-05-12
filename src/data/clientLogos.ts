import { ClientLogoItem } from '@/types';

/**
 * Central database of all client logos used throughout the site
 * Uses real companies only
 */
export const clientLogosData: Record<string, ClientLogoItem> = {
  lightyear: {
    id: 'lightyear',
    name: 'Lightyear',
    imagePath: '/logos/lightyear-logo.png',
    altText: 'Lightyear logo',
    industries: ['fintech', 'saas']
  },
  heidi: {
    id: 'heidi',
    name: 'Heidi',
    imagePath: '/logos/heidi-logo.png',
    altText: 'Heidi logo',
    industries: ['healthcare', 'data privacy']
  },
  heartpace: {
    id: 'heartpace',
    name: 'Heartpace',
    imagePath: '/logos/heartpace-logo.png',
    altText: 'Heartpace logo',
    industries: ['hr', 'saas']
  },
  clutch: {
    id: 'clutch',
    name: 'Clutch',
    imagePath: '/logos/clutch-logo.png',
    altText: 'Clutch logo',
    industries: ['review', 'directory']
  },
  rewardful: {
    id: 'rewardful',
    name: 'Rewardful',
    imagePath: '/logos/rewardful-logo.png',
    altText: 'Rewardful logo',
    industries: ['marketing', 'payments']
  },
  // Add the new real logos from desktop
  picsellia: {
    id: 'picsellia',
    name: 'Picsellia',
    imagePath: '/logos/logo_horizontal_picsellia_250x150.png',
    altText: 'Picsellia logo',
    industries: ['ai', 'machine learning']
  },
  silktide: {
    id: 'silktide',
    name: 'Silktide',
    imagePath: '/logos/logo_horizontal_Silktide-Logo-768x437_250x150.png',
    altText: 'Silktide logo',
    industries: ['accessibility', 'compliance']
  },
  siteplan: {
    id: 'siteplan',
    name: 'SitePlan',
    imagePath: '/logos/logo_horizontal_siteplan_logo_header_250x150.png',
    altText: 'SitePlan logo',
    industries: ['real estate', 'planning']
  },
  trawa: {
    id: 'trawa',
    name: 'Trawa',
    imagePath: '/logos/logo_horizontal_trawa_250x150.png',
    altText: 'Trawa logo',
    industries: ['sustainability', 'environment']
  }
};

/**
 * Get logos filtered by industry
 * @param industry Industry to filter by
 * @returns Array of client logos in that industry
 */
export function getClientLogosByIndustry(industry: string): ClientLogoItem[] {
  return Object.values(clientLogosData).filter(logo => 
    logo.industries?.includes(industry)
  );
}

/**
 * Get logos by their IDs
 * @param ids Array of logo IDs to retrieve
 * @returns Array of matching client logos
 */
export function getClientLogosByIds(ids: (string | number)[]): ClientLogoItem[] {
  return ids.map(id => clientLogosData[id.toString()]).filter(Boolean);
}

/**
 * Get a random selection of logos
 * @param count Number of logos to return
 * @returns Array of random client logos
 */
export function getRandomClientLogos(count: number = 3): ClientLogoItem[] {
  const allLogos = Object.values(clientLogosData);
  const shuffled = [...allLogos].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, allLogos.length));
}

/**
 * Get logos suitable for a specific service
 * @param service Name of the service
 * @returns Array of client logos relevant to that service
 */
export function getLogosForService(service: string): ClientLogoItem[] {
  // Map services to relevant industries
  const serviceIndustryMap: Record<string, string[]> = {
    'iso27001': ['saas', 'fintech', 'data privacy'],
    'iso27701': ['healthcare', 'data privacy'],
    'soc2': ['saas', 'fintech'],
    'penetration-testing': ['fintech', 'saas', 'healthcare'],
    'eu-representative': ['saas', 'fintech', 'healthcare'],
    'vdpo': ['healthcare', 'data privacy'],
    'vaigo': ['ai', 'machine learning'],
    'default': []
  };

  const relevantIndustries = serviceIndustryMap[service] || serviceIndustryMap.default;
  
  if (relevantIndustries.length === 0) {
    return getRandomClientLogos(3);
  }

  // Filter logos by relevant industries
  const relevantLogos = Object.values(clientLogosData).filter(logo => 
    logo.industries?.some(industry => relevantIndustries.includes(industry))
  );

  // If not enough relevant logos, fill with random ones
  if (relevantLogos.length < 3) {
    const remainingCount = 3 - relevantLogos.length;
    const existingIds = relevantLogos.map(logo => logo.id);
    const otherLogos = Object.values(clientLogosData)
      .filter(logo => !existingIds.includes(logo.id))
      .sort(() => 0.5 - Math.random())
      .slice(0, remainingCount);
    
    return [...relevantLogos, ...otherLogos];
  }

  // Return random selection of relevant logos
  return [...relevantLogos].sort(() => 0.5 - Math.random()).slice(0, 3);
} 