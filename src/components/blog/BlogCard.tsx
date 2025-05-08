
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, LockKeyhole, Brain, Bug } from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import { BlogPost } from '@/lib/api/blogService';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName?.toLowerCase()) {
      case 'security':
        return <ShieldCheck className="text-atoro-blue" />;
      case 'privacy':
        return <LockKeyhole className="text-atoro-green" />;
      case 'ai governance':
        return <Brain className="text-atoro-teal" />;
      default:
        return <Bug className="text-gray-500" />;
    }
  };

  return (
    <Card key={post._id} className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        {post.mainImage ? (
          <img 
            src={urlFor(post.mainImage).width(400).height(200).url()} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            No image
          </div>
        )}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm font-medium">
          {getCategoryIcon(post.category?.title || '')}
          {post.category?.title || 'Uncategorized'}
        </div>
      </div>
      <CardContent className="pt-6 flex-grow">
        <div className="text-sm text-gray-500 mb-2">
          {new Date(post.publishedAt).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
          })}
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link 
          to={`/blog/${post.slug.current}`} 
          className="text-atoro-teal font-medium hover:text-atoro-blue flex items-center gap-1"
        >
          Read more →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
