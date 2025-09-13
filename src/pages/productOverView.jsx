import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductNotFound from "./home/productNotFound";
import toast from "react-hot-toast";
import { addToCart } from "../utils/cartFunction"; // adjust path

 


export default function ProductOverView() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null)
  const [status, setStatus] = useState("loading")
 
  useEffect(
    () => {
      console.log(productId)
      const data = axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}`).then(
        (res) => {
          console.log(data)

          if (res.data == null) {
            setStatus("not-found")
          }

          if (res.data != null) {
            setProduct(res.data)
            setStatus("found")
          }
        }
      )
    }


    , [])

  function onAddtoCartClick(){
    addToCart(product.productId,1)
    toast.success(product.productId+ "Added To Cart")

  }
  return (
    <div className="w-full h-[calc(100vh-100px)] ">
      {
        status == "loading" && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-2 border-gray-500 border-b-amber-600 border-b-4 ">

            </div>
          </div>
        )
      }
      {
        status == "not-found" &&
        (
          <ProductNotFound></ProductNotFound>
        )


      }
      {
        status == "found" && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-[35%] h-full ">
              <img src={product.images[0]} className="w-full h-[300px] object-cover rounded-lg"></img>

            </div>
            <div className="w-[65%] h-full p-4">
              <h1 className="text-3xl font-bold text-gray-800">{product.productName}</h1>
              <h1 className="text-3xl font-bold text-gray-400">{product.altNames.join("  ")}</h1>
              <h1 className="text-xl text-gray-600">
                {product.price > product.lastPrice ? (
                  <span className="line-through text-red-500">${"LKR"+product.price}</span>
                ) : (
                  <span>${product.price}</span>
                )}
                <span className="ml-2">
                  {"LKR" + product.lastPrice}
                </span>
              </h1>

              <h1 className="text-lg text-gray-600">{product.description}</h1><br></br>
              <button onClick={onAddtoCartClick} className="bg-amber-500 text-white p-2 rounded-lg ">
                Add to cart
              </button>

            </div>

          </div>
        )

      }
    </div>
  )
}