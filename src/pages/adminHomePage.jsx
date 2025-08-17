import { Routes, Route, Link } from "react-router-dom";
import AddProductForm from "./admin/addProductForm";
import AdminProductPage from "./admin/AdminProductPage";

export default function AdminHomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white w-full min-h-screen flex flex-col items-center justify-start py-10 px-4">
      
      {/* Navigation */}
      <nav className="mb-8 flex space-x-6 text-blue-700 font-medium bg-white shadow-md px-6 py-3 rounded-md">
        <Link to="dashboard" className="hover:text-blue-900 transition">Dashboard</Link>
        <Link to="products" className="hover:text-blue-900 transition">Products</Link>
        <Link to="orders" className="hover:text-blue-900 transition">Orders</Link>
        <Link to="users" className="hover:text-blue-900 transition">Users</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="dashboard" element={<h1 className="text-2xl font-bold text-blue-700">Dashboard</h1>} />
        <Route path="products" element={<AdminProductPage />} />
        <Route path="products/addproduct" element={<AddProductForm />} />
        <Route path="orders" element={<h1 className="text-2xl font-bold text-blue-700">Orders</h1>} />
        <Route path="users" element={<h1 className="text-2xl font-bold text-blue-700">Users</h1>} />
        <Route path="/*" element={<h1 className="text-xl font-semibold text-red-600">Page Not Found</h1>} />
      </Routes>
    </div>
  );
}
