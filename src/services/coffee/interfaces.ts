import { CategoryInfo, CoffeeCategory, SubCategory, Recipe } from '@/types/coffee'

export interface ICoffeeService {
  getCategoryInfo(category: string): CategoryInfo | null
  getSubCategories(category: CoffeeCategory): SubCategory[]
  getAllCategories(): CategoryInfo[]
  getRecipe(category: string, subcategory: string): Recipe | null
} 