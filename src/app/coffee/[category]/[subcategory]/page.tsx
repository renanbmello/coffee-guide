import { RecipeHeader } from '@/components/recipe/RecipeHeader'
import { RecipeRatio } from '@/components/recipe/RecipeRatio'
import { ToolsSection } from '@/components/recipe/ToolsSection'
import { PreparationSteps } from '@/components/recipe/PreparationSteps'
import { CoffeeService } from '@/services/coffee/CoffeeService'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{
    category: string
    subcategory: string
  }>
}

const coffeeService = new CoffeeService()

export default async function RecipePage({
  params,
}: PageProps) {
  const { category, subcategory } = await params
  const recipe = await coffeeService.getRecipe(category, subcategory)
  
  if (!recipe) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-coffee-800/90 p-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <RecipeHeader 
          title={recipe.name}
          description={recipe.description}
          imageUrl={recipe.imageUrl}
        />

        <RecipeRatio 
          ratio={recipe.ratio}
          defaultDose={recipe.defaultDose}
        />

        <ToolsSection tools={recipe.tools} />

        <PreparationSteps steps={recipe.steps} />
      </div>
    </div>
  )
} 