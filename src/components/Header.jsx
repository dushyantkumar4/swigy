import React, { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="src\assets\images\foodlogo2.png" alt="" />
      </div>
      <div className="nav-items">
        <ul className="header-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
