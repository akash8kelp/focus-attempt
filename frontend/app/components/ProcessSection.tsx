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

const steps: Step[] = [
    {
      number: "1",
      title: "Tell Us what you are looking for",
      description: "— Submit your business search and book a quick intro call.",
      cardBg: "bg-[#192c28]",
      bottomElement: <div className="absolute bg-[#21413c] h-[200px] left-10 right-10 rounded-t-lg top-60" />
    },
    {
      number: "2", 
      title: "Meet our Sector Expert",
      description: "— We discuss your needs to fully understand the ask.",
      cardBg: "bg-[#192c28]",
      bottomElement: <div className="absolute bg-[#21413c] h-[360px] left-10 right-10 rounded-t-lg top-60" />
    },
    {
      number: "3",
      title: "You receive scope & pricing by email",
      description: "— just 15% upfront to start.",
      cardBg: "bg-[#192c28]",
      bottomElement: <div className="absolute bg-[#21413c] h-[360px] left-10 right-10 rounded-t-lg top-60" />
    },
    {
      number: "4",
      title: "Our sector experts deliver in 4 days — fast, accurate, and curated.",
      description: "You get platform access with login credentials in your email.",
      cardBg: "bg-[#192c28]",
      bottomElement: <div className="absolute bg-[#21413c] h-[171px] left-10 right-[41px] rounded-t-lg top-[269px]" />
    },
    {
      number: "5",
      title: "Review the list, pay the rest",
      description: "— we'll send the final invoice.",
      cardBg: "bg-[#192c28]",
      bottomElement: (
        <div className="absolute h-[264.828px] left-10 right-10 top-[175.172px]">
            <div className="absolute bottom-0 left-0 right-0 top-[0.263%]">
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1120 265"
            >
                <path
                d="M0 101.186C0 97.0267 3.1873 93.5612 7.33214 93.214L1111.33 0.726033C1116 0.33519 1120 4.01639 1120 8.6981V264.828H0V101.186Z"
                fill="#21413C"
                />
            </svg>
            </div>
        </div>
      )
    }
];

const CardSubtract = ({...props}) => (
    <div {...props}>
        <div className="absolute bottom-[-0.164%] left-[-0.07%] right-[-0.07%] top-[-0.164%]">
            <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 720 307"
            >
            <path
                d="M719 306H1V305.26H718.26V1H719V306ZM713.081 300.448H1V299.708H712.342V1H713.081V300.448ZM707.163 294.896H1V294.155H706.423V1H707.163V294.896ZM701.244 289.343H1V288.603H700.504V1H701.244V289.343ZM695.326 283.791H1V283.051H694.586V1H695.326V283.791ZM689.407 278.239H1V277.499H688.667V1H689.407V278.239ZM683.488 272.687H1V271.947H682.749V1H683.488V272.687ZM677.57 267.135H1V266.394H676.83V1H677.57V267.135ZM671.651 261.583H1V260.842H670.911V1H671.651V261.583ZM665.733 256.03H1V255.29H664.993V1H665.733V256.03ZM659.814 250.478H1V249.738H659.074V1H659.814V250.478ZM653.895 244.926H1V244.186H653.156V1H653.895V244.926ZM647.977 239.374H1V238.633H647.237V1H647.977V239.374ZM642.058 233.822H1V233.081H641.318V1H642.058V233.822ZM636.14 228.269H1V227.529H635.4V1H636.14V228.269ZM630.221 222.717H1V221.977H629.481V1H630.221V222.717ZM624.302 217.165H1V216.425H623.563V1H624.302V217.165ZM618.384 211.613H1V210.873H617.644V1H618.384V211.613ZM612.465 206.061H1V205.32H611.725V1H612.465V206.061Z"
                id="Subtract"
                stroke="url(#paint0_linear_391_51124)"
                strokeDasharray="12 12"
            />
            <defs>
                <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_391_51124"
                x1="360"
                x2="301.294"
                y1="510.601"
                y2="217.353"
                >
                <stop
                    offset="0.08"
                    stopColor="#C4E538"
                />
                <stop
                    offset="1"
                    stopColor="#192C28"
                />
                </linearGradient>
            </defs>
            </svg>
        </div>
    </div>
);

const StepCard = ({ step }: { step: Step }) => (
    <div
      className={`${step.cardBg} relative rounded-lg shrink-0 w-full overflow-clip min-h-[440px]`}
    >
        <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-6 md:p-10 relative w-full h-full">
            <CardSubtract className="absolute flex h-[305px] items-center justify-center left-[-1px] top-[-2px] w-[718px] rotate-180" />
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
            <div className="z-0 mt-auto">
                {step.bottomElement}
            </div>
        </div>
    </div>
  );

export default function ProcessSection() {
    
  return (
    <section className="bg-[#f8fcf7] relative w-full overflow-hidden">
        <div className="flex flex-col gap-10 md:gap-20 items-start justify-start px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-20 relative size-full">
            <div className="absolute w-3/5 h-auto right-0 top-0 scale-y-[-1] opacity-50 lg:opacity-100">
                <svg
                    className="block w-full h-auto"
                    fill="none"
                    viewBox="0 0 972 414"
                >
                    <path
                        d="M971.5 413H1V412H970.5V1H971.5V413ZM963.5 405.5H1V404.5H962.5V1H963.5V405.5ZM955.5 398H1V397H954.5V1H955.5V398ZM947.5 390.5H1V389.5H946.5V1H947.5V390.5ZM939.5 383H1V382H938.5V1H939.5V383ZM931.5 375.5H1V374.5H930.5V1H931.5V375.5ZM923.5 368H1V367H922.5V1H923.5V368ZM915.5 360.5H1V359.5H914.5V1H915.5V360.5ZM907.5 353H1V352H906.5V1H907.5V353ZM899.5 345.5H1V344.5H898.5V1H899.5V345.5ZM891.5 338H1V337H890.5V1H891.5V338ZM883.5 330.5H1V329.5H882.5V1H883.5V330.5ZM875.5 323H1V322H874.5V1H875.5V323ZM867.5 315.5H1V314.5H866.5V1H867.5V315.5ZM859.5 308H1V307H858.5V1H859.5V308ZM851.5 300.5H1V299.5H850.5V1H851.5V300.5ZM843.5 293H1V292H842.5V1H843.5V293ZM835.5 285.5H1V284.5H834.5V1H835.5V285.5ZM827.5 278H1V277H826.5V1H827.5V278Z"
                        stroke="url(#paint0_linear_388_51112)"
                        strokeDasharray="12 12"
                    />
                    <defs>
                        <linearGradient
                            gradientUnits="userSpaceOnUse"
                            id="paint0_linear_388_51112"
                            x1="486.25"
                            x2="406.995"
                            y1="689.379"
                            y2="293.235"
                        >
                            <stop offset="0.08" stopColor="#192C28" />
                            <stop offset="1" stopColor="#F8FCF7" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
          
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
          
          <div className="relative w-full z-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {steps.slice(0, 4).map((step, index) => (
                <StepCard key={index} step={step} />
              ))}
            </div>
            <StepCard step={steps[4]} />
          </div>
        </div>
    </section>
  );
} 