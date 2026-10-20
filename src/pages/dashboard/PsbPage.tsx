import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

interface Pendaftar {
  id: string;
  nama_lengkap: string;
  jenis_kelamin: string;
  pilihan_jenjang: string;
  no_whatsapp: string;
  status: string;
  url_kk: string;
  url_ijazah: string;
  created_at: string;
}

export default function PsbPage() {
  const [data, setData] = useState<Pendaftar[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("Semua"); // Filter Status

  // Modal Detail
  const [selectedPendaftar, setSelectedPendaftar] = useState<Pendaftar | null>(null);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("pendaftaran_santri")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setData(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Update Status (ACC / Tolak)
  const handleUpdateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from("pendaftaran_santri")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      alert("Gagal update status: " + error.message);
    } else {
      fetchData();
      if (selectedPendaftar) {
        setSelectedPendaftar({ ...selectedPendaftar, status: newStatus });
      }
    }
  };

  // Filter Data Berdasarkan Tab
  const filteredData = filter === "Semua" 
    ? data 
    : data.filter((item) => item.status === filter);

  return (
    <div className="p-8">
      {/* Header Halaman */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pendaftaran Santri Baru</h1>
          <p className="text-sm text-slate-500">Kelola data calon santri yang masuk melalui form pendaftaran.</p>
        </div>
        
        {/* Tombol Filter Status */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
          {["Semua", "Pending", "Diterima", "Ditolak"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition ${
                filter === status ? "bg-white text-blue-900 shadow-sm" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Tabel Data */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
            <tr>
              <th className="px-6 py-4">Nama Santri</th>
              <th className="px-6 py-4">Jenjang</th>
              <th className="px-6 py-4">No. WhatsApp</th>
              <th className="px-6 py-4">Tanggal Daftar</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-slate-400">Memuat data...</td>
              </tr>
            ) : filteredData.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-slate-400">Tidak ada data di kategori ini.</td>
              </tr>
            ) : (
              filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-medium text-slate-900">{item.nama_lengkap}</td>
                  <td className="px-6 py-4">{item.pilihan_jenjang}</td>
                  <td className="px-6 py-4">{item.no_whatsapp}</td>
                  <td className="px-6 py-4">{new Date(item.created_at).toLocaleDateString("id-ID")}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                      item.status === 'Diterima' ? 'bg-emerald-100 text-emerald-700' : 
                      item.status === 'Ditolak' ? 'bg-red-100 text-red-700' : 
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => setSelectedPendaftar(item)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Lihat Detail
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL DETAIL PENDAFTAR ================= */}
      {selectedPendaftar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-lg text-slate-900">Detail Pendaftar</h3>
              <button onClick={() => setSelectedPendaftar(null)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              {/* Info Data */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Nama Lengkap</p>
                  <p className="font-semibold text-slate-900">{selectedPendaftar.nama_lengkap}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Jenjang Pilihan</p>
                  <p className="font-semibold text-slate-900">{selectedPendaftar.pilihan_jenjang}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">No. WhatsApp</p>
                  <a href={`https://wa.me/${selectedPendaftar.no_whatsapp}`} target="_blank" rel="noreferrer" className="font-semibold text-emerald-600 hover:underline">
                    {selectedPendaftar.no_whatsapp}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Status Saat Ini</p>
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                      selectedPendaftar.status === 'Diterima' ? 'bg-emerald-100 text-emerald-700' : 
                      selectedPendaftar.status === 'Ditolak' ? 'bg-red-100 text-red-700' : 
                      'bg-amber-100 text-amber-700'
                    }`}>
                    {selectedPendaftar.status}
                  </span>
                </div>
              </div>

              {/* Link Berkas */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 border-t border-slate-100 pt-4">Berkas Pendukung</h4>
                <div className="flex gap-3">
                  {selectedPendaftar.url_kk ? (
                    <a href={selectedPendaftar.url_kk} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-100 transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      Lihat KK
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 italic">KK tidak diupload</span>
                  )}
                  {selectedPendaftar.url_ijazah ? (
                    <a href={selectedPendaftar.url_ijazah} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-100 transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      Lihat Ijazah
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Ijazah tidak diupload</span>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Aksi Modal */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
              {selectedPendaftar.status !== "Ditolak" && (
                <button 
                  onClick={() => handleUpdateStatus(selectedPendaftar.id, "Ditolak")}
                  className="px-5 py-2 bg-red-100 text-red-700 font-semibold text-sm rounded-lg hover:bg-red-200 transition"
                >
                  Tolak Pendaftaran
                </button>
              )}
              {selectedPendaftar.status !== "Diterima" && (
                <button 
                  onClick={() => handleUpdateStatus(selectedPendaftar.id, "Diterima")}
                  className="px-5 py-2 bg-emerald-600 text-white font-semibold text-sm rounded-lg hover:bg-emerald-700 transition"
                >
                  Terima Pendaftaran (ACC)
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}