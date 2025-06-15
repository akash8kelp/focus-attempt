// Frontend Calendly Configuration
export const calendlyClientConfig = {
  // Widget Embedding
  embedUrl: process.env.NEXT_PUBLIC_CALENDLY_EMBED_URL || 'https://calendly.com/your-username',
  
  // Widget Options
  widget: {
    height: 500,
    hideEventTypeDetails: false,
    hideLandingPageDetails: true,
    primaryColor: '192C28', // Your brand green
    textColor: '141414',
    backgroundColor: 'ffffff',
  },

  // UTM Parameters for tracking
  utm: {
    utmSource: 'kelp-website',
    utmMedium: 'query-form-modal',
    utmCampaign: 'company-scan-booking',
    utmContent: 'step3-widget'
  },

  // Prefill settings
  prefill: {
    customQuestions: {
      a1: '', // Will be populated with business activity
      a2: '', // Will be populated with selected country  
      a3: '', // Will be populated with sectors
    }
  }
};

// Function to generate Calendly URL with prefills
export const generateCalendlyUrl = (formData: any) => {
  const baseUrl = calendlyClientConfig.embedUrl;
  const params = new URLSearchParams();

  // Add form data as prefills
  if (formData.name) {
    params.append('name', formData.name);
  }
  
  if (formData.organization) {
    params.append('a1', `Organization: ${formData.organization}`);
  }

  if (formData.businessActivity) {
    params.append('a2', `Business Activity: ${formData.businessActivity}`);
  }

  if (formData.sectors) {
    params.append('a3', `Sectors: ${formData.sectors}`);
  }

  // Add UTM parameters
  Object.entries(calendlyClientConfig.utm).forEach(([key, value]) => {
    params.append(key, value);
  });

  return `${baseUrl}?${params.toString()}`;
};

// Widget configuration for inline embedding
export const getWidgetConfig = (formData: any) => ({
  url: generateCalendlyUrl(formData),
  styles: {
    height: '500px'
  },
  hideEventTypeDetails: false,
  hideLandingPageDetails: true,
  pageSettings: {
    primaryColor: '192C28', // Your brand green
    textColor: '141414',
    backgroundColor: 'ffffff',
  },
  prefill: {
    name: formData.name || '',
    email: formData.email || '',
    customQuestions: {
      a1: formData.organization || '',
      a2: formData.businessActivity || '',
      a3: formData.sectors || '',
    }
  },
  utm: calendlyClientConfig.utm
});

export default calendlyClientConfig; 