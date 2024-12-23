import { FC } from 'react';
import Link from 'next/link';
import { CoffeeCategory } from '@/types/coffee';

interface MenuItem {
  category: CoffeeCategory;
  name: string;
  subItems?: { id: string; name: string }[];
}

const menuItems: MenuItem[] = [
  {
    category: 'espresso',
    name: 'Espresso',
    subItems: [
      { id: 'traditional', name: 'Tradicional' },
      { id: 'ristretto', name: 'Ristretto' },
      { id: 'lungo', name: 'Lungo' },
    ],
  },
  {
    category: 'pour over',
    name: 'Café Coado',
    subItems: [
      { id: 'hario-v60', name: 'Hario V60' },
      { id: 'chemex', name: 'Chemex' },
      { id: 'kalita', name: 'Kalita Wave' },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out z-40
        md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.category} className="space-y-1">
              <Link
                href={`/coffee/${item.category}`}
                className="block text-coffee-800 hover:text-coffee-600 font-medium py-2"
              >
                {item.name}
              </Link>
              {item.subItems && (
                <ul className="pl-4 space-y-1">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={`/coffee/${item.category}/${subItem.id}`}
                        className="block text-coffee-600 hover:text-coffee-400 py-1 text-sm"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}; 