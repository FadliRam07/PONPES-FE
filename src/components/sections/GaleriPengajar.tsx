import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

interface Ustadz {
  id: string;
  nama: string;
  bidang_keahlian: string;
  foto_url: string | null;
}

export default function GaleriPengajar() {
  const [pengajar, setPengajar] = useState<Ustadz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUstadz = async () => {
      const { data, error } = await supabase
        .from("ustadz")
        .select("id, nama, bidang_keahlian, foto_url")
        .eq("status", "Aktif")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setPengajar(data);
      }
      setLoading(false);
    };

    fetchUstadz();
  }, []);

  if (loading || pengajar.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Tenaga Pendidik</p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950">Ustadz & Pengajar Kami</h2>
          <p className="text-sm md:text-base text-slate-500 mt-2 max-w-xl mx-auto">Dididik oleh para asatidzah lulusan dalam dan luar negeri yang ahli di bidangnya.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {pengajar.map((ustadz) => (
            <div 
              key={ustadz.id} 
              // Lebar kartu: 2 kolom di HP, 3 kolom di Tablet, 4-5 kolom di Laptop
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[calc(25%-18px)] lg:w-[calc(20%-20px)] bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-md transition"
            >
              {/* Foto */}
              <div className="h-48 sm:h-56 md:h-64 w-full bg-slate-200 overflow-hidden">
                {ustadz.foto_url ? (
                  <img 
                    src={ustadz.foto_url} 
                    alt={ustadz.nama} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="p-3 md:p-5 text-center">
                <h3 className="font-bold text-slate-900 text-sm md:text-lg leading-tight line-clamp-2">{ustadz.nama}</h3>
                <p className="text-[10px] md:text-sm text-emerald-600 font-medium mt-1 leading-tight">{ustadz.bidang_keahlian}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}