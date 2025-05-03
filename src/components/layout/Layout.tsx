
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  withoutFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, withoutFooter = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {!withoutFooter && <Footer />}
    </div>
  );
};

export default Layout;
