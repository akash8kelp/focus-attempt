import React from 'react';

interface FinalCTASectionProps {
  onStartSearch: () => void;
}

export default function FinalCTASection({ onStartSearch }: FinalCTASectionProps) {
  
  const Illustration = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute flex h-[412px] items-center justify-center left-[-150px] sm:left-[-100px] md:left-0 top-0 w-[970.5px] transform -rotate-180 opacity-50 md:opacity-100">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 972 414">
            <path
              d="M971.5 413H1V412H970.5V1H971.5V413ZM963.5 405.5H1V404.5H962.5V1H963.5V405.5ZM955.5 398H1V397H954.5V1H955.5V398ZM947.5 390.5H1V389.5H946.5V1H947.5V390.5ZM939.5 383H1V382H938.5V1H939.5V383ZM931.5 375.5H1V374.5H930.5V1H931.5V375.5ZM923.5 368H1V367H922.5V1H923.5V368ZM915.5 360.5H1V359.5H914.5V1H915.5V360.5ZM907.5 353H1V352H906.5V1H907.5V353ZM899.5 345.5H1V344.5H898.5V1H899.5V345.5ZM891.5 338H1V337H890.5V1H891.5V338ZM883.5 330.5H1V329.5H882.5V1H883.5V330.5ZM875.5 323H1V322H874.5V1H875.5V323ZM867.5 315.5H1V314.5H866.5V1H867.5V315.5ZM859.5 308H1V307H858.5V1H859.5V308ZM851.5 300.5H1V299.5H850.5V1H851.5V300.5ZM843.5 293H1V292H842.5V1H843.5V293ZM835.5 285.5H1V284.5H834.5V1H835.5V285.5ZM827.5 278H1V277H826.5V1H827.5V278Z"
              stroke="url(#paint0_linear_384_51102)"
              strokeDasharray="12 12"
            />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_384_51102" x1="486.25" x2="406.995" y1="689.379" y2="293.235">
                <stop offset="0.08" stopColor="#C4E538" />
                <stop offset="1" stopColor="#192C28" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-[500px] h-[500px] opacity-20 blur-[200px] bg-[#C4E538] rounded-full" />
    </div>
  );

  return (
    <div className="bg-[#192c28] relative w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center relative w-full px-4 sm:px-8 md:px-16 py-24 md:py-32">
        
        {/* Illustration */}
        <Illustration />

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