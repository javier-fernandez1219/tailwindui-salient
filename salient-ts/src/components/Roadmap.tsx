'use client'
import { useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/bg4.png'
import roadmapSvg from '@/images/roadmap.svg'
import oneSupplySvg from '@/images/textfiles/1bsupply.svg'
import contractRenouncedSvg from '@/images/textfiles/contractrenounced.svg'
import liquidityLockedSvg from '@/images/textfiles/liquiditylocked.svg'
import tokenomicsSvg from '@/images/textfiles/tokenomics.svg'
import newbSkate from '@/images/newbskate.png'

export function Roadmap() {
  const [openPhase, setOpenPhase] = useState<number>(1)

  const phases = [
    {
      number: 1,
      title: "Launch & Community Building",
      timing: "Initial Launch Phase",
      content: [
        "Fair launch on WAGMI.Best",
        "Setup socials (Website V1, Twitter, Telegram, Discord, Reddit)",
        "Run first marketing campaign (Dex Ads/Banner)",
        "Airdrop $NEWB to Top Base communities (Alienbase, Brett, Toshi, Keycat, Moonwell)"
      ]
    },
    {
      number: 2,
      title: "Growth & Recognition",
      timing: "Marketing & Visibility Phase",
      status: "current",
      content: [
        "Hire full time artist",
        "List on Coin Gecko, Moontok, Coin Mooner",
        "Update token information and rebrand logo on Basescan/CB wallet",
        "Donate to STEM Education Charities at 1M, 2M, 5M 10M Market Cap",
        "Hire a full time Animator to make animations"
      ]
    },
    {
      number: 3,
      title: "Expansion & Development",
      timing: "Scaling & Innovation Phase",
      content: [
        "Launch second marketing campaign (Youtubers/KOLS/Partnerships)",
        "CMC Listing at 10M Market Cap",
        "NEWB AI Virtual Protocol Agent at 25M Market Cap",
        "CEX Listings at 50M Market Cap",
        "Establish an in-house 501c3 foundation as a grant making verhicle for STEM non-profits at 100M Market Cap",
        "Establish an in-house scholarship fund that will partner with out 501c3 to administer yearly scholarships for STEM students at 200M Market Cap",
      ]
    }
  ]

  return (
    <section className="relative overflow-hidden bg-blue-600 py-8 h-screen">
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
        
        {/* Newb Skater */}
        <Image 
          src={newbSkate}
          alt="Newb Skater"
          className={`absolute top-[60%] transform -translate-y-1/2 z-20 scale-x-[-1] transition-all duration-500
            ${openPhase === 1 ? 'left-[0%]' : ''}
            ${openPhase === 2 ? 'left-[40%]' : ''}
            ${openPhase === 3 ? 'left-[80%]' : ''}
          `}
          width={200}
          height={100}
        />
        
        {/* Timeline Road */}
        <div className="relative mt-60">
          {/* The Road Line */}
          <div className="absolute w-full h-1 bg-white top-1/2 transform -translate-y-1/2" />
          
          {/* Phase Dots and Content */}
          <div className="relative flex justify-between items-center">
            {phases.map((phase) => (
              <div key={phase.number} className="relative">
                {/* Dot/Node */}
                <button
                  onClick={() => setOpenPhase(phase.number)}
                  className={`w-8 h-8 rounded-full ${
                    openPhase === phase.number
                      ? 'bg-blue-300 ring-4 ring-white'
                      : 'bg-white'
                  } transition-all duration-300 relative z-10`}
                >
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white font-bold">
                    {phase.number}
                  </span>
                </button>

                {/* Phase Content - Shows when active */}
                {openPhase === phase.number && (
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-lg p-6 w-[600px] shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {phase.title}
                      {phase.status === 'current' && (
                        <span className="ml-2 text-sm bg-blue-300 text-blue-800 px-2 py-1 rounded">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-white/80 mb-4">{phase.timing}</p>
                    <ul className={`${phase.number === 1 || phase.number === 2 ? 'text-green-300' : phase.number === 3 ? 'text-blue-300' : 'text-white'} space-y-2`}>
                      {phase.content.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">
                            {item === "Hire a full time Animator to make animations" || 
                             item === "Donate to STEM Education Charities at 1M, 2M, 5M 10M Market Cap" ||
                             item === "Launch second marketing campaign (Youtubers/KOLS/Partnerships)" ? '⏳' : 
                             (phase.number === 1 || phase.number === 2 ? '✅' : 
                              phase.number === 3 ? '🎯' : '•')}
                          </span>
                          {item === "Donate to STEM Education Charities at 1M, 2M, 5M 10M Market Cap" ? (
                            <span>
                              Donate to STEM Education Charities at 1M, 2M <span className="text-yellow-300"> 5M 10M</span> Market Cap
                            </span>
                          ) : (
                            <span className={item === "Hire a full time Animator to make animations" ||
                                           item === "Launch second marketing campaign (Youtubers/KOLS/Partnerships)" ? 'text-yellow-300' : ''}>
                              {item}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
