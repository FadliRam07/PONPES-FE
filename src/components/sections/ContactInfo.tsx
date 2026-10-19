export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Kartu Biru Kontak */}
      <div className="bg-blue-950 rounded-2xl p-6 md:p-8 text-white shadow-md relative overflow-hidden">
        {/* Ornamen Background (Opsional) */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-900 rounded-full opacity-50 blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900 border border-blue-800 text-[10px] font-semibold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Kantor Layanan Resmi
          </div>

          <h2 className="text-2xl font-bold mb-2">Sekretariat Pimpinan & Biro PSB</h2>
          <p className="text-sm text-blue-200 mb-8">
            Melayani pendaftaran santri baru, legalisasi dokumen, mutasi santri, dan konsultasi kurikulum terpadu.
          </p>

          <div className="space-y-6">
            {/* Alamat */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-blue-300 uppercase tracking-wider">Alamat Kampus Pusat</p>
                <p className="text-sm font-medium mt-1">Kampus Al-Hikmah Horizon, Jl. Terusan Pesantren Raya No. 99, Jawa Barat, Indonesia.</p>
              </div>
            </div>

            {/* Telepon */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-blue-300 uppercase tracking-wider">Call Center / WhatsApp PSB</p>
                <p className="text-lg font-bold mt-1">+62 812-3456-7890</p>
                <p className="text-xs text-blue-300 mt-0.5">Layanan Fast Response Pukul 08.00 - 16.00 WIB</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-blue-300 uppercase tracking-wider">Email Resmi Pesantren</p>
                <p className="text-sm font-medium mt-1">sekretariat@alhikmah-pesantren.ac.id</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kartu Putih Jam Operasional */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Waktu Kunjungan Wali Santri</p>
            <p className="text-sm font-bold text-slate-900 mt-1">Sabtu & Ahad (08.00 - 17.00 WIB)</p>
            <p className="text-xs text-slate-500 mt-1">Wajib konfirmasi H-1 melalui WhatsApp pesanan untuk kelancaran akses masuk tamu.</p>
          </div>
        </div>
      </div>
    </div>
  );
}