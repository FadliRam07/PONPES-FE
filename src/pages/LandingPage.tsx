import Navbar from "../components/layouts/Navbar";
import HeroSection from "../components/sections/HeroSection";
import ContactForm from "../components/sections/ContactForm";
import ContactInfo from "../components/sections/ContactInfo";
import MapSection from "../components/sections/MapSection"; // Import Peta
import DirectionInfo from "../components/sections/DirectionInfo"; // Import Petunjuk

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pb-16">
        <HeroSection />
        
        {/* Area Form & Kontak */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* Area Peta & Petunjuk Arah */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section Peta */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                Aksesibilitas Wilayah
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Petunjuk Arah & Peta Lokasi Kampus</h2>
              <p className="text-slate-500 mt-2 max-w-2xl">
                Lokasi pondok berada di kawasan yang tenang dan kondusif untuk belajar, namun sangat mudah diakses melalui jalur tol dan transportasi umum.
              </p>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Koordinat: -6.917464, 107.619122
            </div>
          </div>

          {/* Grid Peta & Petunjuk */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <MapSection />
            </div>
            <div className="lg:col-span-1">
              <DirectionInfo />
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-900 text-slate-300 py-8 text-center text-sm mt-auto">
        <p>© {new Date().getFullYear()} Pondok Pesantren Al-Hikmah.</p>
      </footer>
    </div>
  );
}