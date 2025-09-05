import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../pages/product";
import ProductOverView from "../pages/productOverView";
import Cart from "../pages/cart";
 

export default function UserNavbar() {
  return (
    // ✅ No full-height wrapper, only header
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo / Title */}
         

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
            product
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
          <Link
              to="/product-overview"
              className="relative group hover:text-blue-900 transition"
            >productOverView
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
        </nav>


        
     <main className="flex-1 max-w-7xl mx-auto w-full px-8 py-10">
        <Routes>
           
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product-overview/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />           
        </Routes>
      </main> 
       
      </div>
    </header>
  );
}
