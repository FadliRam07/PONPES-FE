import { Link } from "react-router-dom";

export default function ProfilHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50/50 to-white pt-8 md:pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-400 mb-6 md:mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-blue-900 transition">Beranda</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Profil Lembaga</span>
        </div>

        {/* Header Profil */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-bold text-slate-600 tracking-wider uppercase">
                Tentang Al-Hikmah Horizon
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight mb-4">
              Profil Lembaga
            </h1>
            <p className="text-base md:text-lg text-slate-600">
              Mengenal Sejarah, Visi, Misi, dan Falsafah Hidup Santri sebagai fondasi peradaban generasi Qur'ani yang berwawasan global.
            </p>
          </div>

          {/* Card Akreditasi Kanan */}
          <div className="bg-white px-5 py-4 md:px-6 md:py-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 flex-shrink-0 w-full lg:w-auto">
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status Institusi</p>
              <p className="text-base md:text-lg font-bold text-slate-900">Akreditasi A (Unggul)</p>
              <p className="text-[10px] md:text-xs text-slate-500">Kementerian Agama RI</p>
            </div>
          </div>
        </div>

        {/* Section Sejarah & Gambar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Gambar Kiri */}
          <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[350px]">
            <img 
              src="https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=1000&auto=format&fit=crop" 
              alt="Kampus Pesantren" 
              className="w-full h-full object-cover"
            />
            {/* Badge Berdiri Sejak */}
            <div className="absolute top-4 left-4 bg-blue-950 text-white px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-lg">
              <p className="text-[9px] md:text-[10px] text-blue-300 uppercase font-semibold">Est.</p>
              <p className="text-lg md:text-xl font-bold">1996</p>
              <p className="text-[9px] md:text-[10px] text-blue-200 mt-1">28 Tahun Melayani</p>
            </div>
            {/* Caption Bawah Gambar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 pt-12">
              <p className="text-xs md:text-sm font-bold text-white">KAMPUS TERPADU 18 HEKTAR</p>
              <p className="text-[10px] md:text-xs text-slate-200 mt-1">Harmoni kampus klasik salafiyah dan dinamis sains modern dalam lingkungan asri.</p>
            </div>
          </div>

          {/* Teks Kanan */}
          <div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">
              <span className="w-6 md:w-8 h-px bg-emerald-600"></span>
              Napak Tilas & Integritas
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4 md:mb-5 leading-tight">
              Sejarah Singkat & Nilai Dasar Kelembagaan
            </h2>
            <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed mb-6 md:mb-8">
              <p>
                Didirikan pada tahun 1996 oleh para alumni Timur Tengah dan pesantren modern ternama, Pondok Pesantren Al-Hikmah Horizon mengakar pada tekad membentuk generasi muslim berkualitas yang menguasai ilmu agama dan sains.
              </p>
              <p>
                Pesantren ini berafiliasi filosofi kepesantrenan berintegritas tinggi—keikhlasan, kesederhanaan, kemandirian, ukhuwah Islamiyah, dan kebebasan berpikir—yang tetap bersandar teguh pada maqashid syariah.
              </p>
            </div>

            {/* Statistik Kecil */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-lg md:text-xl font-bold text-blue-950">3,400+</p>
                <p className="text-[10px] text-slate-500 uppercase mt-1">Santri Mukim Aktif</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-lg md:text-xl font-bold text-blue-950">12,000+</p>
                <p className="text-[10px] text-slate-500 uppercase mt-1">Alumni Berdaya</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-lg md:text-xl font-bold text-blue-950">100%</p>
                <p className="text-[10px] text-slate-500 uppercase mt-1">Kurikulum Berasrama</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}