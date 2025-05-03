
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Video, ExternalLink } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const Webinars = () => {
  // Sample webinars data - in a real app, this would come from an API or CMS
  const upcomingWebinars = [
    {
      id: 1,
      title: "Preparing for SOC 2: What You Need to Know",
      date: "May 15, 2025",
      time: "11:00 AM EST",
      presenter: "Jane Smith, CISO",
      description: "Learn the essential steps and requirements for achieving SOC 2 compliance for your SaaS company.",
    },
    {
      id: 2,
      title: "GDPR Compliance in 2025: Updates & Best Practices",
      date: "May 22, 2025",
      time: "10:00 AM EST",
      presenter: "Mark Johnson, Privacy Expert",
      description: "Stay current with the latest GDPR requirements and enforcement trends affecting SaaS companies.",
    },
    {
      id: 3,
      title: "AI Governance Framework Implementation",
      date: "May 29, 2025",
      time: "1:00 PM EST",
      presenter: "Dr. Sarah Lee, AI Ethics Specialist",
      description: "Practical steps to implement robust AI governance in your organization.",
    },
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "Security Essentials for SaaS Startups",
      date: "April 18, 2025",
      presenter: "John Davis, Security Architect",
      description: "Core security controls every SaaS startup should implement from day one.",
      recordingUrl: "/resources/webinars/saas-security-essentials",
      thumbnail: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
    },
    {
      id: 5,
      title: "Privacy by Design for Product Teams",
      date: "April 4, 2025",
      presenter: "Elena Rodriguez, Privacy Officer",
      description: "How to embed privacy considerations into your product development lifecycle.",
      recordingUrl: "/resources/webinars/privacy-by-design",
      thumbnail: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
    },
    {
      id: 6,
      title: "AI Risk Assessment Workshop",
      date: "March 21, 2025",
      presenter: "Dr. Michael Chen, AI Governance Lead",
      description: "Hands-on workshop for identifying and mitigating AI risks in your applications.",
      recordingUrl: "/resources/webinars/ai-risk-assessment",
      thumbnail: "/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-atoro-teal/10 to-atoro-blue/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Security & Privacy Webinars
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Join our expert-led live sessions or watch recordings of past webinars on security, privacy, and AI governance.
            </p>
          </div>
        </Container>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 bg-white">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-atoro-teal/10 rounded-lg">
              <Calendar className="w-6 h-6 text-atoro-teal" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Upcoming Webinars</h2>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date & Time</TableHead>
                <TableHead>Webinar</TableHead>
                <TableHead>Presenter</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingWebinars.map((webinar) => (
                <TableRow key={webinar.id}>
                  <TableCell className="font-medium">
                    <div className="font-bold">{webinar.date}</div>
                    <div className="text-sm text-gray-500">{webinar.time}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-bold">{webinar.title}</div>
                    <div className="text-sm text-gray-500">{webinar.description}</div>
                  </TableCell>
                  <TableCell>{webinar.presenter}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" className="bg-atoro-teal hover:bg-atoro-teal/90">
                      Register Now
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      </section>

      {/* Past Webinars */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-atoro-blue/10 rounded-lg">
              <Video className="w-6 h-6 text-atoro-blue" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">On-Demand Webinars</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar) => (
              <Card key={webinar.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={webinar.thumbnail} 
                    alt={webinar.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                      <Video className="mr-2 h-5 w-5" />
                      Watch Recording
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{webinar.date}</div>
                  <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="text-sm font-medium mb-4">
                    Presented by: {webinar.presenter}
                  </div>
                  <Button variant="link" className="p-0 text-atoro-blue hover:text-atoro-teal" asChild>
                    <a href={webinar.recordingUrl}>
                      Watch Recording
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-blue text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Notified About Future Webinars
            </h2>
            <p className="mb-8 opacity-90">
              Subscribe to our newsletter to receive invitations to upcoming webinars and security insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-atoro-teal hover:bg-white/90">
                Join Our Newsletter
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Webinars;
