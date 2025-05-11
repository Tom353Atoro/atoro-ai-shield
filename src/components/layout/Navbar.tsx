
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Shield, FileKey, Brain, Users } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      dropdown: true,
      items: [
        { 
          name: 'Cyber Security', 
          href: '/services/cyber-security',
          description: 'Proactive security for your SaaS business.',
          icon: <Shield className="h-5 w-5 text-atoro-green" />
        },
        { 
          name: 'Data Privacy', 
          href: '/services/data-privacy',
          description: 'Navigate GDPR with confidence and ease.',
          icon: <FileKey className="h-5 w-5 text-atoro-blue" />
        },
        { 
          name: 'AI Governance', 
          href: '/services/ai-governance',
          description: 'Ensure ethical AI practices and compliance.',
          icon: <Brain className="h-5 w-5 text-atoro-teal" />
        },
        { 
          name: 'Security Team as a Service', 
          href: '/services/security-team-aas', 
          featured: true,
          description: 'Your dedicated virtual security department.',
          icon: <Users className="h-5 w-5 text-atoro-green" />
        },
      ],
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: true,
      items: [
        { name: 'Whitepapers', href: '/resources/whitepapers' },
        { name: 'Webinars', href: '/resources/webinars' },
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Tools & Templates', href: '/resources/tools-templates' },
      ],
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  // Check if the current route matches any of the service pages for active state
  const isServicePage = location.pathname.includes('/services/');

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/8d13129b-c156-4ec7-b2ef-bbd0364fb711.png" 
                alt="Atoro Logo" 
                className="h-8 md:h-10"
                width="auto"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              !link.dropdown ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-gray-700 hover:text-atoro-blue font-medium transition duration-200",
                    location.pathname === link.href && "text-atoro-blue"
                  )}
                >
                  {link.name}
                </Link>
              ) : (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.name === 'Services' ? setServicesDropdownOpen(true) : setResourcesDropdownOpen(true)}
                  onMouseLeave={() => link.name === 'Services' ? setServicesDropdownOpen(false) : setResourcesDropdownOpen(false)}
                >
                  <button className={cn(
                    "flex items-center font-medium transition duration-200 gap-1",
                    (link.name === 'Services' && isServicePage) || 
                    (link.name === 'Resources' && location.pathname.includes('/resources/')) 
                      ? "text-atoro-blue" 
                      : "text-gray-700 hover:text-atoro-blue"
                  )}>
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                  
                  {/* Dropdown for desktop */}
                  {((link.name === 'Services' && servicesDropdownOpen) || 
                    (link.name === 'Resources' && resourcesDropdownOpen)) && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 mt-1 border border-gray-100 animate-fade-in">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={cn(
                            "flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition duration-200",
                            item.featured ? "text-atoro-green font-semibold" : "text-gray-700",
                            location.pathname === item.href && "bg-gray-50"
                          )}
                        >
                          {item.icon && <span className="mr-3">{item.icon}</span>}
                          <div>
                            <div className={item.featured ? "text-atoro-green font-semibold" : "font-medium"}>
                              {item.name}
                            </div>
                            {item.description && (
                              <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link to="/contact">Book a Call</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Menu">
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {!link.dropdown ? (
                  <Link
                    to={link.href}
                    className={cn(
                      "block py-2 text-base font-medium",
                      location.pathname === link.href ? "text-atoro-blue" : "text-gray-700"
                    )}
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div className="py-2">
                    <button 
                      className={cn(
                        "flex items-center w-full text-left text-base font-medium",
                        (link.name === 'Services' && isServicePage) || 
                        (link.name === 'Resources' && location.pathname.includes('/resources/')) 
                          ? "text-atoro-blue" 
                          : "text-gray-700"
                      )}
                      onClick={() => {
                        if (link.name === 'Services') {
                          setServicesDropdownOpen(!servicesDropdownOpen);
                        } else {
                          setResourcesDropdownOpen(!resourcesDropdownOpen);
                        }
                      }}
                    >
                      {link.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    
                    {((link.name === 'Services' && servicesDropdownOpen) || 
                      (link.name === 'Resources' && resourcesDropdownOpen)) && (
                      <div className="pl-4 pt-2 space-y-1">
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "flex items-center py-2",
                              item.featured ? "text-atoro-green font-semibold" : "text-gray-600",
                              location.pathname === item.href && "bg-gray-50 rounded-md px-2"
                            )}
                            onClick={toggleMobileMenu}
                          >
                            {item.icon && <span className="mr-2">{item.icon}</span>}
                            <div>
                              <span>{item.name}</span>
                              {item.description && (
                                <p className="text-xs text-gray-500">{item.description}</p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={toggleMobileMenu}>Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
