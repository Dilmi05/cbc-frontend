 import { Routes, Route, Link } from "react-router-dom";
 import AddProductForm from "./admin/addProductForm";
 import AdminProductPage from "./admin/AdminProductPage";

export default function AdminHomePage() {
  return (
    <div className='bg-red-300 w-full h-screen flex flex-col items-center justify-center'>
      <nav className="mb-4">
        <Link to="dashboard" className="mr-4">Dashboard</Link>
        <Link to="products" className="mr-4">Products</Link>
        <Link to="orders" className="mr-4">Orders</Link>
        <Link to="users">Users</Link>
      </nav>

      <Routes>
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
        <Route path="products" element={<AdminProductPage />} />
        <Route path="products/addproduct" element={<AddProductForm></AddProductForm>} />
        <Route path="orders" element={<h1>Orders</h1>} />
        <Route path="users" element={<h1>Users</h1>} />
        <Route path="/*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}
