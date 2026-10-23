import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Sesuaikan path import ini dengan lokasi file lib/supabase.ts Anda
import { supabase } from "../lib/supabase"; 

export default function LoginPage() {
  // State untuk menyimpan input user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // State untuk status loading dan pesan error
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman refresh saat form disubmit
    setLoading(true);
    setErrorMsg(""); // Reset error sebelumnya

    // Memanggil Supabase Auth
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      // Jika gagal login (misal: password salah atau email belum terdaftar)
      setErrorMsg("Email atau password salah. Silakan coba lagi.");
      setLoading(false);
    } else {
      // Jika berhasil, arahkan ke halaman dashboard admin
      navigate("/dashboard"); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Login Admin</h1>
          <p className="text-sm text-slate-500 mt-1">
            Masuk untuk mengelola data pondok
          </p>
        </div>

        {/* Tampilkan Pesan Error Jika Ada */}
        {errorMsg && (
          <div className="mb-4 bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-100 text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required // Wajib diisi
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Simpan nilai input
              placeholder="admin@pondok.test"
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required // Wajib diisi
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Simpan nilai input
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={loading} // Tombol mati saat loading
            className="w-full py-2 rounded-md bg-emerald-800 text-white text-sm font-medium hover:bg-emerald-900 transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          <Link to="/" className="hover:text-emerald-800">
            ← Kembali ke beranda
          </Link>
        </p>
      </div>
    </div>
  );
}