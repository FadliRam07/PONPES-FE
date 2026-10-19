export default function PendidikanHero() {
  return (
    <section className="bg-white pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Atas */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-900 border border-blue-100 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                Sistem Terpadu & Ta'lim Terpadu
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-2">
                Akreditasi Unggul (A)
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight mb-4">
              Kurikulum & Jenjang Pendidikan
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Sintesis harmoni antara kurikulum keilmuan klasik (turats), hafalan mutqin bersanad, dan keunggulan sains modern global untuk melahirkan cendekiawan muslim berkarakter mandiri.
            </p>
          </div>

          {/* Kotak Statistik Kanan */}
          <div className="flex flex-col gap-3 w-full lg:w-64 flex-shrink-0">
            <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900 leading-none">100%</p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase">Siswa Mukim & Belajar</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900 leading-none">24 Jam</p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase">Bilingual Arab & Inggris</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900 leading-none">30 Juz</p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase">Target Tahfidz Mutqin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Jenjang Pendidikan */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8 mt-16">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Struktur Akademik Utama</p>
            <h2 className="text-3xl font-bold text-blue-950">Jenjang Pendidikan Terpadu</h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Menerapkan dua jalur peminatan bersinergi yang mengantarkan santri menguasai ilmu agama mendalam sekaligus kepasakan ilmu pengantar tinggi dunia.
          </p>
        </div>

        {/* Grid Dua Kartu Jenjang */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Kartu 1: KMI */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">
                Masa Tempuh 6 Tahun / 3 Tahap
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-blue-950 mb-3">Kulliyatul Mu'allimin Al-Islamiyyah (KMI)</h3>
            <p className="text-sm text-slate-600 mb-6">
              Pendidikan Formal Menengah (SMP - SMA Islam Terpadu & Status Pondok Pesantren Mu'adalah)
            </p>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed">
              Program komprehensif berorientasi pembentukan karakter ulama dan intelektual muslim. Mengintegrasikan kurikulum Kementerian Agama/Kemendikbud dengan kurikulum Dirasah Islamiyah khas pesantren salaf.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-3 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
                Bilingual Lughawiyah
              </div>
              <div className="bg-slate-50 p-3 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                Kajian Kitab Kuning
              </div>
              <div className="bg-slate-50 p-3 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Sains & Riset Terapan
              </div>
              <div className="bg-slate-50 p-3 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Dual Degree Diploma
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Diakui Al-Azhar Kairo & PTN Nasional</span>
              <button className="text-sm font-bold text-blue-900 flex items-center gap-1 hover:text-blue-700">Rincian Kurikulum KMI <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>
            </div>
          </div>

          {/* Kartu 2: Tahfidz */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">
                Kelas Intensif & Takhasus
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-blue-950 mb-3">Tahfdzul Qur'an & Takhasus Ulumil Syar'i</h3>
            <p className="text-sm text-slate-600 mb-6">
              Program Akselerasi Hafalan & Kader 30 Juz dengan Sanad Bersambung
            </p>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed">
              Fokus pembinaan intensif talaqqi, tajwid/dharabiyah, tahsin tartil, serta pengkajian tafsir tematik dengan bimbingan Masyayikh dan Asatidzah pemegang sanad qira'ah 'Amin riwayat Hafs.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-3 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-2 border border-slate-100">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Metode Halaqah Talaqqi
              </div>
              <div className="bg-white p-3 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-2 border border-slate-100">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Sertifikasi Bersanad
              </div>
              <div className="bg-white p-3 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-2 border border-slate-100">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                Ulumul Qur'an & Tafsir
              </div>
              <div className="bg-white p-3 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-2 border border-slate-100">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Jalur Prestasi PTN/Timteng
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Target Kelulusan Minimal 10-30 Juz</span>
              <button className="text-sm font-bold text-blue-900 flex items-center gap-1 hover:text-blue-700">Panduan Program Tahfidz <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}