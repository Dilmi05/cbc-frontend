 import { Link, Routes, Route } from "react-router-dom";
import ProductPage from "../pages/product";
import ProductOverView from "../pages/productOverView";
import Cart from "../pages/cart";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* ✅ Navbar fixed at top */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-200 to-blue-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
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
              Product
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact us"
              className="relative group hover:text-blue-900 transition"
            >
              Contact Us
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/aboutus"
              className="relative group hover:text-blue-900 transition"
            >
              About Us
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
             <Link
              to="/cart"
              className="relative group hover:text-blue-900 transition"
            >
              cart
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
            
          </nav>
        </div>
      </header>

      {/* ✅ Page Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-8 py-10">
        <Routes>
          <Route path="/product" element={<ProductPage />} />
           <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}
 