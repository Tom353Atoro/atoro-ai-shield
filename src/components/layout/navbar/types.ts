
import { ReactNode } from 'react';

export interface NavItem {
  name: string;
  href: string;
  featured?: boolean;
  description?: string;
  icon?: ReactNode;
}

export interface NavLink {
  name: string;
  href: string;
  dropdown?: boolean;
  items?: NavItem[];
}
