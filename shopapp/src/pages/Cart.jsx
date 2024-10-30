import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto my-10 px-4">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="md:ml-4">
            <div className="bg-gray-200 p-4 rounded-xl">
              <div className="text-lg font-semibold mb-2">Your Cart</div>
              <div className="text-sm mb-2">Summary</div>
              <p className="mb-4">
                Total Items: <span className="text-red-600">{cart.length}</span>
                </p>

              <p>
                Total Amount:{" "}
                <span className="text-green-500">${totalAmount}</span>
              </p>

              <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-md mt-4 transition-colors duration-300 border border-green-500 hover:border-green-400">
              Buy Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
