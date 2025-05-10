
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedTestimonials from '@/components/shared/AnimatedTestimonials';

const TestimonialsPage = () => {
  // Real testimonials
  const testimonials = [
    {
      quote: "I've always enjoyed working with the Atoro team. Their service has been professional and top quality with excellent communication.",
      author: "Yass Omar",
      title: "Head of Legal",
      company: "Heidi Health",
      avatarSrc: "/lovable-uploads/c3b2775f-5246-4ccc-b27c-85e69efbe307.png",
      rating: 5
    },
    {
      quote: "The Atoro team kept us organized with effective communication over Slack, email, and weekly check-ins to meet our GDPR deadline.",
      author: "Vanessa Liu",
      title: "CEO",
      company: "Sugarwork",
      avatarSrc: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
      rating: 4.5
    },
    {
      quote: "They are professional, knowledgeable, and responsive. We felt confident in their expertise throughout the SOC2 certification process.",
      author: "Camil Blanaru",
      title: "CTO",
      company: "Prezly BV",
      avatarSrc: "/lovable-uploads/0587c9dd-34df-40fd-98e6-d1e687f36909.png",
      rating: 5
    },
    {
      quote: "Atoro guided us through ISO 27001 certification with a hands-on approach. They kept us informed throughout the entire process.",
      author: "Henrik Dannert",
      title: "CEO",
      company: "Heartpace",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
      rating: 4.5
    },
  ];

  // Additional testimonials for the page (can be duplicates or variations)
  const additionalTestimonials = [
    ...testimonials,
    {
      quote: "The team at Atoro not only secured our systems but educated our developers on best practices. The knowledge transfer was invaluable.",
      author: "David Kim",
      title: "VP of Engineering",
      company: "CloudNative",
      rating: 4.5
    },
    {
      quote: "Achieving SOC 2 compliance seemed impossible until we partnered with Atoro. Their methodical approach made a complex process manageable.",
      author: "Priya Sharma",
      title: "CISO",
      company: "FinTech Solutions",
      rating: 5
    }
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

        <AnimatedTestimonials 
          testimonials={testimonials}
          title="Featured Stories" 
          description="Hear from our customers who have transformed their security posture with Atoro."
          variant="featured"
          badgeText="Featured Stories"
          bgColor="bg-white"
          showCompanyInCard={false}
        />

        <AnimatedTestimonials 
          testimonials={additionalTestimonials}
          title="More Client Success Stories"
          description="Browse through our customer success stories and see how we've helped businesses like yours."
          variant="carousel"
          badgeText="Client Success Stories"
          bgColor="bg-gray-50"
          showCompanyInCard={false}
        />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
