import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="w-60 bg-emerald-900 text-white flex flex-col">
        <div className="h-16 flex items-center px-5 border-b border-emerald-800">
          <span className="font-bold">Pondok Admin</span>
        </div>
        <nav className="flex-1 p-3 space-y-1 text-sm">
          <Link
            to="/dashboard"
            className="block px-3 py-2 rounded-md bg-emerald-800 font-medium"
          >
            Dashboard
          </Link>
          <span className="block px-3 py-2 rounded-md text-emerald-200/60 cursor-not-allowed">
            Data Santri
          </span>
          <span className="block px-3 py-2 rounded-md text-emerald-200/60 cursor-not-allowed">
            Data Ustadz
          </span>
          <span className="block px-3 py-2 rounded-md text-emerald-200/60 cursor-not-allowed">
            Jadwal
          </span>
          <span className="block px-3 py-2 rounded-md text-emerald-200/60 cursor-not-allowed">
            Pengumuman
          </span>
        </nav>
        <div className="p-3 border-t border-emerald-800 text-sm">
          <Link to="/" className="block px-3 py-2 rounded-md hover:bg-emerald-800">
            ← Keluar
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6">
          <h1 className="text-lg font-semibold text-slate-800">Dashboard</h1>
        </header>

        <main className="flex-1 p-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              Selamat datang, Admin 👋
            </h2>
            <p className="text-slate-500 text-sm">
              Ini adalah halaman dashboard sementara. Menu dan data akan
              ditambahkan setelah desain dari tim UI/UX selesai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {["Data Santri", "Data Ustadz", "Pengumuman"].map((title) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-5"
              >
                <p className="text-sm text-slate-500">{title}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">—</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}