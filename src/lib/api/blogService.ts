
import { client, safeQuery } from '../sanity';

// Types for our blog posts
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  category: {
    title: string;
    _id: string;
  };
  excerpt: string;
  mainImage: any; // Sanity image type
  publishedAt: string;
  readingTime?: string;
}

export interface BlogPostDetail extends BlogPost {
  body: any[]; // Portable Text content
  author?: {
    name: string;
    image?: any;
  };
}

// Get all blog posts with basic information
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log("Fetching all blog posts...");
    const result = await safeQuery(`
      *[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        "category": categories[0]->{title, _id}
      }
    `);
    
    if (!result.success) {
      console.error("Error in getAllBlogPosts:", result.error);
      return [];
    }
    
    console.log(`Found ${result.data.length} blog posts`);
    return result.data;
  } catch (error) {
    console.error("Error fetching all blog posts:", error);
    return [];
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  try {
    console.log(`Fetching blog posts for category ID: ${categoryId}`);
    const result = await safeQuery(`
      *[_type == "blogPost" && $categoryId in categories[]._ref] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        "category": categories[0]->{title, _id}
      }
    `, { categoryId });
    
    if (!result.success) {
      console.error(`Error in getBlogPostsByCategory for ID: ${categoryId}`, result.error);
      return [];
    }
    
    console.log(`Found ${result.data.length} blog posts for category ID: ${categoryId}`);
    return result.data;
  } catch (error) {
    console.error(`Error fetching blog posts for category ID: ${categoryId}`, error);
    return [];
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  try {
    console.log(`Fetching blog post with slug: ${slug}`);
    const result = await safeQuery(`
      *[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        body,
        publishedAt,
        "category": categories[0]->{title, _id},
        "author": author->{name, image}
      }
    `, { slug });
    
    if (!result.success) {
      console.error(`Error in getBlogPostBySlug for slug: ${slug}`, result.error);
      return null;
    }
    
    if (!result.data) {
      console.log(`Blog post with slug "${slug}" not found`);
      return null;
    }
    
    return result.data;
  } catch (error) {
    console.error(`Error fetching blog post with slug: ${slug}`, error);
    return null;
  }
}

// Get recent blog posts for homepage
export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  try {
    console.log(`Fetching ${limit} recent blog posts...`);
    const result = await safeQuery(`
      *[_type == "blogPost"] | order(publishedAt desc)[0...$limit] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        "category": categories[0]->{title, _id}
      }
    `, { limit: limit - 1 });
    
    if (!result.success) {
      console.error("Error in getRecentBlogPosts:", result.error);
      return [];
    }
    
    console.log(`Found ${result.data.length} recent blog posts`);
    return result.data;
  } catch (error) {
    console.error("Error fetching recent blog posts:", error);
    return [];
  }
}

// Get blog categories
export async function getBlogCategories() {
  try {
    console.log("Fetching all blog categories...");
    const result = await safeQuery(`
      *[_type == "category"] {
        _id,
        title,
        description
      }
    `);
    
    if (!result.success) {
      console.error("Error in getBlogCategories:", result.error);
      return [];
    }
    
    console.log(`Found ${result.data.length} blog categories:`, result.data);
    return result.data;
  } catch (error) {
    console.error("Error fetching blog categories:", error);
    return [];
  }
}
