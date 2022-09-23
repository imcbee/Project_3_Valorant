import { useState, useEffect } from "react";
import { useNavigate, useHistory, redirect } from "react-router-dom";

export default function HeroLarge({handleChange, handleSubmit, submitForm}) {
  console.log("Testing HeroLarge: ", handleChange, handleSubmit, submitForm)
  return (
    <>
      <div className="Hero">
        <button className="v7_38">
          <a href="/login">Sign In</a>
        </button>
        <div className="v3_7"></div>
        <div className="v3_8"></div>
        <div className="v3_9"></div>
        {/* form to get player */}
        <div className="form-container">
          <form onSubmit={handleSubmit} id="">
            <input
              className="v3_15" //change flex
              name="gameName"
              type="text"
              placeholder="Player"
              onChange={handleChange}
              value={submitForm.gameName}
            />
            <input
              className="v3_16"
              type="text"
              name="tag"
              placeholder="#NA1"
              onChange={handleChange}
              value={submitForm.tag}
            />
            <button className="v3_17" input="submit">
              GO
            </button>
          </form>
        </div>
      </div>

      <div className="v7_36"></div>
      <div className="v7_43">
        <span>Leaderboards</span>
      </div>
      <span className="v7_46">VALORANT TRACKER</span>
      <span className="v7_48">
        Check Detailed Valorant Stats and Leaderboards
      </span>
    </>
  );
}
