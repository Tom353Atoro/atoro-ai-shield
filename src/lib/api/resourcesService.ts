
import { client } from '../sanity';

// Types for resources
export interface Resource {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  coverImage: any; // Sanity image
  resourceType: {
    title: string;
    _id: string;
  };
  category: {
    title: string;
    _id: string;
  };
  publishedAt: string;
}

// Extended resource types
export interface Whitepaper extends Resource {
  pdfFile: any; // Sanity file
  readTime: string;
}

export interface Tool extends Resource {
  fileType: string;
  fileSize: string;
  downloadFile: any; // Sanity file
  // Fixed type error: Changed 'category' from string to match Resource interface
}

export interface Webinar extends Resource {
  date: string;
  time: string;
  presenter: string;
  recordingUrl?: string;
  registrationLink?: string;
  isUpcoming: boolean;
}

// Get all resources
export async function getAllResources(): Promise<Resource[]> {
  return client.fetch(`
    *[_type in ["whitepaper", "tool", "webinar", "caseStudy"]] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      coverImage,
      publishedAt,
      _type as resourceType,
      'category': category->{title, _id}
    }
  `);
}

// Get whitepapers
export async function getWhitepapers(): Promise<Whitepaper[]> {
  return client.fetch(`
    *[_type == "whitepaper"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      coverImage,
      pdfFile,
      readTime,
      publishedAt,
      'category': category->{title, _id}
    }
  `);
}

// Get tools and templates
export async function getToolsAndTemplates(): Promise<Tool[]> {
  return client.fetch(`
    *[_type == "tool"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      coverImage,
      fileType,
      fileSize,
      downloadFile,
      publishedAt,
      'category': category->{title, _id}
    }
  `);
}

// Get webinars
export async function getWebinars(): Promise<Webinar[]> {
  return client.fetch(`
    *[_type == "webinar"] | order(date desc) {
      _id,
      title,
      slug,
      description,
      coverImage,
      date,
      time,
      presenter,
      recordingUrl,
      registrationLink,
      publishedAt,
      isUpcoming,
      'category': category->{title, _id}
    }
  `);
}

// Get upcoming webinars
export async function getUpcomingWebinars(): Promise<Webinar[]> {
  return client.fetch(`
    *[_type == "webinar" && isUpcoming == true] | order(date asc) {
      _id,
      title,
      slug,
      description,
      date,
      time,
      presenter,
      registrationLink,
      publishedAt,
      'category': category->{title, _id}
    }
  `);
}

// Get past webinars
export async function getPastWebinars(): Promise<Webinar[]> {
  return client.fetch(`
    *[_type == "webinar" && isUpcoming != true] | order(date desc) {
      _id,
      title,
      slug,
      description,
      coverImage,
      date,
      presenter,
      recordingUrl,
      publishedAt,
      'category': category->{title, _id}
    }
  `);
}
