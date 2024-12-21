import Link from 'next/link';
import { useState } from 'react';
import { FC } from 'react';
import { CoffeeCategory } from '@/types/coffee';

interface NavigationItem {
  id: CoffeeCategory;
  name: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'espresso', name: 'Espresso' },
  { id: 'pour over', name: 'Coados' },
  { id: 'french press', name: 'Prensa Francesa' },
  { id: 'aeropress', name: 'Aeropress' },
];

const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="bg-brown-900 text-white" role="navigation">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-bold text-xl hover:text-brown-300 transition-colors"
            aria-label="Ir para página inicial"
          >
            Guia do Café
          </Link>
          
          {/* Desktop Menu */}
          <NavigationDesktop items={navigationItems} />

          {/* Mobile Menu Button */}
          <NavigationMobileButton 
            isOpen={isMenuOpen} 
            onClick={toggleMenu} 
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <NavigationMobile 
        items={navigationItems} 
        isOpen={isMenuOpen} 
      />
    </nav>
  );
};

// Component for desktop navigation items
const NavigationDesktop: FC<{ items: NavigationItem[] }> = ({ items }) => (
  <div className="hidden md:flex space-x-4">
    {items.map((item) => (
      <Link
        key={item.id}
        href={`/coffee/${item.id}`}
        className="hover:text-brown-300 transition-colors py-2 px-3"
      >
        {item.name}
      </Link>
    ))}
  </div>
);

// Component for mobile menu button
const NavigationMobileButton: FC<{ 
  isOpen: boolean; 
  onClick: () => void 
}> = ({ isOpen, onClick }) => (
  <button
    className="md:hidden p-2"
    onClick={onClick}
    aria-expanded={isOpen}
    aria-label="Toggle menu"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {isOpen ? (
        <path d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
);

// Component for mobile navigation items
const NavigationMobile: FC<{ 
  items: NavigationItem[]; 
  isOpen: boolean 
}> = ({ items, isOpen }) => (
  <div 
    className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
    role="menu"
  >
    {items.map((item) => (
      <Link
        key={item.id}
        href={`/coffee/${item.id}`}
        className="block px-4 py-2 hover:bg-brown-800 transition-colors"
        role="menuitem"
      >
        {item.name}
      </Link>
    ))}
  </div>
);

export default Navigation;