
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { getRecentBlogPosts, BlogPost } from '@/lib/api/blogService';
import { urlFor } from '@/lib/sanity';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

// Fallback data for when Sanity is unavailable
const fallbackPosts: BlogPost[] = [
  {
    _id: 'fallback-1',
    title: 'Best Practices for Enterprise Cybersecurity in 2025',
    slug: { current: 'cybersecurity-best-practices-2025' },
    publishedAt: '2025-04-15T00:00:00Z',
    excerpt: 'Discover the latest strategies and technologies that leading organizations are implementing to protect their digital assets.',
    categories: [{ _id: 'security', title: 'Security' }],
    mainImage: null
  },
  {
    _id: 'fallback-2',
    title: 'Understanding Data Privacy Regulations Worldwide',
    slug: { current: 'global-data-privacy-regulations' },
    publishedAt: '2025-04-01T00:00:00Z',
    excerpt: 'A comprehensive guide to navigating the complex landscape of international data protection laws.',
    categories: [{ _id: 'privacy', title: 'Privacy' }],
    mainImage: null
  },
  {
    _id: 'fallback-3',
    title: 'AI Governance: Building Ethical Frameworks',
    slug: { current: 'ai-governance-ethical-frameworks' },
    publishedAt: '2025-03-20T00:00:00Z',
    excerpt: 'How organizations can develop ethical guidelines and oversight for artificial intelligence systems.',
    categories: [{ _id: 'ai-governance', title: 'AI Governance' }],
    mainImage: null
  }
];

const ThoughtLeadership = () => {
  const { 
    data: blogPosts = [], 
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['recentBlogPosts'],
    queryFn: () => getRecentBlogPosts(3),
    retry: 2,
    retryDelay: 1000
  });

  // Determine whether to show actual posts or fallback content
  const postsToDisplay = isError || blogPosts.length === 0 ? fallbackPosts : blogPosts;
  const showFallbackMessage = isError || (blogPosts.length === 0 && !isLoading);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="mb-2">Latest Insights</h2>
            <p className="text-lg text-gray-700">
              Expert perspectives on security, privacy, and AI governance.
            </p>
          </div>
          <Link 
            to="/blog"
            className="mt-4 md:mt-0 inline-flex items-center text-atoro-blue hover:text-atoro-purple transition-colors group"
          >
            View all articles
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {showFallbackMessage && (
          <Alert variant="warning" className="mb-8">
            <AlertTriangle className="h-5 w-5" />
            <AlertDescription>
              We're currently experiencing difficulties connecting to our content system. 
              The articles below are examples of our typical content.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="block group">
                <Skeleton className="h-48 rounded-lg mb-4" />
                <Skeleton className="h-4 w-1/3 mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))
          ) : (
            // Display posts (either real or fallback)
            postsToDisplay.map((post: BlogPost) => (
              <Link 
                key={post._id} 
                to={`/blog/${post.slug.current}`}
                className="block group"
              >
                <div className="h-48 rounded-lg bg-gray-100 mb-4 overflow-hidden">
                  {post.mainImage ? (
                    <img
                      src={urlFor(post.mainImage).width(400).height(200).url()}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      Blog Image
                    </div>
                  )}
                </div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-atoro-purple">
                    {post.categories && post.categories.length > 0 ? post.categories[0].title : 'Uncategorized'}
                  </span>
                  <span className="text-sm text-gray-500 mx-2">•</span>
                  <span className="text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-atoro-blue transition-colors">{post.title}</h3>
                <p className="text-gray-700">{post.excerpt}</p>
              </Link>
            ))
          )}
        </div>
      </Container>
    </section>
  );
};

export default ThoughtLeadership;
