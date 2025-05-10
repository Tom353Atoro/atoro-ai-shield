
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { toast } from 'sonner';
import { getAllBlogPosts, getBlogCategories, getBlogPostsByCategory, testSanityConnection } from '@/lib/api/blogService';
import { checkSanityConnection } from '@/lib/sanity';
import Newsletter from '@/components/home/Newsletter';

// Import the new components
import BlogHero from '@/components/blog/BlogHero';
import ConnectionStatus from '@/components/blog/ConnectionStatus';
import CategoryTabs from '@/components/blog/CategoryTabs';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogPagination from '@/components/blog/BlogPagination';

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
      } else {
        // If connected, run a test query to verify data structure
        const testResult = await testSanityConnection();
        if (!testResult.success) {
          toast.warning("Connected to Sanity, but no content found", {
            description: "Please verify that you have content in your Sanity studio.",
            duration: 5000,
          });
        } else {
          console.log("Found content types:", testResult.types);
          toast.success("Successfully connected to Sanity");
        }
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
      // Also run test query to verify data structure
      const testResult = await testSanityConnection();
      console.log("Test result:", testResult);
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

  return (
    <Layout>
      <BlogHero 
        isLoading={isLoading} 
        connectionStatus={connectionStatus} 
        blogPostsLength={blogPosts.length} 
      />

      <section className="py-16">
        <Container>
          <ConnectionStatus 
            connectionStatus={connectionStatus} 
            isRetrying={isRetrying} 
            handleRetry={handleRetry} 
          />

          <CategoryTabs
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            categories={categories}
            hasError={hasError && connectionStatus.connected}
          >
            <BlogGrid 
              isLoading={isLoading}
              connectionStatus={connectionStatus}
              currentPosts={currentPosts}
            />
          </CategoryTabs>

          <BlogPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </Container>
      </section>
      
      {/* Add Newsletter Section */}
      <Newsletter />
    </Layout>
  );
};

export default Blog;
