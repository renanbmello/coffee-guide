import Image from 'next/image'

interface CategoryHeaderProps {
  title: string
  description: string
  imageUrl: string
}

export const CategoryHeader = ({ title, description, imageUrl }: CategoryHeaderProps) => {
  return (
    <div className="relative h-[300px] rounded-xl overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg text-gray-200">{description}</p>
      </div>
    </div>
  )
} 