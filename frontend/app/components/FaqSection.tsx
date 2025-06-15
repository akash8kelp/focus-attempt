import React, { useState } from 'react';

const faqData = [
  {
    question: "What exactly does Kelp do?",
    answer: "Kelp provides AI-powered business intelligence and market research to help you make informed decisions quickly and confidently."
  },
  {
    question: "Who is this service for?",
    answer: "Our service is designed for high-stakes teams, including M&A professionals, corporate strategists, and market researchers who need speed, clarity, and accuracy."
  },
  {
    question: "How long does it take to get results?",
    answer: "Most scans are completed and delivered within 3–5 working days, depending on the scope and complexity of the request."
  },
  {
    question: "What geographies do you cover?",
    answer: "We have global coverage, allowing us to conduct research and provide insights from a wide range of markets and regions."
  },
  {
    question: "How is this different from a traditional consulting firm?",
    answer: "Kelp leverages AI to deliver results faster and more cost-effectively than traditional consulting firms, without compromising on quality or accuracy."
  },
  {
    question: "What happens after I submit the form?",
    answer: "After you submit the form, our team will review your request and get in touch with you to discuss the next steps and provide a detailed proposal."
  }
];

interface FaqItemProps {
  item: {
    question: string;
    answer: string;
  };
}

const FaqItem = ({ item }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full border-b border-[#e6e6e6]">
      <div className="relative w-full py-6">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="font-space-grotesk font-medium text-[#192c28] text-xl md:text-2xl">
            {item.question}
          </p>
          <div className="relative shrink-0 w-5 h-5">
            {isOpen ? (
              <svg className="w-full h-full" viewBox="0 0 20 2">
                <path d="M19 1H1" stroke="#192C28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg className="w-full h-full" viewBox="0 0 20 20">
                <path d="M10 1V19" stroke="#192C28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 10H19" stroke="#192C28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="mt-4">
            <p className="font-space-grotesk text-[#333333] text-base">
              {item.answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function FaqSection() {
  return (
    <div className="bg-[#f8fcf7] relative w-full overflow-x-hidden">
      <div className="hidden lg:flex absolute h-[412px] items-center justify-center right-0 top-[-3px] w-[970.5px]">
        <div className="flex-none scale-y-[-100%]">
          <div
            className="h-[412px] relative w-[970.5px]"
            data-name="Subtract"
          >
            <div className="absolute bottom-[-0.121%] left-[-0.052%] right-[-0.052%] top-[-0.121%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 972 414"
              >
                <path
                  d="M971.5 413H1V412H970.5V1H971.5V413ZM963.5 405.5H1V404.5H962.5V1H963.5V405.5ZM955.5 398H1V397H954.5V1H955.5V398ZM947.5 390.5H1V389.5H946.5V1H947.5V390.5ZM939.5 383H1V382H938.5V1H939.5V383ZM931.5 375.5H1V374.5H930.5V1H931.5V375.5ZM923.5 368H1V367H922.5V1H923.5V368ZM915.5 360.5H1V359.5H914.5V1H915.5V360.5ZM907.5 353H1V352H906.5V1H907.5V353ZM899.5 345.5H1V344.5H898.5V1H899.5V345.5ZM891.5 338H1V337H890.5V1H891.5V338ZM883.5 330.5H1V329.5H882.5V1H883.5V330.5ZM875.5 323H1V322H874.5V1H875.5V323ZM867.5 315.5H1V314.5H866.5V1H867.5V315.5ZM859.5 308H1V307H858.5V1H859.5V308ZM851.5 300.5H1V299.5H850.5V1H851.5V300.5ZM843.5 293H1V292H842.5V1H843.5V293ZM835.5 285.5H1V284.5H834.5V1H835.5V285.5ZM827.5 278H1V277H826.5V1H827.5V278Z"
                  id="Subtract"
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
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="box-border content-stretch flex flex-col gap-12 lg:gap-16 items-center justify-start px-4 sm:px-6 md:px-12 lg:px-20 py-16 lg:py-20 relative w-full max-w-7xl mx-auto">
          <div className="relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start leading-[0] p-0 relative text-center w-full">
              <div
                className="font-space-grotesk font-normal relative shrink-0 text-[#333333] text-sm lg:text-base tracking-[0.64px] uppercase w-full"
              >
                <p className="block leading-[1.2]">SMart AI faqs</p>
              </div>
              <div
                className="font-instrument-serif not-italic relative shrink-0 text-[#141414] text-4xl md:text-5xl lg:text-[64px] w-full"
              >
                <p className="block leading-[1.2]">Have Questions?</p>
              </div>
              <div
                className="font-space-grotesk font-normal relative shrink-0 text-[#333333] text-sm lg:text-base w-full"
              >
                <p className="block leading-[1.2]">
                  Get instant answers to your business intelligence and market
                  research questions
                </p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative w-full">
              {faqData.map((item, index) => (
                <FaqItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 