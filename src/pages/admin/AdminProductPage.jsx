 import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if (!productsLoaded) {
      axios.get("http://localhost:5000/api/products")
        .then((res) => {
          setProducts(res.data);
          setProductsLoaded(true);
        });
    }
  }, [productsLoaded]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">

      {/* Floating Add Button */}
      <Link
        to={"/admin/products/addProduct"}
        className="absolute right-[25px] bottom-[25px] text-[25px] bg-[#2563eb] p-5 rounded-lg text-white hover:bg-[#3b82f6] border border-[#3b82f6]"
      >
        <FaPlus />
      </Link>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Admin Product Page</h1>

      {/* Conditional Rendering */}
      <h1>
        {
          productsLoaded ? (
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 text-sm text-left">
                <thead className="bg-blue-600 text-white uppercase text-xs tracking-wider">
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
                        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs"
                         onClick={()=>{
                            navigate("/admin/products/editProduct",{state:{product:product}});
                         }}
                        >

                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded ml-2 hover:bg-red-600 text-xs"
                          onClick={() => {
                            const token = localStorage.getItem("token");
                            axios.delete(`http://localhost:5000/api/products/${product.productID}`, {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }).then((res) => {
                              console.log(res.data);
                              toast.success("Product deleted successfully");
                              setProductsLoaded(false);
                            });
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex justify-center mt-8">
              <div className="w-10 h-10 border-[4px] border-gray-300 border-b-blue-500 animate-spin rounded-full"></div>
            </div>
          )
        }
      </h1>
    </div>
  );
}
