
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Newsletter from '@/components/home/Newsletter';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'iso-42001',
      title: "Atoro Becomes Europe's First ISO 42001-Certified Cyber-Compliance Agency",
      client: "Atoro",
      excerpt: "How Atoro achieved ISO 42001 certification, setting the standard for responsible AI governance under the EU AI Act.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      path: "/resources/case-studies/iso-42001"
    },
    // Additional case studies would be added here
  ];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-r from-atoro-blue/10 to-atoro-teal/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Real client success stories showing how our cybersecurity and compliance solutions create measurable business impact.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  {study.imageUrl && (
                    <img 
                      src={study.imageUrl} 
                      alt={`${study.client} case study featured image`} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  )}
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-2">
                    <span className="inline-block bg-atoro-teal/10 text-atoro-teal rounded-full px-3 py-1 text-sm font-medium">
                      {study.client}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{study.excerpt}</p>
                  <Button variant="outline" className="mt-auto w-full" asChild>
                    <Link to={study.path} className="flex items-center justify-center">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Read Case Study
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {caseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                Case studies coming soon. Check back later for detailed client success stories.
              </p>
            </div>
          )}
        </Container>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
    </Layout>
  );
};

export default CaseStudies;
