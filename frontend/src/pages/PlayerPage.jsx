import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSmall from "../components/HeroLarge";
import Comments from "../components/Comments";
import OptionsNav from "../components/OptionsNav";
import { useState, useEffect } from "react";
import { userParams } from "react-router-dom"; 

const URL = "https://api.henrikdev.xyz/valorant/v1/account/";
const { REACT_APP_API_KEY } = process.env;
console.log(URL);
export default function PlayerPage() {
  // fetch API data
  // do we need to have props sent from Main?
  // show page - map out player  stats
  const initialState = {
    puuid: "", //for referencing other API calls
    gameName: "",
    tag: "",
    card: "",
    favagent: "", //lists most played agent
    favgun: "", //list most used gun
    wr: "", //displays winrate
    kda: "", //displays kda
    rank: "", //displays rank
    leaderboardRank: "",
    rankedRating: "",
    numberOfWins: "",
    competitiveTier: "",
    commonAlly: [""], //derived from match history, lists teammates that are in multiple games
    linkedAccount: "",
  };
  const [playerInfo, setPlayerInfo] = useState(initialState);
  console.log(playerInfo);
  const getPlayer = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          Authorization: REACT_APP_API_KEY,
        },
      };
      const id = playerInfo.gameName;
      const tag = playerInfo.tag;
      const response = await fetch(`${URL}${id}/${tag}`, options);
      //console.log(response);
      const data = await response.json();
      setPlayerInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, []);

  //console.log(playerInfo);

  return (
    <>
      <Header />
      <div className="profile-banner">
        <img />
      </div>
      <div className="profile-card">
        <img />
      </div>
      <div className="match-cards"></div>
      <div className="other-info"></div>
      <Footer />
    </>
  );
}
