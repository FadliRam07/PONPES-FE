import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

// Tipe data Ustadz (Tambahkan foto_url)
interface Ustadz {
  id: string;
  nama: string;
  bidang_keahlian: string;
  no_hp: string;
  status: string;
  foto_url: string;
}

export default function UstadzPage() {
  const [data, setData] = useState<Ustadz[]>([]);
  const [loading, setLoading] = useState(true);
  
  // State untuk Modal Form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState<Ustadz>({
    id: "",
    nama: "",
    bidang_keahlian: "",
    no_hp: "",
    status: "Aktif",
    foto_url: ""
  });

  // State untuk File Upload
  const [fileFoto, setFileFoto] = useState<File | null>(null);

  // Fungsi untuk mengambil data dari Supabase
  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("ustadz").select("*").order("created_at", { ascending: false });
    
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setData(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Fungsi Buka Modal untuk Tambah
  const handleAdd = () => {
    setFormData({ id: "", nama: "", bidang_keahlian: "", no_hp: "", status: "Aktif", foto_url: "" });
    setFileFoto(null); // Reset file input
    setIsEditing(false);
    setIsModalOpen(true);
  };

  // Fungsi Buka Modal untuk Edit
  const handleEdit = (ustadz: Ustadz) => {
    setFormData(ustadz);
    setFileFoto(null); // Reset file input
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Fungsi Simpan (Create / Update) beserta Upload Foto
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    let finalFotoUrl = formData.foto_url;

    try {
      // 1. Proses Upload Foto jika user memilih file baru
      if (fileFoto) {
        const cleanName = fileFoto.name.replace(/[^a-zA-Z0-9.]/g, "_");
        const fileName = `${Date.now()}_${cleanName}`;
        
        const { error: uploadError } = await supabase.storage
          .from("foto_ustadz")
          .upload(fileName, fileFoto, { cacheControl: "3600", upsert: false });

        if (uploadError) throw new Error("Gagal upload foto: " + uploadError.message);

        // Ambil link publik dari foto yang baru diupload
        const { data: publicUrl } = supabase.storage.from("foto_ustadz").getPublicUrl(fileName);
        finalFotoUrl = publicUrl.publicUrl;
      }

      // 2. Simpan Data ke Database (Create / Update)
      const payload = {
        nama: formData.nama,
        bidang_keahlian: formData.bidang_keahlian,
        no_hp: formData.no_hp,
        status: formData.status,
        foto_url: finalFotoUrl
      };

      if (isEditing) {
        const { error } = await supabase.from("ustadz").update(payload).eq("id", formData.id);
        if (error) throw new Error("Gagal update: " + error.message);
      } else {
        const { error } = await supabase.from("ustadz").insert([payload]);
        if (error) throw new Error("Gagal menambah: " + error.message);
      }

      setIsModalOpen(false);
      fetchData(); // Refresh tabel
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  // Fungsi Hapus Data
  const handleDelete = async (id: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ustadz ini?")) {
      const { error } = await supabase.from("ustadz").delete().eq("id", id);
      if (error) {
        alert("Gagal menghapus data: " + error.message);
      } else {
        fetchData();
      }
    }
  };

  return (
    <div className="p-6">
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Data Ustadz</h1>
          <p className="text-sm text-slate-500">Kelola data pengajar beserta foto profilnya.</p>
        </div>
        <button 
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition"
        >
          + Tambah Ustadz
        </button>
      </div>

      {/* Tabel Data */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
            <tr>
              <th className="px-6 py-4">Foto</th> {/* Kolom Baru */}
              <th className="px-6 py-4">Nama Lengkap</th>
              <th className="px-6 py-4">Bidang Keahlian</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                  Memuat data...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                  Belum ada data ustadz. Silakan tambah data baru.
                </td>
              </tr>
            ) : (
              data.map((ustadz) => (
                <tr key={ustadz.id} className="hover:bg-slate-50 transition">
                  {/* Tampilan Foto di Tabel */}
                  <td className="px-6 py-4">
                    {ustadz.foto_url ? (
                      <img 
                        src={ustadz.foto_url} 
                        alt={ustadz.nama} 
                        className="w-10 h-10 rounded-full object-cover border border-slate-200" 
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-[10px] text-center font-medium">
                        No Pic
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900">{ustadz.nama}</td>
                  <td className="px-6 py-4">{ustadz.bidang_keahlian}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                      ustadz.status === 'Aktif' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {ustadz.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <button 
                      onClick={() => handleEdit(ustadz)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(ustadz.id)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Hapus
                    </button>
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
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            
            {/* Header Modal */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-900">
                {isEditing ? "Edit Data Ustadz" : "Tambah Data Ustadz"}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Form Modal */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              
              {/* Input Foto */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Foto Profil (Opsional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files && setFileFoto(e.target.files[0])}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-900 hover:file:bg-blue-100"
                />
                <p className="text-xs text-slate-400 mt-1">Format JPG/PNG. Biarkan kosong jika tidak ingin mengubah foto.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Contoh: Ust. Ahmad Fauzi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Bidang Keahlian</label>
                <input
                  type="text"
                  required
                  value={formData.bidang_keahlian}
                  onChange={(e) => setFormData({ ...formData, bidang_keahlian: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Contoh: Fiqh & Ushul Fiqh"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nomor HP</label>
                <input
                  type="text"
                  value={formData.no_hp}
                  onChange={(e) => setFormData({ ...formData, no_hp: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="081234567890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Non-Aktif">Non-Aktif</option>
                </select>
              </div>

              {/* Footer Modal */}
              <div className="pt-4 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
                >
                  {isSaving ? "Menyimpan..." : "Simpan Data"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}