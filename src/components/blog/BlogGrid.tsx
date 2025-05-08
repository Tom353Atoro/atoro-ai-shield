
import React from 'react';
import { BlogPost } from '@/lib/api/blogService';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import BlogCard from './BlogCard';

interface BlogGridProps {
  isLoading: boolean;
  connectionStatus: {
    connected: boolean;
  };
  currentPosts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ isLoading, connectionStatus, currentPosts }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6).fill(0).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="h-48">
              <Skeleton className="h-full w-full" />
            </div>
            <CardContent className="pt-6">
              <Skeleton className="h-4 w-1/3 mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter className="pt-0">
              <Skeleton className="h-4 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
  
  if (connectionStatus.connected && currentPosts.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map(post => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    );
  }
  
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-bold mb-2">No posts found</h3>
      <p className="text-gray-600">
        {connectionStatus.connected ? 
          "There are no blog posts available for this category at the moment." : 
          "Unable to connect to Sanity. Please check your configuration."}
      </p>
    </div>
  );
};

export default BlogGrid;
