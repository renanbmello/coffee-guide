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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryInfo = await coffeeService.getCategoryInfo(params.category)
  
  if (!categoryInfo) {
    notFound()
  }

  return (
    <div className="p-6 space-y-8 bg-coffee-100 min-h-screen">
      <CategoryHeader 
        title={categoryInfo.name}
        description={categoryInfo.description}
        imageUrl={categoryInfo.imageUrl}
      />
      <SubCategoryGrid category={params.category as CoffeeCategory} />
    </div>
  )
} 