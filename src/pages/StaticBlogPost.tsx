
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import Layout from '@/components/layout/Layout';
import { ArrowLeft, ShieldCheck, LockKeyhole, Brain } from 'lucide-react';
import { getPostBySlug } from '@/lib/data/staticBlogData';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import NeetoCalPopup from '@/components/shared/NeetoCalPopup';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';

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

  // Check if the content starts with a div with flex layout (used for cybersecurity blog)
  const hasContentWithImage = post.content.trim().startsWith('<div class="flex');
  
  // Generate unique button IDs based on category
  const ctaButtonId = `blog-${primaryCategory?.toLowerCase().replace(/\s+/g, '-')}-cta-btn`;

  return (
    <Layout>
      <article>
        {/* Hero Section - Updated with full-bleed blue banner */}
        <section className="pt-12 pb-8 bg-[#EAF8FB]">
          <Container>
            <div className="max-w-3xl mx-auto">
              {/* Added Breadcrumbs */}
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/blog">Blog</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{post.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              {/* Title with improved typography and clamped font-size */}
              <h1 className="text-[clamp(1.8rem,1.2vw+1.6rem,2.4rem)] font-bold mb-4 leading-tight">{post.title}</h1>
              
              {/* Meta info row moved below title */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-6">
                {post.author && (
                  <div className="flex items-center gap-2">
                    {post.author.imageUrl && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.imageUrl} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                    )}
                    <span className="font-medium">{post.author.name}</span>
                  </div>
                )}
                <span>•</span>
                <time dateTime={post.publishedAt}>{formattedDate}</time>
                {post.readingTime && (
                  <>
                    <span>•</span>
                    <span>{post.readingTime} min read</span>
                  </>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Image - Enhanced styling */}
        {post.imageUrl && !hasContentWithImage && (
          <div className="py-6">
            <Container>
              <div className="max-w-[720px] mx-auto">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </Container>
          </div>
        )}

        {/* Content - Wrapped in prose container */}
        <Container className="py-8">
          <div className="blog-content max-w-[720px] mx-auto px-5">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* CTA Section - Updated styling */}
            <div className="my-12 p-8 bg-[#132A2F] text-white rounded-xl shadow-md animate-fade-in">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Need help with {primaryCategory || 'Compliance'}?</h3>
                <p className="text-[#B8C4C6] mb-6 max-w-md mx-auto">
                  Our team of experts can help you navigate complex requirements and implement robust solutions for your business.
                </p>
                <Button id={ctaButtonId} className="bg-[#10F694] text-[#132A2F] hover:bg-[#10F694]/90 rounded-full px-8">
                  Book a Call
                </Button>
                <NeetoCalPopup elementSelector={`#${ctaButtonId}`} />
              </div>
            </div>
          </div>
        </Container>
      </article>
    </Layout>
  );
};

export default StaticBlogPost;
