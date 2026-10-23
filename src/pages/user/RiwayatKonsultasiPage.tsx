import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function RiwayatKonsultasiPage() {
  const [riwayat, setRiwayat] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRiwayat = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("konsultasi")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error ambil riwayat:", error);
      } else if (data) {
        setRiwayat(data);
      }
      setLoading(false);
    };

    fetchRiwayat();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Memuat riwayat konsultasi...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Riwayat Konsultasi</h1>
            <p className="text-sm text-slate-500 mt-1">Daftar pertanyaan Anda dan balasan dari Admin.</p>
          </div>
          <Link 
            to="/profil-saya" 
            className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition text-center"
          >
            &larr; Kembali ke Profil
          </Link>
        </div>

        {riwayat.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
            <p className="text-slate-500">Belum ada riwayat konsultasi.</p>
            <Link to="/kontak" className="text-blue-600 hover:underline mt-2 inline-block text-sm">Kirim pertanyaan baru</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {riwayat.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
                  <p className="text-xs font-semibold text-slate-600">
                    {new Date(item.created_at).toLocaleDateString("id-ID", { 
                      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                    })}
                  </p>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    item.status === 'Dibalas' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {item.status === 'Dibalas' ? 'Sudah Dibalas' : 'Menunggu Balasan'}
                  </span>
                </div>

                <div className="p-5">
                  <div className="mb-4">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Pertanyaan Anda:</p>
                    <p className="text-sm text-slate-800">{item.pesan}</p>
                  </div>

                  {item.balasan_admin ? (
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-4 relative">
                      <div className="absolute -top-3 left-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Admin</div>
                      <p className="text-sm text-blue-900 mt-1">{item.balasan_admin}</p>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-400 italic mt-2">
                      Balasan akan muncul di sini setelah admin memproses pesan Anda.
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}