
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import Layout from '@/components/layout/Layout';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug } from '@/lib/data/staticBlogData';

const StaticBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

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
                  {primaryCategory || 'Uncategorized'}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center gap-4 text-gray-600">
                {post.author && (
                  <div className="flex items-center gap-2">
                    {post.author.imageUrl && (
                      <img 
                        src={post.author.imageUrl} 
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
        {post.imageUrl && (
          <div className="py-8">
            <Container>
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={post.imageUrl} 
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
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </Container>
      </article>
    </Layout>
  );
};

export default StaticBlogPost;
