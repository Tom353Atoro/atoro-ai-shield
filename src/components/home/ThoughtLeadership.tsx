
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';

const ThoughtLeadership = () => {
  // Sample blog posts
  const blogPosts = [
    {
      title: 'The Future of AI Security Compliance',
      excerpt: 'What SaaS founders need to know about navigating the evolving landscape of AI regulations.',
      category: 'AI Governance',
      slug: '/blog/ai-security-compliance',
      date: 'May 1, 2025',
    },
    {
      title: 'GDPR Fines Hit Record High: 5 Lessons for SaaS Companies',
      excerpt: 'Analyzing recent enforcement actions and extracting practical takeaways for growing tech companies.',
      category: 'Data Privacy',
      slug: '/blog/gdpr-fines-lessons',
      date: 'Apr 28, 2025',
    },
    {
      title: 'SOC 2 vs. ISO 27001: Which Should You Pursue First?',
      excerpt: 'A strategic guide to prioritizing compliance certifications for maximum business impact.',
      category: 'Cyber Security',
      slug: '/blog/soc2-vs-iso27001',
      date: 'Apr 23, 2025',
    }
  ];

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
          {blogPosts.map((post) => (
            <Link 
              key={post.title} 
              to={post.slug}
              className="block group"
            >
              <div className="h-48 rounded-lg bg-gray-100 mb-4 overflow-hidden">
                {/* This would be replaced with an actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  Blog Image
                </div>
              </div>
              <div className="mb-2">
                <span className="text-sm font-medium text-atoro-purple">{post.category}</span>
                <span className="text-sm text-gray-500 mx-2">•</span>
                <span className="text-sm text-gray-500">{post.date}</span>
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

export default ThoughtLeadership;
