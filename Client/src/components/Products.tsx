import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(0);
  const location = useLocation();
  const isloggedin = location.state?.isloggedin || false;

  const addToCart = () => setCount((prev) => prev + 1);
  const removeFromCart = () => setCount((prev) => Math.max(0, prev - 1));

  const handleCheckout = () => {
    isloggedin ? navigate("/checkout", { state: { count } }) : navigate("/signup");
  };

  return (
    <div className="container mx-auto p-4">
      {/* Cart Section */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <FaCartArrowDown className="text-2xl text-blue-600" />
        <input
          value={count}
          readOnly
          className="w-12 text-center border border-gray-300 rounded-md"
        />
        <div className="space-x-2">
          <button
            onClick={removeFromCart}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Remove
          </button>
          <button
            onClick={handleCheckout}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((id) => (
          <div key={id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h1 className="text-lg font-semibold">Name of Product {id}</h1>
            <h2 className="text-gray-600 text-sm mb-2">Description</h2>
            <p className="text-gray-800 font-bold mb-4">Price: ₹100</p>
            <button
              onClick={addToCart}
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
