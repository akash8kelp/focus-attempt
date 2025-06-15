// Calendly Configuration
export const calendlyConfig = {
  // API Configuration
  apiKey: process.env.CALENDLY_API_KEY || '',
  userUri: process.env.CALENDLY_USER_URI || '',
  organizationUri: process.env.CALENDLY_ORGANIZATION_URI || '',
  webhookSecret: process.env.CALENDLY_WEBHOOK_SECRET || '',
  
  // API Base URL
  apiBaseUrl: 'https://api.calendly.com',
  
  // Event Types
  eventTypeUuid: process.env.CALENDLY_EVENT_TYPE_UUID || '',
  
  // Widget Configuration
  widget: {
    // For frontend embedding
    embedUrl: process.env.CALENDLY_EMBED_URL || 'https://calendly.com/your-username',
    prefill: {
      email: true, // Whether to prefill email from form
      name: true,  // Whether to prefill name from form
    },
    utm: {
      utmSource: 'kelp-website',
      utmMedium: 'modal-form',
      utmCampaign: 'company-scan'
    }
  },

  // Availability Check Settings
  availability: {
    daysAhead: 3, // Check availability for next 3 days
    timezone: 'UTC',
    minNoticeHours: 24 // Minimum hours notice required
  },

  // Webhook Configuration
  webhook: {
    endpoint: '/api/calendly/webhook',
    events: [
      'invitee.created',
      'invitee.canceled'
    ]
  }
};

// Validation function
export const validateCalendlyConfig = (): boolean => {
  const required = [
    'CALENDLY_API_KEY',
    'CALENDLY_USER_URI',
    'CALENDLY_EVENT_TYPE_UUID'
  ];

  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.warn('Missing Calendly environment variables:', missing);
    return false;
  }
  
  return true;
};

// Helper to get Calendly API headers
export const getCalendlyHeaders = () => ({
  'Authorization': `Bearer ${calendlyConfig.apiKey}`,
  'Content-Type': 'application/json'
});

export default calendlyConfig; 