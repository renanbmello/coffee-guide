import { CategoryInfo, CoffeeCategory, SubCategory, Recipe } from '@/types/coffee'
import { ICoffeeService } from './interfaces'
import { categoryData } from './data'

export class CoffeeService implements ICoffeeService {
  getCategoryInfo(category: string): CategoryInfo | null {
    return categoryData.categories[category as CoffeeCategory] || null
  }

  getSubCategories(category: CoffeeCategory): SubCategory[] {
    return categoryData.subCategories[category] || []
  }

  getAllCategories(): CategoryInfo[] {
    return Object.values(categoryData.categories)
  }

  getRecipe(category: string, subcategory: string): Recipe | null {
    return categoryData.recipes[category]?.[subcategory] || null
  }
} 