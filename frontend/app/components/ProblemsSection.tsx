'use client'

import React from 'react'
import Image from 'next/image'

export default function ProblemsSection() {
  const problems = [
    {
      problem: "Tired of juggling multiple databases?",
      solution: "Pulse gives you exhaustive coverage from a single platform—even in opaque markets."
    },
    {
      problem: "Irritated checking every company manually?",
      solution: "Let our experts—powered by advanced technology—instantly identify only the right companies for you."
    },
    {
      problem: "Worried about missing hidden gems?",
      solution: "With expert led searches delivering 2.7x more companies, we guarantee exhaustive visibility—ensuring no valuable opportunities slip through."
    },
    {
      problem: "Feel some countries are black holes for company info?",
      solution: "If a business has any digital presence, we'll find it—even in markets with limited public data."
    },
    {
      problem: "Struggling to gauge strategic fit?",
      solution: "Our experts highlight the right signals—like cross-sell potential, distribution channel synergies, and more—to help you spot true strategic value."
    }
  ]

  return (
    <section className="relative bg-background-stats px-4 md:px-10 lg:px-20 xl:px-120 py-8 md:py-16 flex flex-col items-center gap-8 md:gap-16">
      {/* Decorative SVG Element */}
      <div className="absolute right-0 top-0 w-3/5 h-auto z-0 flex justify-end">
        <Image
          src="/assets/decorative-subtract.svg"
          alt="Decorative element"
          width={970.5}
          height={412}
          className="object-contain"
        />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 md:gap-6 w-full z-10">
        <p className="font-space-grotesk text-sm md:text-nav uppercase tracking-widest text-gray-600 text-center">
          problems we're solving
        </p>
        <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-stats leading-tight md:leading-stats text-primary-green text-center">
          Why Pulse beat DIY?
        </h2>
        <p className="font-space-grotesk text-base md:text-nav text-gray-600 text-center max-w-2xl">
          Doing it yourself means hours of Googling, cross-checking, and second-guessing.
          <br />
          Pulse turns that chaos into clarity, instantly.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full z-10 max-w-full">
        {/* Left Side - Image Placeholder */}
        <div className="flex-1 bg-background-content rounded-lg min-h-[240px] aspect-[4/3] md:min-h-[320px] lg:min-h-0 relative overflow-hidden">
          <Image
            src="/assets/temporary.png"
            alt="Temporary illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Right Side - Problems/Solutions List */}
        <div className="w-full lg:flex-1 relative h-[320px]">
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `linear-gradient(180deg, #F8FCF7 0%, transparent 25%, transparent 75%, #F8FCF7 100%)`
            }}
          />

          {/* Scrollable Content */}
          <div
            className="h-full overflow-y-auto snap-y snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex flex-col">
              {problems.map((item, index) => (
                <div key={index} className="flex flex-col justify-center items-center h-[320px] p-4 text-center snap-center flex-shrink-0">
                  <div className="flex flex-col items-center gap-4 max-w-md">
                    {/* Problem Tag */}
                    <div className="bg-section-pill rounded-full px-4 py-2 w-fit">
                      <span className="font-space-grotesk text-sm md:text-base text-white">
                        {item.problem}
                      </span>
                    </div>

                    {/* Solution Text */}
                    <div className="px-2">
                      <p className="font-space-grotesk text-base md:text-lg font-medium text-primary-green capitalize">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 