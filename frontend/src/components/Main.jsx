import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import EditComment from "../pages/EditComment";
import PlayerPage from "../pages/PlayerPage";
import { Routes, Route, Outlet, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, Redirect } from 'react';


const database = `https://valorant-testing.herokuapp.com/test/profile/`;
//const URL = `https://api.henrikdev.xyz/valorant/v1/account/`;
//const { REACT_APP_API_KEY } = process.env;
//console.log(REACT_APP_API_KEY);

export default function Main({ signup, isLoggedIn, login, user }) {
  //console.log(signup);

  const initialState = {
    gameName: "",
    tag: "",
  };
  const [submitForm, setSubmitForm] = useState(initialState);
  const navigate = useNavigate();

  const getPlayer = async () => {
    try {

      let id = submitForm.gameName;
      let tag = submitForm.tag;
      
      //testing!!!!
      const response = await fetch(`${database}${id}/${tag}`);
      const data = await response.json();
      console.log("Main.jsx test: ", data);
      setSubmitForm(data)
      navigate("/test/profile/"+id+"/"+tag)
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
    <div className="Main">
      <Outlet />
      <Routes>
        <Route path="/" element={<HomePage handleChange={handleChange} handleSubmit={handleSubmit} submitForm={submitForm}/>} />
        <Route path="/login" element={<LoginPage login={login} />} />
        <Route path="/register" element={<RegisterPage signUp={signup} />} />
        <Route path="/comment/:id" element={<EditComment />} />
        <Route path="/test/profile/:id/:tag" element={<PlayerPage submitForm={submitForm}/>} />
      </Routes>
    </div>
  );
}
