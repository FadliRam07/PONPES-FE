import { useEffect, useState } from "react";
import { Users, UserCheck, LayoutDashboard } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function DashboardPage() {
  // State untuk menyimpan angka statistik
  const [totalSantri, setTotalSantri] = useState<number>(0);
  const [totalUstadz, setTotalUstadz] = useState<number>(0);
  const [pendaftarBaru, setPendaftarBaru] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fungsi untuk mengambil data dari Supabase
  const fetchData = async () => {
    setIsLoading(true);

    // 1. Hitung Total Santri (Pendaftar yang statusnya 'Diterima')
    const { count: countSantri } = await supabase
      .from("pendaftaran_santri")
      .select("*", { count: "exact", head: true })
      .eq("status", "Diterima");
    setTotalSantri(countSantri || 0);

    // 2. Hitung Total Ustadz
    const { count: countUstadz } = await supabase
      .from("ustadz")
      .select("*", { count: "exact", head: true });
    setTotalUstadz(countUstadz || 0);

    // 3. Hitung Pendaftar Baru (Pendaftar yang statusnya 'Pending')
    const { count: countPending } = await supabase
      .from("pendaftaran_santri")
      .select("*", { count: "exact", head: true })
      .eq("status", "Pending");
    setPendaftarBaru(countPending || 0);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();

    // Opsional: Setup Realtime Subscription (Agar angka berubah otomatis tanpa refresh)
    const subscription = supabase
      .channel("custom-all-channel")
      .on("postgres_changes", { event: "*", schema: "public" }, () => {
        fetchData(); // Panggil ulang fetch data jika ada perubahan di database
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  // Array untuk render kartu
  const stats = [
    { 
      title: "Total Santri", 
      value: isLoading ? "..." : totalSantri.toLocaleString('id-ID'), 
      icon: Users, 
      color: "text-blue-600", 
      bg: "bg-blue-100" 
    },
    { 
      title: "Data Ustadz", 
      value: isLoading ? "..." : totalUstadz.toLocaleString('id-ID'), 
      icon: UserCheck, 
      color: "text-emerald-600", 
      bg: "bg-emerald-100" 
    },
    { 
      title: "Pendaftar Baru", 
      value: isLoading ? "..." : pendaftarBaru.toLocaleString('id-ID'), 
      icon: LayoutDashboard, 
      color: "text-amber-600", 
      bg: "bg-amber-100" 
    },
  ];

  return (
    <div className="p-8">
      {/* Banner Sambutan */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 rounded-2xl shadow-lg border border-emerald-700 p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        
        <h2 className="text-2xl font-bold mb-2 relative z-10">
          Selamat datang kembali, Admin!
        </h2>
        <p className="text-emerald-100 text-sm max-w-xl relative z-10">
          Ini adalah pusat kendali website Pondok Pesantren Al-Hikmah. Anda dapat mengelola data santri, jadwal, dan pengumuman melalui menu di samping.
        </p>
      </div>

      {/* Grid Statistik */}
      <h3 className="text-lg font-bold text-slate-800 mb-4">Ringkasan Data</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center gap-4 hover:shadow-md transition duration-300"
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}>
              <item.icon className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{item.title}</p>
              <p className="text-3xl font-bold text-slate-900 mt-1">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex items-center justify-center h-64 border-dashed border-2 border-slate-300">
        <p className="text-slate-400 text-sm font-medium">Area Grafik atau Tabel Data Terbaru akan tampil di sini</p>
      </div>
    </div>
  );
}