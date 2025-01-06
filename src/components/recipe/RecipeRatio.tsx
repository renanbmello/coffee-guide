'use client'
import { useState } from 'react'

interface RecipeRatioProps {
  ratio: number
  defaultDose: number
}

export const RecipeRatio = ({ ratio, defaultDose }: RecipeRatioProps) => {
  const [dose, setDose] = useState(defaultDose)
  const outputWeight = dose * ratio

  return (
    <section className="bg-coffee-50 p-8 rounded-xl">
      <h2 className="text-2xl text-coffee-800 font-semibold mb-6">Proporção</h2>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <label className="font-medium text-coffee-800">Dose de café:</label>
          <input
            type="number"
            value={dose}
            onChange={(e) => setDose(Number(e.target.value))}
            className="w-20 p-2 border rounded text-coffee-800"
            min="1"
          />
          <span className="text-coffee-800" >gramas</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-medium text-coffee-800">Rendimento:</span>
          <span className="text-coffee-800" >{outputWeight.toFixed(1)} gramas</span>
        </div>

        <p className="text-coffee-700">
          Proporção 1:{ratio} - Para cada grama de café, você obterá {ratio} gramas de bebida.
        </p>
      </div>
    </section>
  )
} 