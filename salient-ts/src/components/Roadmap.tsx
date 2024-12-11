'use client'
import { useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/paperbg.svg'
import roadmapSvg from '@/images/roadmap.svg'
import oneSupplySvg from '@/images/textfiles/1bsupply.svg'
import contractRenouncedSvg from '@/images/textfiles/contractrenounced.svg'
import liquidityLockedSvg from '@/images/textfiles/liquiditylocked.svg'
import tokenomicsSvg from '@/images/textfiles/tokenomics.svg'

export function Roadmap() {
  const [openPhase, setOpenPhase] = useState<number>(1)

  const togglePhase = (phaseNumber: number) => {
    setOpenPhase(openPhase === phaseNumber ? 0 : phaseNumber)
  }

  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-8 h-screen"
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
        <Image 
          src={roadmapSvg}
          alt="Roadmap"
          className="ml-40 mb-8"
          width={800}
          height={200}
        />
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">            
              <button 
                onClick={() => togglePhase(1)} 
                className="flex items-center w-full cursor-pointer"
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <div>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">
                    Phase 1: Launch & Community Building 
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Current</span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-white dark:text-white">Initial Launch Phase</time>
                </div>
              </button>
              {openPhase === 1 && (
                <p className="mb-4 text-base font-normal text-white mt-2">
                  • Fair launch on WAGMI.Best<br/>
                  • Setup socials (Website V1, Twitter, Telegram, Discord, Reddit)<br/>
                  • Run first marketing campaign (Dex Ads/Banner)<br/>
                  • Airdrop $NEWB to Top Base communities (Alienbase, Brett, Toshi, Keycat, Moonwell)
                </p>
              )}
          </li>
          <li className="mb-10 ms-6">
              <button 
                onClick={() => togglePhase(2)}
                className="flex items-center w-full cursor-pointer"
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Phase 2: Growth & Recognition</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">Marketing & Visibility Phase</time>
                </div>
              </button>
              {openPhase === 2 && (
                <p className="text-base font-normal text-white dark:text-white mt-2">
                  • Hire full time artist to make memes<br/>
                  • List on Coin Gecko, Moontok, Coin mooner<br/>
                  • Update token information and rebrand logo on Basescan/CB wallet
                </p>
              )}
          </li>
          <li className="ms-6">
              <button 
                onClick={() => togglePhase(3)}
                className="flex items-center w-full cursor-pointer"
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Phase 3: Expansion & Development</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">Scaling & Innovation Phase</time>
                </div>
              </button>
              {openPhase === 3 && (
                <p className="text-base font-normal text-white dark:text-white mt-2">
                  • Begin Donating to STEM Education Charities at 1, 2, 5, 10 Million MC<br/>
                  • Hire a full time Animator to make animations<br/>
                  • Launch second marketing campaign (Youtubers/KOLS/Partnerships)<br/>
                  • CMC Listing at 40 million MC<br/>
                  • CEX Listings<br/>
                  • NEWB AI Virtual Protocol Agent<br/>
                  • RUG
                </p>
              )}
          </li>
        </ol>
      </Container>
    </section>
  )
}
