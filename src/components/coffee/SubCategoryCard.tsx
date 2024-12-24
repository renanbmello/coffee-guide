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
      className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-coffee-800">{name}</h3>
      </div>
    </Link>
  )
} 