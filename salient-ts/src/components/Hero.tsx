'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import dexscreenpng from '@/images/logos/dexscreenpng.svg'
import dextoolspng from '@/images/logos/dextoolspng.svg'
import discordpng from '@/images/logos/discordpng.svg'
import telegrampng from '@/images/logos/telegrampng.svg'
import xpng from '@/images/logos/xpng.svg'
import lumitypng from '@/images/logos/lumitypng.svg'
import backgroundAuth from '@/images/background-auth.jpg'

export function Hero() {
  // Move logoPositions definition here, before it's used
  const logoPositions = [
    { top: '20%', left: '5%' }, //DEXSCREENER LOGO
    { top: '69%', left: '6%' },  //DEXTOOLS LOGO
    { top: '20%', left: '75%' }, //DISCORD LOGO
    { top: '45%', left: '75%' }, //TG LOGO
    { top: '75%', left: '85%' }, //X LOGO 
    { top: '45%', left: '15%' }, //LUMITYLOGO
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

  return (
    <Container className="min-h-screen pb-16 pt-20 text-center lg:pt-32 relative">
      <div 
        className="fixed inset-0 -z-30"
        style={{
          backgroundImage: `url(${backgroundAuth.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      />
      
      <div className="fixed inset-0 -z-20 bg-white/10" />

      <div className="absolute inset-0 z-10 overflow-hidden">
        {logoData.map((logo, index) => {
          const animation = animationRefs.current[index];
          
          return (
            <div
              key={index}
              className={`absolute w-36 h-36 cursor-move ${isDragging && dragItem.current === index ? 'z-50' : ''}`}
              style={{ 
                top: `${positions[index].y}%`,
                left: `${positions[index].x}%`,
                animation: isDragging ? 'none' : `float-${index} ${animation.duration}s infinite ease-in-out`,
              }}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDrag={(e) => handleDrag(e, index)}
              onDragEnd={handleDragEnd}
            >
              <style jsx>{`
                @keyframes float-${index} {
                  0%, 100% { transform: translate(0, 0); }
                  50% { transform: translate(${animation.xOffset}px, ${animation.yOffset}px); }
                }
              `}</style>
              <a 
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full transform transition-all duration-300 hover:scale-125 blur-sm hover:blur-none"
                onClick={(e) => isDragging && e.preventDefault()}
              >
                <Image
                  src={logo.src}
                  alt=""
                  className="w-full h-full object-contain opacity-[0.5]"
                  unoptimized
                />
              </a>
            </div>
          );
        })}
      </div>

      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        BUY{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">$NEWB</span>
        </span>{' '}
        NOW!
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Defying Gravity.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Get Rugged</Button>
      </div>
    </Container>
  )
}
