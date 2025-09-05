import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";

export default function UserLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <UserNavbar />
      <main className="flex-1 p-6">
        <Outlet /> {/* Renders child routes */}
      </main>
    </div>
  );
}
