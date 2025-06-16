const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5001';

// Types for API responses
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

interface AvailabilityData {
  available: boolean;
  slotsCount: number;
  nextAvailableDate: Date | null;
}

interface WaitingListData {
  email: string;
  preferredTimeWindow: string;
  isTimeSensitive?: boolean;
  userData: any;
}

interface FormSubmissionData {
  step1Data: {
    businessActivity: string;
    selectedCountry: string;
  };
  step2Data: {
    name: string;
    role: string;
    organization: string;
    linkedinUrl: string;
    sectors: string;
  };
  step3Data?: {
    email?: string;
    preferredTimeWindow?: string;
    isTimeSensitive?: boolean;
    calendlyBookingId?: string;
  };
}

interface StartSubmissionResponse {
  submission_id: string;
}

// This is the correct type. The data object contains the submission_id.
type StartSubmissionApiResponse = ApiResponse<StartSubmissionResponse>;

interface UpdateSubmissionPayload {
  current_step: number;
  step_data: any;
  status?: 'in_progress' | 'completed' | 'waiting_list';
}

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}/api${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

// Calendly API functions
export const calendlyApi = {
  // Check availability for booking slots
  checkAvailability: async (): Promise<ApiResponse<AvailabilityData>> => {
    return apiRequest<AvailabilityData>('/calendly/availability');
  },

  // Submit to waiting list when no slots available
  submitToWaitingList: async (data: WaitingListData): Promise<ApiResponse<{ id: string; estimatedResponse: string }>> => {
    return apiRequest('/calendly/waiting-list', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Submit complete form data
  submitForm: async (data: FormSubmissionData): Promise<ApiResponse<{ id: string }>> => {
    return apiRequest('/calendly/submit-form', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// Form API functions
export const formApi = {
  startSubmission: async (step1Data: FormSubmissionData['step1Data']): Promise<StartSubmissionApiResponse> => {
    return apiRequest('/form/start', {
      method: 'POST',
      body: JSON.stringify({ step1_data: step1Data }),
    });
  },
  updateSubmission: async (id: string, payload: UpdateSubmissionPayload): Promise<ApiResponse<{ submission_id: string }>> => {
    return apiRequest(`/form/${id}/update`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  }
};

// Export types for use in components
export type { AvailabilityData, WaitingListData, FormSubmissionData, ApiResponse, UpdateSubmissionPayload }; 