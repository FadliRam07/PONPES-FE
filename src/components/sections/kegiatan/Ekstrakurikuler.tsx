export default function Ekstrakurikuler() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Pengembangan Potensi Diri</p>
            <h2 className="text-3xl font-bold text-blue-950 mb-3">Kegiatan Ekstrakurikuler Unggulan</h2>
            <p className="text-slate-500">
              Program terstruktur di luar jam kurikulum formal untuk mengasah mental kepemimpinan, kemahiran retorika, kedisiplinan, serta ketangkasan jasmani.
            </p>
          </div>
          <div className="text-xs font-semibold text-slate-500 text-right md:pb-1">
            Kurikulum Mu'allimin & Minat Santri
          </div>
        </div>

        {/* Grid 4 Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Kartu 1: Muhadhoroh */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Retorika & Diplomasi
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Setiap Kamis Malam & Ahad Siang</span>
            </div>
            
            <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3">Muhadhoroh (Public Speaking 3 Bahasa)</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Latihan orasi dan retorika berkelan dalam bahasa Arab, bahasa Inggris, dan bahasa Indonesia. Memupuk keberanian mental podium, teknik argumentasi logis, dan kecakapan berpidato di depan ribuan audiens sejati diri.
            </p>
            
            <div className="flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="text-xs text-slate-500 flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> Wajib Seluruh Santri</span>
              <button className="text-xs font-bold text-blue-900 flex items-center gap-1 hover:text-blue-700">Jadwal Kelas <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>
            </div>
          </div>

          {/* Kartu 2: Pramuka */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Leadership & Survival
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Setiap Kamis Sore</span>
            </div>
            
            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m14 4h6m0 0v-5m-14-4v-4a2 2 0 012-2h6a2 2 0 012 2v4M3 10h18"></path></svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3">Kepanduan Pramuka (Scout Movement)</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Pilar utama pembinaan kedisiplinan berkarakter, penjelajahan alam, semaphore, morse, pioneering, serta survival kemandirian. Santri dilatih kemahiran regu (Pratama/Pradana) dengan integritas tinggi dan kesiapsiagaan tanggap darurat.
            </p>
            
            <div className="flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="text-xs text-slate-500 flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg> Gudep 04.129 Terakreditasi A</span>
              <button className="text-xs font-bold text-blue-900 flex items-center gap-1 hover:text-blue-700">Rencana Latihan <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>
            </div>
          </div>

          {/* Kartu 3: Seni Islam */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Estetika & Keindahan
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Setiap Malam & Jumat Pagi</span>
            </div>
            
            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3">Seni Islam & Kaligrafi Khat</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Mewadahi kecintaan pada khazanah seni adhilung: seni kaligrafi mushaf Al-Qur'an (Naskhi, Tsuluts, Diwani), hadrah banjari al-banjar, nasyid acapella kontemporer, qasidah, dan marawis dengan pembinaan maestri kaligrafi nasional.
            </p>
            
            <div className="flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="text-xs text-slate-500 flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg> Galeri Pameran Rutin</span>
              <button className="text-xs font-bold text-blue-900 flex items-center gap-1 hover:text-blue-700">Lihat Karya <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>
            </div>
          </div>

          {/* Kartu 4: Olahraga */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Ketangkasan Fisik
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Senin Sore & Jumat Pagi</span>
            </div>
            
            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3">Olahraga & Bela Diri</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Membangun jiwa sportivitas dan raga yang kokoh melalui berbagai silat Tapak Suci, Pencak Silat, Pagar Nusa, taekwondo, panahan (sunah), futsal, basket, voli, badminton, dan latihan atlet cross country.
            </p>
            
            <div className="flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="text-xs text-slate-500 flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Juara POSPEDA Jawa 2024</span>
              <button className="text-xs font-bold text-blue-900 flex items-center gap-1 hover:text-blue-700">Fasilitas Olahraga <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}