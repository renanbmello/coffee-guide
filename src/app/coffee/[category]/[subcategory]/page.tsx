import { RecipeHeader } from '@/components/recipe/RecipeHeader'
import { RecipeRatio } from '@/components/recipe/RecipeRatio'
import { ToolsSection } from '@/components/recipe/ToolsSection'
import { PreparationSteps } from '@/components/recipe/PreparationSteps'
import { CoffeeService } from '@/services/coffee/CoffeeService'
import { notFound } from 'next/navigation'

interface RecipePageProps {
  params: {
    category: string
    subcategory: string
  }
}

const coffeeService = new CoffeeService()

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = coffeeService.getRecipe(params.category, params.subcategory)
  
  if (!recipe) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 bg-coffee-800 min-h-screen">
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
  )
} 