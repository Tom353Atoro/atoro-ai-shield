
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { blogPosts, blogCategories, getPostsByCategory } from '@/lib/data/staticBlogData';
import StaticBlogCard from '@/components/blog/StaticBlogCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Newsletter from '@/components/home/Newsletter';

const StaticBlog = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = getPostsByCategory(currentCategory);
  
  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

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
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Tabs value={currentCategory} onValueChange={setCurrentCategory} className="mb-12">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-auto-fit-md w-fit">
                {blogCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>{category.title}</TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={currentCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map(post => (
                  <StaticBlogCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Simple Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 border rounded-md ${
                    currentPage === page ? 'bg-atoro-teal text-white' : 'bg-white'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </Container>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
    </Layout>
  );
};

export default StaticBlog;
