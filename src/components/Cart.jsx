import React from "react";
import { useSelector } from "react-redux";
import { IMG_URL } from "../utils/constant.js";
import { useDispatch } from "react-redux";
import { removeItem, clearItem } from "../utils/cartSlice.js";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';

const Cart = () => {
  const carts = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // remove single item from cart
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    toast.success(`Item removed from cart`);
  };
  // Complete clear cart store
  const handleClearCart = () => {
    dispatch(clearItem());
    toast.success(`Cart clear Successfully`);
  };

  return (
    <div className=" flex flex-col items-center gap-5 mt-4">
      {carts.length === 0 ? (
        <div className=" flex flex-col items-center justify-center gap-5 mt-5">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className=" flex flex-col items-center gap-10 ">
            <p className="text-xl text-gray-400">
              No items available first go to restaurant & select the item from
              Categories
            </p>
            <button
              onClick={() => navigate("/")}
              className="text-green-600 sm:font-medium md:font-semibold border border-gray-300 text-center w-auto px-5 py-1 shadow-lg rounded-lg"
            >
              Select
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center w-6/12">
          <h1 className="text-2xl font-bold">Cart</h1>
          <button
            onClick={handleClearCart}
            className="text-green-600 sm:font-medium md:font-semibold border border-gray-300 text-center w-auto px-5 py-1 shadow-lg rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      )}

      {carts.map((cart) => (
        <div
        data-testid="addedItems"
          key={cart.id}
          className="flex justify-between w-6/12 px-1 border-b border-gray-300 pb-5"
        >
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
            <button
              onClick={() => handleRemoveItem(cart.id)}
              className=" text-green-600 sm:font-medium md:font-semibold border border-gray-300 text-center w-auto px-5 py-1 shadow-lg rounded-lg"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
