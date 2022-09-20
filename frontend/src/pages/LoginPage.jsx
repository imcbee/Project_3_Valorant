import React from "react";
import "../styles/LoginRegisterPage.css";
import Header from "../components/Header";

export default function LoginPage({ login }) {
  //create useState to access login for the

  return (
    <>
      <Header />
      <div className="Login">
        <div className="Login-Form">
          <form onSubmit="">
            <label>
              <span>Email</span>
              <input
                type="text"
                required
                name="email"
                placeholder="Enter username"
                onChange=""
                value=""
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="text"
                required
                name="password"
                placeholder="Enter password"
                onChange=""
                value=""
              />
            </label>
            <button type="submit" value="">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
