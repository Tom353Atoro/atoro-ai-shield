
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, LockKeyhole, Brain, Bug } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { StaticBlogPost } from '@/lib/data/staticBlogData';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface StaticBlogCardProps {
  post: StaticBlogPost;
}

const StaticBlogCard: React.FC<StaticBlogCardProps> = ({ post }) => {
  // Get the first category (if any)
  const primaryCategory = post.categories && post.categories.length > 0 ? post.categories[0] : null;
  
  const getCategoryIcon = (categoryName: string | undefined) => {
    if (!categoryName) return <Bug className="text-gray-500" />;
    
    switch (categoryName.toLowerCase()) {
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
    <Card key={post.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        {post.imageUrl ? (
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            No image
          </div>
        )}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm font-medium">
          {getCategoryIcon(primaryCategory)}
          {primaryCategory || 'Uncategorized'}
        </div>
      </div>
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-center gap-2 mb-3">
          {post.author.imageUrl && (
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.imageUrl} alt={post.author.name} />
              <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
          )}
          <div className="flex flex-col">
            <span className="text-sm font-medium">{post.author.name}</span>
            <span className="text-xs text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link 
          to={`/blog/${post.slug}`} 
          className="text-atoro-teal font-medium hover:text-atoro-blue flex items-center gap-1"
        >
          Read more →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default StaticBlogCard;
