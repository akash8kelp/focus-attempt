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
};

// Widget configuration for inline embedding
export const getWidgetConfig = (formData: any) => ({
  url: calendlyClientConfig.embedUrl,
  styles: {
    height: '100%',
    minWidth: '320px',
  },
  pageSettings: {
    ...calendlyClientConfig.widget,
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