 import { useEffect, useState } from "react";
import { loadCart } from "../utils/cartFunction";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(loadCart());
  }, []); // include empty dependency array to avoid infinite render

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-wrap justify-center">
      {cart.map((item, index) => (
        <span key={index}>
          {item.product} * {item.qty}
        </span>
      ))}
    </div>
  );
}
