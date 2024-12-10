'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import dexscreenpng from '@/images/logos/dexscreenpng.svg'
import dextoolspng from '@/images/logos/dextoolspng.svg'
import discordpng from '@/images/logos/discordpng.svg'
import telegrampng from '@/images/logos/telegrampng.svg'
import xpng from '@/images/logos/xpng.svg'
import lumitypng from '@/images/logos/lumitypng.svg'
import newtonOnBase from '@/images/avatars/newtononbase.svg'
import paperbg from '@/images/paperbg.svg'



export function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xEB9e49fb4C33D9F6Aefb1B03F9133435E24C0ec6";

  const copyToClipboard = () => {
    console.log('Button clicked!');
    navigator.clipboard.writeText(contractAddress)
      .then(() => {
        console.log('Copy successful!');
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          console.log('Reset copied state');
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };

  // Move logoPositions definition here, before it's used
  const logoPositions = [
    { top: '15%', left: '10%' }, //DEXSCREENER LOGO
    { top: '75%', left: '10%' },  //DEXTOOLS LOGO
    { top: '45%', left: '10%' }, //LUMITYLOGO
    { top: '45%', left: '83%' }, //TG LOGO
    { top: '75%', left: '83%' }, //X LOGO 
    { top: '15%', left: '83%' }, //DISCORD LOGO
  ];

  const [positions, setPositions] = useState(() => 
    logoPositions.map(pos => ({ 
      x: parseFloat(pos.left), 
      y: parseFloat(pos.top) 
    }))
  );
  
  const dragItem = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = (e: React.DragEvent, index: number) => {
    // Create an empty transparent image for drag ghost
    const img = document.createElement('img');
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    e.dataTransfer.setDragImage(img, 0, 0);
    
    dragItem.current = index;
    setIsDragging(true);
    
    // Calculate offset between mouse and element position
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleDrag = (e: React.DragEvent, index: number) => {
    if (dragItem.current !== null && e.clientX !== 0 && e.clientY !== 0) {  // Check for valid coordinates
      e.preventDefault();
      
      // Calculate new position accounting for the initial offset
      const x = Math.min(Math.max(0, ((e.clientX - dragOffset.x) / window.innerWidth) * 100), 90);
      const y = Math.min(Math.max(0, ((e.clientY - dragOffset.y) / window.innerHeight) * 100), 90);
      
      const newPositions = [...positions];
      newPositions[index] = { x, y };
      setPositions(newPositions);
    }
  };

  const handleDragEnd = () => {
    dragItem.current = null;
    setIsDragging(false);
  };

  // Add this after logoPositions array
  const logoData = [
    { src: dexscreenpng, url: 'https://dexscreener.com/base/0x425fa400f863b68d5a85ad26eff6e4c2672d8cf5' },
    { src: dextoolspng, url: 'https://www.dextools.io/app/en/base/pair-explorer/0x425fa400f863b68d5a85ad26eff6e4c2672d8cf5' },
    { src: discordpng, url: 'https://discord.com/invite/BeQvrjG8AE' },
    { src: telegrampng, url: 'https://t.me/NewtonOnBaseTG' },
    { src: xpng, url: 'https://x.com/newbonbase/' },
    { src: lumitypng, url: 'https://donorbox.org/donate-to-lumity' },
  ];

  // Store animation values in a ref so they don't regenerate
  const animationRefs = useRef(logoPositions.map(() => ({
    duration: 15 + Math.random() * 15,
    xOffset: 50 - Math.random() * 100,
    yOffset: 50 - Math.random() * 100,
  })));

  const scrollToHowToBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    const howToBuySection = document.getElementById('features');
    howToBuySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pb-0 pt-20 text-center lg:pt-32 relative bg-blue-600">
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={paperbg}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      
      <div className="absolute inset-0 z-5 overflow-hidden">
        {logoData.map((logo, index) => {
          const animation = animationRefs.current[index];
          
          return (
            <div
              key={index}
              className={`absolute w-36 h-36 cursor-pointer ${isDragging && dragItem.current === index ? 'z-[100]' : 'z-[100]'}`}
              style={{ 
                top: `${positions[index].y}%`,
                left: `${positions[index].x}%`,
                pointerEvents: 'auto',
                zIndex: 100
              }}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDrag={(e) => handleDrag(e, index)}
              onDragEnd={handleDragEnd}
            >
              <a 
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full transform transition-all duration-300 hover:scale-125 blur-sm hover:blur-none hover:opacity-100 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                onClick={(e) => {
                  if (isDragging) {
                    e.preventDefault();
                  }
                  console.log(`Clicked logo ${index} - ${logo.url}`);
                }}
                style={{ 
                  pointerEvents: 'auto',
                  zIndex: 100
                }}
              >
                <Image
                  src={logo.src}
                  alt=""
                  className="w-full h-full object-contain opacity-[0.5] hover:opacity-100 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                  unoptimized
                />
              </a>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center relative z-10 mt-20">
        <button 
          onClick={copyToClipboard}
          className="transform transition-all duration-300 hover:scale-110 bg-transparent border-none focus:outline-none relative"
          style={{ 
            cursor: 'pointer', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image 
            src={newtonOnBase} 
            alt="Newton on Base" 
            className="w-130 h-130 transform transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            width={900}
            height={900}
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard();
            }}
          />
          {copied && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          bg-black/80 text-white px-6 py-3 rounded-lg shadow-lg 
                          animate-fade-in-out z-50 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Contract Address Copied!</span>
              </div>
            </div>
          )}
        </button>
      </div>

      <div className="absolute top-[90%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce flex justify-center items-center">
        <button
          onClick={scrollToHowToBuy}
          className="p-4 rounded-full transition-all duration-300 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
        >
          <svg 
            className="w-8 h-8 text-white"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
