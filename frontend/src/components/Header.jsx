import { Link } from "react-router-dom";
import React from "react";
import "../styles/HomePage.css";

export default function Header() {
  return (
    <div className="header">
      <div class="navi">
        <nav className="navbar">
          <Link to="/" className="nav">
            <span id="val">VAL.HALLA</span>
          </Link>
          <Link to="/login" className="nav">
            Login
          </Link>
          <Link to="/register" className="nav">
            Register
          </Link>
          <Link to="/usergroup" className="nav">
            User Group
          </Link>
          <Link to="/player" className="nav">
            Player Page
          </Link>
        </nav>

        <div class="val-icon"></div>
      </div>
    </div>
  );
}
