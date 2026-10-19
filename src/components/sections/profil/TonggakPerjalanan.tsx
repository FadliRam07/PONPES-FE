export default function TonggakPerjalanan() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Tonggak Perjalanan Lembaga</h2>
          <p className="text-slate-500">
            Dua dekade lebih melayani umat dengan konsistensi dan integritas tanpa henti.
          </p>
        </div>

        {/* Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Timeline 1 */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <p className="text-4xl font-extrabold text-slate-200 mb-4">1996</p>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Peletakan Batu Pertama</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Dimulai dengan 40 santri perdana di atas lahan sederhana di atas wakaf 2 hektar.
            </p>
          </div>

          {/* Timeline 2 */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <p className="text-4xl font-extrabold text-slate-200 mb-4">2006</p>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Pusat Tahfidz Terpadu</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Peresmian Gedung Tahfidz Qur'an dan peluncuran kurikulum Kulliyatul Mu'allimin Al-Islamiyyah modern.
            </p>
          </div>

          {/* Timeline 3 */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <p className="text-4xl font-extrabold text-slate-200 mb-4">2016</p>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Akreditasi Unggul (A)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Memperoleh nilai akreditasi tertinggi dari Kementerian Agama dan penetapan izin pendirian program tinggi lanjut.
            </p>
          </div>

          {/* Timeline 4 */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <p className="text-4xl font-extrabold text-slate-200 mb-4">2024</p>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Ekspansi Sains & Horizon Global</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Laboratorium digital terintegrasi serta pengiriman duta santri untuk program imersi internasional.
            </p>
          </div>

        </div>

        {/* Banner CTA Biru */}
        <div className="bg-blue-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Ornamen Latar */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-800 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-800 rounded-full opacity-50 blur-2xl"></div>

          {/* Teks Kiri */}
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700 text-[10px] font-bold text-blue-200 tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Penerimaan Santri Baru (PSB) 2025/2026
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Bergabunglah Menjadi Bagian dari Generasi Pejuang Islam
            </h2>
            <p className="text-blue-100 text-sm md:text-base">
              Daftarkan putra-putri Anda untuk mendapat pendidikan bernilai luhur dengan fasilitas terstandar internasional.
            </p>
          </div>

          {/* Tombol Kanan */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="px-6 py-3 rounded-full bg-emerald-400 text-blue-950 text-sm font-bold hover:bg-emerald-300 transition whitespace-nowrap">
              Daftar Sekarang
            </button>
            <button className="px-6 py-3 rounded-full bg-blue-800 border border-blue-700 text-white text-sm font-semibold hover:bg-blue-700 transition whitespace-nowrap">
              Konsultasi WhatsApp
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}