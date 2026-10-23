import Navbar from "../components/layouts/Navbar";
import ProfilHero from "../components/sections/profil/ProfilHero";
import VisiMisi from "../components/sections/profil/VisiMisi";
import PancaJiwa from "../components/sections/profil/PancaJiwa";
import SambutanPengasuh from "../components/sections/profil/SambutanPengasuh";
import TonggakPerjalanan from "../components/sections/profil/TonggakPerjalanan";
import Footer from "../components/layouts/Footer"; // Tambahkan import ini

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
      
      {/* Menggunakan komponen Footer yang sudah responsive */}
      <Footer />
    </div>
  );
}