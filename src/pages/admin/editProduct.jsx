import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import uploadMediaToSupabase from "../../utils/mediaUpload";
import { useLocation } from "react-router-dom";

export default function EditProduct() {
  const location = useLocation();
  const navigate =useNavigate()
  const product =location.state.product

  const altNames = product.altNames.join(",")

  if(product==null){
     navigate("/admin/products")
}
  const [productID, setProductID] = useState(product.productID);
  const [productName, setProductName] = useState(product.productName);
  const [alternativeName, setAlternativeName] = useState(altNames);
   const[imageFiles,setImageFiles]=useState([])
  const [price, setPrice] = useState(product.price);
  const [lastPrice, setLastPrice] = useState(product.lastPrice);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);
  
  console.log(location);


 
  async function handleSubmit() {
  const altNames = alternativeName.split(",");
  const promisesArray = [];

  // Convert FileList to Array
  const filesArray = Array.from(imageFiles);

  for (let i = 0; i < filesArray.length; i++) {
    promisesArray[i] = uploadMediaToSupabase(filesArray[i]);
  }

  const imageUrl = await Promise.all(promisesArray);

  const productData = {
    productID: productID,
    productName: productName,
    altNames: altNames,
    images: imageUrl,
    price: price,
    lastPrice: lastPrice,
    stock: stock,
    description: description,
  };

  const token = localStorage.getItem("token");
  try {
    await axios.put(
      "http://localhost:5000/api/products/" + product.productID,
      productData,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    navigate("/admin/products");
    toast.success("Product updated successfully");
    console.log("success");
  } catch (err) {
    console.log(err);
    toast.error("Failed to update product");
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-100 p-8 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-purple-800 mb-8 text-center">
          ➕ Edit Product
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product ID */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Product ID
            </label>
            <input
              disabled
              type="text"
              placeholder="e.g. BEAUTY1052"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
              value={productID}
              onChange={(e) => setProductID(e.target.value)}
            />
          </div>

          {/* Product Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              placeholder="e.g. Hydrating Face Serum"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          {/* Alternative Name */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Alternative Name(s)
            </label>
            <input
              type="text"
              placeholder="e.g. Glow Serum, Moisture Boost, Skin Reviver"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
              value={alternativeName}
              onChange={(e) => setAlternativeName(e.target.value)}
            />
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Product Image URL
            </label>
            <input
              type="file"
              placeholder="e.g. https://example.com/images/product.jpg"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
               onChange={(e) => {
                 setImageFiles(e.target.files)
              }}
              multiple
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Price (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 2750"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Last Price */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Last Price (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 3200"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Stock Quantity
            </label>
            <input
              type="number"
              placeholder="e.g. 150"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              placeholder="e.g. A lightweight serum that deeply hydrates and restores your skin’s natural glow."
              rows={4}
              className="w-full px-4 py-2 border rounded-md resize-none focus:ring-2 focus:ring-purple-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-200"
              onClick={handleSubmit}
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
