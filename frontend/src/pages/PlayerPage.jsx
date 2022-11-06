import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSmall from "../components/HeroLarge";
import Comments from "../components/Comments";
import OptionsNav from "../components/OptionsNav";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

///

const URL = "https://api.henrikdev.xyz/valorant/v1/account/";
const database = "https://valorant-testing.herokuapp.com/test/profile/";

const { REACT_APP_API_KEY } = process.env;
//console.log(URL);
//console.log(database + "V1%20Zelsis")
export default function PlayerPage({ submitForm }) {
  //console.log("Player test: ", submitForm)
  // fetch API data -> search terms
  // search terms are in an  object at the backend at the
  //// current url -> query database for the search terms
  // Save search terms in state
  // Use search terms in state to make API calls
  // Render data from API onto player page
  //
  // Redirecting from Home Page*** -> We want to be getting the data from the search query drictly*

  // do we need to have props sent from Main?
  // show page - map out player  stats
  //   const initialState = {
  //     puuid: "", //for referencing other API calls
  //     gameName: submitForm.gameName,
  //     tag: submitForm.tag,

  //   };

  // //  const testState = {
  // //     ...initialState,
  // //     //other stuff we want
  // //  }

  //   //this comes from home
  //   const [playerInfo, setPlayerInfo] = useState(submitForm);
  //this is the one we want
  const [playerData, setPlayerData] = useState(submitForm);

  const options = {
    method: "GET",
    headers: {
      Authorization: REACT_APP_API_KEY,
    },
  };

  //console.log("site state test: ", playerInfo);

  // const getPlayer1 = async () => {
  //   try {
  //     const id = playerInfo.gameName;
  //     const tag = playerInfo.tag;
  //     //const response = await fetch(`${URL}${id}/${tag}`, options);
  //     // After calls -> set player info compiled from API calls
  //     //
  //     const response = await fetch(`${URL}${id}/${tag}`, options);
  //     //console.log("Response: ", response);
  //     const data = await response.json();
  //     //console.log("Data 1: ", data)

  //     //testing checkpoint
  //     setPlayerData({...playerData, ...data}) //revisit
  //     console.log("Checkpoint 1: ", playerData)
  //     // })

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getPlayer2 = async () => {
    try {
      // 2nd API call
      console.log("Testing start: ", submitForm);
      const response2 = await fetch(
        `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/na/${playerData.puuid}`,
        options
      );
      //console.log("Resonse 2: ", response2)
      const data2 = await response2.json();
      //console.log("2nd Call: ", data2)
      // data2.data.currenttier
      // data2.data.elo
      // data2.data.images {lareg, small, triangle_down, triangle_up}s//this is rank
      // data2.data.ranking_in_tier
      //testing checkpoint
      setPlayerData((prevState) => prevState, ...data2); //revisit
      console.log("getPlayer2 checkpoint: ", playerData);
    } catch (err) {
      console.log(err);
    }
  };

  const getContext = async () => {
    try {
      console.log("Lets get this bread");

      const response = await fetch(
        `${database}/${playerData.name}/${playerData.tag}`,
        options
      );
      const playerContext = await response.json();
      console.log("Testing: ", playerContext);

      setPlayerData(playerContext);
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    //getPlayer1()
    //getContext()
    //getPlayer2()
    //
  }, []);

  //console.log(playerInfo);

  return (
    <>
      <Header />
      <div className="profile-banner">
        <img src={submitForm.card.wide} alt="title banner" />
      </div>
      <div className="banner-bg">
        <img src={submitForm.card.wide} alt="title banner" />
      </div>
      <div className="match-cards">
        <div className="info-text">
          <div className="profile-card">
            <img src={submitForm.card.small} />
          </div>
          <div className="name">
            {submitForm.name} #{submitForm.tag}{" "}
          </div>
          <div className="info">Info: Level: {submitForm.account_level}</div>
          <div className="region">Region: {submitForm.region}</div>
        </div>
      </div>
      <div className="other-info"></div>
      <Footer />
    </>
  );
}
