import Navbar from "../components/layouts/Navbar";
import PendidikanHero from "../components/sections/pendidikan/PendidikanHero";
import TigaPilar from "../components/sections/pendidikan/TigaPilar";
import JadwalHarian from "../components/sections/pendidikan/JadwalHarian";
import MatriksPelajaran from "../components/sections/pendidikan/MatriksPelajaran";
import CtaPanduan from "../components/sections/pendidikan/CtaPanduan";

export default function PendidikanPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <PendidikanHero />
        <TigaPilar />
        <JadwalHarian />
        <MatriksPelajaran />
        <CtaPanduan />
      </main>
      
      <footer className="bg-slate-900 text-slate-300 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Pondok Pesantren Al-Hikmah.</p>
      </footer>
    </div>
  );
}