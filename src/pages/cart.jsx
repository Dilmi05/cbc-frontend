import { useEffect, useState } from "react";
import { loadCart } from "../utils/cartFunction"; // adjust path
import CartCard from "../components/cartCard";

export default function Cart() {
  const [cart, setCart] = useState([])
  useEffect(
    () => {
      setCart(loadCart())
    }, []
  )
  return (
    <div className="w-full h-full overflow-scroll flex flex-column items-center">
      {
        cart.map(
          (item) => {
            return (

              cart.map((item, index) => (
                <CartCard
                  key={item.productId || index}
                  productId={item.productId}
                  qty={item.qty}
                />
              ))


            )


          }


        )
      }
    </div>
  )
}