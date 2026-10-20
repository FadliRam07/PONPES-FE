import { createClient } from '@supabase/supabase-js'

// Memanggil URL dan Key dari file .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validasi untuk memastikan .env sudah terbaca
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Error: Supabase URL atau Anon Key tidak ditemukan di file .env");
}

// Export client agar bisa dipakai di seluruh aplikasi
export const supabase = createClient(supabaseUrl, supabaseAnonKey)