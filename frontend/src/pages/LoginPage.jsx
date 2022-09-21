import React from "react";
import "../styles/LoginRegisterPage.css";
import Header from "../components/Header";

export default function LoginPage({ login }) {
  //create useState to access login for the

  return (
    <>
      <Header />
      <div class="log">
      <div class="log-card-test">
      <div className="Login">
        <div className="Login-Form">
        <div class="glass"></div>
          <form onSubmit="">
            <label>
              <span id="sign">Sign In</span><br></br>
              <span>Email</span><br></br>
              <input id="lg"
                type="text"
                required
                name="email"
                placeholder="Enter username"
                onChange=""
                value=""
              /><br></br>
            </label>
            <label>
              <span>Password</span><br></br>
              <input id="lg"
                type="text"
                required
                name="password"
                placeholder="Enter password"
                onChange=""
                value=""
              /><br></br>
            </label>
            <button type="submit" value="">
              Login
            </button>
          </form>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
