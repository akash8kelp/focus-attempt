'use client'
import React from 'react';
import Image from 'next/image'; // Assuming Image component is used inside StepCard

interface Step {
    number: string;
    title: string;
    description: string;
    cardBg: string;
    bottomElement: React.ReactNode;
}

const Illustration = ({ src }: { src: string }) => (
    <div className="absolute bottom-0 left-0 w-full h-2/3">
        <Image 
            src={src}
            alt="Step illustration"
            layout="fill"
            objectFit="contain"
            className="rounded-b-lg"
        />
    </div>
);

const steps: Step[] = [
    {
      number: "1",
      title: "Tell Us what you are looking for",
      description: "— Submit your business search and book a quick intro call.",
      cardBg: "bg-[#192c28]",
      bottomElement: <Illustration src="/assets/step 1.png" />
    },
    {
      number: "2", 
      title: "Meet our Sector Expert",
      description: "— We discuss your needs to fully understand the ask.",
      cardBg: "bg-[#192c28]",
      bottomElement: <Illustration src="/assets/step 2.png" />
    },
    {
      number: "3",
      title: "You receive scope & pricing by email",
      description: "— just 15% upfront to start.",
      cardBg: "bg-[#192c28]",
      bottomElement: <Illustration src="/assets/step 3.png" />
    },
    {
      number: "4",
      title: "Our sector experts deliver in 4 days — fast, accurate, and curated.",
      description: "You get platform access with login credentials in your email.",
      cardBg: "bg-[#192c28]",
      bottomElement: <Illustration src="/assets/step 4.png" />
    },
    {
      number: "5",
      title: "Review the list, pay the rest",
      description: "— we'll send the final invoice.",
      cardBg: "bg-[#192c28]",
      bottomElement: <Illustration src="/assets/step 5.png" />
    }
];

const CardPattern = () => (
    <div className="absolute top-0 left-0 w-[70%] h-auto z-0">
        <Image
            src="/assets/left-pattern.svg"
            alt="Decorative pattern"
            layout="responsive"
            width={970.5}
            height={412}
        />
    </div>
);

const StepCard = ({ step, isFifth = false, isShort = false }: { step: Step, isFifth?: boolean, isShort?: boolean }) => (
    <div
      className={`${step.cardBg} relative rounded-lg shrink-0 w-full overflow-hidden flex flex-col`}
    >
        <div className={`box-border content-stretch flex flex-col items-start justify-start relative w-full flex-grow ${isShort ? 'gap-6 p-4 md:p-8' : 'gap-10 p-6 md:p-10'}`}>
            <CardPattern />
            <div className="bg-[#c4e538] relative rounded-full shrink-0 p-2 flex items-center justify-center size-10">
                <p className="font-space-grotesk font-bold leading-[1.2] text-lg text-[#192c28]">
                    {step.number}
                </p>
            </div>
            <div className="relative shrink-0 w-full z-10">
                <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative text-left w-full">
                    <p className="capitalize font-space-grotesk font-medium relative shrink-0 text-white text-xl md:text-2xl w-full leading-snug">
                        {step.title}
                    </p>
                    <p className="font-space-grotesk font-normal relative shrink-0 text-[#e6e6e6] text-base w-full leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>
        </div>
        <div className={`relative w-full ${isFifth ? 'aspect-[3.5/1]' : 'aspect-[2.1/1]'}`}>
            {step.bottomElement}
        </div>
    </div>
  );

export default function ProcessSection() {
    
  return (
    <section className="bg-[#f8fcf7] relative w-full overflow-hidden">
        <div className="absolute top-0 right-0 w-[70vw] h-auto z-0 opacity-50 lg:opacity-100">
            <Image
                src="/assets/right-pattern.svg"
                alt="Decorative pattern"
                layout="responsive"
                width={970.5}
                height={412}
            />
        </div>
        <div className="flex flex-col gap-10 md:gap-20 items-start justify-start px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-20 relative size-full">
          
          <div className="relative shrink-0 w-full z-10">
            <div className="flex flex-col gap-4 md:gap-6 items-center justify-start relative text-center w-full">
              <p className="font-space-grotesk font-normal relative shrink-0 text-[#333333] text-sm md:text-base tracking-widest uppercase w-full">
                what to expect
              </p>
              <h2 className="font-instrument-serif leading-tight relative shrink-0 text-[#141414] text-4xl sm:text-5xl md:text-6xl w-full">
                Clarity in 5 Steps — <br />No Guesswork, No Delay
              </h2>
              <p className="font-space-grotesk font-normal relative shrink-0 text-[#333333] text-base w-full max-w-2xl mx-auto">
                A streamlined, expert-led process that turns your intent into actionable company intelligence — with zero friction.
              </p>
            </div>
          </div>
          
          <div className="relative w-[85vw] lg:w-2/3 mx-auto z-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {steps.slice(0, 4).map((step, index) => (
                <StepCard key={index} step={step} isShort={index < 2} />
              ))}
            </div>
            <StepCard step={steps[4]} isFifth={true} />
          </div>
        </div>
    </section>
  );
} 