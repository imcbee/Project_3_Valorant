import Header from "../components/Header";
import Footer from "../components/Footer";
// import HeroSmall from "../components/HeroLarge";
// import Comments from "../components/Comments";
// import OptionsNav from "../components/OptionsNav";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"; 

///

//const URL = "https://api.henrikdev.xyz/valorant/v1/account/";
// const database= "https://valorant-testing.herokuapp.com/test/profile/"

// const { REACT_APP_API_KEY } = process.env;

export default function PlayerPage({submitForm}) {

  const [playerData, setPlayerData] = useState(submitForm);
  

  useEffect(() => {
    
  }, []);

  //console.log(playerInfo);

  return (
    <>
      <Header />
      <div className="profile-banner">
        <img src={submitForm.card.small}/>
        other options for src are .large and .wide
      </div>
      <div className="profile-card">
        <img />
      </div>
      <div className="name"> {submitForm.name} </div>
      <div className="tag"> {submitForm.tag} </div>
      <div className="info"> Info: level:{submitForm.account_level} region: {submitForm.region}</div>
      <div className="match-cards"></div>
      <div className="other-info"></div>
      <Footer />
    </>
  );
}
