import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPages"; // Login Admin
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilPage from "../pages/ProfilPage";
import PendidikanPage from "../pages/PendidikanPage"; 
import KegiatanPage from "../pages/KegiatanPage";
import KontakPage from "../pages/KontakPage";
import PendaftaranPage from "../pages/PendaftaranPage";

// Halaman Dashboard Admin
import DashboardLayout from "../components/layouts/DashboardLayout";
import UstadzPage from "../pages/dashboard/UstadzPage"; 
import PsbPage from "../pages/dashboard/PsbPage";
import JadwalPage from "../pages/dashboard/JadwalPage";
import PengumumanPage from "../pages/dashboard/PengumumanPage";

// Halaman User / Pendaftar
import RegisterPage from "../pages/user/RegisterPage";
import LoginUserPage from "../pages/user/LoginUserPage";
import ProfilUserPage from "../pages/user/ProfilUserPage";

export const router = createBrowserRouter([
  // --- ROUTE PUBLIC ---
  { path: "/", element: <LandingPage /> },
  { path: "/profil", element: <ProfilPage /> },
  { path: "/pendidikan", element: <PendidikanPage /> }, 
  { path: "/kegiatan", element: <KegiatanPage /> },
  { path: "/kontak", element: <KontakPage /> },
  { path: "/daftar", element: <PendaftaranPage /> },

  // --- ROUTE AUTH ---
  { path: "/login", element: <LoginPage /> }, // Khusus Admin
  { path: "/login-user", element: <LoginUserPage /> }, // Khusus User
  { path: "/register", element: <RegisterPage /> }, // Daftar Akun User
  { path: "/profil-saya", element: <ProfilUserPage /> }, // Status Pendaftaran User
  
  // --- ROUTE ADMIN DASHBOARD ---
  { 
    path: "/dashboard", 
    element: <DashboardLayout />, 
    children: [
      { path: "", element: <DashboardPage /> }, 
      { path: "psb", element: <PsbPage /> }, 
      { path: "ustadz", element: <UstadzPage /> }, 
      { path: "jadwal", element: <JadwalPage /> }, 
      { path: "pengumuman", element: <PengumumanPage /> }, 
    ]
  },

  { path: "*", element: <NotFoundPage /> },
]);