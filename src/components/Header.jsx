import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="src\assets\images\foodlogo2.png" alt="" />
      </div>
      <div className="nav-items">
        <ul className='header-list'>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>cart</li>
          <button className='login'>Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;