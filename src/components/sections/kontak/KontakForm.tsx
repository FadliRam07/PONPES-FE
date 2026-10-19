export default function KontakForm() {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 h-full">
      {/* Header Form */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-900">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </div>
        <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider">
          Layanan Konsultasi Calon Wali Santri
        </h3>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Formulir Pertanyaan & Bimbingan Pendaftaran
      </h2>
      <p className="text-sm text-slate-500 mb-8">
        Silakan lengkapi data di bawah ini. Tim pantau informasi santri baru akan menghubungi Bapak/Ibu melalui nomor WhatsApp resmi kampus.
      </p>

      <form className="space-y-5">
        {/* Baris 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Nama Orang Tua / Wali <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: H. Ahmad Fauzi"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Nama Calon Santri <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Muhammad Rayhan"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Baris 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Pilihan Jenjang Pendidikan <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition text-slate-600">
              <option>Pilih Program / Jenjang</option>
              <option>MTs (SMP)</option>
              <option>MA (SMA)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Nomor WhatsApp Aktif <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                placeholder="081234567890"
                className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              />
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Baris 3: Textarea */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Pertanyaan / Pesan Konsultasi <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Tuliskan pertanyaan Anda mengenai alur pendaftaran, tes seleksi, rincian biaya, atau jadwal kunjungan survei asrama."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition resize-none"
          ></textarea>
        </div>

        {/* Footer Form */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <span>Kerahasiaan data wali santri terlindungi sistem enkripsi password.</span>
          </div>
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2"
          >
            Kirim Pesan / Konsultasi
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </div>
      </form>
    </div>
  );
}