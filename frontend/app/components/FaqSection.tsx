import React, { useState } from 'react';
import Image from 'next/image';

const faqData = [
  {
    question: "What exactly does Pulse do?",
    answer: "Pulse combines AI with Scan Experts to perform exhaustive searches, delivering detailed intelligence on any company in any industry worldwide. This allows you to make fast, informed, and confident business decisions without the time-consuming research."
  },
  {
    question: "Who is this service for?",
    answer: "Our service is designed for high-stakes teams—M&A professionals, corporate strategists, client discovery teams, and market researchers—who need fast, clear, and accurate insights."
  },
  {
    question: "How long does it take to get results?",
    answer: "Most scans are completed and delivered within 3–4 working days, depending on the scope and complexity of the request."
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
          <div className="relative shrink-0 w-2.5 h-2.5 md:w-5 md:h-5">
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
      <div className="absolute top-0 right-0 w-[70vw] h-auto z-0">
        <Image
          src="/assets/right-pattern.svg"
          alt="Decorative pattern"
          layout="responsive"
          width={970.5}
          height={412}
        />
      </div>
      <div className="relative w-full">
        <div className="box-border content-stretch flex flex-col gap-12 lg:gap-16 items-center justify-start px-4 sm:px-6 md:px-12 lg:px-20 py-16 lg:py-20 relative w-full max-w-7xl mx-auto">
          <div className="relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start leading-[0] p-0 relative text-center w-full">
              <div
                className="font-space-grotesk font-normal relative shrink-0 text-[#333333] text-sm lg:text-base tracking-[0.64px] uppercase w-full"
              >
                <p className="block leading-[1.2]">FAQs</p>
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