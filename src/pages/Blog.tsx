
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShieldCheck, LockKeyhole, Brain } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { getAllBlogPosts, getBlogCategories, getBlogPostsByCategory, BlogPost } from '@/lib/api/blogService';
import { urlFor } from '@/lib/sanity';
import { Skeleton } from '@/components/ui/skeleton';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const postsPerPage = 6;

  // Fetch all blog categories
  const { data: categories = [] } = useQuery({
    queryKey: ['blogCategories'],
    queryFn: getBlogCategories
  });

  // Fetch blog posts based on selected category
  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['blogPosts', currentCategory],
    queryFn: () => currentCategory === "all" 
      ? getAllBlogPosts() 
      : getBlogPostsByCategory(currentCategory),
  });

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'security':
        return <ShieldCheck className="text-atoro-blue" />;
      case 'privacy':
        return <LockKeyhole className="text-atoro-green" />;
      case 'ai governance':
        return <Brain className="text-atoro-teal" />;
      default:
        return null;
    }
  };

  const renderBlogCard = (post: BlogPost) => {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-r from-atoro-teal/10 to-atoro-green/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Insights & Expertise
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Stay informed with the latest trends, best practices, and expert analysis in security, privacy, and AI governance.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <Container>
          <Tabs value={currentCategory} onValueChange={setCurrentCategory} className="mb-12">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-4 w-fit">
                <TabsTrigger value="all">All Topics</TabsTrigger>
                {categories.map((category: any) => (
                  <TabsTrigger key={category._id} value={category._id}>{category.title}</TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={currentCategory} className="mt-8">
              {isLoading ? (
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
              ) : currentPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map(renderBlogCard)}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold mb-2">No posts found</h3>
                  <p className="text-gray-600">
                    There are no blog posts available for this category at the moment.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink 
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default Blog;
