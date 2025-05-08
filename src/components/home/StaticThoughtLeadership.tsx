
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Brain } from 'lucide-react';
import { blogPosts } from '@/lib/data/staticBlogData';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const StaticThoughtLeadership = () => {
  // Get the 3 most recent posts for display
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-2">Latest Insights</h2>
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
          {recentPosts.map(post => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="h-48 rounded-lg bg-gray-100 mb-4 overflow-hidden">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    Blog Image
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 mb-2">
                {post.author.imageUrl && (
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={post.author.imageUrl} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                )}
                <span className="text-sm font-medium">{post.author.name}</span>
                <span className="text-sm text-gray-500 mx-1">•</span>
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
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StaticThoughtLeadership;
