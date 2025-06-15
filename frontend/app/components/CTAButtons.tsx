import React from 'react'

interface CTAButtonsProps {
  onStartSearch?: () => void
}

export default function CTAButtons({ onStartSearch }: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {/* Primary CTA Button */}
      <button
        onClick={onStartSearch}
        className="relative group flex items-center justify-center w-full sm:w-auto h-12 px-6 bg-[#c4e538] rounded transition-all duration-300
                   shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]
                   hover:shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05),inset_0px_0px_0px_2px_#192c28]
                   active:bg-[#b0d22a]"
      >
        <span className="font-space-grotesk text-base font-medium text-[#192c28] mr-2">
          Start your Search
        </span>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="text-[#192c28] transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8H13M10 5L13 8L10 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Secondary CTA Button */}
      <button className="flex items-center justify-center w-full sm:w-auto h-12 px-6 py-2 bg-white bg-opacity-10 rounded text-white
                         hover:bg-opacity-20 active:bg-opacity-25 transition-all duration-300">
        <span className="font-space-grotesk text-base font-medium">
          Download Sample Report
        </span>
      </button>
    </div>
  )
} 