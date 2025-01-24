import { CategoryHeader } from '@/components/coffee/CategoryHeader'
import { SubCategoryGrid } from '@/components/coffee/SubCategoryGrid'
import { CoffeeService } from '@/services/coffee/CoffeeService'
import { CoffeeCategory } from '@/types/coffee'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{
    category: string
  }>
}

const coffeeService = new CoffeeService()

export default async function CategoryPage({
  params,
}: PageProps) {
  const { category } = await params
  const categoryInfo = coffeeService.getCategoryInfo(category)

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
      <SubCategoryGrid category={category as CoffeeCategory} />
    </div>
  )
} 