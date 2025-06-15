"use client";
import React, { useState } from 'react';

const testimonials = [
  {
    quote: "Pulse gave us clarity in 3 days that would've taken weeks internally. Their shortlist was so well-matched, we moved straight to outreach without second-guessing.",
    author: "Head of M&A, Global Healthcare Company",
  },
  {
    quote: "The insights from Pulse were instrumental in our decision-making process. The speed and accuracy of their service are unmatched.",
    author: "VP of Strategy, Tech Unicorn",
  },
  {
    quote: "We were impressed by the depth of analysis and the quality of candidates presented. Pulse is now a standard part of our diligence toolkit.",
    author: "Partner, Private Equity Firm",
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-[#192c28] relative size-full py-20" id="node-384_8646">
      <div className="relative size-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              What Our Clients Say
            </h2>
            <p className="font-space-grotesk text-base text-[#e6e6e6] mt-4 max-w-md mx-auto lg:mx-0">
              Speed, clarity, and accuracy — hear how Pulse changes the way high-stakes teams approach discovery and diligence.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="text-center lg:text-left">
                <p className="font-space-grotesk font-medium text-xl sm:text-2xl text-white leading-snug">
                  "{testimonials[currentIndex].quote}"
                </p>
                <p className="font-space-grotesk text-lg text-[#c4e538] mt-6">
                  {testimonials[currentIndex].author}
                </p>
              </div>

              <div className="flex justify-center lg:justify-start items-center gap-4 mt-8">
                <button onClick={handlePrev} className="bg-[#21413c] p-4 rounded-full text-white hover:bg-opacity-80 transition-opacity">
                  <svg className="size-5" fill="none" viewBox="0 0 20 20">
                    <path d="M11.9108 4.41081C12.2362 4.08537 12.7638 4.08537 13.0892 4.41081C13.4146 4.73624 13.4146 5.26376 13.0892 5.58919L8.67838 10L13.0892 14.4108L13.1462 14.4743C13.4131 14.8016 13.3943 15.2841 13.0892 15.5892C12.7841 15.8943 12.3016 15.9131 11.9743 15.6462L11.9108 15.5892L6.91081 10.5892C6.58537 10.2638 6.58537 9.73624 6.91081 9.41081L11.9108 4.41081Z" fill="currentColor"/>
                  </svg>
                </button>
                <button onClick={handleNext} className="bg-[#21413c] p-4 rounded-full text-white hover:bg-opacity-80 transition-opacity">
                  <svg className="size-5" fill="none" viewBox="0 0 20 20">
                    <path d="M8.08919 4.41081C7.76375 4.08537 7.23624 4.08537 6.91081 4.41081C6.58537 4.73624 6.58537 5.26376 6.91081 5.58919L11.3216 10L6.91081 14.4108L6.85384 14.4743C6.58688 14.8016 6.60571 15.2841 6.91081 15.5892C7.2159 15.8943 7.6984 15.9131 8.02571 15.6462L8.08919 15.5892L13.0892 10.5892C13.4146 10.2638 13.4146 9.73624 13.0892 9.41081L8.08919 4.41081Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute flex h-auto items-center justify-center left-[-4.5px] top-[-3px] w-3/5 opacity-20 rotate-180">
            <svg
                className="block w-full h-auto"
                fill="none"
                viewBox="0 0 972 414"
            >
                <path
                    d="M971.5 413H1V412H970.5V1H971.5V413ZM963.5 405.5H1V404.5H962.5V1H963.5V405.5ZM955.5 398H1V397H954.5V1H955.5V398ZM947.5 390.5H1V389.5H946.5V1H947.5V390.5ZM939.5 383H1V382H938.5V1H939.5V383ZM931.5 375.5H1V374.5H930.5V1H931.5V375.5ZM923.5 368H1V367H922.5V1H923.5V368ZM915.5 360.5H1V359.5H914.5V1H915.5V360.5ZM907.5 353H1V352H906.5V1H907.5V353ZM899.5 345.5H1V344.5H898.5V1H899.5V345.5ZM891.5 338H1V337H890.5V1H891.5V338ZM883.5 330.5H1V329.5H882.5V1H883.5V330.5ZM875.5 323H1V322H874.5V1H875.5V323ZM867.5 315.5H1V314.5H866.5V1H867.5V315.5ZM859.5 308H1V307H858.5V1H859.5V308ZM851.5 300.5H1V299.5H850.5V1H851.5V300.5ZM843.5 293H1V292H842.5V1H843.5V293ZM835.5 285.5H1V284.5H834.5V1H835.5V285.5ZM827.5 278H1V277H826.5V1H827.5V278Z"
                    id="Subtract"
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
          <div
            className="absolute bottom-[-790px] h-[952px] left-24 w-[1248px] opacity-10"
            id="node-384_8648"
          >
            <div className="absolute bottom-[-63.025%] left-[-48.077%] right-[-48.077%] top-[-63.025%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 2448 2152"
              >
                <g
                  filter="url(#filter0_f_384_51100)"
                  id="Ellipse 8"
                  opacity="0.5"
                >
                  <ellipse
                    cx="1224"
                    cy="1076"
                    fill="var(--fill-0, #C4E538)"
                    rx="624"
                    ry="476"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="2152"
                    id="filter0_f_384_51100"
                    width="2448"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_384_51100"
                      stdDeviation="300"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
    </div>
  );
} 