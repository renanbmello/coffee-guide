import { SubCategoryCard } from '@/components/coffee/SubCategoryCard'
import { CoffeeCategory } from '@/types/coffee'
import { CoffeeService } from '@/services/coffee/CoffeeService'

interface SubCategoryGridProps {
  category: CoffeeCategory
}

const coffeeService = new CoffeeService()

export const SubCategoryGrid = ({ category }: SubCategoryGridProps) => {
  const subCategories = coffeeService.getSubCategories(category)

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subCategories.map((subCategory) => (
          <SubCategoryCard
            key={subCategory.id}
            category={category}
            {...subCategory}
          />
        ))}
      </div>
    </div>
  )
} 