export default function DirectionInfo() {
  return (
    <div className="space-y-4">
      {/* Kartu 1: Mobil */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Via Jalan Tol & Mobil Pribadi</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Keluar melalui Gerbang Tol Pasteur / Buah Batu, ambil jalur Lingkar Timur Raya sejauh 8 km, lalu belok kiri di Gerbang Pesantren Raya.
            </p>
            <p className="text-xs font-semibold text-emerald-700 mt-2">Waktu Tempuh: ± 25 Menit dari Gerbang Tol</p>
          </div>
        </div>
      </div>

      {/* Kartu 2: Kereta */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Via Kereta Cepat & Stasiun</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Dari Stasiun Kereta Cepat Tegalluar atau Stasiun Bandung, gunakan layanan taksi resmi kampus atau shuttle bus santri setiap akhir pekan.
            </p>
            <p className="text-xs font-semibold text-blue-700 mt-2">Layanan Penjemputan Santri Tersedia</p>
          </div>
        </div>
      </div>

      {/* Kartu 3: Keamanan */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Prosedur Keamanan Tamu</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Seluruh pengunjung wajib menunjukkan kartu identitas resmi (KTP/SIM) di Pos Satpam Utama. Pintu Lintut penurunan Kartu Visitor Pass.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}