import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s - NEWB',
    default: 'Newton On Base',
  },
  description:
    'NEWB is the memecoin inspired by the brilliance of Isaac Newton and his groundbreaking laws of motion. Motivated to give back and help fund STEM Education!',
  openGraph: {
    title: 'NEWB',
    description: 'NEWB, the memecoin inspired by the brilliance of Isaac Newton and his groundbreaking laws of motion. Motivated to give back and help fund STEM Education!',
    images: [{
      url: '/fonts/newtononbasemetadata.png',
      width: 1200,
      height: 630,
      alt: 'NEWB'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEWB',
    description: 'NEWB, the memecoin inspired by the brilliance of Isaac Newton and his groundbreaking laws of motion. Motivated to give back and help fund STEM Education!',
    images: ['/fonts/newtononbasemetadata.png'],
  }
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend', 
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-[#0f172a] antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
