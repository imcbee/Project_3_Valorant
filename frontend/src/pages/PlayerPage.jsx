import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSmall from "../components/HeroLarge";
import Comments from "../components/Comments";
import OptionsNav from "../components/OptionsNav";
import { useState, useEffect } from "react";

const URL = "https://val-halla.herokuapp.com/test/profile/V1 Zander";

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

  const getPlayer = async () => {
    try {
      const response = await fetch(URL);
      //console.log(response);
      const data = await response.json();
      setPlayerInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPlayer();
  }, []);

  console.log(playerInfo);

  return (
    <>
      <Header />
      <div className="profile-banner">
        <img src={playerInfo.card.wide} />
      </div>
      <div className="profile-card">
        <img src={playerInfo.card.small} />
      </div>
      <div className="match-cards"></div>
      <div className="other-info"></div>
      <Footer />
    </>
  );
}
