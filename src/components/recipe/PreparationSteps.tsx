interface Step {
  id: number
  instruction: string
  imageUrl?: string
  tip?: string
}

interface PreparationStepsProps {
  steps: Step[]
}

export const PreparationSteps = ({ steps }: PreparationStepsProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Modo de Preparo</h2>
      
      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.id} className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold text-coffee-800">{step.id}</span>
            </div>
            
            <div className="flex-1">
              <p className="text-lg whitespace-pre-line mb-4">{step.instruction}</p>
              {step.tip && (
                <p className="text-sm text-coffee-600 bg-coffee-50 p-4 rounded-lg whitespace-pre-line w-full">
                  💡 Dica: {step.tip}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 