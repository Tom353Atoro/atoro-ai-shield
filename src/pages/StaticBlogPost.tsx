
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import Layout from '@/components/layout/Layout';
import { ArrowLeft, Brain, ShieldCheck, LockKeyhole } from 'lucide-react';
import { getPostBySlug } from '@/lib/data/staticBlogData';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Helmet } from 'react-helmet';

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

  // Get the appropriate icon based on category
  const getCategoryIcon = () => {
    if (!primaryCategory) return null;
    
    switch (primaryCategory.toLowerCase()) {
      case 'security':
        return <ShieldCheck className="h-4 w-4 text-atoro-blue" />;
      case 'privacy':
        return <LockKeyhole className="h-4 w-4 text-atoro-green" />;
      case 'ai governance':
        return <Brain className="h-4 w-4 text-atoro-teal" />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Atoro</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        {post.imageUrl && <meta property="og:image" content={post.imageUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.imageUrl && <meta name="twitter:image" content={post.imageUrl} />}
        <meta name="keywords" content={`${primaryCategory}, Atoro, SaaS, security, compliance, ${primaryCategory?.toLowerCase() === 'ai governance' ? 'EU AI Act, ISO 42001, AI regulation' : ''}`} />
      </Helmet>
      
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
                <span className="inline-flex items-center gap-1 bg-atoro-teal/10 text-atoro-teal rounded-full px-3 py-1 text-sm font-medium">
                  {getCategoryIcon()}
                  {primaryCategory || 'Uncategorized'}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center gap-4 text-gray-600">
                {post.author && (
                  <div className="flex items-center gap-2">
                    {post.author.imageUrl && (
                      <Avatar>
                        <AvatarImage src={post.author.imageUrl} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                    )}
                    <span className="font-medium">{post.author.name}</span>
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
            
            {/* CTA Section at the end of the blog post */}
            {primaryCategory?.toLowerCase() === 'ai governance' && (
              <div className="mt-12 p-6 bg-gradient-to-r from-atoro-teal/10 to-atoro-blue/10 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Need help with AI Governance?</h3>
                <p className="mb-4">Our team of experts can help you navigate the complexities of AI regulations and implement robust governance frameworks.</p>
                <Button asChild>
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
              </div>
            )}
          </div>
        </Container>
      </article>
    </Layout>
  );
};

export default StaticBlogPost;
