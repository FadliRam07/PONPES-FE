import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Tambahkan Link
import { supabase } from "../../lib/supabase";
import Navbar from "../../components/layouts/Navbar";

export default function ProfilUserPage() {
  const [pendaftaran, setPendaftaran] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStatus = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/login-user");
        return;
      }

      const { data } = await supabase
        .from("pendaftaran_santri")
        .select("*")
        .eq("user_id", user.id)
        .single();

      setPendaftaran(data);
      setLoading(false);
    };
    fetchStatus();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) return <div className="p-10 text-center">Memuat data...</div>;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full">
        
        {/* HEADER HALAMAN */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-slate-900">Status Pendaftaran Saya</h1>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* TOMBOL RIWAYAT KONSULTASI BARU */}
            <Link 
              to="/profil-saya/konsultasi" 
              className="flex-1 sm:flex-none text-center px-4 py-2 bg-blue-100 text-blue-900 text-sm font-semibold rounded-lg hover:bg-blue-200 transition"
            >
              Riwayat Konsultasi
            </Link>
            <button onClick={handleLogout} className="px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition">
              Logout
            </button>
          </div>
        </div>

        {/* KONDISI 1: Jika belum mendaftar sama sekali */}
        {!pendaftaran ? (
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border text-center">
            <p className="text-slate-500 mb-4">Anda belum mengisi form pendaftaran.</p>
            <Link to="/daftar" className="inline-block px-6 py-2 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-800 transition">
              Isi Form Pendaftaran
            </Link>
          </div>
        ) : (
          /* KONDISI 2: Jika sudah mendaftar, tampilkan status */
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            
            {/* Header Kartu */}
            <div className="p-5 md:p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Nama Calon Santri</p>
                <p className="text-lg md:text-xl font-bold text-slate-900">{pendaftaran.nama_lengkap}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Jenjang</p>
                <p className="font-semibold text-slate-800">{pendaftaran.pilihan_jenjang}</p>
              </div>
            </div>

            {/* Area Status */}
            <div className="p-5 md:p-8">
              {pendaftaran.status === "Pending" && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-amber-800 mb-1">Menunggu Verifikasi Panitia</h3>
                    <p className="text-xs md:text-sm text-amber-700 leading-relaxed">
                      Pendaftaran Anda telah kami terima dan sedang dalam proses peninjauan oleh panitia PSB. Silakan cek halaman ini secara berkala untuk melihat pembaruan status.
                    </p>
                  </div>
                </div>
              )}

              {pendaftaran.status === "Diterima" && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-emerald-800 mb-1">Selamat, Anda Diterima!</h3>
                    <p className="text-xs md:text-sm text-emerald-700 leading-relaxed">
                      Berdasarkan hasil seleksi, calon santri dinyatakan <strong>LULUS</strong>. Silakan hubungi admin melalui WhatsApp untuk informasi daftar ulang dan persyaratan berkas fisik.
                    </p>
                  </div>
                </div>
              )}

              {pendaftaran.status === "Ditolak" && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-red-800 mb-1">Mohon Maaf, Belum Lulus</h3>
                    <p className="text-xs md:text-sm text-red-700 leading-relaxed">
                      Kami mohon maaf, berdasarkan hasil seleksi, calon santri belum dapat kami terima pada tahun ajaran ini. Terima kasih atas minat Anda.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Detail Data Pendaftaran */}
            <div className="bg-slate-50 p-5 md:p-6 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-800 mb-4">Rincian Data Pendaftaran</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-500 text-xs md:text-sm">Tempat, Tanggal Lahir</p>
                  <p className="font-medium text-slate-900 mt-0.5">{pendaftaran.tempat_lahir}, {new Date(pendaftaran.tanggal_lahir).toLocaleDateString('id-ID')}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs md:text-sm">Asal Sekolah</p>
                  <p className="font-medium text-slate-900 mt-0.5">{pendaftaran.asal_sekolah}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs md:text-sm">Nama Ayah</p>
                  <p className="font-medium text-slate-900 mt-0.5">{pendaftaran.nama_ayah}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs md:text-sm">Nama Ibu</p>
                  <p className="font-medium text-slate-900 mt-0.5">{pendaftaran.nama_ibu}</p>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}