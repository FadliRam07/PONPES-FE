import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPages";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilPage from "../pages/ProfilPage";
import PendidikanPage from "../pages/PendidikanPage"; // Import halaman baru
import KegiatanPage from "../pages/KegiatanPage";
import KontakPage from "../pages/KontakPage";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/profil", element: <ProfilPage /> },
  { path: "/pendidikan", element: <PendidikanPage /> }, // Daftarkan route
  { path: "/kegiatan", element: <KegiatanPage /> },
  { path: "/kontak", element: <KontakPage /> },
  { path: "*", element: <NotFoundPage /> },
]);