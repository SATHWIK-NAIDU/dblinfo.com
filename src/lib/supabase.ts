import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let client: any = null;

if (supabaseUrl && supabaseAnonKey) {
  console.log('[Supabase] Initializing client-side client...');
  client = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    '[Supabase] Warning: Missing environment variables.\n' +
    'Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your Cloudflare Pages or .env file.\n' +
    'Direct form submissions and client-side database features will fail at runtime.'
  );
}

export const supabase = client;
