export default function VisiMisi() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Visi Misi */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
            Arah Perjuangan
          </div>
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Visi & Misi Lembaga</h2>
          <p className="text-slate-500">
            Pilar komitmen jangka panjang dalam membimbing insan santri menuju kemuliaan adab dan keunggulan peradaban.
          </p>
        </div>

        {/* Kotak Visi */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex gap-6 mb-10">
          <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xl">
            V
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Visi Utama Al-Hikmah</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-[10px] font-bold text-emerald-600">Menuju 2025</span>
            </div>
            <p className="text-xl md:text-2xl font-medium text-slate-900 leading-snug">
              “Menjadi pusat keunggulan pendidikan Islam modern yang mencetak ulama yang intelek dan intelek yang ulama, bertaraf nasional maupun internasional.”
            </p>
          </div>
        </div>

        {/* Grid Misi (4 Kotak) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Misi 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">
              01
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Integrasi Keilmuan Otentik & Kontemporer</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Menyelenggarakan sistem pendidikan kultural Mu'allimin Al-Islamiyah yang menggabungkan keilmuan dirasah islamiyah, tahfidz Qur'an murni, serta penguasaan sains dan teknologi.
              </p>
            </div>
          </div>
          {/* Misi 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">
              02
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Penanaman Karakter & Adab Qur'ani</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Membentuk ekosistem asrama 24 jam yang mendidik jiwa santri melalui keteladanan para asatidz, kedisiplinan beribadah harian, serta pembiasaan akhlakul karimah.
              </p>
            </div>
          </div>
          {/* Misi 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">
              03
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Kecakapan Bahasa & Komunikasi Global</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Memperluas lingkungan imersi environment Bahasa Arab & Inggris dalam percakapan, khutbah, debat ilmiah, dan kajian literatur dunia islam dan Barat secara aktif.
              </p>
            </div>
          </div>
          {/* Misi 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">
              04
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Pengabdian & Kepemimpinan Ummat</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Mempersiapkan kader pemimpin masa depan yang berjiwa aktif, peduli terhadap problematika sosial, dan siap menjadi periset peradaban yang masyhur.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}