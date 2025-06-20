"use client";
import React, { useState } from 'react';
import Image from 'next/image';

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
    <div className="bg-[#192c28] relative size-full py-20 overflow-hidden" id="node-384_8646">
      <div className="absolute top-0 left-0 w-[70vw] h-auto z-0 opacity-20">
        <Image
          src="/assets/left-pattern.svg"
          alt="Decorative pattern"
          layout="responsive"
          width={970.5}
          height={412}
        />
      </div>
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
    </div>
  );
} 