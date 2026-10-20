import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPages";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilPage from "../pages/ProfilPage";
import PendidikanPage from "../pages/PendidikanPage"; 
import KegiatanPage from "../pages/KegiatanPage";
import KontakPage from "../pages/KontakPage";
import PendaftaranPage from "../pages/PendaftaranPage";

// Halaman Dashboard & Anak-anaknya
import DashboardLayout from "../components/layouts/DashboardLayout";
import DashboardPage from "../pages/DashboardPage";
import UstadzPage from "../pages/dashboard/UstadzPage"; 
import PsbPage from "../pages/dashboard/PsbPage";
import JadwalPage from "../pages/dashboard/JadwalPage";
import PengumumanPage from "../pages/dashboard/PengumumanPage";

export const router = createBrowserRouter([
  // Route Public
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/profil", element: <ProfilPage /> },
  { path: "/pendidikan", element: <PendidikanPage /> }, 
  { path: "/kegiatan", element: <KegiatanPage /> },
  { path: "/kontak", element: <KontakPage /> },
  { path: "/daftar", element: <PendaftaranPage /> },
  

  // Route Admin (Menggunakan DashboardLayout)
  { 
    path: "/dashboard", 
    element: <DashboardLayout />, // Induk yang punya Sidebar
    children: [
      { path: "", element: <DashboardPage /> }, // URL: /dashboard
      { path: "ustadz", element: <UstadzPage /> },
      { path: "psb", element: <PsbPage /> },
      { path: "jadwal", element: <JadwalPage /> },
      { path: "pengumuman", element: <PengumumanPage /> },
      // URL: /dashboard/ustadz
      // Nanti tambahankan santri, jadwal, dll di sini
    ]
  },

  { path: "*", element: <NotFoundPage /> },
]);