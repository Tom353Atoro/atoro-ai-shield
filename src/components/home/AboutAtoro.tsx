
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';

const AboutAtoro = () => {
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

  return <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6">About <span className="gradient-text">Atoro</span></h2>
            
            <p className="text-lg text-gray-700 mb-6">Atoro is a specialised security consultancy dedicated to helping tech teams navigate the complex landscape of cybersecurity, privacy regulations, and AI governance.</p>
            
            <p className="text-lg text-gray-700 mb-10">
              Founded by veterans from the security and compliance industry, we understand the unique challenges 
              that growing tech companies face when balancing rapid innovation with robust security practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {values.map(value => <div key={value.title} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-atoro-green/20 to-atoro-blue/20 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-atoro-teal" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>)}
            </div>
            
            <Button variant="outline" asChild>
              <Link to="/about" className="group">
                Learn more about us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600" alt="Atoro security team" className="w-full h-full object-cover" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-32 bg-gradient-to-br from-atoro-green/10 to-atoro-blue/10 rounded-lg" />
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-64 bg-gradient-to-br from-atoro-blue/10 to-atoro-teal/10 rounded-lg" />
          </div>
        </div>
      </Container>
    </section>;
};

export default AboutAtoro;
