import Image from 'next/image'

interface RecipeHeaderProps {
  title: string
  description: string
  imageUrl: string
}

export const RecipeHeader = ({ title, description, imageUrl }: RecipeHeaderProps) => {
  return (
    <div className="relative h-[400px] rounded-2xl overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  )
} 