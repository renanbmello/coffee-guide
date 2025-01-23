import Image from 'next/image'
import Link from 'next/link'
import { CoffeeCategory } from '@/types/coffee'

interface SubCategoryCardProps {
  id: string
  name: string
  imageUrl: string
  category: CoffeeCategory
}

export const SubCategoryCard = ({ 
  id, 
  name, 
  imageUrl, 
  category 
}: SubCategoryCardProps) => {
  return (
    <Link 
      href={`/coffee/${category}/${id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-video">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/60 via-coffee-900/30 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-coffee-800">{name}</h3>
      </div>
    </Link>
  )
} 