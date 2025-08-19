import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {  useState } from "react";
 
export default function ProductOverView() {
  const params = useParams();
  const productId = params.id;
  const[product,setProduct] =useState(null)
  const[status,setstatuas] =useState("loarding")

  useEffect(() => {
    if (!productId) return;
    axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId)
      .then((res) => {
        console.log(res.data);

         

      });
  }, [productId]);

  return (
    <div className="w-full h-[calc(100vh-100px)] ">
       {
      status =="loarding" && <h1>Loading...</h1>
}

{
    status == "not-found" && <h1>Product not found</h1>
}

{
    status=="found"&&(
        <div>
            product Found
        </div>
    )
}
    </div>
  );
}