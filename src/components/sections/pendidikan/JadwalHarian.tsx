export default function JadwalHarian() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tombol Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Rhythm of Santri Life</p>
            <h2 className="text-3xl font-bold text-blue-950 mb-3">Disiplin Waktu & Jadwal Harian</h2>
            <p className="text-slate-500 max-w-xl">
              Rangkaian kegiatan 24 jam terstruktur dengan ritme terukur, melatih kemandirian, keikhlasan ibadah, dan konsistensi menuntut ilmu.
            </p>
          </div>
          
          {/* Toggle Button */}
          <div className="flex bg-slate-100 rounded-full p-1 border border-slate-200">
            <button className="px-5 py-2 rounded-full bg-blue-900 text-white text-xs font-bold shadow-sm">
              Hari Belajar (Senin - Kamis)
            </button>
            <button className="px-5 py-2 rounded-full text-slate-500 text-xs font-bold hover:text-slate-800 transition">
              Hari Ekstrakurikuler (Jum'at - Ahad)
            </button>
          </div>
        </div>

        {/* Grid 4 Kotak Jadwal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Jadwal 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md">04:00 - 04:30</span>
              <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-3">Qiyamul Lail & Subuh</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Bangun pagi, tahajjud berjamaah, sholat subuh di masjid, dan pembacaan kitab sorogan atau Awrad/Aufiya (Mufradat).
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] text-slate-400 font-semibold uppercase">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Masjid Utama Kampus
            </div>
          </div>

          {/* Jadwal 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md">07:00 - 12:30</span>
              <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-3">KBM Sekolah Formal & KMI</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Proses pembelajaran interaktif kurikulum formal: kajian kitab kuning, sains, matematika, bahasa, dan praktikum di laboratorium.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] text-slate-400 font-semibold uppercase">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              Gedung Kelas & Laboratorium
            </div>
          </div>

          {/* Jadwal 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md">12:30 - 17:30</span>
              <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-3">Dzuhur, Qoilulah & Olahraga</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Sholat Dzuhur berjamaah, makan siang sehat, istirahat (qoilulah), sholat ashar, dilanjut olahraga mandiri, silat, bela diri, dan futsal.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] text-slate-400 font-semibold uppercase">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              Kompleks Asrama & Lapangan
            </div>
          </div>

          {/* Jadwal 4 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md">18:00 - 22:00</span>
              <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-3">Maghrib, Mudzakarah & Muhadhoroh</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Talaqqi Al-Qur'an, kajian kitab kuning (mudzakarah bahtsul masail), latihan pidato 3 bahasa (muhadhoroh), dan istirahat malam teratur.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] text-slate-400 font-semibold uppercase">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Masjid & Ruang Belajar Asrama
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}