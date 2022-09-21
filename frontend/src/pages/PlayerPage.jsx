import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSmall from "../components/HeroLarge";
import Comments from "../components/Comments";
import OptionsNav from "../components/OptionsNav";
import { useState, useEffect } from "react";

const URL = "https://val-halla.herokuapp.com/";

export default function PlayerPage() {
  // fetch API data
  // do we need to have props sent from Main?
  // show page - map out player  stats
  const [playerInfo, setPlayerInfo] = useState([]);

  const getPlayer = async () => {
    try {
      const response = await fetch(URL);
      console.log(response);
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
      <div className="profile-banner"></div>
      <div className="profile-card"></div>
      <div className="match-cards"></div>
      <Footer />
    </>
  );
}
