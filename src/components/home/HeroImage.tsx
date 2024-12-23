import Image from 'next/image'
import { FloatingCard } from './FloatingCard'

export const HeroImage = () => {
  return (
    <div className="relative h-[400px] md:h-[600px]">
      <Image
        src="/images/hero-coffee.png"
        alt="Xícara de café com grãos de café ao redor"
        fill
        className="object-cover rounded-lg shadow-2xl"
        priority
      />
      
      <FloatingCard />
    </div>
  )
} 