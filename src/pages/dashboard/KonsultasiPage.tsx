import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { CheckCircle, Clock, MessageSquare } from "lucide-react"; // Pastikan lucide-react terinstall

interface Konsultasi {
  id: string;
  nama_wali: string;
  nama_santri: string;
  no_wa: string;
  pesan: string;
  balasan_admin: string | null;
  status: string;
  created_at: string;
}

export default function KonsultasiPage() {
  const [data, setData] = useState<Konsultasi[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Konsultasi | null>(null);
  const [balasan, setBalasan] = useState("");
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("konsultasi")
      .select("*")
      .order("created_at", { ascending: false });
      
    if (!error && data) setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleKirimBalasan = async () => {
    if (!selected || !balasan) {
      alert("Balasan tidak boleh kosong!");
      return;
    }
    
    setSaving(true);
    const { error } = await supabase
      .from("konsultasi")
      .update({ 
        balasan_admin: balasan, 
        status: "Dibalas" 
      })
      .eq("id", selected.id);

    setSaving(false);

    if (!error) {
      alert("Balasan terkirim!");
      setSelected(null);
      setBalasan("");
      fetchData();
    } else {
      alert("Gagal mengirim balasan.");
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">Pesan Konsultasi Masuk</h1>
        <p className="text-sm text-slate-500 mt-1">Daftar pertanyaan dari calon wali santri.</p>
      </div>
      
      {loading ? (
        <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">Memuat data...</div>
      ) : data.length === 0 ? (
        <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">Belum ada pesan konsultasi.</div>
      ) : (
        <>
          {/* TAMPILAN DESKTOP (TABEL) - Sembunyi di HP */}
          <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-5 py-4">Tanggal</th>
                  <th className="px-5 py-4">Nama Wali / Santri</th>
                  <th className="px-5 py-4">No WA</th>
                  <th className="px-5 py-4">Pesan</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-4 whitespace-nowrap">{new Date(item.created_at).toLocaleDateString("id-ID")}</td>
                    <td className="px-5 py-4">
                      <p className="font-bold text-slate-800">{item.nama_wali}</p>
                      <p className="text-xs text-slate-500">Santri: {item.nama_santri}</p>
                    </td>
                    <td className="px-5 py-4 font-medium">{item.no_wa}</td>
                    <td className="px-5 py-4 truncate max-w-xs">{item.pesan}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${item.status === 'Dibalas' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {item.status === 'Dibalas' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {item.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <button 
                        onClick={() => { setSelected(item); setBalasan(item.balasan_admin || ""); }}
                        className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                      >
                        <MessageSquare className="w-4 h-4" />
                        {item.status === 'Dibalas' ? "Edit" : "Balas"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TAMPILAN MOBILE (CARD) - Muncul hanya di HP */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {data.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{item.nama_wali}</p>
                    <p className="text-xs text-slate-500">Santri: {item.nama_santri}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[9px] font-bold uppercase ${item.status === 'Dibalas' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {item.status}
                  </span>
                </div>
                
                <div className="text-xs text-slate-600 mb-3 space-y-1 bg-slate-50 p-2 rounded-lg">
                  <p><span className="text-slate-400">Tanggal:</span> {new Date(item.created_at).toLocaleDateString("id-ID")}</p>
                  <p><span className="text-slate-400">No WA:</span> {item.no_wa}</p>
                  <p className="line-clamp-2 mt-1 italic">"{item.pesan}"</p>
                </div>

                <button 
                  onClick={() => { setSelected(item); setBalasan(item.balasan_admin || ""); }}
                  className="w-full py-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg hover:bg-blue-100 transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  {item.status === 'Dibalas' ? "Edit Balasan" : "Balas Pesan"}
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* MODAL BALASAN (Diperbaiki untuk HP) */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 z-50">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-lg shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-base md:text-lg font-bold text-slate-800">Balas Pesan</h2>
              <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-slate-600 p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="p-5 overflow-y-auto">
              <div className="mb-4 text-sm">
                <p className="text-slate-500 mb-1">Kepada: <strong className="text-slate-800">{selected.nama_wali}</strong></p>
                <div className="p-3 bg-slate-100 rounded-lg border border-slate-200 text-slate-700 italic text-xs md:text-sm">
                  "{selected.pesan}"
                </div>
              </div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">Tulis Balasan:</label>
              <textarea 
                value={balasan}
                onChange={(e) => setBalasan(e.target.value)}
                rows={5}
                className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none"
                placeholder="Tulis balasan untuk wali santri di sini..."
              />
            </div>

            <div className="px-5 py-4 border-t border-slate-100 bg-slate-50 flex gap-3">
              <button onClick={() => setSelected(null)} className="flex-1 px-4 py-2.5 text-slate-600 bg-white border border-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-100 transition">Batal</button>
              <button 
                onClick={handleKirimBalasan} 
                disabled={saving}
                className="flex-1 px-4 py-2.5 bg-blue-900 text-white rounded-xl text-sm font-semibold hover:bg-blue-800 disabled:opacity-50 transition"
              >
                {saving ? "Menyimpan..." : "Kirim Balasan"}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}