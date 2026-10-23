import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase"; // Perhatikan jumlah titik (../) karena file ini ada di dalam folder kontak
import { useNavigate } from "react-router-dom";

export default function KontakForm() {
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    nama_wali: "",
    nama_santri: "",
    jenjang: "",
    no_wa: "",
    pesan: ""
  });

  // 1. Cek apakah user sudah login
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    checkUser();
  }, []);

  // 2. Fungsi saat form diisi
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Fungsi saat tombol kirim ditekan
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    
    // Cek login dulu
    if (!user) {
      alert("Silakan login terlebih dahulu untuk mengirim pesan konsultasi.");
      navigate("/login-user");
      return;
    }

    // Cek apakah ada kolom yang kosong
    if (!formData.nama_wali || !formData.nama_santri || !formData.jenjang || !formData.no_wa || !formData.pesan) {
      alert("Mohon isi semua kolom formulir.");
      return;
    }

    setLoading(true);

    // Proses kirim ke Supabase
    const { error } = await supabase.from("konsultasi").insert([
      {
        user_id: user.id,
        nama_wali: formData.nama_wali,
        nama_santri: formData.nama_santri,
        jenjang: formData.jenjang,
        no_wa: formData.no_wa,
        pesan: formData.pesan,
      }
    ]);

    setLoading(false);

    if (error) {
      alert("Gagal mengirim pesan: " + error.message);
    } else {
      alert("Pesan berhasil dikirim! Silakan cek balasan di halaman Profil Anda.");
      setFormData({ nama_wali: "", nama_santri: "", jenjang: "", no_wa: "", pesan: "" });
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-slate-200">
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <svg className="w-5 h-5 text-blue-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        <h3 className="text-[10px] md:text-xs font-bold text-blue-900 uppercase tracking-wider leading-tight">
          Layanan Konsultasi Calon Wali Santri
        </h3>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
        Formulir Pertanyaan & Bimbingan Pendaftaran
      </h2>
      <p className="text-xs md:text-sm text-slate-500 mb-6 md:mb-8">
        Silakan lengkapi data di bawah ini. Tim pantau informasi santri baru akan menghubungi Bapak/Ibu melalui nomor WhatsApp resmi kampus.
      </p>

      {!user && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-lg">
          Anda belum login. Silakan login agar pesan Anda dapat dibalas oleh Admin.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5">
              Nama Orang Tua / Wali <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nama_wali"
              value={formData.nama_wali}
              onChange={handleChange}
              placeholder="Contoh: H. Ahmad Fauzi"
              className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5">
              Nama Calon Santri <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nama_santri"
              value={formData.nama_santri}
              onChange={handleChange}
              placeholder="Contoh: Muhammad Rayhan"
              className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5">
              Pilihan Jenjang Pendidikan <span className="text-red-500">*</span>
            </label>
            <select 
              name="jenjang"
              value={formData.jenjang}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-slate-600"
            >
              <option value="">Pilih Program / Jenjang</option>
              <option value="MTs">MTs (SMP)</option>
              <option value="MA">MA (SMA)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5">
              Nomor WhatsApp Aktif <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                name="no_wa"
                value={formData.no_wa}
                onChange={handleChange}
                placeholder="081234567890"
                className="w-full pl-3 md:pl-4 pr-10 py-2 md:py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5">
            Pertanyaan / Pesan Konsultasi <span className="text-red-500">*</span>
          </label>
          <textarea
            name="pesan"
            value={formData.pesan}
            onChange={handleChange}
            rows={3}
            placeholder="Tuliskan pertanyaan Anda mengenai alur pendaftaran, tes seleksi, rincian biaya, atau jadwal kunjungan survei asrama."
            className="w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 w-full sm:w-auto">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <span>Kerahasiaan data wali santri terlindungi.</span>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-6 py-2.5 md:py-3 bg-blue-900 text-white text-xs md:text-sm font-semibold rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? "Mengirim Data..." : "Kirim Pesan / Konsultasi"}
            {!loading && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}