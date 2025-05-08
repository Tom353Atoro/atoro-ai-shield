
import React from 'react';
import { Container } from '@/components/ui/Container';

interface BlogHeroProps {
  isLoading: boolean;
  connectionStatus: {
    connected: boolean;
  };
  blogPostsLength: number;
}

const BlogHero: React.FC<BlogHeroProps> = ({ 
  isLoading, 
  connectionStatus, 
  blogPostsLength 
}) => {
  return (
    <section className="pt-16 pb-12 bg-gradient-to-r from-atoro-teal/10 to-atoro-green/10">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Insights & Expertise
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Stay informed with the latest trends, best practices, and expert analysis in security, privacy, and AI governance.
          </p>
          {!isLoading && !connectionStatus.connected && (
            <p className="text-amber-600 mt-4">
              Unable to connect to Sanity content management system. Please check your configuration.
            </p>
          )}
          {!isLoading && connectionStatus.connected && blogPostsLength === 0 && (
            <p className="text-amber-600 mt-4">
              No blog posts found. Please create content in your Sanity studio.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogHero;
