 import axios from "axios";
 import { useEffect, useState } from "react";
import ProductNotFound from "./home/productNotFound";
 import { useParams, Routes, Route } from "react-router-dom";
import Header from "../components/header"; 
import ImageSlider from "../components/imageSlider";
 
 

export default function ProductOverView() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!productId) return;

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}`)
      .then((res) => {
        if (res.data == null) {
          setStatus("not-found");
        } else {
          setProduct(res.data);
          setStatus("found");
        }
      });
  }, [productId]);

  return (

    
    <div className="w-full h-[calc(100vh-100px)]">
      {status === "loading" && <h1>Loading...</h1>}

      {status === "not-found" && <ProductNotFound />}

      {status === "found" && product && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[35%] h-full">
                {Array.isArray(product.images) && product.images.length > 0 && (
  <ImageSlider></ImageSlider>
)}

            
          </div>

          <div className="w-[65%] h-full p-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {product.productName}
            </h1>

            <h1 className="text-3xl font-bold text-gray-800">
  {Array.isArray(product.alt) ? product.alt.join(" | ") : ""}
</h1>

              <p className="text-xl text-gray-600">
  {product.price > product.lastPrice && (
    <span className="line-through text-red-500">LKR.{product.price}</span>
  )}
  <span> LKR.{product.lastPrice}</span>
</p>

<p className="text-lg text-gray-600 line-clamp-3">
  {product.description}
</p>

          </div>
        </div>
      )}
    </div>
  );
}
