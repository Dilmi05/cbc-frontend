import { useEffect, useState } from "react";
import { loadCart } from "../utils/cartFunction";
import CartCard from "../components/cartCard";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(loadCart());
  }, []);

  // ✅ Define the missing function
  function onoOrderCheckOutClick() {
    console.log("Checkout clicked!", cart);
    // Add actual checkout logic here
  }

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-end">
      <table className="w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
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

      <button
        className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded"
        onClick={onoOrderCheckOutClick} // ✅ Now this function exists
      >
        Checkout
      </button>
    </div>
  );
}
