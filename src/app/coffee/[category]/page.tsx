import { CategoryHeader } from '@/components/coffee/CategoryHeader'
import { SubCategoryGrid } from '@/components/coffee/SubCategoryGrid'
import { CoffeeCategory } from '@/types/coffee'
import { notFound } from 'next/navigation'
import { CoffeeService } from '@/services/coffee/CoffeeService'

interface CategoryPageProps {
  params: {
    category: string
  }
}

const coffeeService = new CoffeeService()

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryInfo = coffeeService.getCategoryInfo(params.category as CoffeeCategory)
  
  if (!categoryInfo) {
    notFound()
  }

  return (
    <div className="p-6 space-y-8">
      <CategoryHeader 
        title={categoryInfo.name}
        description={categoryInfo.description}
        imageUrl={categoryInfo.imageUrl}
      />
      <SubCategoryGrid category={params.category as CoffeeCategory} />
    </div>
  )
} 