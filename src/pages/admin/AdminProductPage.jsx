import axios from "axios";
import { useEffect, useState } from "react";
export default function AdminProductPage() {

const [products, setProducts] = useState([{
        "_id": "688f9acb28440970945b9809",
        "productID": "BEAUTY1005",
        "productName": "Hydrating Face Serum",
        "altNames": [
            "Moisture Boost Serum",
            "Glow Serum",
            "Face Essence"
        ],
        "images": [
            "https://example.com/images/serum1.jpg",
            "https://example.com/images/serum2.jpg"
        ],
        "price": 2750,
        "lastPrice": 3200,
        "stock": 150,
        "description": "A lightweight serum that deeply hydrates and restores your skin’s natural glow.",
        "__v": 0
    },
    {
        "_id": "689316fd3c2db30a188bfe40",
        "productID": "BEAUTY1050",
        "productName": "Vitamin C Brightening Cream",
        "altNames": [
            "Radiance Boost Cream",
            "Glow Enhancer",
            "Vitamin C Moisturizer"
        ],
        "images": [
            "https://example.com/images/cream1.jpg",
            "https://example.com/images/cream2.jpg"
        ],
        "price": 3150,
        "lastPrice": 3650,
        "stock": 95,
        "description": "An advanced brightening cream enriched with Vitamin C to enhance skin radiance and reduce dark spots.",
        "__v": 0
    },
    {
        "_id": "689318323c2db30a188bfe46",
        "productID": "BEAUTY1051",
        "productName": "Soothing Aloe Vera Gel",
        "altNames": [
            "Aloe Skin Relief",
            "Cooling Gel",
            "Natural Aloe Treatment"
        ],
        "images": [
            "https://example.com/images/aloe1.jpg",
            "https://example.com/images/aloe2.jpg"
        ],
        "price": 1850,
        "lastPrice": 2100,
        "stock": 200,
        "description": "A gentle and cooling aloe vera gel that soothes sunburns, hydrates dry skin, and calms irritation.",
        "__v": 0
    }
]
  );


useEffect(() => {
 axios.get("http://localhost:5000/api/products")
    .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        console.log(
            {
                ...products[0]
            }
        )
        console.log({
            ...products[0]
        })
     })
   }, []);
 

   return (
    <div className='bg-red-300 w-full h-screen'>
      <h1>Admin Product page</h1>
      {
        products.map((product,index)=>{
            return(
                <div key={product._id} >
                {index}
                   {product.productName} 
                </div>
            )
      
      })
      }
    </div>
  );
}

 
async function getProducts() {
  
const res= await  axios.get("http://localhost:5000/api/products")
    console.log(res);
  
 
}
 
