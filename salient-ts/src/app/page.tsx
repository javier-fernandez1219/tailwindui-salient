import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { HowToBuy } from '@/components/HowToBuy'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <div className="h-screen snap-start">
        <Hero />
      </div>

      <div className="h-screen snap-start">
        <HowToBuy />
      </div>

      <div className="h-screen snap-start">
        <CallToAction />
      </div>

      <div className="h-screen snap-start">
        <Testimonials />
      </div>

      <div className="h-screen snap-start">
        <Faqs />
      </div>
    </main>
  )
}
