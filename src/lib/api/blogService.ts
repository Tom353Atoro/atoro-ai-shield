
import { client } from '../sanity';

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
    const posts = await client.fetch(`
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
    console.log(`Found ${posts.length} blog posts`);
    return posts;
  } catch (error) {
    console.error("Error fetching all blog posts:", error);
    throw error;
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  try {
    console.log(`Fetching blog posts for category ID: ${categoryId}`);
    const posts = await client.fetch(`
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
    console.log(`Found ${posts.length} blog posts for category ID: ${categoryId}`);
    return posts;
  } catch (error) {
    console.error(`Error fetching blog posts for category ID: ${categoryId}`, error);
    throw error;
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail> {
  try {
    console.log(`Fetching blog post with slug: ${slug}`);
    const result = await client.fetch(`
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
    
    if (!result) {
      throw new Error(`Blog post with slug "${slug}" not found`);
    }
    
    return result;
  } catch (error) {
    console.error(`Error fetching blog post with slug: ${slug}`, error);
    throw error;
  }
}

// Get recent blog posts for homepage
export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  try {
    console.log(`Fetching ${limit} recent blog posts...`);
    const posts = await client.fetch(`
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
    console.log(`Found ${posts.length} recent blog posts`);
    return posts;
  } catch (error) {
    console.error("Error fetching recent blog posts:", error);
    throw error;
  }
}

// Get blog categories
export async function getBlogCategories() {
  try {
    console.log("Fetching all blog categories...");
    const categories = await client.fetch(`
      *[_type == "category"] {
        _id,
        title,
        description
      }
    `);
    console.log(`Found ${categories.length} blog categories:`, categories);
    return categories;
  } catch (error) {
    console.error("Error fetching blog categories:", error);
    throw error;
  }
}
