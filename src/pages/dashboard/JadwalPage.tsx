import { useState } from "react";

// Tipe data Jadwal
interface Jadwal {
  id: string;
  nama_kegiatan: string;
  hari: string;
  jam_mulai: string;
  jam_selesai: string;
  tempat: string;
  penanggung_jawab: string;
}

// Data Dummy (Sementara karena BE belum siap)
const DUMMY_DATA: Jadwal[] = [
  { id: "1", nama_kegiatan: "Sholat Subuh Berjamaah", hari: "Setiap Hari", jam_mulai: "04:30", jam_selesai: "05:00", tempat: "Masjid Utama", penanggung_jawab: "Pengurus Asrama" },
  { id: "2", nama_kegiatan: "Kajian Kitab Kuning (Fathul Qorib)", hari: "Senin", jam_mulai: "08:00", jam_selesai: "09:30", tempat: "Ruang Kelas A1", penanggung_jawab: "Ust. Ahmad Fauzi" },
  { id: "3", nama_kegiatan: "Muhadhoroh (Latihan Pidato)", hari: "Kamis", jam_mulai: "20:00", jam_selesai: "22:00", tempat: "Aula Utama", penanggung_jawab: "OSIS & Organisasi" },
];

export default function JadwalPage() {
  const [data, setData] = useState<Jadwal[]>(DUMMY_DATA);
  
  // State Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Jadwal>({
    id: "",
    nama_kegiatan: "",
    hari: "Senin",
    jam_mulai: "",
    jam_selesai: "",
    tempat: "",
    penanggung_jawab: "",
  });

  const handleAdd = () => {
    setFormData({ id: "", nama_kegiatan: "", hari: "Senin", jam_mulai: "", jam_selesai: "", tempat: "", penanggung_jawab: "" });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEdit = (jadwal: Jadwal) => {
    setFormData(jadwal);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Yakin ingin menghapus jadwal ini?")) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8">
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Jadwal Kegiatan</h1>
          <p className="text-sm text-slate-500">Kelola agenda harian dan kegiatan pondok pesantren.</p>
        </div>
        <button 
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition"
        >
          + Tambah Jadwal
        </button>
      </div>

      {/* Tabel Data */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
            <tr>
              <th className="px-6 py-4">Nama Kegiatan</th>
              <th className="px-6 py-4">Hari</th>
              <th className="px-6 py-4">Waktu</th>
              <th className="px-6 py-4">Tempat</th>
              <th className="px-6 py-4">Penanggung Jawab</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-slate-400">Belum ada jadwal.</td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-medium text-slate-900">{item.nama_kegiatan}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-100 rounded text-xs font-semibold">{item.hari}</span>
                  </td>
                  <td className="px-6 py-4">{item.jam_mulai} - {item.jam_selesai}</td>
                  <td className="px-6 py-4">{item.tempat}</td>
                  <td className="px-6 py-4">{item.penanggung_jawab}</td>
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
                {isEditing ? "Edit Jadwal" : "Tambah Jadwal"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Kegiatan</label>
                <input required type="text" name="nama_kegiatan" value={formData.nama_kegiatan} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Hari</label>
                  <select name="hari" value={formData.hari} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none">
                    {["Setiap Hari", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Ahad"].map(h => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tempat</label>
                  <input required type="text" name="tempat" value={formData.tempat} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Jam Mulai</label>
                  <input required type="time" name="jam_mulai" value={formData.jam_mulai} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Jam Selesai</label>
                  <input required type="time" name="jam_selesai" value={formData.jam_selesai} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Penanggung Jawab</label>
                <input required type="text" name="penanggung_jawab" value={formData.penanggung_jawab} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>

              <div className="pt-4 flex justify-end gap-2 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition">Batal</button>
                <button type="submit" className="px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}