import { FC } from 'react';
import { SidebarNav } from './SidebarNav';

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out z-40
        md:translate-x-0 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <SidebarNav />
    </aside>
  );
}; 