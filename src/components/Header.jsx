import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Decent (1).png";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { loggedUser } = useContext(UserContext);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();

  // subscribing to the store using the selector
  const cart = useSelector((store) => store.cart.item);

  return (
    <div className="flex justify-between shadow-lg px-7">
      {/* left section */}
      <div className="">
        <img className="w-20! rounded-4xl " src={logo} alt="" />
      </div>
      {/* right section  */}
      <div className="flex items-center ">
        <ul className=" flex gap-5 items-center">
          <li className="flex items-center text-center gap-1 text-xl font-medium">
            Status :
            <span className="text-sm place-self-center">
              {onlineStatus ? "🟢" : "🔴"}
            </span>
          </li>
          <li>
            <NavLink to="/" className="text-xl font-medium">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-xl font-medium">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-xl font-medium">
              Contact Us
            </NavLink>
          </li>
          <li className=" pr-1">
            <i
              className="fa-solid fa-cart-shopping relative text-2xl"
              onClick={() => navigate("/cart")}
            >
              <div className="text-sm absolute -top-3 -right-1.5">
                {cart.length}
              </div>
            </i>
          </li>
          <button
            className={`px-4 py-1 shadow-lg rounded-xl text-xl font-medium ${
              btnNameReact === "Login" ? "text-green-600" : "text-red-500"
            }`}
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li>{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
