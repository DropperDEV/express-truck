
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vbvelmtqafwinhhjioil.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZidmVsbXRxYWZ3aW5oaGppb2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2NTc2NTEsImV4cCI6MjAxNzIzMzY1MX0.6FrzXh_NkqAVtONQWAL3oJnLtZLkLVfi2GLw-hFEsaA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase