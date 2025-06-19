'use client'

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface Service {
    title: string;
    description: string;
    videoUrl: string;
    darkCard: boolean;
}

const services: Service[] = [
    {
      title: "Instant access to enriched company lists",
      description: "Websites, financials, scoring, and LinkedIn, all in one view.",
      videoUrl: "/assets/video1.mp4",
      darkCard: true,
    },
    {
      title: "Profiles that go beyond the basics",
      description: "Products, leadership, socials, clients — everything for a detailed company analysis.",
      videoUrl: "/assets/video2.mp4",
      darkCard: true,
    },
    {
      title: "Ask anything, get instant answers",
      description: "Our AI chatbot is your on-demand bolt-on analyst.",
      videoUrl: "/assets/video3.mp4",
      darkCard: true,
    },
    {
      title: "Built for team magic",
      description: "Share lists, drop comments, stay in sync across your deal team.",
      videoUrl: "/assets/video1.mp4",
      darkCard: true,
    },
    {
      title: "Real-time news, zero noise",
      description: "Get alerts the moment something changes in your target universe.",
      videoUrl: "/assets/video2.mp4",
      darkCard: true,
    },
    {
      title: "Experts on call, always",
      description: "Need a second brain? Our team's got your back, from screening to close.",
      videoUrl: "/assets/video3.mp4",
      darkCard: true,
    },
]

const Subtract = () => (
    <div className="absolute w-3/5 right-0 top-0 scale-y-[-1]">
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
)

interface ServiceCardProps {
    service: Service;
    isMobileOrTablet: boolean;
    isPlaying: boolean;
    onVisibilityChange: (isVisible: boolean) => void;
    onVideoEnded: () => void;
    onStartSearch: () => void;
}

const ServiceCard = ({ service, isMobileOrTablet, isPlaying, onVisibilityChange, onVideoEnded, onStartSearch }: ServiceCardProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (!isMobileOrTablet && videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (!isMobileOrTablet && videoRef.current) {
            videoRef.current.pause();
        }
    };

    useEffect(() => {
        if (!isMobileOrTablet) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                onVisibilityChange(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        const currentCardRef = cardRef.current;
        if (currentCardRef) {
            observer.observe(currentCardRef);
        }

        return () => {
            if (currentCardRef) {
                observer.unobserve(currentCardRef);
            }
        };
    }, [isMobileOrTablet, onVisibilityChange]);

    useEffect(() => {
        if (isMobileOrTablet) {
            if (isPlaying && videoRef.current) {
                videoRef.current.play().catch(error => {
                    console.error("Video play failed:", error);
                });
            } else if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isMobileOrTablet, isPlaying]);
    
    return (
    <div ref={cardRef} className="flex flex-col gap-10 items-center">
        <div 
            className="w-full aspect-[16/10] overflow-clip relative rounded-lg shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`absolute inset-0 ${service.darkCard ? 'bg-[#192c28]' : 'bg-[#E1F0DF]'}`}></div>
            
            <div className="absolute -bottom-1/2 h-[535px] left-1/2 -translate-x-1/2 w-full max-w-[702px] opacity-50">
                <div className="w-full h-full blur-[168px]" style={{ background: 'radial-gradient(ellipse at center, #C4E538 0%, #C4E538 50%, transparent 70%)' }} />
            </div>

            <video
                ref={videoRef}
                src={service.videoUrl}
                loop={!isMobileOrTablet}
                muted
                playsInline
                onEnded={onVideoEnded}
                className="absolute top-0 left-0 rounded-lg z-10 w-full h-full object-cover"
            />
        </div>
        <div className="w-full">
            <div className="flex flex-col gap-4 items-start">
                <div className="h-20">
                    <div className="flex flex-col gap-2">
                        <h3 className="capitalize font-space-grotesk font-medium text-[#141414] text-xl md:text-2xl leading-[1.2]">
                            {service.title}
                        </h3>
                        <p className="font-space-grotesk font-normal text-[#333333] text-base leading-[1.2]">
                            {service.description}
                        </p>
                    </div>
                </div>
                <button onClick={onStartSearch} className="flex items-center gap-2 h-12 w-[145px] hover:opacity-80 transition-opacity">
                    <span className="font-space-grotesk font-bold text-sm text-[#141414]">
                        Start your Search
                    </span>
                    <div className="w-4 h-4">
                        <Image
                            src="/assets/arrow-down-icon.svg"
                            alt="Arrow"
                            width={16}
                            height={16}
                        />
                    </div>
                </button>
            </div>
        </div>
    </div>
)}

export default function IntelligenceServicesSection({ onStartSearch }: { onStartSearch: () => void }) {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
    const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileOrTablet(window.innerWidth < 1024);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleVisibilityChange = (index: number, isVisible: boolean) => {
        setVisibleCards(prev => {
            const newVisibleCards = new Set(prev);
            if (isVisible) {
                newVisibleCards.add(index);
            } else {
                newVisibleCards.delete(index);
            }
            return newVisibleCards;
        });
    };

    useEffect(() => {
        if (!isMobileOrTablet) {
            setCurrentlyPlaying(null);
            return;
        };

        const visibleArray = Array.from(visibleCards).sort((a, b) => a - b);

        if (visibleArray.length === 0) {
            setCurrentlyPlaying(null);
            return;
        }

        if (currentlyPlaying === null || !visibleCards.has(currentlyPlaying)) {
            setCurrentlyPlaying(visibleArray[0]);
        }
    }, [visibleCards, isMobileOrTablet, currentlyPlaying]);

    const handleVideoEnded = (endedIndex: number) => {
        if (!isMobileOrTablet) return;

        const visibleArray = Array.from(visibleCards).sort((a, b) => a - b);
        if (visibleArray.length <= 1) {
            if(visibleArray.length === 1) setCurrentlyPlaying(visibleArray[0])
            return;
        }

        const currentIndex = visibleArray.indexOf(endedIndex);
        if (currentIndex === -1) return;

        const nextIndex = (currentIndex + 1) % visibleArray.length;
        setCurrentlyPlaying(visibleArray[nextIndex]);
    };
  return (
    <section className="relative w-full bg-[#F8FCF7] flex flex-col items-center px-4 md:px-10 lg:px-20 xl:px-120 py-10 md:py-20 gap-10 md:gap-20">
      <Subtract />

      {/* Header Section */}
      <div className="flex flex-col items-center gap-6 w-full z-10">
        <span className="text-[#333333] font-space-grotesk text-sm md:text-base font-normal tracking-widest uppercase text-center">
          Our Intelligence Services
        </span>
        <h2 className="text-[#141414] font-instrument-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-center">
          Our Intelligence Services
        </h2>
        <p className="text-[#333333] font-space-grotesk text-base font-normal leading-tight text-center max-w-xl">
          See how leading companies have transformed their businesses with Pulse's market intelligence
        </p>
      </div>

      {/* Services Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-16 md:gap-y-24 w-full">
        {services.map((service, index) => (
            <ServiceCard 
                key={index} 
                service={service}
                isMobileOrTablet={isMobileOrTablet}
                isPlaying={currentlyPlaying === index}
                onVisibilityChange={(isVisible) => handleVisibilityChange(index, isVisible)}
                onVideoEnded={() => handleVideoEnded(index)}
                onStartSearch={onStartSearch}
            />
        ))}
      </div>
    </section>
  )
} 