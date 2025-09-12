 import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ProductCard from "../components/productCard";
import HomePage from "./homePage";

export default function ProductPage() {
   
   
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");

  useEffect(() => {
    if (loadingStatus === "loading") {
      toast.loading("Fetching products");
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setLoadingStatus("loaded");
        })
        .catch(() => {
          toast.error("Failed to fetch products");
        });
    }
  }, []);

  return (
    <div className="w-full h-full bg-white overflow-y-scroll flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
