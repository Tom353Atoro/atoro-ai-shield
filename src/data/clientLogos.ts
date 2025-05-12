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
    imagePath: '/lovable-uploads/12f9a0de-861c-4d03-a543-0682cd8b577e.png',
    altText: 'Heartpace logo',
    industries: ['hr', 'saas']
  },
  clutch: {
    id: 'clutch',
    name: 'Clutch',
    imagePath: '/lovable-uploads/855b40a9-957c-452d-8ce6-f0318e60dea6.png',
    altText: 'Clutch logo',
    industries: ['review', 'directory']
  },
  rewardful: {
    id: 'rewardful',
    name: 'Rewardful',
    imagePath: '/lovable-uploads/67e0fd6c-3db8-4cd6-a32b-c0841aa5535e.png',
    altText: 'Rewardful logo',
    industries: ['marketing', 'payments']
  },
  // Add the new real logos from desktop
  picsellia: {
    id: 'picsellia',
    name: 'Picsellia',
    imagePath: '/lovable-uploads/9dd3d8d0-33b4-4e0d-8da6-2abbca769a16.png',
    altText: 'Picsellia logo',
    industries: ['ai', 'machine learning']
  },
  silktide: {
    id: 'silktide',
    name: 'Silktide',
    imagePath: '/lovable-uploads/7b45a289-8fe7-481a-bc17-4227740e5432.png',
    altText: 'Silktide logo',
    industries: ['accessibility', 'compliance']
  },
  siteplan: {
    id: 'siteplan',
    name: 'SitePlan',
    imagePath: '/lovable-uploads/c9762810-27c5-42d5-914c-90044029e119.png',
    altText: 'SitePlan logo',
    industries: ['real estate', 'planning']
  },
  trawa: {
    id: 'trawa',
    name: 'Trawa',
    imagePath: '/lovable-uploads/22732dee-206a-4c24-a5e2-ae4bf97c74d8.png',
    altText: 'Trawa logo',
    industries: ['sustainability', 'environment']
  },
  // Adding the newly uploaded logos
  tennaxia: {
    id: 'tennaxia',
    name: 'Tennaxia',
    imagePath: '/lovable-uploads/cfbb804f-8184-4368-8d87-0885dc609da4.png',
    altText: 'Tennaxia logo',
    industries: ['sustainability', 'compliance']
  },
  binarii: {
    id: 'binarii',
    name: 'Binarii Labs',
    imagePath: '/lovable-uploads/1978078e-5ac6-4d9d-ab88-ae9a5b744734.png',
    altText: 'Binarii Labs logo',
    industries: ['technology', 'development']
  },
  firemelon: {
    id: 'firemelon',
    name: 'Firemelon',
    imagePath: '/lovable-uploads/1ae22144-5801-4321-91d9-4983f7361f50.png',
    altText: 'Firemelon logo',
    industries: ['marketing', 'design']
  },
  dosen: {
    id: 'dosen',
    name: 'Dosen',
    imagePath: '/lovable-uploads/28530509-14b4-44cf-88eb-b728cd028808.png',
    altText: 'Dosen logo',
    industries: ['technology', 'software']
  },
  merakoi: {
    id: 'merakoi',
    name: 'Merakoi',
    imagePath: '/lovable-uploads/d45cd3aa-1bf5-44f1-b424-f03956c7b177.png',
    altText: 'Merakoi logo',
    industries: ['ai', 'creative']
  },
  mozn: {
    id: 'mozn',
    name: 'Mozn',
    imagePath: '/lovable-uploads/1c3e726a-db5b-4d31-8364-50123402227f.png',
    altText: 'Mozn logo',
    industries: ['fintech', 'ai']
  },
  talents365: {
    id: 'talents365',
    name: 'Talents 365',
    imagePath: '/lovable-uploads/6188f904-4026-45c7-9201-fdb14032ab53.png',
    altText: 'Talents 365 logo',
    industries: ['hr', 'recruitment']
  },
  tipple: {
    id: 'tipple',
    name: 'Tipple',
    imagePath: '/lovable-uploads/3016c9ba-ac18-48a3-be51-65a24b25756f.png',
    altText: 'Tipple logo',
    industries: ['food', 'beverage']
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
