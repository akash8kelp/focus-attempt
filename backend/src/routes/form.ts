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

export default router; 