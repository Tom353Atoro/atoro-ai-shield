
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, FileCheck, Globe, Clock } from 'lucide-react';
import ServiceSectionWrapper from '@/components/services/ServiceSectionWrapper';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceFeatureGrid from '@/components/services/ServiceFeatureGrid';
import ServiceProcessList from '@/components/services/ServiceProcessList';
import ServiceFeaturedSection from '@/components/services/ServiceFeaturedSection';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import { tokens } from '@/lib/designTokens';

const DesignSystem = () => {
  // Example data for components
  const features = [
    "Feature one", 
    "Feature two", 
    "Feature three", 
    "Feature four"
  ];

  const challenges = [
    { number: "1", text: "Challenge one" },
    { number: "2", text: "Challenge two" },
    { number: "3", text: "Challenge three" },
    { number: "4", text: "Challenge four" }
  ];

  const processSteps = [
    {
      icon: <FileCheck className="h-6 w-6 text-atoro-blue" />,
      number: "01",
      title: "Step One",
      description: "Description of step one"
    },
    {
      icon: <Shield className="h-6 w-6 text-atoro-green" />,
      number: "02",
      title: "Step Two",
      description: "Description of step two"
    },
    {
      icon: <Clock className="h-6 w-6 text-atoro-teal" />,
      number: "03",
      title: "Step Three",
      description: "Description of step three"
    },
    {
      icon: <Globe className="h-6 w-6 text-atoro-blue" />,
      number: "04",
      title: "Step Four",
      description: "Description of step four"
    }
  ];

  const serviceCards = [
    {
      icon: <Shield className="h-6 w-6 text-atoro-blue" />,
      title: "Service One",
      description: "Description of service one"
    },
    {
      icon: <FileCheck className="h-6 w-6 text-atoro-green" />,
      title: "Service Two",
      description: "Description of service two"
    },
    {
      icon: <Globe className="h-6 w-6 text-atoro-teal" />,
      title: "Service Three",
      description: "Description of service three"
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-4">Design System</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Atoro Design System</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A comprehensive collection of standardized components and design tokens used throughout the Atoro website.
            </p>
          </div>
        </Container>
      </section>

      {/* ServiceHeroSection Example */}
      <section className="py-8 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold mb-6">ServiceHeroSection</h2>
          <p className="mb-4">Used for primary hero sections on service pages.</p>
        </Container>
      </section>
      <ServiceHeroSection 
        badgeText="Example Badge"
        title="Main Title"
        highlightText="Highlighted"
        description="This is an example description for the ServiceHeroSection component. It demonstrates how the component appears with all props provided."
        primaryButtonText="Primary Action"
        primaryButtonLink="#"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#"
      />
      
      {/* ServiceSectionWrapper Example */}
      <section className="py-8 bg-white">
        <Container>
          <h2 className="text-2xl font-bold mb-6">ServiceSectionWrapper</h2>
          <p className="mb-4">A consistent container for content sections with optional header elements.</p>
        </Container>
        
        <ServiceSectionWrapper
          badgeText="Example Badge"
          title="Section Title"
          description="An example description for the ServiceSectionWrapper component."
          className="py-12 bg-gray-50"
        >
          <div className="p-8 bg-white rounded-lg border border-gray-100 text-center">
            Section Content Goes Here
          </div>
        </ServiceSectionWrapper>
      </section>

      {/* ServiceCard and ServiceFeatureGrid Example */}
      <section className="py-8 bg-white">
        <Container>
          <h2 className="text-2xl font-bold mb-6">ServiceCard & ServiceFeatureGrid</h2>
          <p className="mb-4">Cards for displaying services in a responsive grid.</p>
        </Container>
        
        <ServiceSectionWrapper className="py-12 bg-gray-50">
          <ServiceFeatureGrid columns={3} gap="md">
            {serviceCards.map((card, index) => (
              <ServiceCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                linkText="Learn More"
                linkUrl="#"
              />
            ))}
          </ServiceFeatureGrid>
        </ServiceSectionWrapper>
      </section>

      {/* ServiceProcessList Example */}
      <section className="py-8 bg-white">
        <Container>
          <h2 className="text-2xl font-bold mb-6">ServiceProcessList</h2>
          <p className="mb-4">Displays a step-by-step process in horizontal or vertical orientation.</p>
        </Container>
        
        <ServiceSectionWrapper className="py-12 bg-gray-50">
          <ServiceProcessList 
            steps={processSteps} 
            direction="horizontal" 
            accentColor="text-atoro-green border-atoro-green"
          />
        </ServiceSectionWrapper>
      </section>

      {/* ServiceFeaturedSection Example */}
      <section className="py-8 bg-white">
        <Container>
          <h2 className="text-2xl font-bold mb-6">ServiceFeaturedSection</h2>
          <p className="mb-4">Highlights a featured service with benefits and challenges.</p>
        </Container>
      </section>
      
      <ServiceFeaturedSection
        badgeText="Featured Example"
        title="Featured Service Title"
        description="This is an example description for the ServiceFeaturedSection component that highlights a specific service offering."
        features={features}
        challenges={challenges}
        ctaText="Learn More"
        ctaLink="#"
        backgroundClass={tokens.gradients.sectionTeal}
      />

      {/* Design Tokens */}
      <ServiceSectionWrapper
        title="Design Tokens"
        description="Standardized design values for consistent styling across the site."
        className="py-16 bg-white"
        centered={true}
      >
        <div className="space-y-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4">Gradients</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(tokens.gradients).map(([name, value]) => (
                <div key={name} className="rounded-lg overflow-hidden border border-gray-100">
                  <div className={`h-24 ${value}`}></div>
                  <div className="p-4 bg-white">
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-gray-500">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Colors</h3>
            <div className="flex flex-wrap gap-4">
              <div className="w-32 h-32 bg-atoro-teal rounded-lg flex items-center justify-center">
                <span className="bg-white px-2 py-1 rounded text-sm">atoro-teal</span>
              </div>
              <div className="w-32 h-32 bg-atoro-green rounded-lg flex items-center justify-center">
                <span className="bg-white px-2 py-1 rounded text-sm">atoro-green</span>
              </div>
              <div className="w-32 h-32 bg-atoro-blue rounded-lg flex items-center justify-center">
                <span className="bg-white px-2 py-1 rounded text-sm">atoro-blue</span>
              </div>
              <div className="w-32 h-32 bg-atoro-dark-teal rounded-lg flex items-center justify-center">
                <span className="bg-white px-2 py-1 rounded text-sm">atoro-dark-teal</span>
              </div>
              <div className="w-32 h-32 bg-atoro-light-green rounded-lg flex items-center justify-center">
                <span className="bg-white px-2 py-1 rounded text-sm">atoro-light-green</span>
              </div>
              <div className="w-32 h-32 bg-atoro-light-blue rounded-lg flex items-center justify-center">
                <span className="bg-white px-2 py-1 rounded text-sm">atoro-light-blue</span>
              </div>
            </div>
          </div>
        </div>
      </ServiceSectionWrapper>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-atoro-blue/10 to-atoro-green/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Ready to Use These Components?</h2>
            <p className="text-gray-700 mb-6">
              Our standardized component system helps maintain consistency across the Atoro website
              while enabling rapid development of new pages and features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green" asChild>
                <Link to="/">Back to Homepage</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default DesignSystem;
