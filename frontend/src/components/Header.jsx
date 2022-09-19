import { Link } from "react-router-dom";
import React from "react";
import "../styles/HomePage.css";

export default function Header() {
  return (
    <div className="header">
      <div class="v3_5">
        <nav className="navbar">
          <Link to="/">
            <img src="../images/Valorant-typography.png" alt="" />
            {/* <div className="image"></div> */}
            <span class="">VAL.HALLA</span>
          </Link>
          <Link>
            <span class="">Login</span>
          </Link>
          <Link>
            <span class="">Register</span>
          </Link>
          <Link>
            <span class="">User Group</span>
          </Link>
          <Link>
            <span class="">Player Page</span>
          </Link>
        </nav>

        <div class="val-icon"></div>
      </div>
    </div>
  );
}
