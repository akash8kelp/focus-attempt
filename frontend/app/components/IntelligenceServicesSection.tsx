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

const DecorativePattern = () => (
    <div className="absolute top-0 right-0 w-[70vw] h-auto z-0">
        <Image
            src="/assets/right-pattern.svg"
            alt="Decorative pattern"
            layout="responsive"
            width={970.5}
            height={412}
        />
    </div>
);

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
    <section className="relative bg-background-stats px-4 md:px-10 lg:px-20 xl:px-120 py-8 md:py-16 flex flex-col items-center gap-8 md:gap-16 overflow-hidden">
        <DecorativePattern />
        <div className="w-full max-w-7xl mx-auto z-10">
            <div className="flex flex-col items-center text-center mb-8 md:mb-16">
                <div className="mb-4">
                    <span className="text-[#333333] font-space-grotesk text-sm md:text-base font-normal tracking-widest uppercase">
                        Our Intelligence Services
                    </span>
                </div>
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
        </div>
    </section>
  )
} 