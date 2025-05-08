
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBlogPostBySlug } from '@/lib/api/blogService';
import { urlFor } from '@/lib/sanity';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft } from 'lucide-react';
import PortableTextRenderer from '@/components/blog/PortableTextRenderer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => getBlogPostBySlug(slug || ''),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <Layout>
        <Container className="py-16">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                <span>Back to all posts</span>
              </Link>
            </Button>
            
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/3 mb-8" />
            
            <Skeleton className="h-96 w-full mb-8" />
            
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container className="py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Error Loading Blog Post</h1>
            <p className="mb-8">Sorry, we couldn't load the blog post. Please try again later.</p>
            <Button asChild>
              <Link to="/blog">Return to Blog</Link>
            </Button>
          </div>
        </Container>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <Container className="py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
            <Button asChild>
              <Link to="/blog">Return to Blog</Link>
            </Button>
          </div>
        </Container>
      </Layout>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Get the primary category if available
  const primaryCategory = post.categories && post.categories.length > 0 ? post.categories[0] : null;

  return (
    <Layout>
      <article>
        {/* Hero Section */}
        <section className="pt-16 pb-12 bg-gradient-to-r from-atoro-teal/10 to-atoro-blue/10">
          <Container>
            <div className="max-w-3xl mx-auto">
              <Button variant="ghost" asChild className="mb-8">
                <Link to="/blog" className="flex items-center gap-2">
                  <ArrowLeft size={16} />
                  <span>Back to all posts</span>
                </Link>
              </Button>
              
              <div className="mb-4">
                <span className="inline-block bg-atoro-teal/10 text-atoro-teal rounded-full px-3 py-1 text-sm font-medium">
                  {primaryCategory?.title || 'Uncategorized'}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center gap-4 text-gray-600">
                {post.author && (
                  <div className="flex items-center gap-2">
                    {post.author.image && (
                      <img 
                        src={urlFor(post.author.image).url()} 
                        alt={post.author.name} 
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <span>{post.author.name}</span>
                  </div>
                )}
                <span>•</span>
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="py-8">
            <Container>
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={urlFor(post.mainImage).url()} 
                    alt={post.title} 
                    className="w-full"
                  />
                </div>
              </div>
            </Container>
          </div>
        )}

        {/* Content */}
        <Container className="py-12">
          <div className="max-w-3xl mx-auto">
            {/* Instead of placeholder content, we now render the actual blog post content */}
            {post.body ? (
              <PortableTextRenderer content={post.body} />
            ) : (
              <p className="text-gray-600">
                This post has no content.
              </p>
            )}
          </div>
        </Container>
      </article>
    </Layout>
  );
};

export default BlogPost;
