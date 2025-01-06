import Image from 'next/image'
import { Tool } from '@/types/coffee'

interface ToolsSectionProps {
  tools: Tool[]
}

export const ToolsSection = ({ tools }: ToolsSectionProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Ferramentas Necessárias</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div 
            key={tool.id}
            className="bg-white text-coffee-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={tool.imageUrl}
                alt={tool.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-medium mb-2">{tool.name}</h3>
            <p className="text-sm text-coffee-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 