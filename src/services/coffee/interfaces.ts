import { CategoryInfo, CoffeeCategory, SubCategory } from '@/types/coffee'

export interface ICoffeeService {
  getCategoryInfo(category: string): CategoryInfo | null
  getSubCategories(category: CoffeeCategory): SubCategory[]
  getAllCategories(): CategoryInfo[]
} 