import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const location = useLocation();
  const count = location.state?.count || 0; // Ensure count is always a number
  const navigate=useNavigate()
  const handleorder=()=>{
    navigate("/orderconfirm")
  }
  return (
    <div>
      <h1>This is Checkout Page</h1>
      
      <h2>Product</h2>
      <h3>Quantity: {count}</h3>
      
      <img src="" alt="No preview" />
      
      <p>Price: ₹{count * 100}</p>
      <button onClick={handleorder}>Order Now</button>
    </div>
  );
};

export default Checkout;
