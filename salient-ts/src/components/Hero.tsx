'use client'

import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import dexscreenpng from '@/images/logos/dexscreenpng.svg'
import dextoolspng from '@/images/logos/dextoolspng.svg'
import discordpng from '@/images/logos/discordpng.svg'
import telegrampng from '@/images/logos/telegrampng.svg'
import xpng from '@/images/logos/xpng.svg'
import lumitypng from '@/images/logos/lumitypng.svg'

export function Hero() {
  // Create an array of logo positions
  const logoPositions = [
    { top: '10%', left: '5%' },
    { top: '60%', left: '15%' },
    { top: '20%', left: '85%' },
    { top: '75%', left: '75%' },
    { top: '35%', left: '50%' },
    { top: '55%', left: '35%' },
  ];

  return (
    <Container className="h-screen flex flex-col justify-center pb-24 pt-24 text-center lg:pt-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[dexscreenpng, dextoolspng, discordpng, telegrampng, xpng, lumitypng].map((logo, index) => (
          <div 
            key={index} 
            className="absolute w-24 h-24 cursor-pointer transition-all duration-300"
            style={{ 
              top: logoPositions[index].top, 
              left: logoPositions[index].left,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          >
            <Image
              src={logo}
              alt=""
              className="w-full h-full object-contain opacity-[0.5] blur-sm hover:blur-none transition-all duration-300"
              unoptimized
            />
          </div>
        ))}
      </div>

      <h1 className="mx-auto max-w-5xl font-display text-6xl font-medium tracking-tight text-slate-900 sm:text-8xl">
        Accounting{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">made simple</span>
        </span>{' '}
        for small businesses.
      </h1>
      <p className="mx-auto mt-8 max-w-3xl text-xl tracking-tight text-slate-700">
        Most bookkeeping software is accurate, but hard to use. We make the
        opposite trade-off, and hope you don't get audited.
      </p>
      <div className="mt-14 flex justify-center gap-x-8">
        <Button href="/register">Get 6 months free</Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button>
      </div>
    </Container>
  )
}
