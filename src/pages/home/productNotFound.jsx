import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! Product not found.</p>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
      >
        Go Back
      </button>
    </div>
  );
}
