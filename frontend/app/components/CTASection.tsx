'use client'

import Image from 'next/image'

const DecorativePattern = () => (
    <div className="absolute top-0 left-0 w-[70vw] h-auto z-0">
        <Image
            src="/assets/left-pattern.svg"
            alt="Decorative pattern"
            layout="responsive"
            width={970.5}
            height={412}
        />
    </div>
);

interface CTASectionProps {
  onStartSearch?: () => void
}

export default function CTASection({ onStartSearch }: CTASectionProps) {
  return (
    <section className="relative w-full bg-[#192C28] flex items-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-20 overflow-hidden">
        <DecorativePattern />
        {/* Background blur */}
        <div 
            className="absolute w-[1248px] h-[952px] bg-[#C4E538] opacity-30 blur-[400px]"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        />

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16 w-full z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-8 md:gap-10 items-center lg:items-start w-full lg:w-auto max-w-xl text-center lg:text-left">
          {/* Text Content */}
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-white font-instrument-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight">
              Stop Guessing.<br />Start Screening.
            </h2>
            <p className="text-[#E6E6E6] font-space-grotesk text-base font-normal leading-relaxed">
              Get a free sample of a real Pulse company report. See how we break down business models, risk signals, and growth insights — in a format built for fast decision-making.
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={onStartSearch}
            className="flex items-center gap-2 h-12 hover:opacity-80 transition-opacity"
          >
            <span className="text-[#C4E538] font-space-grotesk text-sm font-bold">
              Start your Search
            </span>
            <div className="w-4 h-4 flex items-center justify-center">
              <Image
                src="/assets/cta-arrow-icon.svg"
                alt="Arrow"
                width={13.33}
                height={10.67}
              />
            </div>
          </button>
        </div>

        {/* Right Mockup */}
        <div className="relative w-full max-w-sm h-80 lg:w-[450px] lg:h-[400px] flex-shrink-0 bg-[#21413C] rounded-lg">
          <div className="absolute w-full h-full flex items-center justify-center">
              <div
                className="absolute bg-[#e1f0df] h-[90%] w-[70%] opacity-80 rounded-lg shadow-lg"
                style={{ transform: 'rotate(-7.92deg)' }}
              />
              <div
                className="absolute bg-[#e1f0df] h-[90%] w-[70%] rounded-lg shadow-lg"
                style={{ transform: 'rotate(7.07deg)' }}
              />
          </div>
        </div>
      </div>
    </section>
  )
} 