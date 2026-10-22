import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function LoginUserPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMsg("Email atau password salah.");
    } else {
      navigate("/profil-saya"); // Arahkan ke halaman status pendaftaran
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center text-slate-900 mb-6">Login Pendaftar</h1>
        {errorMsg && <div className="mb-4 bg-red-50 text-red-600 p-2 rounded text-sm text-center">{errorMsg}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-2 bg-blue-900 text-white rounded-md text-sm font-medium hover:bg-blue-800 transition disabled:opacity-50">
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>
        <p className="text-center text-sm text-slate-500 mt-4">
          Belum punya akun? <Link to="/register" className="text-blue-900 font-semibold hover:underline">Daftar Akun</Link>
        </p>
      </div>
    </div>
  );
}