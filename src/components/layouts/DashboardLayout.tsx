import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { 
  LayoutDashboard, 
  UserPlus,
  UserCheck, 
  CalendarDays, 
  Megaphone, 
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  MessageSquare // IMPORT BARU UNTUK MENU KONSULTASI
} from "lucide-react";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State Responsive HP

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email) {
        setUserEmail(user.email);
      }
    };
    getUser();
  }, []);

  // Tutup sidebar otomatis saat pindah halaman (di HP)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  const menuClass = (path: string) => 
    `flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
      isActive(path) 
        ? "bg-emerald-800 text-white shadow-sm" 
        : "text-emerald-100 hover:bg-emerald-800/50 hover:text-white"
    }`;

  return (
    <div className="min-h-screen flex bg-slate-50 font-sans overflow-hidden">
      
      {/* OVERLAY GELAP DI HP SAAT SIDEBAR TERBUKA */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside 
        className={`
          fixed top-0 left-0 h-full w-64 bg-emerald-900 text-white flex flex-col z-30 shadow-xl transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-emerald-800/50">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-emerald-900 font-bold mr-3">
              AH
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-wide">AL-HIKMAH</h1>
              <p className="text-[10px] text-emerald-200 tracking-widest">ADMIN PANEL</p>
            </div>
          </div>
          {/* Tombol Close Sidebar (Hanya muncul di HP) */}
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-emerald-200 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 text-sm font-medium overflow-y-auto">
          <p className="px-3 text-xs text-emerald-400 font-semibold mb-2 uppercase tracking-wider">Menu Utama</p>
          
          <Link to="/dashboard" className={menuClass("/dashboard")}>
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          
          <Link to="/dashboard/psb" className={menuClass("/dashboard/psb")}>
            <UserPlus className="w-5 h-5" />
            Pendaftaran PSB
          </Link>

          <Link to="/dashboard/ustadz" className={menuClass("/dashboard/ustadz")}>
            <UserCheck className="w-5 h-5" />
            Data Ustadz
          </Link>
          
          <Link to="/dashboard/jadwal" className={menuClass("/dashboard/jadwal")}>
            <CalendarDays className="w-5 h-5" />
            Jadwal
          </Link>
          
          <Link to="/dashboard/pengumuman" className={menuClass("/dashboard/pengumuman")}>
            <Megaphone className="w-5 h-5" />
            Pengumuman
          </Link>

          {/* MENU BARU: PESAN KONSULTASI */}
          <Link to="/dashboard/konsultasi" className={menuClass("/dashboard/konsultasi")}>
            <MessageSquare className="w-5 h-5" />
            Pesan Konsultasi
          </Link>
        </nav>

        <div className="p-4 border-t border-emerald-800/50">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-red-300 hover:bg-red-500/10 hover:text-red-200 transition font-medium text-sm"
          >
            <LogOut className="w-5 h-5" />
            Keluar Sistem
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen w-full transition-all duration-300">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            {/* Tombol Hamburger (Hanya muncul di HP) */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div>
              <h1 className="text-lg md:text-xl font-bold text-slate-800">Sistem Informasi</h1>
              <p className="text-xs md:text-sm text-slate-500 hidden sm:block">Pondok Pesantren Al-Hikmah</p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari data..." 
                className="pl-9 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-emerald-500 outline-none w-64"
              />
            </div>
            
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 border-l border-slate-200 pl-3 md:pl-6">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold text-slate-800">Administrator</p>
                <p className="text-xs text-slate-500">{userEmail || "Memuat..."}</p>
              </div>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-0">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}