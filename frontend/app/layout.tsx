import React from 'react'
import { Instrument_Serif, Space_Grotesk } from 'next/font/google'
import './globals.css'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

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
  description: 'Access 2x to 6x more companies than traditional databases — based on the latest data across all countries. Experience unmatched depth and accuracy in company intelligence, powered by expert curation and advanced AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${instrument.variable} ${grotesk.variable}`}>
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
} 