import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); // Mendapatkan URL saat ini

  // Fungsi bantuan untuk mengecek apakah link sedang aktif
  const isActive = (path: string) => location.pathname === path;

  // Class default untuk menu yang tidak aktif
  const inactiveClass = "hover:text-blue-900 transition px-4 py-1.5";
  
  // Class untuk menu yang sedang aktif (biru navy + background biru muda)
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
          <Link to="/" className={isActive("/") ? activeClass : inactiveClass}>
            Beranda
          </Link>
          <Link to="/profil" className={isActive("/profil") ? activeClass : inactiveClass}>
            Profil
          </Link>
          <Link to="/pendidikan" className={isActive("/pendidikan") ? activeClass : inactiveClass}>
            Pendidikan
          </Link>
          <Link to="/kegiatan" className={isActive("/kegiatan") ? activeClass : inactiveClass}>
            Kegiatan
          </Link>
          <Link to="/kontak" className={isActive("/kontak") ? activeClass : inactiveClass}>
            Kontak
          </Link>
        </nav>

        {/* Tombol Aksi & Ikon User */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/daftar"
            className="px-5 py-2.5 rounded-full bg-blue-900 text-white text-sm font-semibold hover:bg-blue-800 transition"
          >
            Pendaftaran Santri Baru
          </Link>
          <button className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}