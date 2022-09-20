import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RegisterPage({ signUp }) {
  const initialState = { username: "", password: "" };
  const [input, setInput] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdUserToken = await signUp(input);

    if (createdUserToken) {
      navigate("/player"); //!need to determine what the player page is
    } else {
      navigate("/");
    }
    setInput(initialState);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="Register">
        <h1>Registration</h1>
        <div className="Register-Form">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Username</span>
              <input
                type="text"
                required
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
                value={input.username}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="text"
                required
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={input.email}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="text"
                required
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                value={input.password}
              />
            </label>
            <label>
              <span>Avatar</span>
              <input
                type="text"
                required
                name="avatar"
                placeholder="Enter avatar"
                onChange={handleChange}
                value={input.avatar}
              />
            </label>
            <button type="submit" value="">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
