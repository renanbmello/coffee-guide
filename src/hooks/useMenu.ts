import { usePathname } from 'next/navigation'
import { ICoffeeService } from '@/services/coffee/interfaces'
import { CoffeeService } from '@/services/coffee/CoffeeService'

const coffeeService: ICoffeeService = new CoffeeService()

export const useMenu = () => {
  const pathname = usePathname()

  const isActiveLink = (href: string) => pathname === href
  const isActiveCategory = (category: string) => pathname.startsWith(`/coffee/${category}`)
  const categories = coffeeService.getAllCategories()

  return {
    categories,
    isActiveLink,
    isActiveCategory,
    getSubCategories: coffeeService.getSubCategories
  }
} 