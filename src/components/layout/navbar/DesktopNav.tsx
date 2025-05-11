
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { NavLink } from '@/components/layout/navbar/types';

interface DesktopNavProps {
  navLinks: NavLink[];
  servicesDropdownOpen: boolean;
  resourcesDropdownOpen: boolean;
  setServicesDropdownOpen: (open: boolean) => void;
  setResourcesDropdownOpen: (open: boolean) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ 
  navLinks, 
  servicesDropdownOpen, 
  resourcesDropdownOpen, 
  setServicesDropdownOpen, 
  setResourcesDropdownOpen 
}) => {
  const location = useLocation();
  // Check if the current route matches any of the service pages for active state
  const isServicePage = location.pathname.includes('/services/');
  
  return (
    <>
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

      <div className="hidden md:block">
        <Button asChild>
          <Link to="/contact">Book a Call</Link>
        </Button>
      </div>
    </>
  );
};

export default DesktopNav;
