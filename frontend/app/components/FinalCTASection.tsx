import React from 'react';
import Image from 'next/image';

interface FinalCTASectionProps {
  onStartSearch: () => void;
}

export default function FinalCTASection({ onStartSearch }: FinalCTASectionProps) {
  
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

  return (
    <div className="bg-[#192c28] relative w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center relative w-full px-4 sm:px-8 md:px-16 py-24 md:py-32">
        
        {/* Illustration */}
        <DecorativePattern />

        {/* Content */}
        <div className="w-full flex flex-col gap-6 md:gap-8 items-center text-center z-10">
          <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl lg:max-w-4xl">
            Let's help you make a <span className="italic text-[#c4e538] underline">Smarter Move</span>
          </h2>
          <p className="font-space-grotesk text-base text-[#e6e6e6] max-w-md">
            Start with a simple brief. We'll deliver a report that helps you decide with confidence.
          </p>
          <button
            onClick={onStartSearch}
            className="bg-[#c4e538] cursor-pointer h-12 relative rounded px-6 flex items-center justify-center gap-2 group transition-all hover:gap-3"
          >
            <span className="font-space-grotesk font-medium text-[#192c28] text-sm">
              Start your Search
            </span>
            <svg className="size-4" fill="none" viewBox="0 0 16 16">
              <path d="M2.00016 8.66682C1.63197 8.66682 1.33349 8.36835 1.33349 8.00016C1.33349 7.63197 1.63197 7.33349 2.00016 7.33349H12.3908L8.86214 3.80485C8.60179 3.5445 8.60179 3.12249 8.86214 2.86214C9.12249 2.60179 9.54449 2.60179 9.80484 2.86214L14.4715 7.5288C14.7319 7.78915 14.7319 8.21116 14.4715 8.47151L9.80484 13.1382L9.75406 13.1838C9.49221 13.3973 9.10621 13.3823 8.86214 13.1382C8.61806 12.8941 8.603 12.5081 8.81656 12.2463L8.86214 12.1955L12.3908 8.66682H2.00016Z" fill="#192C28" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
} 