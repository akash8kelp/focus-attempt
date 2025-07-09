import React, { useState } from 'react'
import Header from './Header'
import Image from 'next/image'
import CTAButtons from './CTAButtons'
import TargetAudience from './TargetAudience'
import ReportDialog from './ReportDialog'

interface HeroSectionProps {
  onStartSearch?: () => void
}

export default function HeroSection({ onStartSearch }: HeroSectionProps) {
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);

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
      <div className="absolute inset-0 z-10 bg-hero-gradient" />

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
              <p className="font-space-grotesk text-base md:text-lg lg:text-body leading-body text-center text-text-secondary w-full">
                Access 2.7x more companies than traditional static databases—including opaque markets—through detailed, AI-powered company profiles curated by an expert-led team.
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