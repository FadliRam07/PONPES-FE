import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { Menu, X } from "lucide-react"; // Pastikan Anda punya lucide-react, atau ganti dengan SVG

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [user, setUser] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk menu HP
  
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Tutup menu mobile setiap kali pindah halaman
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;
  const inactiveClass = "hover:text-blue-900 transition px-4 py-2 rounded-lg hover:bg-slate-50";
  const activeClass = "text-blue-900 bg-blue-50 font-bold rounded-lg px-4 py-2 transition";

  const isAdmin = user?.email === "admin@hikmah.sch.id" || user?.email?.includes("admin");

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Nama Pondok */}
        <Link to="/" className="flex items-center gap-3 z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-8 h-8 rounded-full border-2 border-blue-900 flex items-center justify-center text-blue-900">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold text-slate-900 tracking-wide uppercase leading-tight">
              Pondok Pesantren Al-Hikmah
            </h1>
            <p className="text-[9px] md:text-[10px] text-slate-500 tracking-widest uppercase">
              Lembaga Pendidikan Islam Modern
            </p>
          </div>
        </Link>

        {/* ================= MENU DESKTOP ================= */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600">
          <Link to="/" className={isActive("/") ? activeClass : inactiveClass}>Beranda</Link>
          <Link to="/profil" className={isActive("/profil") ? activeClass : inactiveClass}>Profil</Link>
          <Link to="/pendidikan" className={isActive("/pendidikan") ? activeClass : inactiveClass}>Pendidikan</Link>
          <Link to="/kegiatan" className={isActive("/kegiatan") ? activeClass : inactiveClass}>Kegiatan</Link>
          <Link to="/kontak" className={isActive("/kontak") ? activeClass : inactiveClass}>Kontak</Link>
        </nav>

        {/* Tombol Aksi & Ikon User (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/daftar"
            className="px-5 py-2.5 rounded-full bg-blue-900 text-white text-sm font-semibold hover:bg-blue-800 transition shadow-md"
          >
            Daftar Santri Baru
          </Link>
          
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-10 h-10 rounded-full text-white flex items-center justify-center transition shadow-sm ${
                  isAdmin ? "bg-emerald-600 hover:bg-emerald-700" : "bg-blue-600 hover:bg-blue-700"
                }`}
                title="Akun Saya"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl py-2">
                  <div className="px-4 py-2 border-b border-slate-100 mb-1">
                    <p className="text-sm font-semibold text-slate-800 truncate">{user.email}</p>
                    <p className="text-xs text-slate-500">{isAdmin ? "Panitia / Admin" : "Calon Wali Santri"}</p>
                  </div>
                  
                  {isAdmin ? (
                    <Link 
                      to="/dashboard" 
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900 font-medium"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Masuk Dashboard Admin
                    </Link>
                  ) : (
                    <Link 
                      to="/profil-saya" 
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900 font-medium"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Cek Status Pendaftaran
                    </Link>
                  )}

                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium mt-1"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login-user" 
              className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition shadow-md"
              title="Login Akun Pendaftar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </Link>
          )}
        </div>

        {/* ================= TOMBOL MENU MOBILE (HAMBURGER) ================= */}
        <button 
          className="md:hidden z-50 p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ================= MENU MOBILE (SLIDE DOWN) ================= */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          <Link to="/" className={isActive("/") ? activeClass : inactiveClass}>Beranda</Link>
          <Link to="/profil" className={isActive("/profil") ? activeClass : inactiveClass}>Profil</Link>
          <Link to="/pendidikan" className={isActive("/pendidikan") ? activeClass : inactiveClass}>Pendidikan</Link>
          <Link to="/kegiatan" className={isActive("/kegiatan") ? activeClass : inactiveClass}>Kegiatan</Link>
          <Link to="/kontak" className={isActive("/kontak") ? activeClass : inactiveClass}>Kontak</Link>
          
          <hr className="my-2 border-slate-100" />
          
          <Link
            to="/daftar"
            className="w-full text-center px-5 py-3 rounded-xl bg-blue-900 text-white text-sm font-semibold hover:bg-blue-800 transition shadow-md"
          >
            Pendaftaran Santri Baru
          </Link>

          {user ? (
            <div className="mt-2 bg-slate-50 rounded-xl p-4">
              <p className="text-sm font-semibold text-slate-800 mb-1 truncate">{user.email}</p>
              <p className="text-xs text-slate-500 mb-3">{isAdmin ? "Panitia / Admin" : "Calon Wali Santri"}</p>
              
              {isAdmin ? (
                <Link 
                  to="/dashboard" 
                  className="block w-full text-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg text-sm font-medium mb-2"
                >
                  Masuk Dashboard Admin
                </Link>
              ) : (
                <Link 
                  to="/profil-saya" 
                  className="block w-full text-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium mb-2"
                >
                  Cek Status Pendaftaran
                </Link>
              )}
              
              <button 
                onClick={handleLogout}
                className="block w-full text-center px-4 py-2 bg-red-100 text-red-600 rounded-lg text-sm font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login-user" 
              className="w-full text-center px-5 py-3 rounded-xl border-2 border-blue-900 text-blue-900 text-sm font-semibold hover:bg-blue-50 transition mt-2"
            >
              Login Akun Pendaftar
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}