// supabase/client.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xrohsebmmzcnefaoojcw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhyb2hzZWJtbXpjbmVmYW9vamN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MzI0ODQsImV4cCI6MjA3MjUwODQ4NH0.Edt6E89kXPf8EaFwcfR2kV1lfCg9qJ9Q3v-LcuaMRRk';

export const supabase = createClient(supabaseUrl, supabaseKey);