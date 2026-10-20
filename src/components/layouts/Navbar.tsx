import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

// Inisialisasi Supabase (Sebaiknya simpan di file terpisah seperti lib/supabase.ts)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://qpujgsaoxyetebsgjmld.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_Esjp4_T5cYEVfLn-EjBV9Q_q-_alaYX";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // State untuk menyimpan data user yang sedang login
  const [user, setUser] = useState<any>(null);
  
  // State untuk buka/tutup dropdown profil
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cek status login saat komponen dimuat & pantau perubahannya
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Menutup dropdown jika user klik di luar area dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fungsi Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsDropdownOpen(false);
    navigate("/"); // Kembali ke beranda
  };

  // Fungsi bantuan untuk mengecek apakah link sedang aktif
  const isActive = (path: string) => location.pathname === path;

  // Class default untuk menu yang tidak aktif
  const inactiveClass = "hover:text-blue-900 transition px-4 py-1.5";
  
  // Class untuk menu yang sedang aktif
  const activeClass = "text-blue-900 bg-blue-50 font-bold rounded-full px-4 py-1.5 transition";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Nama Pondok */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-blue-900 flex items-center justify-center text-blue-900">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Pondok Pesantren Al-Hikmah
            </h1>
            <p className="text-[9px] text-slate-500 tracking-widest uppercase">
              Lembaga Pendidikan Islam Modern
            </p>
          </div>
        </Link>

        {/* Menu Navigasi (Desktop) */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600">
          <Link to="/" className={isActive("/") ? activeClass : inactiveClass}>Beranda</Link>
          <Link to="/profil" className={isActive("/profil") ? activeClass : inactiveClass}>Profil</Link>
          <Link to="/pendidikan" className={isActive("/pendidikan") ? activeClass : inactiveClass}>Pendidikan</Link>
          <Link to="/kegiatan" className={isActive("/kegiatan") ? activeClass : inactiveClass}>Kegiatan</Link>
          <Link to="/kontak" className={isActive("/kontak") ? activeClass : inactiveClass}>Kontak</Link>
        </nav>

        {/* Tombol Aksi & Ikon User */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/daftar"
            className="px-5 py-2.5 rounded-full bg-blue-900 text-white text-sm font-semibold hover:bg-blue-800 transition"
          >
            Pendaftaran Santri Baru
          </Link>
          
          {/* LOGIKA TOMBOL USER DENGAN SUPABASE */}
          {user ? (
            // JIKA SUDAH LOGIN: Tampilkan Avatar & Dropdown
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition"
                title="Akun Saya"
              >
                {/* Ikon User Login (Warna Hijau agar beda dengan tombol login) */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-2">
                  <div className="px-4 py-2 border-b border-slate-100 mb-1">
                    <p className="text-sm font-semibold text-slate-800 truncate">{user.email}</p>
                    <p className="text-xs text-slate-500">Panitia / Admin</p>
                  </div>
                  <Link 
                    to="/dashboard" 
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Dashboard Admin
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // JIKA BELUM LOGIN: Tampilkan Tombol Biru (Sesuai Gambar Anda)
            <Link
              to="/login"
              className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition"
              title="Login Admin / Panitia"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}