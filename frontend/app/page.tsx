'use client'

import React, { useState } from 'react'
import HeroSection from './components/HeroSection'
import SocialProof from './components/SocialProof'
import ProblemsSection from './components/ProblemsSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import IntelligenceServicesSection from './components/IntelligenceServicesSection'
import CTASection from './components/CTASection'
import ProcessSection from './components/ProcessSection'
import QueryFormModal from './components/QueryFormModal'
import TestimonialSection from './components/TestimonialSection'
import FaqSection from './components/FaqSection'
import FinalCTASection from './components/FinalCTASection'

export default function Home() {
  const [isQueryFormOpen, setIsQueryFormOpen] = useState(false)

  const openQueryForm = () => setIsQueryFormOpen(true)
  const closeQueryForm = () => setIsQueryFormOpen(false)

  return (
    <main className="min-h-screen bg-primary-green relative overflow-hidden">
      <HeroSection onStartSearch={openQueryForm} />
      <SocialProof />
      <ProblemsSection />
      <CaseStudiesSection />
      <IntelligenceServicesSection onStartSearch={openQueryForm} />
      <CTASection onStartSearch={openQueryForm} />
      <ProcessSection />
      <TestimonialSection />
      <FaqSection />
      <FinalCTASection onStartSearch={openQueryForm} />
      
      <QueryFormModal 
        isOpen={isQueryFormOpen}
        onClose={closeQueryForm}
      />
    </main>
  )
} 