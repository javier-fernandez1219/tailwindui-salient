import Image from 'next/image'
import lumityDono from '@/images/screenshots/LumityDonation.png'
import { Container } from '@/components/Container'



export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Supporting STEM Education
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            NEWB is proud to support Lumity! A STEM nonprofit building a future where STEM education 
            is more equitable, accessible, and uplifting for Chicago's under-resourced students.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="max-w-2xl">
              <Image
                src={lumityDono}
                alt="Lumity Donation Screenshot"
                className="rounded-lg"
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
                Donate to Lumity
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
