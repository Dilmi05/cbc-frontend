import { Link, Routes, Route } from "react-router-dom";
import ProductPage from "../pages/product";

export default function UserLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* ✅ User Navbar */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-extrabold text-blue-800 tracking-wide">
            My Shop
          </h1>

          {/* Navigation */}
          <nav className="flex space-x-8 text-blue-700 font-medium">
            <Link
              to="/"
              className="relative group hover:text-blue-900 transition"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/product"
              className="relative group hover:text-blue-900 transition"
            >
              Products
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/cart"
              className="relative group hover:text-blue-900 transition"
            >
              Cart
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="relative group hover:text-blue-900 transition"
            >
              About Us
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="relative group hover:text-blue-900 transition"
            >
              Contact Us
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
             
          </nav>
        </div>
      </header>

      {/* ✅ Page Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-8 py-10">
        <Routes>
          <Route path="/product" element={<ProductPage />} />
         </Routes>
      </main>
    </div>
  );
}
