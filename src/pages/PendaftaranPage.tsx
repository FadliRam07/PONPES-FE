import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Navbar from "../components/layouts/Navbar"; // 1. Tambahkan Import Navbar

export default function PendaftaranPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // State untuk menyimpan isian form
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    jenis_kelamin: "L",
    tempat_lahir: "",
    tanggal_lahir: "",
    asal_sekolah: "",
    pilihan_jenjang: "MTs",
    nama_ayah: "",
    nama_ibu: "",
    no_whatsapp: "",
    alamat: "",
  });

  // State untuk File
  const [fileKK, setFileKK] = useState<File | null>(null);
  const [fileIjazah, setFileIjazah] = useState<File | null>(null);

  // Fungsi Handle Input Teks
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi Handle Upload File
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Fungsi Submit ke Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let urlKK = "";
      let urlIjazah = "";

      // 2. Perbaikan Upload KK: Bersihkan nama file dan tambahkan opsi upsert
      if (fileKK) {
        const cleanNameKK = fileKK.name.replace(/[^a-zA-Z0-9.]/g, "_");
        const fileNameKK = `${Date.now()}_${cleanNameKK}`;
        
        const { error: errKK } = await supabase.storage
          .from("berkas_psb")
          .upload(fileNameKK, fileKK, { cacheControl: "3600", upsert: false });
          
        if (errKK) throw new Error("Gagal upload KK: " + errKK.message);
        
        const { data: publicUrlKK } = supabase.storage.from("berkas_psb").getPublicUrl(fileNameKK);
        urlKK = publicUrlKK.publicUrl;
      }

      // 2. Perbaikan Upload Ijazah
      if (fileIjazah) {
        const cleanNameIjazah = fileIjazah.name.replace(/[^a-zA-Z0-9.]/g, "_");
        const fileNameIjazah = `${Date.now()}_${cleanNameIjazah}`;
        
        const { error: errIjazah } = await supabase.storage
          .from("berkas_psb")
          .upload(fileNameIjazah, fileIjazah, { cacheControl: "3600", upsert: false });
          
        if (errIjazah) throw new Error("Gagal upload Ijazah: " + errIjazah.message);
        
        const { data: publicUrlIjazah } = supabase.storage.from("berkas_psb").getPublicUrl(fileNameIjazah);
        urlIjazah = publicUrlIjazah.publicUrl;
      }

      // 3. Simpan Data ke Database
      const { error: dbError } = await supabase.from("pendaftaran_santri").insert([
        {
          ...formData,
          url_kk: urlKK,
          url_ijazah: urlIjazah,
          status: "Pending",
        },
      ]);

      if (dbError) throw new Error("Gagal menyimpan data: " + dbError.message);

      // Jika sukses
      setSuccess(true);
      window.scrollTo(0, 0); // Scroll ke atas

    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Tampilan Jika Sukses
  if (success) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar /> {/* 3. Navbar di halaman sukses */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white p-10 rounded-3xl shadow-lg text-center max-w-md w-full border border-slate-100">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Pendaftaran Berhasil!</h1>
            <p className="text-slate-500 mb-8 text-sm">
              Terima kasih telah mendaftar. Tim panitia PSB akan segera memverifikasi data Anda dan menghubungi melalui WhatsApp.
            </p>
            <Link to="/" className="inline-block px-6 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Tampilan Form
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      <Navbar /> {/* 4. Navbar di halaman form */}
      
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
          {/* Header Form */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-blue-950">Formulir Pendaftaran Santri Baru</h1>
            <p className="text-slate-500 mt-2">Tahun Ajaran 2025/2026</p>
          </div>

          {/* Kartu Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            
            {/* Bagian 1: Data Santri */}
            <div className="p-8 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-xs">1</span>
                Data Calon Santri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nama Lengkap Sesuai Ijazah *</label>
                  <input required type="text" name="nama_lengkap" onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Jenis Kelamin *</label>
                  <select required name="jenis_kelamin" onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none">
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Pilihan Jenjang *</label>
                  <select required name="pilihan_jenjang" onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none">
                    <option value="MTs">MTs (SMP)</option>
                    <option value="MA">MA (SMA)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Tempat Lahir *</label>
                  <input required type="text" name="tempat_lahir" onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Tanggal Lahir *</label>
                  <input required type="date" name="tanggal_lahir" onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Asal Sekolah (SD/MI) *</label>
                  <input required type="text" name="asal_sekolah" onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
              </div>
            </div>

            {/* Bagian 2: Data Wali */}
            <div className="p-8 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-xs">2</span>
                Data Orang Tua / Wali
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nama Ayah *</label>
                  <input required type="text" name="nama_ayah" onChange={handleChange} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nama Ibu *</label>
                  <input required type="text" name="nama_ibu" onChange={handleChange} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nomor WhatsApp Aktif *</label>
                  <input required type="tel" name="no_whatsapp" onChange={handleChange} placeholder="08123456789" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Alamat Lengkap *</label>
                  <textarea required name="alamat" rows={3} onChange={handleChange} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none resize-none"></textarea>
                </div>
              </div>
            </div>

            {/* Bagian 3: Upload Berkas */}
            <div className="p-8 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-xs">3</span>
                Unggah Berkas Pendukung
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Scan Kartu Keluarga (KK) *</label>
                  <input required type="file" accept=".pdf,image/*" onChange={(e) => handleFileChange(e, setFileKK)} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-900 hover:file:bg-blue-100" />
                  <p className="text-xs text-slate-400 mt-1">Format PDF atau JPG/PNG. Maks 2MB.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Scan Ijazah / SKL *</label>
                  <input required type="file" accept=".pdf,image/*" onChange={(e) => handleFileChange(e, setFileIjazah)} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-900 hover:file:bg-blue-100" />
                  <p className="text-xs text-slate-400 mt-1">Format PDF atau JPG/PNG. Maks 2MB.</p>
                </div>
              </div>
            </div>

            {/* Tombol Submit */}
            <div className="p-8 bg-slate-50 flex justify-end">
              <button type="submit" disabled={loading} className="px-8 py-3.5 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition disabled:opacity-50 flex items-center gap-2">
                {loading ? "Mengirim Data..." : "Kirim Pendaftaran"}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}