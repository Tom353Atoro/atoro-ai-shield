
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { Menu, X } from 'lucide-react';
import LogoComponent from './navbar/LogoComponent';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import { navLinks } from './navbar/navData';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <LogoComponent />

          {/* Desktop navigation */}
          <DesktopNav 
            navLinks={navLinks}
            servicesDropdownOpen={servicesDropdownOpen}
            resourcesDropdownOpen={resourcesDropdownOpen}
            setServicesDropdownOpen={setServicesDropdownOpen}
            setResourcesDropdownOpen={setResourcesDropdownOpen}
          />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Menu">
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <MobileNav 
        mobileMenuOpen={mobileMenuOpen}
        servicesDropdownOpen={servicesDropdownOpen}
        resourcesDropdownOpen={resourcesDropdownOpen}
        setServicesDropdownOpen={setServicesDropdownOpen}
        setResourcesDropdownOpen={setResourcesDropdownOpen}
        navLinks={navLinks}
        toggleMobileMenu={toggleMobileMenu}
      />
    </header>
  );
};

export default Navbar;
