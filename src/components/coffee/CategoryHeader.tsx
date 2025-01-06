import Image from 'next/image'

interface CategoryHeaderProps {
  title: string
  description: string
  imageUrl: string
}

export const CategoryHeader = ({ title, description, imageUrl }: CategoryHeaderProps) => {
  return (
    <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 text-coffee-50">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg text-coffee-100">{description}</p>
      </div>
    </div>
  )
} 