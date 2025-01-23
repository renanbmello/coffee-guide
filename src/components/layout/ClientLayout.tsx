'use client'

import { FC, ReactNode, useState } from 'react'
import { Header } from '@/components/common/Header'
import { Sidebar } from '@/components/common/Sidebar'
import { Footer } from '@/components/common/Footer'

interface ClientLayoutProps {
  children: ReactNode
}

export const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)

  return (
    <div className="flex flex-col min-h-screen">
      <Header onMenuToggle={toggleSidebar} isMenuOpen={isSidebarOpen} />
      <div className="flex-1 relative">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="mt-16 md:ml-64 bg-coffee-50">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
} 