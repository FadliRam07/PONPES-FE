export default function PancaJiwa() {
  const nilai = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      ),
      title: "Keikhlasan",
      desc: "Mendidik dan berniat semata-mata mengharap ridha Allah SWT. Ikhlas beramal tanpa pamrih keduniaan atau popularitas.",
      label: "Jiwa Pertama"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
      ),
      title: "Kesederhanaan",
      desc: "Bukan kemiskinan, melainkan kehidupan yang penuh kesabaran, bebas dari, tidak diperbudak oleh gemerlap materialisme.",
      label: "Jiwa Kedua"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      ),
      title: "Berdikari",
      desc: "Sanggup mengondisikan diri sendiri, mandiri secara finansial, tidak menggantungkan nasib pada belas kasihan pihak lain.",
      label: "Jiwa Ketiga"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      ),
      title: "Ukhuwah Islamiyah",
      desc: "Peraudaraan sejati yang melubur batas suku, etnis, dan derajat. Terbuka terhadap kehuumum umat Islam dan persatuan bangsa.",
      label: "Jiwa Keempat"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
      ),
      title: "Kebebasan Berpikir",
      desc: "Kemerdekaan menggalai gagasan secara kritis, terbuka terhadap pembaharuan, namun tetap berpegang teguh pada prinsip syar'i.",
      label: "Jiwa Kelima"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-10">
          <div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              Nilai Filosofis Santri
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950">Panca Jiwa Pondok Pesantren</h2>
            <p className="text-sm md:text-base text-slate-500 mt-2 max-w-2xl">
              Lima nilai fundamental yang menjadi ruh dan denyut nadi kehidupan seluruh warga Al-Hikmah Horizon, diwariskan lintas generasi.
            </p>
          </div>
          <button className="w-full md:w-auto text-sm font-semibold text-slate-700 border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-100 transition">
            Falsafah Hidup Bersama
          </button>
        </div>

        {/* Grid 5 Kartu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {nilai.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-300 transition">
              <div>
                <div className="text-emerald-600 mb-4 md:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-blue-900 transition">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 md:mb-6">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {item.label}
                <svg className="w-3 h-3 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}