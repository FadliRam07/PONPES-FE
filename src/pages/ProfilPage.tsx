import Navbar from "../components/layouts/Navbar";
import ProfilHero from "../components/sections/profil/ProfilHero";
import VisiMisi from "../components/sections/profil/VisiMisi";
import PancaJiwa from "../components/sections/profil/PancaJiwa";
import SambutanPengasuh from "../components/sections/profil/SambutanPengasuh";
import TonggakPerjalanan from "../components/sections/profil/TonggakPerjalanan";

export default function ProfilPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <ProfilHero />
        <VisiMisi />
        <PancaJiwa />
        <SambutanPengasuh />
        <TonggakPerjalanan />
      </main>

      {/* Footer Sederhana (Sementara) */}
      <footer className="bg-slate-900 text-slate-300 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Pondok Pesantren Al-Hikmah. Terakreditasi Unggul (A).</p>
      </footer>
    </div>
  );
}