import { FC } from 'react';
import Link from 'next/link';
import { MenuButton } from '@/components/common/Header/MenuButton';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export const Header: FC<HeaderProps> = ({ onMenuToggle, isMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="text-coffee-800 text-xl font-semibold">
          Seu Guia de Café
        </Link>
        <MenuButton isOpen={isMenuOpen} onClick={onMenuToggle} />
      </div>
    </header>
  );
}; 