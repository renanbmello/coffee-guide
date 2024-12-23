import Image from 'next/image'
import { HeroImage } from './HeroImage'
import { CallToAction } from './CallToAction'

export const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Descubra o Mundo do Café
        </h1>
        
        <p className="text-xl md:text-2xl text-coffee-100 leading-relaxed">
          Aqui compartilho meus conhecimentos sobre café para ajudar todos a tomar uma bebida mais gostosa.
        </p>

        <CallToAction />
      </div>

      <HeroImage />
    </div>
  )
} 