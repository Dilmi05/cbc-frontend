import { Routes, Route } from "react-router-dom";
import AdminProductPage from "./admin/AdminProductPage.jsx";    

export default function AdminHomePage() {
  return (
    <div className='bg-red-300 w-full h-screen flex flex-col items-center justify-center'>
      <Routes>
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
        <Route path="products" element={<AdminProductPage />} />
        <Route path="orders" element={<h1>Orders</h1>} />
        <Route path="users" element={<h1>Users</h1>} />
      </Routes>
      
    </div>
  );
}