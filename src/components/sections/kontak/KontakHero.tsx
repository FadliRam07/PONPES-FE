import { Link } from "react-router-dom";

export default function KontakHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50/60 to-white pt-10 pb-12 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-blue-900 transition">Beranda</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Kontak</span>
        </div>

        {/* Header Utama */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="text-[10px] font-bold text-slate-600 tracking-wider uppercase">
                Portal Silaturahmi & PSB 2025/2026
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight mb-4">
              Hubungi Kami & Layanan Informasi
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Pusat informasi pendaftaran santri baru, sekretariat pimpinan, dan kunjungan silaturahmi kampus.
            </p>
          </div>

          {/* Kotak Info Kanan */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="flex-1 bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 px-5">
              <div className="text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Respon WhatsApp</p>
                <p className="text-sm font-bold text-slate-900">&lt; 15 Menit</p>
              </div>
            </div>
            
            <div className="flex-1 bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 px-5">
              <div className="text-emerald-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Status Akreditasi</p>
                <p className="text-sm font-bold text-slate-900">Unggul (A)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}