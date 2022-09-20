import { Link } from "react-router-dom";
import React from "react";
import "../styles/HomePage.css";

export default function Header() {
  return (
    <div className="header">
      <div class="v3_5">
        <nav className="navbar">
          <Link to="/" className="nav">
            <span>VAL.HALLA</span>
          </Link>
          <Link className="nav">
            Login
          </Link>
          <Link className="nav">
            Register
          </Link>
          <Link className="nav">
            User Group
          </Link>
          <Link className="nav">
            Player Page
          </Link>
        </nav>

        <div class="val-icon"></div>
      </div>
    </div>
  );
}
