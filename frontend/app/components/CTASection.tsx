'use client'

import Image from 'next/image'

interface CTASectionProps {
  onStartSearch?: () => void
}

export default function CTASection({ onStartSearch }: CTASectionProps) {
  return (
    <section className="relative w-full bg-[#1A2C28] pt-20 px-4 sm:px-8 md:px-16 lg:px-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-3/4 h-auto z-0">
        <Image
          src="/assets/left-pattern.svg"
          alt="Background"
          layout="responsive"
          width={971}
          height={412}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="flex flex-col gap-8 text-center md:text-left items-center md:items-start max-w-lg md:pl-36">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-instrument-serif">
            Stop Guessing,
            <br />
            Start Screening.
            </h2>
          <p className="text-base text-gray-300">
              Get a free sample of a real Pulse company report. See how we break down business models, risk signals, and growth insights — in a format built for fast decision-making.
            </p>
          <button 
            onClick={onStartSearch}
            className="bg-[#C4E538] text-black font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 md:self-end">
          <Image
            src="/assets/report-visual.png"
            alt="Report Visual"
            width={600}
            height={400}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  )
} 