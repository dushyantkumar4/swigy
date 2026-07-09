import React from "react";
import { useSelector } from "react-redux";
import { IMG_URL } from "../utils/constant.js";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice.js";

const Cart = () => {
  const carts = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();

  const handleRemoveItem = ()=>{
    dispatch(removeItem());
  };

  return (
    <div className="text-center flex flex-col items-center mt-4">
      {carts.map((cart) => (
        <div className="flex justify-between w-6/12 px-1 border-b border-gray-300 pb-5">
          <div className="flex flex-col justify-around">
            <p className="text-lg font-semibold">{cart.dishName}</p>
            <p>₹ {cart.price / 100 || "price not available"}</p>
          </div>
          <div className="flex flex-col justify-between items-center gap-1">
            <div className="border-none rounded-2xl overflow-hidden object-fit size-10 md:size-20 lg:size-30 ">
              <img
                src={IMG_URL + cart.imageId}
                alt={cart.dishName}
                className="w-full h-full"
              />
            </div>
            <button onClick={handleRemoveItem} className=" text-green-600 sm:font-medium md:font-semibold border border-gray-300 text-center w-auto px-5 py-1 shadow-lg rounded-lg">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
