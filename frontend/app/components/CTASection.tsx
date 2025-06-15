'use client'

import Image from 'next/image'

const Subtract = () => (
    <div
        className="absolute w-3/5 h-auto left-[-4.5px] top-[-3px] rotate-180"
    >
        <svg
            className="block w-full h-auto"
            fill="none"
            viewBox="0 0 972 414"
        >
            <path
            d="M971.5 413H1V412H970.5V1H971.5V413ZM963.5 405.5H1V404.5H962.5V1H963.5V405.5ZM955.5 398H1V397H954.5V1H955.5V398ZM947.5 390.5H1V389.5H946.5V1H947.5V390.5ZM939.5 383H1V382H938.5V1H939.5V383ZM931.5 375.5H1V374.5H930.5V1H931.5V375.5ZM923.5 368H1V367H922.5V1H923.5V368ZM915.5 360.5H1V359.5H914.5V1H915.5V360.5ZM907.5 353H1V352H906.5V1H907.5V353ZM899.5 345.5H1V344.5H898.5V1H899.5V345.5ZM891.5 338H1V337H890.5V1H891.5V338ZM883.5 330.5H1V329.5H882.5V1H883.5V330.5ZM875.5 323H1V322H874.5V1H875.5V323ZM867.5 315.5H1V314.5H866.5V1H867.5V315.5ZM859.5 308H1V307H858.5V1H859.5V308ZM851.5 300.5H1V299.5H850.5V1H851.5V300.5ZM843.5 293H1V292H842.5V1H843.5V293ZM835.5 285.5H1V284.5H834.5V1H835.5V285.5ZM827.5 278H1V277H826.5V1H827.5V278Z"
            stroke="url(#paint0_linear_384_51102)"
            strokeDasharray="12 12"
            />
            <defs>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_384_51102"
                x1="486.25"
                x2="406.995"
                y1="689.379"
                y2="293.235"
            >
                <stop offset="0.08" stopColor="#C4E538" />
                <stop offset="1" stopColor="#192C28" />
            </linearGradient>
            </defs>
        </svg>
    </div>
)

interface CTASectionProps {
  onStartSearch?: () => void
}

export default function CTASection({ onStartSearch }: CTASectionProps) {
  return (
    <section className="relative w-full bg-[#192C28] flex items-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-20 overflow-hidden">
        <Subtract />
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
              Get a free sample of a real Omniscan company report. See how we break down business models, risk signals, and growth insights — in a format built for fast decision-making.
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