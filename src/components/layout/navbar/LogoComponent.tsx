
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/shared/Logo';

const LogoComponent: React.FC = () => {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center">
        <Logo size="medium" />
      </Link>
    </div>
  );
};

export default LogoComponent;
