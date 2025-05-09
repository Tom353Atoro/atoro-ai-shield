
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TestimonialSection from '@/components/shared/TestimonialSection';

const TestimonialsPage = () => {
  // Real testimonials
  const testimonials = [
    {
      quote: "I've always enjoyed working with the Atoro team. From Tom all the way through to the rest of the team, their service has been professional and top quality while always ensuring excellent communication and feedback.",
      author: "Yass Omar",
      title: "Head of Legal",
      company: "Heidi Health",
      avatarSrc: "/lovable-uploads/0587c9dd-34df-40fd-98e6-d1e687f36909.png",
    },
    {
      quote: "The Atoro team were fantastic to work with - they kept us organised and communicated effectively over Slack, email, and weekly check-ins so that we could meet our target deadline to be GDPR compliant within 12 weeks. They also helped answer direct questions posed by customers during security review processes.",
      author: "Vanessa Liu",
      title: "CEO",
      company: "Sugarwork",
      avatarSrc: "/lovable-uploads/697c806d-2cfd-402a-8b50-65ceecb5c88c.png",
    },
    {
      quote: "They are professional, knowledgeable, and responsive. We consistently felt confident in their strong expertise and appreciated their guidance throughout the entire SOC2 certification process.",
      author: "Camil Blanaru",
      title: "CTO",
      company: "Prezly BV",
      avatarSrc: "/lovable-uploads/c3b2775f-5246-4ccc-b27c-85e69efbe307.png",
    },
    {
      quote: "Atoro guided us through the entire ISO 27001 certification process with a hands-on approach. Their team were thorough, kept us informed throughout, and ensured we were fully prepared for the certification audit. They are a great and knowledgeable team to work with. Always on time, care about details but also about having a friendly co-working atmosphere.",
      author: "Henrik Dannert",
      title: "CEO",
      company: "Heartpace",
      avatarSrc: "/lovable-uploads/2ff67c0a-34c5-4cf0-83e9-3dbddc25b5ce.png",
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
    },
    {
      quote: "Achieving SOC 2 compliance seemed impossible until we partnered with Atoro. Their methodical approach made a complex process manageable.",
      author: "Priya Sharma",
      title: "CISO",
      company: "FinTech Solutions",
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

        <TestimonialSection 
          testimonials={testimonials}
          title="Featured Stories" 
          description="Hear from our customers who have transformed their security posture with Atoro."
          variant="featured"
          bgColor="bg-white"
          showAvatars={true}
          sectionId="featured-testimonials"
        />

        <TestimonialSection 
          testimonials={additionalTestimonials}
          title="More Client Success Stories"
          description="Browse through our customer success stories and see how we've helped businesses like yours."
          variant="carousel"
          bgColor="bg-gray-50"
          showAvatars={true}
          sectionId="all-testimonials"
        />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
