import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import{ Link } from "react-router-dom";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">
        
        <Link to={"/admin/products/addProduct"}className="absolute right-[25px] bottom-[25px] text-[25px] bg-[#bd0bbd] p-5 rounded-lg text-white hover:bg-[#FF00FF] border border-[#3b82f6]"><FaPlus></FaPlus></Link>

      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Product Page</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <button></button>
        <table className="min-w-full bg-white border border-gray-300 text-sm text-left">
          <thead className="bg-purple-600 text-white uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-3 border-b">Product ID</th>
              <th className="px-6 py-3 border-b">Product Name</th>
              <th className="px-6 py-3 border-b">Price</th>
              <th className="px-6 py-3 border-b">Last Price</th>
              <th className="px-6 py-3 border-b">Stock</th>
              <th className="px-6 py-3 border-b">Description</th>
              <th className="px-6 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-all duration-200">
                <td className="px-6 py-4 border-b">{product.productID}</td>
                <td className="px-6 py-4 border-b">{product.productName}</td>
                <td className="px-6 py-4 border-b">₹{product.price}</td>
                <td className="px-6 py-4 border-b">₹{product.lastPrice}</td>
                <td className="px-6 py-4 border-b">{product.stock}</td>
                <td className="px-6 py-4 border-b">{product.description}</td>
                <td className="px-6 py-4 border-b">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs">Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded ml-2 hover:bg-red-600 text-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
