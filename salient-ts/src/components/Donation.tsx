import Image from 'next/image'
import lumityDono from '@/images/screenshots/LumityDonation.png'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/textfiles/bg2.png'
import newbAlienPng from '@/images/textfiles/newbalien.png'

export function Donation() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="relative overflow-hidden bg-blue-600 py-8 h-screen font-['Chenile_Deluxe']"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-chenile text-3xl tracking-tight text-white sm:text-6xl">
            Supporting STEM Education
          </h2>
          <p className="mt-4 text-3xl text-white">
            NEWB is proud to support Lumity! A STEM nonprofit building a future where STEM education 
            is more equitable, accessible, and uplifting for Chicago's under-resourced students.
          </p>
        </div>

        <div className="absolute left-1/2 top-1/3 -translate-x-1/2">
          <Image 
            src={newbAlienPng}
            alt="Newb Alien"
            width={400}
            height={400}
          />
        </div>

        <div className="mt-80 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="max-w-4xl">
              <Image
                src={lumityDono}
                alt="Lumity Donation Screenshot"
                className="rounded-lg"
                width={1400}
                height={600}
                priority
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <a
                href="https://donorbox.org/donate-to-lumity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Donate
              </a>
              <p className="text-sm text-slate-500">
                Join us in supporting STEM education
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
