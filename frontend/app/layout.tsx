import React from 'react'
import { Instrument_Serif, Space_Grotesk } from 'next/font/google'
import './globals.css'

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'Pulse - Unlock Hidden Opportunities, Globally',
  description: 'Access 2.7x more companies than traditional static databases—including opaque markets—through detailed, AI-powered company profiles curated by an expert-led team.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${instrument.variable} ${grotesk.variable}`}>{children}</body>
    </html>
  )
} 