
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'Security Team as a Service', href: '/services/security-team-aas' },
      { name: 'Cyber Security', href: '/services/cyber-security' },
      { name: 'Data Privacy', href: '/services/data-privacy' },
      { name: 'AI Governance', href: '/services/ai-governance' },
    ],
    resources: [
      { name: 'Whitepapers', href: '/resources/whitepapers' },
      { name: 'Webinars', href: '/resources/webinars' },
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Tools & Templates', href: '/resources/downloads' },
    ],
    company: [
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-atoro-blue">Atoro</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Europe's first ISO 42001 certified AI security consultancy dedicated to fast-growing SaaS companies.
            </p>
            <div className="mt-6">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} Atoro. All rights reserved.</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-atoro-blue text-sm transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-atoro-blue text-sm transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Get the latest security insights and updates directly to your inbox.
            </p>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:flex-1"
                  required
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
