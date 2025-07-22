import React, { useState, useEffect } from 'react';
import Header from './Header'
import Image from 'next/image'
import CTAButtons from './CTAButtons'
import TargetAudience from './TargetAudience'
import ReportDialog from './ReportDialog'

interface HeroSectionProps {
  onStartSearch?: () => void;
  blur?: number; // Blur in pixels
  brightnessTop?: number; // Brightness at the top (0 to 1)
  brightnessBottom?: number; // Brightness at the bottom (0 to 1)
}

export default function HeroSection({ onStartSearch, blur: targetBlur = 7, brightnessTop = 0.6, brightnessBottom = 0.15 }: HeroSectionProps) {
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [currentBlur, setCurrentBlur] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const animationDuration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      
      const newBlur = progress * targetBlur;
      setCurrentBlur(newBlur);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetBlur]);

  const openReportDialog = () => setIsReportDialogOpen(true);
  const closeReportDialog = () => setIsReportDialogOpen(false);

  return (
    <div className="relative w-full h-[88vh] bg-primary-green overflow-hidden">
      {/* World Map Background */}
      <div 
        className="absolute inset-0 z-0 bg-contain bg-center" 
        style={{ 
          backgroundImage: "url('/assets/world-map-new.svg')", 
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, ${brightnessTop}), rgba(0, 0, 0, ${brightnessBottom}))`,
          backdropFilter: `blur(${currentBlur}px)`,
          transition: 'backdrop-filter 2s ease-out',
        }}
      />

      {/* Blur Effect - constrained within hero section */}
      <div className="absolute top-[415px] left-[96px] w-[1248px] h-[500px] bg-primary-lime rounded-full opacity-50 blur-[600px]" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col gap-120 px-4 md:px-10 lg:px-20 xl:px-160 py-20">
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center gap-2 py-10">
          <div className="flex flex-col items-center gap-10 w-full max-w-[800px]">
            <div className="flex flex-col items-center gap-6 w-full">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-hero leading-hero text-center text-text-primary w-full">
                Unlock Hidden Opportunities, <span className="italic text-[#c4e538]">Globally</span>
              </h1>
              <p className="font-space-grotesk font-medium text-[1rem] md:text-[1.125rem] lg:text-body leading-[1.93rem] tracking-wide text-center text-text-secondary w-full max-w-[700px]">
                <span className={`${!isMobile ? 'bg-background-glass backdrop-blur-20' : ''} box-decoration-clone px-2 py-1 rounded-md`}>
                  Expert-led service delivering 2x–6x more companies than traditional static databases. Get AI-powered, detailed company profiles tailored to any business activity and geography of your choice —in just 4 days.
                </span>
              </p>
            </div>
            <CTAButtons onStartSearch={onStartSearch} onDownloadReport={openReportDialog} />
          </div>
        </div>

        {/* Target Audience */}
        <TargetAudience />
      </div>
      <ReportDialog isOpen={isReportDialogOpen} onClose={closeReportDialog} />
    </div>
  )
} 