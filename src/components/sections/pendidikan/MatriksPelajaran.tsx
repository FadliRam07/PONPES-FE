export default function MatriksPelajaran() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Pemetaan Materi Pokok</p>
          <h2 className="text-3xl font-bold text-blue-950">Matriks Mata Pelajaran & Kompetensi</h2>
        </div>

        {/* Grid 3 Fase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Fase 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm">
                01
              </span>
              <h3 className="font-bold text-slate-900">Fase I'dad Lughawi (Persiapan)</h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Ditujukan bagi santri baru untuk akselerasi adaptasi bahasa Arab dasar, tajwid Al-Qur'an dasar, adab thalabul ilmi, dan kemandirian berasrama.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1 h-1 rounded-full bg-slate-300"></span> Durusul Lughah Al-Arabiyyah
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1 h-1 rounded-full bg-slate-300"></span> Matan Al-Ajurumiyyah (Tahsin)
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1 h-1 rounded-full bg-slate-300"></span> Ta'limul Muta'allim (Adab Santri)
              </li>
            </ul>
          </div>

          {/* Fase 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm">
                02
              </span>
              <h3 className="font-bold text-slate-900">Fase Mutawassith (Menengah)</h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Penguatan tata bahasa Arab (Nahwu, Sharaf, I'rab) dengan 30 juz, sains terapan kurikulum nasional, dan percakapan bahasa Inggris aktif.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1 h-1 rounded-full bg-slate-300"></span> Matan Al-Ajrumiyyah & Imrithi
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1 h-1 rounded-full bg-slate-300"></span> Fathul Qorib Al-Mujib (Fiqh)
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1 h-1 rounded-full bg-slate-300"></span> Cambridge English for Young Learners
              </li>
            </ul>
          </div>

          {/* Fase 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm">
                03
              </span>
              <h3 className="font-bold text-slate-900">Fase 'Ali & Takhasus (Lanjutan)</h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Pematangan hafalan 30 juz mutqin, uluh mu'adalah, penguatan UTBK PTN/setara sekolah tinggi Timur Tengah, riset ilmiah, dan kewirausahaan.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1 h-1 rounded-full bg-slate-300"></span> Alfiyah Ibnu Malik & Balaghah
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1 h-1 rounded-full bg-slate-300"></span> Al-Fiqh Wa Ushul Fiqh (Manhaji)
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1 h-1 rounded-full bg-slate-300"></span> Program Intensif SBMPTN / Mu'adalah
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}