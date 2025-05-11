
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { NavLink } from '@/components/layout/navbar/types';

interface MobileNavProps {
  mobileMenuOpen: boolean;
  servicesDropdownOpen: boolean;
  resourcesDropdownOpen: boolean;
  setServicesDropdownOpen: (open: boolean) => void;
  setResourcesDropdownOpen: (open: boolean) => void;
  navLinks: NavLink[];
  toggleMobileMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  mobileMenuOpen, 
  servicesDropdownOpen,
  resourcesDropdownOpen,
  setServicesDropdownOpen,
  setResourcesDropdownOpen,
  navLinks,
  toggleMobileMenu
}) => {
  const location = useLocation();
  const isServicePage = location.pathname.includes('/services/');
  
  if (!mobileMenuOpen) return null;

  return (
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
  );
};

export default MobileNav;
