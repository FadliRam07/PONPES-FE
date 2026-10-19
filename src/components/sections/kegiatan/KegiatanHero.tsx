export default function KegiatanHero() {
  return (
    <section className="bg-slate-50 pt-16 pb-12 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge Atas */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span className="text-[10px] font-bold text-slate-600 tracking-wider uppercase">
            Dinamika Kehidupan Pesantren 24 Jam
          </span>
        </div>

        {/* Judul Utama */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight mb-4">
          Dinamika & Kegiatan Santri
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Membangun karakter kepemimpinan, integritas intelektual, eksplorasi bakat seni, dan kemandirian hidup santri secara holistik dan terpadu.
        </p>

        {/* 4 Kotak Statistik */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xl font-bold text-blue-950">28+</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">Klub & Ekstra</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xl font-bold text-blue-950">3 Bahasa</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">Bilingual Aktif</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xl font-bold text-blue-950">100%</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">Santri Berasrama</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xl font-bold text-blue-950">4 Akbar</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">Pekan Festival</p>
          </div>
        </div>

      </div>
    </section>
  );
}
