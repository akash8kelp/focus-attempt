'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { InlineWidget, useCalendlyEventListener } from 'react-calendly'
import { calendlyApi, formApi, UpdateSubmissionPayload } from '../utils/api'
import { getWidgetConfig } from '../config/calendly'
import CountrySelector from './CountrySelector'
import { Country } from '../data/countries'
import CheckIcon from './CheckIcon'

interface QueryFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QueryFormModal({ isOpen, onClose }: QueryFormModalProps) {
  // Step management
  const [currentStep, setCurrentStep] = useState(1)
  const [showValidationErrors, setShowValidationErrors] = useState(false)
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false)
  const [availabilityData, setAvailabilityData] = useState<any>(null)
  const [submissionId, setSubmissionId] = useState<string | null>(null)
  const [showWaitlistConfirmation, setShowWaitlistConfirmation] = useState(false)
  
  // Step 1 form data
  const [businessActivity, setBusinessActivity] = useState('')
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([])
  
  // Step 2 form data
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [organization, setOrganization] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [sectors, setSectors] = useState('')
  const [email, setEmail] = useState('')
  const [preferredTimeWindow, setPreferredTimeWindow] = useState('')
  const [isTimeSensitive, setIsTimeSensitive] = useState(false)

  const roleOptions = [
    'Business Owner / Founder',
    'C-Level Executive (CEO, COO, etc.)',
    'Senior Partner (Consulting, Law, Finance)',
    'Active Investor / Family Office Principal',
    'Analyst / Associate',
    'Other'
  ]

  // Validation functions
  const isStep1Valid = () => {
    return businessActivity.trim() !== '' && selectedCountries.length > 0
  }

  const isStep2Valid = () => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    return name.trim() !== '' && role !== '' && organization.trim() !== '' && isEmailValid;
  }

  const isStep3Valid = () => {
    // If slots are available, no additional validation needed (Calendly handles it)
    if (availabilityData?.available) {
      return true
    }
    // If no slots, validate email form
    return email.trim() !== '' && preferredTimeWindow !== ''
  }

  // Field error helpers
  const hasFieldError = (fieldName: string) => {
    if (!showValidationErrors) return false
    
    switch (fieldName) {
      case 'businessActivity':
        return currentStep === 1 && businessActivity.trim() === ''
      case 'selectedCountry':
        return currentStep === 1 && selectedCountries.length === 0
      case 'name':
        return currentStep === 2 && name.trim() === ''
      case 'role':
        return currentStep === 2 && role === ''
      case 'organization':
        return currentStep === 2 && organization.trim() === ''
      case 'linkedinUrl':
        return false // Now optional
      case 'sectors':
        return false // Now optional
      case 'email':
        return (currentStep === 2 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) ||
               (currentStep === 3 && !availabilityData?.available && email.trim() === '')
      case 'preferredTimeWindow':
        return currentStep === 3 && !availabilityData?.available && preferredTimeWindow === ''
      default:
        return false
    }
  }

  const getFieldClassName = (fieldName: string) => {
    const baseClass = "w-full h-12 px-4 py-2 border rounded text-sm font-space-grotesk text-[#666666] placeholder-[#666666] focus:outline-none leading-[1.2]"
    const errorClass = "border-red-500 focus:border-red-500"
    const normalClass = "border-[#E6E6E6] focus:border-[#192C28]"
    
    return `${baseClass} ${hasFieldError(fieldName) ? errorClass : normalClass}`
  }

  const handleNext = async () => {
    // ---- Step 1 -> 2 ----
    if (currentStep === 1 && isStep1Valid()) {
      try {
        const payload = {
          businessActivity,
          selectedCountry: selectedCountries.map(c => c.name).join(', '),
        };
        const response = await formApi.startSubmission(payload);
        if (response.success && response.data?.submission_id) {
          setSubmissionId(response.data.submission_id);
          setCurrentStep(2);
          setShowValidationErrors(false);
        } else {
          console.error('Failed to start submission. The backend responded with an error. Full response:', response);
        }
      } catch (error) {
        console.error('An exception occurred during step 1 submission:', error);
      }
      return;
    }
    
    // ---- Step 2 -> 3 ----
    if (currentStep === 2 && isStep2Valid()) {
      if (!submissionId) {
        console.error('No submission ID found for update.');
        return;
      }
      try {
        const payload: UpdateSubmissionPayload = {
          current_step: 2,
          step_data: { name, role, organization, linkedinUrl, sectors }
        };
        await formApi.updateSubmission(submissionId, payload);
        
        // Now check Calendly availability
        setIsCheckingAvailability(true);
        const result = await calendlyApi.checkAvailability();
        setAvailabilityData(result.data);
        setCurrentStep(3);
        setShowValidationErrors(false);
      } catch (error) {
        console.error('Error on step 2:', error);
      } finally {
        setIsCheckingAvailability(false);
      }
      return;
    }
    
    // ---- Step 3 -> Finish ----
    if (currentStep === 3 && isStep3Valid()) {
      if (!submissionId) {
        console.error('No submission ID found for final update.');
        return;
      }
      try {
        let payload: UpdateSubmissionPayload;
        if (availabilityData?.available) {
          payload = {
            current_step: 3,
            status: 'completed',
            step_data: { calendlyBookingId: 'placeholder' } // Replace with real data from Calendly widget
          };
        } else {
          payload = {
            current_step: 3,
            status: 'waiting_list',
            step_data: { email, preferredTimeWindow, isTimeSensitive }
          };
        }
        await formApi.updateSubmission(submissionId, payload);
        if (availabilityData?.available) {
          handleClose(); // Or move to a different confirmation screen if needed
        } else {
          setShowWaitlistConfirmation(true);
        }
      } catch (error) {
        console.error('Error on step 3 submission:', error);
      }
      return;
    }
    
    // Show validation errors if no other path taken
    setShowValidationErrors(true);
  }

  const handleEventScheduled = async (e: any) => {
    if (e.data.payload.event.uri && submissionId) {
      try {
        const payload: UpdateSubmissionPayload = {
          current_step: 3,
          status: 'completed',
          step_data: { calendly_event_uri: e.data.payload.event.uri }
        };
        await formApi.updateSubmission(submissionId, payload);
        handleClose(); // Close modal on success
      } catch (error) {
        console.error('Error updating submission after Calendly booking:', error);
        // Optionally, show an error message to the user
      }
    }
  };

  useCalendlyEventListener({
    onEventScheduled: handleEventScheduled,
  });

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setShowValidationErrors(false)
    }
  }

  // Clear validation errors when user starts typing
  const handleFieldChange = (fieldName: string, value: string, setter: (value: string) => void) => {
    setter(value)
    if (showValidationErrors && value.trim() !== '') {
      setShowValidationErrors(false)
    }
  }

  // Reset form when modal closes
  const handleClose = () => {
    setCurrentStep(1)
    setShowValidationErrors(false)
    setIsCheckingAvailability(false)
    setAvailabilityData(null)
    setSubmissionId(null)
    setBusinessActivity('')
    setSelectedCountries([])
    setName('')
    setRole('')
    setOrganization('')
    setLinkedinUrl('')
    setSectors('')
    setEmail('')
    setPreferredTimeWindow('')
    setIsTimeSensitive(false)
    setShowWaitlistConfirmation(false)
    onClose()
  }

  const widgetConfig = getWidgetConfig({
    name,
    email,
    organization,
    businessActivity,
    sectors,
    linkedinUrl, // Pass any other relevant data
  });

  if (!isOpen) return null
  
  if (showWaitlistConfirmation) {
    return <WaitlistConfirmation onClose={handleClose} />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-[1080px] h-full md:h-[800px] bg-white rounded-lg shadow-lg flex flex-col">
        {/* Background Map */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          <div 
            className="absolute -left-[127px] top-0 w-[1333.63px] h-[840px] opacity-20"
            style={{
              background: 'linear-gradient(180deg, rgba(25, 44, 40, 0.04) 0%, rgba(25, 44, 40, 0) 49.52%, rgba(25, 44, 40, 0.04) 100%)'
            }}
          >
            {/* World Map SVG - simplified for now, can be enhanced with actual country SVGs */}
            <div className="absolute inset-0 bg-[url('/assets/hero/world-map-bg.svg')] bg-no-repeat bg-center opacity-50"></div>
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 z-50 w-7 h-7 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors rounded-full"
        >
          <Image 
            src="/assets/query-form/close-icon.svg" 
            alt="Close" 
            width={14} 
            height={14}
            className="opacity-70"
          />
        </button>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col px-4 sm:px-8 md:px-[120px] overflow-y-auto">
          {/* Header - Fixed */}
          <div className="flex-shrink-0 pt-10 pb-6">
            {/* Title Section */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-3xl md:text-5xl font-instrument-serif text-[#192C28] text-center leading-[1.2]">
                  Start Your Company Scan, Today!
                </h1>
                <p className="text-sm md:text-base font-space-grotesk text-[#192C28] text-center leading-[1.2]">
                  Takes less than 2 minutes to complete. No long forms, just smart questions.
                </p>
              </div>
            </div>

            {/* Stepper */}
            <div className="flex justify-center">
              <div className="flex items-center gap-0 w-full max-w-2xl">
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-2 w-24">
                  <div className="flex flex-col items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-[#21413C]' : 'bg-[#E1F0DF]'}`}>
                      <span className={`text-sm font-space-grotesk font-medium ${currentStep >= 1 ? 'text-[#C4E538]' : 'text-[#333333]'}`}>01</span>
                    </div>
                  </div>
                  <span className={`text-xs font-space-grotesk text-center ${currentStep >= 1 ? 'text-[#141414]' : 'text-[#333333]'}`}>
                    What Are You Looking For?
                  </span>
                </div>

                {/* Trail 1 */}
                <div className="flex-grow h-8 flex items-center px-2">
                  <div className={`w-full h-0.5 ${currentStep >= 2 ? 'bg-[#192C28]' : 'bg-[#E1F0DF]'}`}></div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center gap-2 w-24">
                  <div className="flex flex-col items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-[#21413C]' : 'bg-[#E1F0DF]'}`}>
                      <span className={`text-sm font-space-grotesk font-medium ${currentStep >= 2 ? 'text-[#C4E538]' : 'text-[#333333]'}`}>02</span>
                    </div>
                  </div>
                  <span className={`text-xs font-space-grotesk text-center ${currentStep >= 2 ? 'text-[#141414]' : 'text-[#333333]'}`}>
                    Tell Us About Yourself
                  </span>
                </div>

                {/* Trail 2 */}
                <div className="flex-grow h-8 flex items-center px-2">
                  <div className={`w-full h-0.5 ${currentStep >= 3 ? 'bg-[#192C28]' : 'bg-[#E1F0DF]'}`}></div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-2 w-24">
                  <div className="flex flex-col items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-[#21413C]' : 'bg-[#E1F0DF]'}`}>
                      <span className={`text-sm font-space-grotesk font-medium ${currentStep >= 3 ? 'text-[#C4E538]' : 'text-[#333333]'}`}>03</span>
                    </div>
                  </div>
                  <span className={`text-xs font-space-grotesk text-center ${currentStep >= 3 ? 'text-[#141414]' : 'text-[#333333]'}`}>
                    Book a Calendly Slot
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Scrollable */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col gap-10">
              {currentStep === 1 && (
                  <>
                    {/* Business Activity and Country */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#192C28] font-space-grotesk">What business activity are you interested in?</label>
                      <input 
                        type="text"
                        placeholder="e.g., Dental practices, SaaS, etc."
                        value={businessActivity}
                        onChange={(e) => handleFieldChange('businessActivity', e.target.value, setBusinessActivity)}
                        className={getFieldClassName('businessActivity')}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#192C28] font-space-grotesk">Which country or countries are you targeting?</label>
                      <CountrySelector
                        selectedCountries={selectedCountries}
                        onChange={setSelectedCountries}
                        hasError={hasFieldError('selectedCountry')}
                      />
                    </div>
                  </>
              )}
              {currentStep === 2 && (
                  <>
                    {/* Your Name Field */}
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-1">
                        <label className="text-base md:text-lg font-space-grotesk text-[#141414] leading-[1.2]">
                          Your Name
                        </label>
                        <Image 
                          src="/assets/query-form/required-asterisk.svg" 
                          alt="Required" 
                          width={6} 
                          height={6}
                          className="mt-0.5"
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => handleFieldChange('name', e.target.value, setName)}
                          placeholder="Your Name"
                          className={getFieldClassName('name')}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-1">
                        <label className="text-base md:text-lg font-space-grotesk text-[#141414] leading-[1.2]">
                          Work Email
                        </label>
                        <Image 
                          src="/assets/query-form/required-asterisk.svg" 
                          alt="Required" 
                          width={6} 
                          height={6}
                          className="mt-0.5"
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => handleFieldChange('email', e.target.value, setEmail)}
                          placeholder="yourname@company.com"
                          className={getFieldClassName('email')}
                        />
                      </div>
                    </div>

                    {/* Role Selection Field */}
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-1">
                        <label className="text-base md:text-lg font-space-grotesk text-[#141414] leading-[1.2]">
                          What best describes your role?
                        </label>
                        <Image 
                          src="/assets/query-form/required-asterisk.svg" 
                          alt="Required" 
                          width={6} 
                          height={6}
                          className="mt-0.5"
                        />
                      </div>
                      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${hasFieldError('role') ? 'p-2 border border-red-500 rounded' : ''}`}>
                        {roleOptions.map((option, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setRole(option)
                                if (showValidationErrors) {
                                  setShowValidationErrors(false)
                                }
                              }}
                              className="flex items-center gap-2 w-full text-left"
                            >
                              <div className="w-4 h-4 flex-shrink-0">
                                <Image 
                                  src={role === option ? "/assets/query-form/radio-checked.svg" : "/assets/query-form/radio-unchecked.svg"}
                                  alt={role === option ? "Selected" : "Not selected"}
                                  width={16} 
                                  height={16}
                                />
                              </div>
                              <span className="text-sm font-space-grotesk text-[#333333] leading-[1.2]">
                                {option}
                              </span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Your Organization Field */}
                    <InputField id="organization" label="Organization" placeholder="Your company/organization" value={organization} onChange={(e) => handleFieldChange('organization', e.target.value, setOrganization)} error={hasFieldError('organization')} required />
                    
                    {/* LinkedIn URL */}
                    <InputField id="linkedinUrl" label="LinkedIn Profile URL (Optional)" placeholder="linkedin.com/in/yourprofile" value={linkedinUrl} onChange={(e) => handleFieldChange('linkedinUrl', e.target.value, setLinkedinUrl)} error={hasFieldError('linkedinUrl')} />

                    {/* Sectors */}
                    <InputField id="sectors" label="What sectors are you interested in? (Optional)" placeholder="e.g., SaaS, FinTech, Healthcare" value={sectors} onChange={(e) => handleFieldChange('sectors', e.target.value, setSectors)} error={hasFieldError('sectors')} />
                  </>
              )}
              {currentStep === 3 && (
                  <>
                    {isCheckingAvailability ? (
                        // Loading state while checking availability
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                          <div className="w-8 h-8 border-2 border-[#192C28] border-t-transparent rounded-full animate-spin"></div>
                          <p className="text-base font-space-grotesk text-[#333333]">
                            Checking availability...
                          </p>
                        </div>
                    ) : availabilityData?.available ? (
                        // Calendly widget when slots are available
                        <div className="flex flex-col gap-6">
                          <div className="text-center">
                            <h3 className="text-xl md:text-2xl font-space-grotesk text-[#141414] mb-2">
                              Great! We have slots available.
                            </h3>
                            <p className="text-sm md:text-base font-space-grotesk text-[#333333]">
                              Pick a time that works for you and let's discuss your company scan.
                            </p>
                          </div>
                          
                          {/* Real Calendly Widget */}
                          <div className="w-full min-h-[400px] md:min-h-[500px] border border-[#E6E6E6] rounded-lg overflow-hidden">
                            <InlineWidget
                              url={widgetConfig.url}
                              styles={widgetConfig.styles}
                              pageSettings={widgetConfig.pageSettings}
                              prefill={widgetConfig.prefill}
                              utm={widgetConfig.utm}
                            />
                          </div>
                        </div>
                    ) : (
                        // Email collection form when no slots available
                        <div className="flex flex-col gap-6">
                          <div className="text-center">
                            <h3 className="text-xl md:text-2xl font-space-grotesk text-[#141414] mb-2">
                              We're excited to connect with you.
                            </h3>
                            <p className="text-sm md:text-base font-space-grotesk text-[#333333]">
                              Our schedule is currently full, but we reserve openings for high-priority clients.
                              Joining the list gives you the best chance to secure a session.
                            </p>
                          </div>

                          {/* Email Form */}
                          <div className="flex flex-col md:flex-row gap-6">
                            {/* Work Email Field */}
                            <div className="flex-1 flex flex-col gap-4">
                              <div className="flex gap-1">
                                <label className="text-base font-space-grotesk text-[#141414] leading-[1.2]">
                                  Work Email
                                </label>
                              </div>
                              <div className="relative">
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) => handleFieldChange('email', e.target.value, setEmail)}
                                  placeholder="yourname@company.com"
                                  className={getFieldClassName('email')}
                                />
                              </div>
                            </div>

                            {/* Preferred Time Window Field */}
                            <div className="flex-1 flex flex-col gap-4">
                              <div className="flex gap-1">
                                <label className="text-base font-space-grotesk text-[#141414] leading-[1.2]">
                                  Preferred Time Window
                                </label>
                              </div>
                              <div className="relative">
                                <select
                                  value={preferredTimeWindow}
                                  onChange={(e) => handleFieldChange('preferredTimeWindow', e.target.value, setPreferredTimeWindow)}
                                  className={`${getFieldClassName('preferredTimeWindow')} appearance-none bg-white`}
                                >
                                  <option value="">Choose an option</option>
                                  <option value="morning">Morning (9AM - 12PM)</option>
                                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                                  <option value="evening">Evening (5PM - 8PM)</option>
                                  <option value="flexible">Flexible</option>
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                  <Image 
                                    src="/assets/query-form/dropdown-arrow.svg" 
                                    alt="Dropdown" 
                                    width={20} 
                                    height={20}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Time Sensitive Checkbox */}
                          <div className="flex items-center gap-3">
                            <div
                              className={`relative flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer ${
                                isTimeSensitive ? 'bg-[#192c28] border-[#192c28]' : 'bg-white border-[#E6E6E6]'
                              }`}
                              onClick={() => setIsTimeSensitive(!isTimeSensitive)}
                            >
                              {isTimeSensitive && <CheckIcon className="w-3 h-3 text-white" />}
                            </div>
                            <span
                              className="text-sm font-space-grotesk text-[#333333] cursor-pointer"
                              onClick={() => setIsTimeSensitive(!isTimeSensitive)}
                            >
                              Our request is time sensitive
                            </span>
                          </div>
                        </div>
                    )}
                  </>
              )}
            </div>
          </div>

          {/* Footer Buttons - Fixed */}
          <div className="flex-shrink-0 flex justify-between items-center pt-6 pb-10 border-t border-[#E6E6E6]">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`h-12 px-4 rounded text-sm font-space-grotesk font-medium leading-[1.28] ${
                  currentStep === 1 
                    ? 'bg-[#E6E6E6] text-[#192C28] opacity-50 cursor-not-allowed' 
                    : 'bg-[#E6E6E6] text-[#192C28] hover:bg-[#d6d6d6] transition-colors'
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && !isStep1Valid()) || 
                  (currentStep === 2 && !isStep2Valid()) ||
                  (currentStep === 3 && !isStep3Valid()) ||
                  isCheckingAvailability
                }
                className={`h-12 px-4 rounded text-sm font-space-grotesk font-medium transition-colors leading-[1.28] ${
                  (currentStep === 1 && !isStep1Valid()) || 
                  (currentStep === 2 && !isStep2Valid()) ||
                  (currentStep === 3 && !isStep3Valid()) ||
                  isCheckingAvailability
                    ? 'bg-[#E6E6E6] text-[#999999] cursor-not-allowed'
                    : 'bg-[#333333] text-white hover:bg-[#192C28]'
                }`}
              >
                {isCheckingAvailability 
                  ? 'Checking...' 
                  : currentStep === 3 
                    ? (availabilityData?.available ? 'Complete Booking' : 'Join Waiting List')
                    : 'Next'
                }
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const WaitlistConfirmation = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-lg bg-[#192c28] rounded-2xl shadow-lg flex flex-col items-center text-center p-8 md:p-12 text-white">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors rounded-full"
        >
          <Image 
            src="/assets/query-form/close-icon.svg" 
            alt="Close" 
            width={16} 
            height={16}
            className="filter-none invert"
          />
        </button>

        <div className="w-16 h-16 bg-[#c4e538] rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-[#192c28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="font-instrument-serif text-3xl md:text-4xl mb-4">
          You're on the list!
        </h2>
        
        <p className="font-space-grotesk text-base text-white/80 mb-8 max-w-sm">
          Thanks for your interest! We've received your details and will get back to you within your preferred time window.
        </p>
        
        <button
          onClick={onClose}
          className="bg-[#c4e538] cursor-pointer h-12 relative rounded px-6 flex items-center justify-center gap-2 group transition-all hover:gap-3"
        >
          <span className="font-space-grotesk font-medium text-[#192c28] text-sm">
            Got it, thanks!
          </span>
        </button>
      </div>
    </div>
  );
};

// Reusable InputField component
const InputField = ({ id, label, placeholder, value, onChange, error, required = false }: { id: string, label: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error: boolean, required?: boolean }) => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-1">
      <label htmlFor={id} className="text-base md:text-lg font-space-grotesk text-[#141414] leading-[1.2]">
        {label}
      </label>
      {required && (
        <Image 
          src="/assets/query-form/required-asterisk.svg" 
          alt="Required" 
          width={6} 
          height={6}
          className="mt-0.5"
        />
      )}
    </div>
    <div className="relative">
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-12 px-4 py-2 border rounded text-sm font-space-grotesk text-[#666666] placeholder-[#666666] focus:outline-none leading-[1.2] ${error ? 'border-red-500 focus:border-red-500' : 'border-[#E6E6E6] focus:border-[#192C28]'}`}
      />
    </div>
  </div>
);

// Reusable SelectField component
const SelectField = ({ id, label, value, onChange, options, error, required = true }: { id: string, label: string, value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, options: string[], error: boolean, required?: boolean }) => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-1">
      <label htmlFor={id} className="text-base md:text-lg font-space-grotesk text-[#141414] leading-[1.2]">
        {label}
      </label>
      {required && (
        <Image 
          src="/assets/query-form/required-asterisk.svg" 
          alt="Required" 
          width={6} 
          height={6}
          className="mt-0.5"
        />
      )}
    </div>
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full h-12 px-4 py-2 border rounded text-sm font-space-grotesk focus:outline-none leading-[1.2] appearance-none bg-no-repeat bg-right-4 bg-center bg-[url('/assets/query-form/dropdown-arrow.svg')] ${error ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-[#E6E6E6] focus:border-[#192C28] text-[#666666]'}`}
      >
        <option value="" disabled>Select an option</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  </div>
); 