
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
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      'category': category->{title, _id}
    }
  `);
}

// Get blog posts by category
export async function getBlogPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  return client.fetch(`
    *[_type == "blogPost" && category._ref == $categoryId] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      'category': category->{title, _id}
    }
  `, { categoryId });
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail> {
  const result = await client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      body,
      publishedAt,
      'category': category->{title, _id},
      'author': author->{name, image}
    }
  `, { slug });
  
  return result;
}

// Get recent blog posts for homepage
export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      'category': category->{title, _id}
    }
  `, { limit: limit - 1 });
}

// Get blog categories
export async function getBlogCategories() {
  return client.fetch(`
    *[_type == "blogCategory"] {
      _id,
      title
    }
  `);
}
