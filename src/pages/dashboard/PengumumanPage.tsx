import { useState } from "react";

// Tipe data Pengumuman
interface Pengumuman {
  id: string;
  judul: string;
  kategori: string;
  tanggal: string;
  status: string;
}

// Data Dummy (Sementara karena BE belum siap)
const DUMMY_DATA: Pengumuman[] = [
  { id: "1", judul: "Pembukaan Pendaftaran Santri Baru 2025/2026", kategori: "PSB", tanggal: "2025-01-15", status: "Publish" },
  { id: "2", judul: "Jadwal Ujian Tengah Semester (UTS) Ganjil", kategori: "Akademik", tanggal: "2025-02-10", status: "Publish" },
  { id: "3", judul: "Kunjungan Wali Santri Bulan Februari", kategori: "Umum", tanggal: "2025-02-20", status: "Draft" },
];

export default function PengumumanPage() {
  const [data, setData] = useState<Pengumuman[]>(DUMMY_DATA);
  
  // State Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Pengumuman>({
    id: "",
    judul: "",
    kategori: "Umum",
    tanggal: "",
    status: "Draft",
  });

  const handleAdd = () => {
    setFormData({ 
      id: "", 
      judul: "", 
      kategori: "Umum", 
      tanggal: new Date().toISOString().split("T")[0], // Set tanggal hari ini
      status: "Draft" 
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEdit = (pengumuman: Pengumuman) => {
    setFormData(pengumuman);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Yakin ingin menghapus pengumuman ini?")) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  // Simpan Data (Hanya manipulasi state lokal sementara)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing) {
      setData(data.map((item) => item.id === formData.id ? formData : item));
    } else {
      const newData = { ...formData, id: Date.now().toString() };
      setData([newData, ...data]);
    }
    
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8">
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pengumuman</h1>
          <p className="text-sm text-slate-500">Kelola informasi, berita, dan pengumuman untuk wali santri.</p>
        </div>
        <button 
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition"
        >
          + Buat Pengumuman
        </button>
      </div>

      {/* Tabel Data */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
            <tr>
              <th className="px-6 py-4">Judul Pengumuman</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Tanggal</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-400">Belum ada pengumuman.</td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-medium text-slate-900">{item.judul}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-100 rounded text-xs font-semibold">{item.kategori}</span>
                  </td>
                  <td className="px-6 py-4">{new Date(item.tanggal).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                      item.status === 'Publish' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <button onClick={() => handleEdit(item)} className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-800 font-medium">Hapus</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL FORM (POP-UP) ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden">
            
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-lg text-slate-900">
                {isEditing ? "Edit Pengumuman" : "Buat Pengumuman Baru"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Judul Pengumuman</label>
                <input required type="text" name="judul" value={formData.judul} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Contoh: Libur Hari Raya Idul Fitri" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Kategori</label>
                  <select name="kategori" value={formData.kategori} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none">
                    {["Umum", "Akademik", "PSB", "Kegiatan", "Penting"].map(k => (
                      <option key={k} value={k}>{k}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal</label>
                  <input required type="date" name="tanggal" value={formData.tanggal} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
              </div>

              {/* Untuk sementara text area belum disambungkan ke state konten karena data dummy belum punya field konten */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Isi Pengumuman</label>
                <textarea rows={4} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none resize-none" placeholder="Tuliskan detail pengumuman di sini..."></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status Publikasi</label>
                <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none">
                  <option value="Draft">Draft (Simpan Sementara)</option>
                  <option value="Publish">Publish (Tampilkan ke Publik)</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-2 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition">Batal</button>
                <button type="submit" className="px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition">Simpan Pengumuman</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}