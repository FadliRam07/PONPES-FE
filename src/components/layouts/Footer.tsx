import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 text-center text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Pondok Pesantren Al-Hikmah. Terakreditasi Unggul (A).</p>
        <div className="mt-4 flex justify-center gap-6 text-xs text-slate-500">
          <Link to="#" className="hover:text-white">Kebijakan Privasi</Link>
          <Link to="#" className="hover:text-white">Tata Tertib</Link>
          <Link to="#" className="hover:text-white">Maklumat Pelayanan</Link>
        </div>
      </div>
    </footer>
  );
}