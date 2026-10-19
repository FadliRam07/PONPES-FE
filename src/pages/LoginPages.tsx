import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Login Admin</h1>
          <p className="text-sm text-slate-500 mt-1">
            Masuk untuk mengelola data pondok
          </p>
        </div>

        <form className="space-y-4">
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
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-emerald-800 text-white text-sm font-medium hover:bg-emerald-900 transition"
          >
            Masuk
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