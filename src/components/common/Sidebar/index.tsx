import { FC } from 'react';
import { SidebarNav } from './SidebarNav';

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`
        fixed top-16 left-0 bottom-0 w-64 bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out z-20
        md:absolute md:translate-x-0 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="h-full overflow-y-auto">
        <SidebarNav />
      </div>
    </aside>
  );
}; 