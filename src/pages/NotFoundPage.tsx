import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <p className="text-6xl font-bold text-emerald-800">404</p>
      <h1 className="text-xl font-semibold text-slate-900 mt-2">
        Halaman tidak ditemukan
      </h1>
      <p className="text-slate-500 mt-1">
        Halaman yang Anda cari tidak tersedia.
      </p>
      <Link
        to="/"
        className="mt-6 px-5 py-2.5 rounded-md bg-emerald-800 text-white text-sm font-medium hover:bg-emerald-900 transition"
      >
        Kembali ke beranda
      </Link>
    </div>
  );
}