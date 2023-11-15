import React, { useState } from "react";
import "./Header.css";
import {RxCross2} from "react-icons/rx"
import { BsFillCartCheckFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <NavLink to={"/"}><h2>Logo</h2></NavLink>
          <input type="text" 
          placeholder=" Search..."
          />
      <NavLink to={"/cart"}><BsFillCartCheckFill className="Cart"/><sup className="tt">0</sup></NavLink> 

        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        > 
          <ul onClick={() => setShowMediaIcons(!showMediaIcons)}>
           
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
        <div className="icon">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {showMediaIcons?<RxCross2/>:<GiHamburgerMenu />}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
