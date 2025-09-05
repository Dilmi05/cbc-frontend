import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminNavbar />
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet /> {/* Renders admin child routes */}
      </main>
    </div>
  );
}
