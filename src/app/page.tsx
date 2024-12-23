import { HeroSection } from '@/components/home/HeroSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-coffee-800 to-coffee-600">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <HeroSection />
      </div>
    </main>
  )
}