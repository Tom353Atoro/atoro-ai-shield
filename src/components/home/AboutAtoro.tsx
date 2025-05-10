
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutAtoro = () => {
  const isMobile = useIsMobile();
  
  const values = [{
    icon: Shield,
    title: 'Security First',
    description: 'We approach every partnership with security as the foundation, not an afterthought.'
  }, {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, understanding your unique business challenges.'
  }, {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we deliver.'
  }];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden shadow-md md:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600" 
                alt="Atoro security team" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Decorative elements - scaled appropriately for mobile */}
            {!isMobile && (
              <>
                <div className="absolute -z-10 -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-32 md:w-64 h-16 md:h-32 bg-gradient-to-br from-atoro-green/10 to-atoro-blue/10 rounded-lg" />
                <div className="absolute -z-10 -top-4 -right-4 md:-top-6 md:-right-6 w-16 md:w-32 h-32 md:h-64 bg-gradient-to-br from-atoro-blue/10 to-atoro-teal/10 rounded-lg" />
              </>
            )}
          </div>
          
          <div className="order-2 lg:order-2 mt-6 lg:mt-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">About <span className="gradient-text">Atoro</span></h2>
            
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">Atoro is a specialised security consultancy dedicated to helping tech teams navigate the complex landscape of cybersecurity, privacy regulations, and AI governance.</p>
            
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-10">
              Founded by veterans from the security and compliance industry, we understand the unique challenges 
              that growing tech companies face when balancing rapid innovation with robust security practices.
            </p>
            
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/about" className="group">
                Learn more about us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutAtoro;
