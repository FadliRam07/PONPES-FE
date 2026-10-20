import { Link } from "react-router-dom";

export default function HeroSlideshow() {
  return (
    <section className="bg-white pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Teks */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-900 tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Pondok Pesantren Al-Hikmah
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 leading-[1.1] tracking-tight mb-6">
              Menjadi Generasi Islami, Berilmu, dan Berakhlak Mulia
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Membangun generasi unggul melalui pendidikan Islam, pembinaan karakter, dan pengembangan potensi santri berwawasan global.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/daftar" className="px-6 py-3 rounded-full bg-blue-900 text-white font-semibold hover:bg-blue-800 transition flex items-center gap-2">
                Daftar Sekarang
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
              <Link to="/profil" className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition">
                Kenali Pesantren
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Slideshow (Sementara kosong karena gambar belum di-import) */}
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-lg bg-slate-100 flex items-center justify-center border border-slate-200">
            {/* 
              DI SINI ADALAH TEMPAT GAMBAR SLIDESHOW.
              Karena Anda meminta untuk menghilangkan import foto, 
              sementara waktu kotak ini akan tampil sebagai placeholder kosong.
            */}
            <p className="text-slate-400 font-medium">Gambar Slideshow Belum Diatur</p>
          </div>

        </div>
      </div>
    </section>
  );
}