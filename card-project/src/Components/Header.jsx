import React from "react";
import "./Header.css";
import { IoReorderThreeSharp } from "react-icons/io5";

function Header() {
  return (
    <nav>
      <div className="first"><h1>Logo</h1></div>
      <div className="second">
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="third">
<p>cart</p>
      </div>
    </nav>
  );
}

export default Header;
