export default function TigaPilar() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Integrasi Keilmuan</p>
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Tiga Pilar Kurikulum Terpadu</h2>
          <p className="text-slate-600">
            Membangun keseimbangan antara spiritualitas rabbaniyah, penguasaan sarana komunikasi antarbangsa, serta kemampuan belajar analitis lewat sains modern.
          </p>
        </div>

        {/* Grid 3 Pilar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pilar 1 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-blue-900 mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Pilar 01</p>
              <h3 className="text-lg font-bold text-blue-950 mb-3">Dirasah Islamiyah & Turats</h3>
              <p className="text-sm text-slate-600 mb-6">
                Mewarisi sanad keilmuan para ulama ahlussunnah wal jamaah ala pesantren salaf terkemuka dan berjenjang.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Aqidah & Akhlak:</strong> Pengokohan tauhid dan adab mulia.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Fiqh & Ushul:</strong> Madzhab Syafi'i dengan pendekatan muqaran.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Hadits & Musthalah:</strong> Riyadhus Shalihin & Arba'in Nawawi.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Tarikh Islam:</strong> Sejarah peradaban Khulafaur Rasyidin.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-center text-xs font-semibold text-slate-700">
              Kitab Turats Berbahasa Arab
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition">
            <div>
              {/* Gambar Pilar 2 */}
              <div className="h-48 w-full">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop" 
                  alt="Belajar Bahasa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Pilar 02</p>
                <h3 className="text-lg font-bold text-blue-950 mb-3">Bahasa Internasional Aktif</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Penerapan bilingual environment (Bahasa Arab & Inggris) dalam percakapan formal, diskusi akademik, dan kultural santri secara berangsur menguat.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center bg-slate-50 px-3 py-2 rounded-md">
                    <span className="text-xs font-medium text-slate-700">Muhadatsah Hasan & Mufrodat</span>
                    <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">05:45 WIB</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 px-3 py-2 rounded-md">
                    <span className="text-xs font-medium text-slate-700">Public Speaking & Khitobah</span>
                    <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">2+ Bahasa</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 px-3 py-2 rounded-md">
                    <span className="text-xs font-medium text-slate-700">TOEFL & TOAFL Preparation</span>
                    <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">Kelas Akhir</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 pt-0">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center text-xs font-semibold text-blue-900">
                Living Language Ecosystem
              </div>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition">
            <div>
              {/* Gambar Pilar 3 */}
              <div className="h-48 w-full">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" 
                  alt="Sains dan Teknologi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Pilar 03</p>
                <h3 className="text-lg font-bold text-blue-950 mb-3">Sains & Keterampilan Digital</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Mempersiapkan santri adaptif terhadap transformasi sains dan teknologi terkini, penguatan integrasi akidah dan nalar keilmuan.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0"></span>
                    <span><strong>STEM & Robotika:</strong> Eksperimen sains fisika, kimia, dan koding.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Digital Literacy:</strong> Keamanan data, desain, dan kecakapan artificial.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Karya Ilmiah Santri:</strong> Riset sosial keagamaan dan lingkungan hidup.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 pt-0">
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 text-center text-xs font-semibold text-emerald-700">
                STEM & Research-Based Learning
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}