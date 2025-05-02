
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Logo from '@/components/shared/Logo';

const Footer = () => {
  return (
    <footer className="bg-atoro-teal text-white pb-6">
      <Container>
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo and About */}
            <div className="space-y-4">
              <Link to="/" className="block">
                <Logo variant="white" size="medium" href="/" />
              </Link>
              <p className="text-gray-300 text-sm mt-4">
                Focused security, data privacy, and AI governance solutions for fast-growing SaaS companies.
              </p>
            </div>
            
            {/* Column 2: Services */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Services</h3>
              <ul className="space-y-2">
                {['Cyber Security', 'Data Privacy', 'AI Governance', 'Security Team as a Service'].map((item) => (
                  <li key={item}>
                    <Link to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3: Resources */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Resources</h3>
              <ul className="space-y-2">
                {['Blog', 'Whitepapers', 'Webinars', 'Case Studies'].map((item) => (
                  <li key={item}>
                    <Link to={`/resources/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 4: Contact */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@atoro.io" className="text-gray-300 hover:text-white transition-colors">
                    info@atoro.io
                  </a>
                </li>
                <li>
                  <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors">
                    +1-555-123-4567
                  </a>
                </li>
                <li className="text-gray-300">
                  123 Security Street, London, UK
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Atoro. All rights reserved.
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
