
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShieldCheck, LockKeyhole, Brain } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Blog = () => {
  // Sample blog posts - in a real app, these would come from a CMS or API
  const securityPosts = [
    {
      id: 1,
      title: 'SOC 2 Compliance: A Step-by-Step Guide',
      excerpt: 'Learn how to prepare for and successfully achieve SOC 2 compliance for your SaaS product.',
      category: 'Security',
      date: 'May 12, 2025',
      image: '/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg',
      slug: '/blog/security/soc2-compliance-guide',
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices for Startups',
      excerpt: 'Essential security controls every startup should implement to protect their cloud infrastructure.',
      category: 'Security',
      date: 'May 5, 2025',
      image: '/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg',
      slug: '/blog/security/cloud-security-startups',
    },
    {
      id: 3,
      title: 'How to Conduct an Effective Security Risk Assessment',
      excerpt: 'A comprehensive approach to identifying and mitigating security risks in your organization.',
      category: 'Security',
      date: 'Apr 28, 2025',
      image: '/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg',
      slug: '/blog/security/security-risk-assessment',
    },
  ];

  const privacyPosts = [
    {
      id: 4,
      title: 'GDPR Fines Hit Record High: 5 Lessons for SaaS Companies',
      excerpt: 'Analyzing recent enforcement actions and extracting practical takeaways for growing tech companies.',
      category: 'Privacy',
      date: 'May 10, 2025',
      image: '/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg',
      slug: '/blog/privacy/gdpr-fines-lessons',
    },
    {
      id: 5,
      title: 'Building a Privacy-First Culture in Your Organization',
      excerpt: 'How to embed privacy considerations into your company DNA from day one.',
      category: 'Privacy',
      date: 'May 2, 2025',
      image: '/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg',
      slug: '/blog/privacy/privacy-first-culture',
    },
    {
      id: 6,
      title: 'Data Mapping for Privacy Compliance: A Practical Guide',
      excerpt: 'Step-by-step approach to creating comprehensive data maps that satisfy regulatory requirements.',
      category: 'Privacy',
      date: 'Apr 25, 2025',
      image: '/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg',
      slug: '/blog/privacy/data-mapping-guide',
    },
  ];

  const aiGovernancePosts = [
    {
      id: 7,
      title: 'The Future of AI Security Compliance',
      excerpt: 'What SaaS founders need to know about navigating the evolving landscape of AI regulations.',
      category: 'AI Governance',
      date: 'May 8, 2025',
      image: '/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg',
      slug: '/blog/ai-governance/ai-security-compliance',
    },
    {
      id: 8,
      title: 'Implementing ISO 42001: An Early Adopter\'s Guide',
      excerpt: 'Practical steps for implementing the new AI management system standard in your organization.',
      category: 'AI Governance',
      date: 'May 3, 2025',
      image: '/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg',
      slug: '/blog/ai-governance/iso-42001-guide',
    },
    {
      id: 9,
      title: 'Ethical AI Development: Frameworks and Best Practices',
      excerpt: 'How to ensure your AI solutions are developed with ethical considerations at their core.',
      category: 'AI Governance',
      date: 'Apr 20, 2025',
      image: '/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg',
      slug: '/blog/ai-governance/ethical-ai-development',
    },
  ];

  const renderBlogCard = (post: any) => {
    const getCategoryIcon = () => {
      switch (post.category) {
        case 'Security':
          return <ShieldCheck className="text-atoro-blue" />;
        case 'Privacy':
          return <LockKeyhole className="text-atoro-green" />;
        case 'AI Governance':
          return <Brain className="text-atoro-teal" />;
        default:
          return null;
      }
    };

    return (
      <Card key={post.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm font-medium">
            {getCategoryIcon()}
            {post.category}
          </div>
        </div>
        <CardContent className="pt-6 flex-grow">
          <div className="text-sm text-gray-500 mb-2">{post.date}</div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <Link 
            to={post.slug} 
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
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-4 w-fit">
                <TabsTrigger value="all">All Topics</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
                <TabsTrigger value="ai">AI Governance</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...securityPosts, ...privacyPosts, ...aiGovernancePosts]
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 6)
                  .map(renderBlogCard)}
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {securityPosts.map(renderBlogCard)}
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {privacyPosts.map(renderBlogCard)}
              </div>
            </TabsContent>

            <TabsContent value="ai" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiGovernancePosts.map(renderBlogCard)}
              </div>
            </TabsContent>
          </Tabs>

          {/* Pagination */}
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Container>
      </section>
    </Layout>
  );
};

export default Blog;
