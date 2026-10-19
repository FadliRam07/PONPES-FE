import Navbar from "../components/layouts/Navbar";
import KontakHero from "../components/sections/kontak/KontakHero";
import KontakForm from "../components/sections/kontak/KontakForm";

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <KontakHero />
        
        {/* Area Form & Info Kontak */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <KontakForm />
            </div>
            <div className="lg:col-span-1 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400">
              (Kartu Info Kontak menyusul)
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}