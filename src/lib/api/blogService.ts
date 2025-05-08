
import { client, safeQuery } from '../sanity';

// Updated types for our blog posts to match Sanity schema
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: any; // Sanity image type
  excerpt: string;
  // Update to match the field structure from the provided schema
  categories?: Array<{
    _id: string;
    title: string;
  }>;
  tags?: Array<{
    _id: string;
    name: string;
  }>;
  readingTime?: string;
}

export interface BlogPostDetail extends BlogPost {
  body: any[]; // Portable Text content
  author?: {
    name: string;
    image?: any;
    bio?: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

// Get all blog posts with basic information
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log("Fetching all blog posts...");
    // Update the projection to match your schema
    const result = await safeQuery(`
      *[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        "categories": categories[]->{ _id, title }
      }
    `);
    
    if (!result.success) {
      console.error("Error in getAllBlogPosts:", result.error);
      console.error("Raw error response:", JSON.stringify(result.error, null, 2));
      return [];
    }
    
    console.log(`Found ${result.data?.length || 0} blog posts`);
    if (result.data?.length > 0) {
      console.log("Sample first post:", JSON.stringify(result.data[0], null, 2));
    } else {
      console.log("No blog posts found. Verify content in your Sanity Studio.");
    }
    
    return result.data || [];
  } catch (error) {
    console.error("Error fetching all blog posts:", error);
    return [];
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  try {
    console.log(`Fetching blog posts for category ID: ${categoryId}`);
    // Updated query to properly filter by categoryId
    const result = await safeQuery(`
      *[_type == "blogPost" && references($categoryId)] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        "categories": categories[]->{ _id, title }
      }
    `, { categoryId });
    
    if (!result.success) {
      console.error(`Error in getBlogPostsByCategory for ID: ${categoryId}`, result.error);
      console.error("Raw error response:", JSON.stringify(result.error, null, 2));
      return [];
    }
    
    console.log(`Found ${result.data?.length || 0} blog posts for category ID: ${categoryId}`);
    return result.data || [];
  } catch (error) {
    console.error(`Error fetching blog posts for category ID: ${categoryId}`, error);
    return [];
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  try {
    console.log(`Fetching blog post with slug: ${slug}`);
    // Updated query to match schema
    const result = await safeQuery(`
      *[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        body,
        publishedAt,
        "categories": categories[]->{ _id, title },
        "author": author->{ name, image, bio },
        "tags": tags[]->{ _id, name }
      }
    `, { slug });
    
    if (!result.success) {
      console.error(`Error in getBlogPostBySlug for slug: ${slug}`, result.error);
      console.error("Raw error response:", JSON.stringify(result.error, null, 2));
      return null;
    }
    
    if (!result.data) {
      console.log(`Blog post with slug "${slug}" not found`);
      return null;
    }
    
    console.log("Retrieved blog post data:", JSON.stringify(result.data, null, 2));
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
        "categories": categories[]->{ _id, title }
      }
    `, { limit: limit - 1 });
    
    if (!result.success) {
      console.error("Error in getRecentBlogPosts:", result.error);
      console.error("Raw error response:", JSON.stringify(result.error, null, 2));
      return [];
    }
    
    console.log(`Found ${result.data?.length || 0} recent blog posts`);
    return result.data || [];
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
      console.error("Raw error response:", JSON.stringify(result.error, null, 2));
      return [];
    }
    
    console.log(`Found ${result.data?.length || 0} blog categories:`, result.data);
    if (result.data?.length === 0) {
      console.log("No categories found. Verify that you have created categories in your Sanity Studio.");
    }
    return result.data || [];
  } catch (error) {
    console.error("Error fetching blog categories:", error);
    return [];
  }
}

// Simple test query to check connection and data structure
export async function testSanityConnection() {
  try {
    console.log("Running test query to verify Sanity connection...");
    const result = await safeQuery(`*[_type in ["category", "blogPost"]][0...5]`);
    
    if (!result.success) {
      console.error("Test query failed:", result.error);
      return { success: false, error: result.error };
    }
    
    console.log("Test query successful. Data sample:", result.data);
    return { 
      success: true, 
      data: result.data,
      types: result.data.map((item: any) => item._type)
    };
  } catch (error) {
    console.error("Test query error:", error);
    return { success: false, error };
  }
}
