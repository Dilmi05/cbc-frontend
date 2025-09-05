import { useEffect, useState } from "react";
import { loadCart } from "../utils/cartFunction";
import CartCard from "../components/cartCard";

export default function Cart() {
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(loadCart());
  }, []);

  // ✅ Checkout Handler
  function onOrderCheckOutClick() {
    console.log("Checkout clicked!", cart);
    // Add actual checkout logic here
  }

  // ✅ Calculate totals
  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center py-12 px-8">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl p-10">
        <h1 className="text-3xl font-extrabold text-blue-700 border-b-4 border-blue-200 pb-6 mb-10 text-center tracking-wide">
          🛒 Your Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-blue-500 text-center py-16 text-xl font-medium">
            Your cart is empty. Start adding some products!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-lg">
              <thead>
                <tr className="bg-blue-100 text-blue-800">
                  <th className="p-5">Image</th>
                  <th className="p-5">Product Name</th>
                  <th className="p-5">Product ID</th>
                  <th className="p-5 text-center">Qty</th>
                  <th className="p-5 text-right">Price </th>
                  <th className="p-5 text-right">Total </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100">
                {cart.map((item, index) => {
                  const key = item.productId || `fallback-key-${index}`;
                  return (
                    <CartCard
                      key={key}
                      productId={item.productId}
                      qty={item.qty}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {cart.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 border-t-2 border-blue-100 pt-8">
            <div className="text-xl font-semibold text-blue-800 mb-6 sm:mb-0">
              Total:{" "}
              <span className="text-blue-600 text-2xl font-bold">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>
            <button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={onOrderCheckOutClick}
            >
               Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
