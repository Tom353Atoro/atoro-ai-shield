
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TestimonialSection from '@/components/shared/TestimonialSection';

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "Atoro transformed our security posture in weeks, not months. Their expertise in both AI and security helped us implement robust safeguards without slowing down our development cycles.",
      author: "Sarah Chen",
      title: "CTO",
      company: "TechVantage",
      rating: 5,
    },
    {
      quote: "Working with Atoro's vCISO service gave us enterprise-grade security leadership that we could never have afforded with a traditional in-house hire. Game-changer for our Series A journey.",
      author: "Marcus Johnson",
      title: "CEO",
      company: "DataPulse",
      rating: 5,
    },
    {
      quote: "Their integrated approach to security, privacy, and AI governance helped us achieve multiple compliance certifications simultaneously, opening doors to enterprise clients.",
      author: "Elena Rodriguez",
      title: "COO",
      company: "CloudStack",
      rating: 4.5,
    },
    {
      quote: "The team at Atoro not only secured our systems but educated our developers on best practices. The knowledge transfer was invaluable.",
      author: "David Kim",
      title: "VP of Engineering",
      company: "CloudNative",
      rating: 5,
    },
    {
      quote: "Achieving SOC 2 compliance seemed impossible until we partnered with Atoro. Their methodical approach made a complex process manageable.",
      author: "Priya Sharma",
      title: "CISO",
      company: "FinTech Solutions",
      rating: 4.5,
    }
  ];

  const featuredTestimonials = [
    {
      quote: "After our Series B, scaling security was our biggest challenge. Atoro's platform approach gave us comprehensive coverage without the overhead of multiple security vendors. Their team feels like an extension of our own.",
      author: "Michael Thompson",
      title: "Founder & CEO",
      company: "SaaS Analytics",
      rating: 5,
    },
    ...testimonials.slice(0, 2)
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-atoro-teal text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-center">Customer Testimonials</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Don't just take our word for it. See what our customers have to say about their experience working with Atoro Security.
            </p>
          </div>
        </div>

        <TestimonialSection 
          testimonials={featuredTestimonials}
          title="Featured Stories" 
          description="Hear from our customers who have transformed their security posture with Atoro."
          variant="featured"
          bgColor="bg-white"
          showRatings={true}
          sectionId="featured-testimonials"
        />

        <TestimonialSection 
          testimonials={testimonials}
          title="More Customer Stories"
          description="Browse through our customer success stories and see how we've helped businesses like yours."
          variant="carousel"
          bgColor="bg-gray-50"
          showRatings={true}
          sectionId="all-testimonials"
        />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
