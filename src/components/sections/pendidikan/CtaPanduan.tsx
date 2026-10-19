export default function CtaPanduan() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-blue-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Ornamen Background */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-800 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-800 rounded-full opacity-50 blur-2xl"></div>
          
          {/* Ikon Buku di Background Kanan */}
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-10 hidden md:block">
            <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          </div>

          {/* Teks Kiri */}
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[10px] font-bold text-emerald-300 tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Dokumen Kurikulum Resmi 2025/2026
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Unduh Buku Panduan Silabus & Rencana Studi Santri
            </h2>
            <p className="text-blue-100 text-sm md:text-base mb-8">
              Dapatkan rincian lengkap mengenai sebaran mata pelajaran, daftar kitab rujukan, standar kelulusan tahfidz, serta jadwal ujian komprehensif pesantren dalam satu file PDF.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 rounded-full bg-emerald-400 text-blue-950 font-bold text-sm hover:bg-emerald-300 transition flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Unduh Brosur Silabus (PDF)
              </button>
              <button className="px-6 py-3 rounded-full bg-blue-800 border border-blue-700 text-white font-semibold text-sm hover:bg-blue-700 transition flex items-center justify-center gap-2">
                Konsultasi dengan Bagian Akademik
              </button>
            </div>
            
            <div className="mt-6 flex items-center gap-6 text-[10px] text-blue-300 uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Ukuran: 4.8 MB (PDF Versi Lengkap)
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Diperbarui per Januari 2025
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}