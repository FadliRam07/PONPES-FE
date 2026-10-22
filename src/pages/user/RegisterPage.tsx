import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mendaftarkan user baru via Supabase Auth
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Gagal mendaftar: " + error.message);
    } else {
      alert("Pendaftaran akun berhasil! Silakan login.");
      navigate("/login-user");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center text-slate-900 mb-6">Daftar Akun Pendaftar</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-2 bg-blue-900 text-white rounded-md text-sm font-medium hover:bg-blue-800 transition disabled:opacity-50">
            {loading ? "Memproses..." : "Daftar Akun"}
          </button>
        </form>
        <p className="text-center text-sm text-slate-500 mt-4">
          Sudah punya akun? <Link to="/login-user" className="text-blue-900 font-semibold hover:underline">Login di sini</Link>
        </p>
      </div>
    </div>
  );
}