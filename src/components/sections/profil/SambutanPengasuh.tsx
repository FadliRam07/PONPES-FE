export default function SambutanPengasuh() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-10 items-center">
          
          {/* Foto Pengasuh */}
          <div className="w-full md:w-1/3 flex-shrink-0 text-center">
            <div className="w-48 h-56 mx-auto rounded-2xl overflow-hidden shadow-md mb-4 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1544256351-2c4d62288281?q=80&w=400&auto=format&fit=crop" 
                alt="Pengasuh Pesantren" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-slate-900">K.H. Dr. Abdullah Zaki Mubarak, M.A.</h4>
            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wide">Pengasuh Pondok Pesantren Al-Hikmah Horizon</p>
            <p className="text-[10px] text-slate-400 italic">Doktor Ushuluddin Universitas Al-Azhar Kairo</p>
          </div>

          {/* Teks Sambutan */}
          <div className="w-full md:w-2/3 relative">
            <div className="text-emerald-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Kalimat Sambutan Pimpinan</h3>
            
            <blockquote className="text-lg md:text-xl font-medium text-blue-950 leading-relaxed mb-6 italic">
              “Pesantren bukan sekadar tempat menuntut ilmu fiqh atau menghafal bait-bait nadham; pesantren adalah kawah candradimuka kehidupan. Di sinilah adab mendahului ilmu, dan keikhlasan menjadi mahkota setiap amal.”
            </blockquote>

            <p className="text-sm text-slate-600 mb-4">Assalamu'alaikum Warahmatullahi Wabarakatuh.</p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Menyambut tantangan zaman modern yang sangat disruptif dan teknologi, Al-Hikmah berkomitmen tidak hanya sekedar mencetak lulusan cerdas intelektual, tetapi juga generasi yang tangguh, berkarakter, dan siap menjadi pemimpin peradaban Islam di masa depan.
            </p>

            {/* Tanda Tangan & Tombol */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-4">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Tanda Tangan</div>
                {/* Placeholder Tanda Tangan */}
                <div className="h-10 w-32 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg')] bg-contain bg-no-repeat bg-center"></div>
                <div className="text-xs font-bold text-slate-800">Muhammad Zaki, M.Ag</div>
              </div>
              <button className="px-6 py-2.5 bg-blue-900 text-white text-sm font-semibold rounded-full hover:bg-blue-800 transition flex items-center gap-2">
                Lihat Profil Pengasuh Lengkap
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}