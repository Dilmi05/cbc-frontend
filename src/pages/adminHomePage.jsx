import { Routes, Route, Link } from "react-router-dom";
import AddProductForm from "../pages/admin/addProductForm";
import AdminProductPage from "../pages/admin/adminProductPage";
import EditProduct from "../pages/admin/editProduct";
 
export default function AdminHomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
       {/* ✅ Admin Navbar */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-200 to-blue-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-extrabold text-blue-800 tracking-wide">
            Admin Panel
          </h1>
          <nav className="flex space-x-8 text-blue-700 font-medium">
            <Link
              to="/admin/dashboard"
              className="relative group hover:text-blue-900 transition"
            >
              Dashboard
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/admin/products"
              className="relative group hover:text-blue-900 transition"
            >
              Products
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/admin/orders"
              className="relative group hover:text-blue-900 transition"
            >
              Orders
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/admin/users"
              className="relative group hover:text-blue-900 transition"
            >
              Users
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      </header>

      {/* ✅ Page Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-8 py-10">
        <Routes>
          <Route
            path="/dashboard"
            element={
              <h1 className="text-3xl font-bold text-blue-700">
                📊 Dashboard Overview
              </h1>
            }
          />
          <Route path="/products" element={<AdminProductPage />} />
          <Route path="/products/addproduct" element={<AddProductForm />} />
          <Route path="/products/editproduct" element={<EditProduct />} />
          <Route
            path="*"
            element={
              <h1 className="text-xl font-semibold text-red-600">
                ❌ Page Not Found
              </h1>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
