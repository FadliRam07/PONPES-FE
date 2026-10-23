import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 text-sm mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4 text-slate-400">
          © {new Date().getFullYear()} Pondok Pesantren Al-Hikmah. <br className="sm:hidden" /> Terakreditasi Unggul (A).
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          <Link to="#" className="hover:text-white transition">Kebijakan Privasi</Link>
          <Link to="#" className="hover:text-white transition">Tata Tertib</Link>
          <Link to="#" className="hover:text-white transition">Maklumat Pelayanan</Link>
        </div>
      </div>
    </footer>
  );
}