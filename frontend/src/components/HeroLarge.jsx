import { useState, useEffect } from "react";
import { useNavigate, useHistory, redirect } from "react-router-dom";

const database = `https://val-halla.herokuapp.com/test/profile/`;
//console.log(REACT_APP_API_KEY);
const URL = `https://api.henrikdev.xyz/valorant/v1/account/`;
const { REACT_APP_API_KEY } = process.env;

export default function HeroLarge() {
  const initialState = {
    gameName: "",
    tag: "",
  };
  const [submitForm, setSubmitForm] = useState(initialState);
  const navigate = useNavigate();

  const getPlayer = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          Authorization: REACT_APP_API_KEY,
        },
      };
      let id = submitForm.gameName;
      let tag = submitForm.tag;
      console.log(tag);
      console.log(id);
      const response = await fetch(`${URL}${id}/${tag}`, options);
      const data = await response.json();
      console.log(tag);
      console.log(id);
      return redirect(`/test/profile/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    //console.log(e);
    const data = { ...submitForm, [e.target.name]: e.target.value };
    //console.log(data);
    setSubmitForm(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPlayer();
  };

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
              placeholder="Game Name"
              onChange={handleChange}
              value={submitForm.gameName}
            />
            <input
              className="v3_16"
              type="text"
              name="tag"
              placeholder="Tag"
              onChange={handleChange}
              value={submitForm.tag}
            />
            <button className="v3_17" input="submit">
              Submit
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
