import { Roadmap } from '@/components/Roadmap'
import { NewbLore } from '@/components/NewbLore'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { HowToBuy } from '@/components/HowToBuy'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Donation } from '@/components/Donation'

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <div className="h-screen snap-start">
        <Hero />
      </div>

      <div className="h-screen snap-start">
        <HowToBuy />
      </div>

      {/* Commented out Roadmap for now
      <div className="h-screen snap-start">
        <Roadmap />
      </div>
      */}

      <div className="h-screen snap-start">
        <Donation />
      </div>

      <div className="h-screen snap-start">
        <NewbLore />
      </div>
    </main>
  )
}
