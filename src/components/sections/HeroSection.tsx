export default function HeroSection() {
  return (
    <section className="bg-white pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Kolom Kiri: Teks */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-900 tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Pondok Pesantren Al-Hikmah
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 leading-[1.1] tracking-tight mb-6">
              Menjadi Generasi Islami, Berilmu, dan Berakhlak Mulia
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Membangun generasi unggul melalui pendidikan Islam, pembinaan karakter, dan pengembangan potensi santri berwawasan global.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-6 py-3 rounded-full bg-blue-900 text-white font-semibold hover:bg-blue-800 transition flex items-center gap-2">
                Daftar Sekarang
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition">
                Kenali Pesantren
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Gambar & Kartu Akreditasi */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=1000&auto=format&fit=crop" 
                alt="Masjid Pesantren" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Kartu Kecil di Atas Gambar */}
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              <span className="text-xs font-bold text-slate-900">Kurikulum Mu'allimin</span>
            </div>

            {/* Kartu Bawah */}
            <div className="absolute -bottom-6 right-4 bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Akreditasi A Unggul</p>
                <p className="text-[10px] text-slate-500">Berbasis Karakter & Tahfidz Qur'an</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistik Bawah */}
        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100 max-w-2xl">
          <div>
            <p className="text-3xl font-bold text-blue-950">100%</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Lulusan<br/>Melanjutkan</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-950">30 Juz</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Sanad Mutqin</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-950">24 Jam</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Bimbingan Asrama</p>
          </div>
        </div>

      </div>
    </section>
  );
}