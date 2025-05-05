
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShieldCheck, LockKeyhole, Brain, Bug, AlertTriangle, RefreshCw } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { getAllBlogPosts, getBlogCategories, getBlogPostsByCategory, BlogPost } from '@/lib/api/blogService';
import { urlFor, checkSanityConnection } from '@/lib/sanity';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [connectionStatus, setConnectionStatus] = useState<{ checked: boolean, connected: boolean, error?: any }>({
    checked: false,
    connected: false
  });
  const [isRetrying, setIsRetrying] = useState(false);
  const postsPerPage = 6;

  // Check Sanity connection on component mount
  useEffect(() => {
    const checkConnection = async () => {
      setIsRetrying(true);
      const result = await checkSanityConnection();
      setConnectionStatus({
        checked: true,
        connected: result.success,
        error: result.success ? undefined : result.error
      });
      
      if (!result.success) {
        toast.error("Could not connect to Sanity", {
          description: "Please check your project configuration and try again.",
          duration: 5000,
        });
      }
      setIsRetrying(false);
    };
    
    checkConnection();
  }, []);

  // Fetch all blog categories
  const { 
    data: categories = [], 
    isLoading: categoriesLoading,
    error: categoriesError,
    refetch: refetchCategories
  } = useQuery({
    queryKey: ['blogCategories'],
    queryFn: getBlogCategories,
    retry: 2,
    retryDelay: 1000,
    enabled: connectionStatus.connected || !connectionStatus.checked
  });

  // Success handler for categories
  useEffect(() => {
    if (categories.length > 0) {
      console.log("Categories loaded:", categories);
    } else if (!categoriesLoading && categories.length === 0 && connectionStatus.connected) {
      toast.info("No blog categories found in Sanity.", {
        description: "Make sure you have created blog categories in your Sanity studio."
      });
    }
  }, [categories, categoriesLoading, connectionStatus.connected]);

  // Error handler for categories
  useEffect(() => {
    if (categoriesError) {
      console.error("Error fetching categories:", categoriesError);
      toast.error("Failed to load blog categories");
    }
  }, [categoriesError]);

  // Fetch blog posts based on selected category
  const { 
    data: blogPosts = [], 
    isLoading: postsLoading,
    error: postsError,
    refetch: refetchPosts
  } = useQuery({
    queryKey: ['blogPosts', currentCategory],
    queryFn: () => currentCategory === "all" 
      ? getAllBlogPosts() 
      : getBlogPostsByCategory(currentCategory),
    retry: 2,
    retryDelay: 1000,
    enabled: connectionStatus.connected || !connectionStatus.checked
  });

  // Success handler for posts
  useEffect(() => {
    if (!postsLoading) {
      console.log(`Posts loaded for category "${currentCategory}":`, blogPosts);
      // If no posts are found, we'll show a message
      if (blogPosts.length === 0 && connectionStatus.connected) {
        toast.info(`No posts found for ${currentCategory === "all" ? "any category" : "this category"}.`);
      }
    }
  }, [blogPosts, postsLoading, currentCategory, connectionStatus.connected]);

  // Error handler for posts
  useEffect(() => {
    if (postsError) {
      console.error("Error fetching posts:", postsError);
      toast.error("Failed to load blog posts");
    }
  }, [postsError]);

  const handleRetry = async () => {
    setIsRetrying(true);
    const result = await checkSanityConnection();
    setConnectionStatus({
      checked: true,
      connected: result.success,
      error: result.success ? undefined : result.error
    });
    
    if (result.success) {
      toast.success("Connection to Sanity restored!");
      refetchCategories();
      refetchPosts();
    } else {
      toast.error("Still unable to connect to Sanity");
    }
    setIsRetrying(false);
  };

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const isLoading = categoriesLoading || postsLoading || isRetrying;
  const hasError = categoriesError || postsError;

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

  // Render connection status debugging UI if there are issues
  const renderConnectionStatus = () => {
    if (!connectionStatus.checked || isRetrying) {
      return <div className="text-center py-4">Checking Sanity connection...</div>;
    }

    if (!connectionStatus.connected) {
      return (
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Sanity Connection Error</AlertTitle>
          <AlertDescription>
            <p className="mb-3">
              Could not connect to your Sanity project. Please check your project configuration.
            </p>
            <div className="space-y-2">
              <p><strong>Project ID:</strong> 6fq80c4a</p>
              <p><strong>Dataset:</strong> production</p>
              <p><strong>API Version:</strong> 2023-05-03</p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleRetry} 
              className="mt-4"
              disabled={isRetrying}
            >
              {isRetrying ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </>
              )}
            </Button>
          </AlertDescription>
        </Alert>
      );
    }

    return null;
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
            <p className="text-lg text-gray-700 mb-4">
              Stay informed with the latest trends, best practices, and expert analysis in security, privacy, and AI governance.
            </p>
            {!isLoading && !connectionStatus.connected && (
              <p className="text-amber-600 mt-4">
                Unable to connect to Sanity content management system. Please check your configuration.
              </p>
            )}
            {!isLoading && connectionStatus.connected && blogPosts.length === 0 && (
              <p className="text-amber-600 mt-4">
                No blog posts found. Please create content in your Sanity studio.
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <Container>
          {renderConnectionStatus()}

          {hasError && connectionStatus.connected && (
            <Alert variant="destructive" className="mb-6">
              <AlertTriangle className="h-5 w-5" />
              <AlertTitle>Error Loading Blog Content</AlertTitle>
              <AlertDescription>
                There was a problem loading blog content from Sanity. Please check your console for more details.
              </AlertDescription>
            </Alert>
          )}

          <Tabs value={currentCategory} onValueChange={setCurrentCategory} className="mb-12">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-auto-fit-md w-fit">
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
              ) : connectionStatus.connected && currentPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map(renderBlogCard)}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold mb-2">No posts found</h3>
                  <p className="text-gray-600">
                    {connectionStatus.connected ? 
                      "There are no blog posts available for this category at the moment." : 
                      "Unable to connect to Sanity. Please check your configuration."}
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
