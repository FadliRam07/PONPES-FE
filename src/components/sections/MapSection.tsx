export default function MapSection() {
  return (
    <div className="bg-white rounded-2xl p-1.5 md:p-2 shadow-sm border border-slate-200 h-full">
      {/* Container Peta */}
      <div className="relative w-full h-[350px] md:h-[400px] lg:h-full min-h-[350px] md:min-h-[400px] rounded-xl overflow-hidden bg-slate-100">
        
        {/* Gambar Peta (Placeholder) */}
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
          alt="Peta Lokasi" 
          className="w-full h-full object-cover opacity-80"
        />

        {/* Overlay Pin Lokasi */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-auto">
          <div className="bg-white px-3 md:px-4 py-2 md:py-3 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-900">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold text-slate-900">Kampus Al-Hikmah Horizon</p>
              <p className="text-[9px] md:text-[10px] text-slate-500 mt-0.5">Jl. Terusan Pesantren Raya No. 99, Jawa Barat</p>
            </div>
          </div>
        </div>

        {/* Badge Buka Google Maps */}
        <div className="absolute top-3 right-3 md:top-auto md:bottom-14 md:left-4 md:right-auto">
          <a href="#" className="bg-white px-3 py-1.5 rounded-md text-[10px] md:text-xs font-semibold text-slate-700 shadow flex items-center gap-1.5 hover:bg-slate-50 transition">
            Buka di Google Maps
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>

        {/* Badge Fasilitas Bawah (Di HP menumpuk ke bawah, di Laptop menyamping) */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 px-3 md:px-4 py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-1.5 md:gap-0 text-[9px] md:text-[10px] text-slate-600">
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Area parkir luas tersedia untuk 150+ kendaraan roda empat
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            Stasiun Pengisian Kendaraan Listrik (SPKLU) Tersedia
          </div>
        </div>
      </div>
    </div>
  );
}