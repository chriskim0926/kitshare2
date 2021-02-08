import React from 'react';
import 'materialize-css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id  = "navbar">
    <div className="nav-wrapper">
      <NavLink to="/" className="brand-logo">KitShare</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/owner">Reastraunt Owner</NavLink></li>
        <li><NavLink to="/">Search Reastraunts</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        {/* <li> <NavLink to="/"  id="signin">Sign In</NavLink></li>
        <li> <NavLink to="/signup"  id="signup">Sign Up</NavLink></li> */}
      </ul>

    </div>
  </nav>
  );
};

export default NavBar;