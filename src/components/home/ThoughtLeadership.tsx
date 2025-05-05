
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { getRecentBlogPosts, BlogPost } from '@/lib/api/blogService';
import { urlFor } from '@/lib/sanity';
import { Skeleton } from '@/components/ui/skeleton';

const ThoughtLeadership = () => {
  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['recentBlogPosts'],
    queryFn: () => getRecentBlogPosts(3),
  });

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
          ) : blogPosts.length > 0 ? (
            // Display actual posts
            blogPosts.map((post: BlogPost) => (
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
                  <span className="text-sm font-medium text-atoro-purple">{post.category?.title || 'Uncategorized'}</span>
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
          ) : (
            <div className="col-span-3 text-center py-8">
              <p>No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ThoughtLeadership;
