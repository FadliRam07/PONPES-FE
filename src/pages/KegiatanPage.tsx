import Navbar from "../components/layouts/Navbar";
import KegiatanHero from "../components/sections/kegiatan/KegiatanHero";
import Ekstrakurikuler from "../components/sections/kegiatan/Ekstrakurikuler";

export default function KegiatanPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <KegiatanHero />
        <Ekstrakurikuler />
        
        <div className="h-32 bg-slate-50 flex items-center justify-center text-slate-400">
          (Area Agenda & Galeri menyusul)
        </div>
      </main>
      
      {/* Footer belum dipasang */}
      <footer className="bg-slate-900 text-slate-300 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Pondok Pesantren Al-Hikmah.</p>
      </footer>
    </div>
  );
}