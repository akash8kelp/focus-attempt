import express, { Request, Response } from 'express';
import { calendlyConfig, validateCalendlyConfig, getCalendlyHeaders } from '../config/calendly';
import { supabase, isSupabaseConnected } from '../lib/supabaseClient';

const router = express.Router();

// ---- Step 1: Start a new form submission ----
router.post('/start', async (req: Request, res: Response) => {
  if (!isSupabaseConnected()) {
    return res.status(503).json({ success: false, error: 'Database not connected' });
  }

  try {
    const { step1_data } = req.body;
    const { data, error } = await supabase
      .from('form_submissions')
      .insert({
        step1_data,
        current_step: 1,
        status: 'in_progress'
      })
      .select('id')
      .single();

    if (error) throw error;

    res.status(201).json({ success: true, data: { submission_id: data.id } });
  } catch (error: any) {
    console.error('Error starting form submission:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ---- Step 2 & 3: Update an existing submission ----
router.put('/:id/update', async (req: Request, res: Response) => {
  if (!isSupabaseConnected()) {
    return res.status(503).json({ success: false, error: 'Database not connected' });
  }

  try {
    const { id } = req.params;
    const { current_step, step_data, status } = req.body;

    const updatePayload: { [key: string]: any } = {
      current_step,
      status: status || 'in_progress'
    };
    
    // Dynamically add the step data to the payload
    if (current_step === 2) {
      updatePayload.step2_data = step_data;
    } else if (current_step === 3) {
      updatePayload.step3_data = step_data;
    }

    const { data, error } = await supabase
      .from('form_submissions')
      .update(updatePayload)
      .eq('id', id)
      .select('id')
      .single();

    if (error) throw error;

    res.status(200).json({ success: true, submission_id: data.id });
  } catch (error: any) {
    console.error(`Error updating submission for step ${req.body.current_step}:`, error);
    res.status(500).json({ success: false, error: error.message });
  }
});


// ---- Calendly Availability Check (Helper Endpoint) ----
// (This part remains the same)
interface AvailabilityData {
  available: boolean;
  slotsCount: number;
  nextAvailableDate: Date | null;
}

interface CalendlyAvailableTime {
  start_time: string;
  end_time: string;
  booking_url: string;
}

interface CalendlyAvailabilityResponse {
  collection: CalendlyAvailableTime[];
}

const checkAvailability = async (): Promise<AvailabilityData> => {
  try {
    if (!validateCalendlyConfig()) {
      console.warn('Calendly config invalid, falling back to mock');
      const hasSlots = Math.random() > 0.5;
      return {
        available: hasSlots,
        slotsCount: hasSlots ? Math.floor(Math.random() * 5) + 1 : 0,
        nextAvailableDate: hasSlots ? new Date(Date.now() + 24 * 60 * 60 * 1000) : null
      };
    }

    const startTime = new Date(Date.now() + 5 * 60 * 1000); // Start 5 minutes from now
    const endTime = new Date();
    endTime.setDate(startTime.getDate() + calendlyConfig.availability.daysAhead);

    const eventTypeUri = `${calendlyConfig.apiBaseUrl}/event_types/${calendlyConfig.eventTypeUuid}`;
    
    const url = `${calendlyConfig.apiBaseUrl}/event_type_available_times`;
    const params = new URLSearchParams({
      event_type: eventTypeUri,
      start_time: startTime.toISOString(),
      end_time: endTime.toISOString()
    });

    console.log(`[Calendly API] Request URL: ${url}?${params}`);

    const response = await fetch(`${url}?${params}`, {
      headers: getCalendlyHeaders()
    });

    const responseBody = await response.text();
    if (!response.ok) {
      throw new Error(`Calendly API error: ${response.status} - ${responseBody}`);
    }

    const data = JSON.parse(responseBody) as CalendlyAvailabilityResponse;
    const availableTimes = data.collection || [];
    
    return {
      available: availableTimes.length > 0,
      slotsCount: availableTimes.length,
      nextAvailableDate: availableTimes.length > 0 ? new Date(availableTimes[0].start_time) : null
    };
  } catch (error) {
    console.error('Error checking Calendly availability:', error);
    return {
      available: false,
      slotsCount: 0,
      nextAvailableDate: null
    };
  }
};

router.get('/availability', async (req: Request, res: Response) => {
  try {
    const availability = await checkAvailability();
    res.json({ success: true, data: availability });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});


export default router; 