import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config();

const supabaseUrl = process.env.SUPABASE_PROJECT_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    'Supabase environment variables not found. ' +
    'Database operations will be disabled. ' +
    'Please add SUPABASE_PROJECT_URL and SUPABASE_SERVICE_ROLE_KEY to your .env file.'
  );
}

export const supabase = createClient(supabaseUrl!, supabaseKey!)

export const isSupabaseConnected = () => {
  return supabaseUrl && supabaseKey;
}; 