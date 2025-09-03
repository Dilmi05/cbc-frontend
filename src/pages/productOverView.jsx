import axios from "axios";
import { useEffect, useState } from "react";
import ProductNotFound from "./home/productNotFound";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/imageSlider";
import { addToCart } from "../utils/cartFunction";
import toast from "react-hot-toast";

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
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setStatus("not-found");
      });
  }, [productId]);

  function onAddtoCartClick() {
    // Fix: Use productID instead of productId
    addToCart(product.productID, 1);
    toast.success(product.productName + " added to cart");
  }

  if (status === "loading") {
    return (
      <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  if (status === "not-found") {
    return <ProductNotFound />;
  }

  return (
    <div className="w-full min-h-[calc(100vh-100px)] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="w-full md:w-1/2">
          {Array.isArray(product.images) && product.images.length > 0 ? (
            <ImageSlider images={product.images} />
          ) : (
            <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {product.productName}
          </h1>

          {Array.isArray(product.altNames) && product.altNames.length > 0 && (
            <div className="text-gray-600">
              <p className="font-medium">Also known as:</p>
              <p>{product.altNames.join(" | ")}</p>
            </div>
          )}

          <div className="flex items-center gap-4">
            {product.price > product.lastPrice ? (
              <>
                <span className="text-2xl font-bold text-gray-800">
                  LKR. {product.lastPrice}
                </span>
                <span className="text-xl line-through text-red-500">
                  LKR. {product.price}
                </span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                  Save LKR. {product.price - product.lastPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-gray-800">
                LKR. {product.price}
              </span>
            )}
          </div>

          <div className="text-gray-600">
            <p className="font-medium">Description:</p>
            <p className="text-lg">{product.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className={`inline-block w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span>{product.stock > 0 ? `In stock (${product.stock} available)` : 'Out of stock'}</span>
          </div>

          <button 
            onClick={onAddtoCartClick} 
            disabled={product.stock <= 0}
            className={`px-6 py-3 rounded-lg font-medium ${product.stock > 0 
              ? 'bg-amber-500 hover:bg-amber-600 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            {product.stock > 0 ? 'Add to cart' : 'Out of stock'}
          </button>
        </div>
      </div>
    </div>
  );
}