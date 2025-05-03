import React from 'react';
import { Link } from 'react-router-dom';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, DollarSign, Clock, Users, Shield, MessageSquare, FileCheck, Bug, Lock } from 'lucide-react';
import TestimonialSection from '@/components/shared/TestimonialSection';
import CertificationLogos from '@/components/shared/CertificationLogos';
import ContactForm from '@/components/services/ContactForm';
import TeamMemberCard from '@/components/services/TeamMemberCard';
import ServicePillars from '@/components/services/ServicePillars';
import LogoBanner from '@/components/home/LogoBanner';

const SecurityTeamService = () => {
  // Service-specific testimonials
  const serviceTestimonials = [{
    quote: "Atoro's Security Team as a Service model gave us enterprise-grade protection without the overhead of building an in-house security department. It's been transformative for our compliance journey.",
    author: "Sarah Johnson",
    title: "COO",
    company: "DataShield",
    rating: 5
  }, {
    quote: "Working with Atoro for our SOC 2 compliance was seamless. Their team was responsive on Slack and guided us through the entire process, helping us achieve certification on our first attempt.",
    author: "David Rivera",
    title: "Head of Engineering",
    company: "SecureStack",
    rating: 5
  }, {
    quote: "Having Atoro manage our Drata implementation saved us countless hours and helped us close enterprise deals that required SOC 2 certification. Their expertise was invaluable.",
    author: "Michael Zhang",
    title: "CTO",
    company: "CloudSecure",
    rating: 4.5
  }];

  // Team members data
  const teamMembers = [{
    name: "Alex Morgan",
    title: "Lead Security Architect",
    photo: "/lovable-uploads/team-member-1.png",
    credentials: "CISSP, CISM, 15+ years in enterprise security"
  }, {
    name: "Sophia Chen",
    title: "Compliance Specialist",
    photo: "/lovable-uploads/team-member-2.png",
    credentials: "ISO 27001 LA, CISA, Former Big 4 Auditor"
  }, {
    name: "Marcus Johnson",
    title: "Penetration Test Lead",
    photo: "/lovable-uploads/team-member-3.png",
    credentials: "OSCP, CEH, 10+ years in offensive security"
  }];

  // Benefits data
  const benefits = [{
    id: "cost-savings",
    title: "70% Cost Reduction",
    description: "Eliminate the expense of hiring, training and retaining an in-house security team while gaining access to a broader range of expertise.",
    icon: <DollarSign className="h-10 w-10 text-atoro-green" />
  }, {
    id: "speed",
    title: "Accelerated Compliance",
    description: "Achieve certifications in 60-90 days rather than 6-12 months, unlocking enterprise deals that require formal compliance.",
    icon: <Clock className="h-10 w-10 text-atoro-green" />
  }, {
    id: "done-for-you",
    title: "Fully Managed Solution",
    description: "We handle everything from policy creation to audits while your team stays focused on building your core product.",
    icon: <Check className="h-10 w-10 text-atoro-green" />
  }, {
    id: "growth",
    title: "Unlock Enterprise Deals",
    description: "Remove security objections from your sales cycle and confidently pursue larger clients with stringent vendor requirements.",
    icon: <Users className="h-10 w-10 text-atoro-green" />
  }];

  // Features data
  const features = [{
    title: "Responsive Slack Support",
    description: "Direct access to our security experts with 1-hour SLA during business hours, ensuring your questions never block progress.",
    icon: <MessageSquare className="h-12 w-12 text-atoro-teal p-2 bg-atoro-teal/10 rounded-lg" />
  }, {
    title: "On-Demand Testing",
    description: "Up to 4 comprehensive penetration tests annually, plus continuous vulnerability scanning to identify risks before they become breaches.",
    icon: <Bug className="h-12 w-12 text-atoro-teal p-2 bg-atoro-teal/10 rounded-lg" />
  }, {
    title: "Platform Management",
    description: "Full implementation and management of Drata or Vanta, turning complex compliance workflows into streamlined processes.",
    icon: <FileCheck className="h-12 w-12 text-atoro-teal p-2 bg-atoro-teal/10 rounded-lg" />
  }, {
    title: "Dedicated Experts",
    description: "A named team of security professionals with the specialized expertise you need, without the recruiting challenges.",
    icon: <Shield className="h-12 w-12 text-atoro-teal p-2 bg-atoro-teal/10 rounded-lg" />
  }, {
    title: "Trust Center Deployment",
    description: "Customer-facing security documentation and trust portal to showcase your security posture and expedite security reviews.",
    icon: <Lock className="h-12 w-12 text-atoro-teal p-2 bg-atoro-teal/10 rounded-lg" />
  }];
  return <ServiceLayout>
      {/* Hero Section - Improved styling */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-atoro-dark-teal to-black text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 z-0 bg-hero-pattern"></div>
        
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <Badge className="mb-4 bg-atoro-green/20 text-atoro-green hover:bg-atoro-green/30">Virtual Security Team</Badge>
              <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Your Complete <span className="text-atoro-green">Virtual Security Department</span>
              </h1>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                Get enterprise-grade security and compliance without the overhead of an in-house team. 
                Our experts become an extension of your organization, handling everything from daily security operations to compliance certifications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                  Schedule a Security Assessment
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-atoro-green to-atoro-blue opacity-30 blur-sm rounded-lg"></div>
                <img 
                  alt="Security Team Service" 
                  className="relative w-full rounded-lg shadow-lg object-cover max-h-[400px]" 
                  src="/lovable-uploads/62277257-f565-473b-943c-a6746c4c657b.jpg" 
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Client Logo Section - Using LogoBanner from homepage */}
      <section className="py-12 bg-gray-50">
        <LogoBanner />
      </section>

      {/* Service Description */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">Our Approach</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Security Excellence Without the Overhead</h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                For SaaS companies scaling quickly, building an in-house security team is expensive, time-consuming, and pulls focus from your core business. Our Security Team as a Service model provides all the expertise you need without the overhead costs and management challenges.
              </p>
              <p>
                We embed directly with your team, handling everything from policy creation and security reviews to compliance automation and audit management. Your dedicated security experts become an extension of your organization, providing both strategic guidance and hands-on implementation.
              </p>
              <p>
                While you focus on growing your business, we ensure your security and compliance foundations are solid, helping you confidently pursue enterprise deals that have stringent security requirements. From ISO 27001 to SOC 2 to GDPR, we've got you covered.
              </p>
            </div>
            
            <div className="mt-10 text-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                Book Your Security Consultation
              </Button>
              <p className="mt-2 text-sm text-gray-500">Limited availability for Q2 onboarding</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Executive Benefits</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our service delivers measurable business value with clear ROI for your executive team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map(benefit => <Card key={benefit.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </Container>
      </section>

      {/* Interactive Graphic */}
      <section className="py-16 bg-white overflow-hidden">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">Our Methodology</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Security Coverage</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our integrated approach ensures all aspects of your security program work together seamlessly
            </p>
          </div>
          
          <div className="mt-12">
            <ServicePillars />
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal text-white">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-white/20 text-white hover:bg-white/30">Core Capabilities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Comprehensive Security Services</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Everything you need to build a strong security posture and achieve compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => <div key={index} className="bg-white/10 p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                <p className="text-white/80 text-center">{feature.description}</p>
              </div>)}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">Meet Your Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Experts at Your Service</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experienced professionals with the specialized skills you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => <TeamMemberCard key={index} member={member} />)}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg font-medium mb-4">Certifications our team holds:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="text-sm py-1 px-3">CISSP</Badge>
              <Badge className="text-sm py-1 px-3">CISM</Badge>
              <Badge className="text-sm py-1 px-3">ISO 27001 LA</Badge>
              <Badge className="text-sm py-1 px-3">CISA</Badge>
              <Badge className="text-sm py-1 px-3">OSCP</Badge>
              <Badge className="text-sm py-1 px-3">CEH</Badge>
              <Badge className="text-sm py-1 px-3">AWS Security Specialist</Badge>
            </div>
          </div>
        </Container>
      </section>

      {/* Certification Logos Section - Added back */}
      <section className="py-16 bg-white">
        <CertificationLogos 
          title="Industry-Standard Certifications" 
          description="Our security practices and services are backed by industry-recognized certifications."
          className="bg-white" 
        />
      </section>

      {/* Testimonial section */}
      <TestimonialSection testimonials={serviceTestimonials} title="What Our Clients Say" description="Read how we've helped companies like yours build world-class security programs" variant="featured" showRatings={true} bgColor="bg-white" />

      {/* Contact Form */}
      <section className="py-16 bg-gray-50" id="contact">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <Badge className="mb-3 bg-atoro-teal/10 text-atoro-teal">Get Started</Badge>
              <h2 className="text-3xl font-bold mb-4">Schedule Your Security Assessment</h2>
              <p className="text-lg text-gray-700 mb-6">
                Take the first step toward comprehensive security coverage and compliance readiness. Our team will conduct a thorough assessment of your current security posture.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="text-atoro-green" />
                  <span>No-obligation consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-atoro-green" />
                  <span>Custom implementation roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-atoro-green" />
                  <span>Detailed compliance gap analysis</span>
                </div>
              </div>
              
              <div className="p-4 bg-atoro-green/10 rounded-lg border border-atoro-green/20 text-sm">
                <p className="font-medium text-atoro-teal">Limited Availability</p>
                <p>We're currently accepting new clients for Q2 onboarding. Schedule today to reserve your spot.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section with sticky CTA */}
      <section className="py-16 bg-white relative">
        <div className="sticky bottom-4 w-full z-10 flex justify-center pointer-events-none">
          
        </div>
        
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-atoro-teal/10 text-atoro-teal">Common Questions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[{
            question: "How quickly can we achieve compliance with your service?",
            answer: "Most clients achieve SOC 2 Type 1 within 60-90 days and ISO 27001 certification within 4-6 months. This is significantly faster than the typical 9-12 month timeline for companies building in-house programs."
          }, {
            question: "Do we need to hire any internal security staff?",
            answer: "No, our service is designed to be comprehensive. We provide all necessary security expertise, from strategic leadership (vCISO) to hands-on implementation. You'll need to assign an internal point of contact, but they typically spend less than 5 hours per week coordinating with our team."
          }, {
            question: "How does pricing work?",
            answer: "We offer transparent, flat-rate monthly pricing based on your company size and specific compliance requirements. There are no hidden fees or surprise costs. Compared to hiring a minimal in-house team (CISO, security engineer, compliance manager), our service typically saves 60-70% annually."
          }, {
            question: "What happens during a security emergency?",
            answer: "Your service includes incident response support. Our team is available 24/7 for security emergencies through our dedicated incident hotline. We work with you to contain, investigate, and remediate security incidents, as well as manage any necessary communications."
          }, {
            question: "Can you support multiple compliance frameworks simultaneously?",
            answer: "Yes, our methodology is designed to efficiently achieve multiple certifications with shared controls and evidence. Most clients pursue SOC 2 and ISO 27001 simultaneously, with GDPR, HIPAA, or other frameworks layered on as needed."
          }].map((faq, index) => <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>)}
          </div>
        </Container>
      </section>
    </ServiceLayout>;
};
export default SecurityTeamService;
