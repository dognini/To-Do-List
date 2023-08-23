import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://qdevwssgimfannxwusjq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkZXZ3c3NnaW1mYW5ueHd1c2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3NDkzMjMsImV4cCI6MjAwNDMyNTMyM30.sKR1mSNRMXL8zIer-LSOX2xrhP1vVvVxQvnzoGn-DCs')