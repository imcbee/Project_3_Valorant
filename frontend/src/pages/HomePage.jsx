import Header from "../components/Header";
import HeroLarge from "../components/HeroLarge";
import Footer from "../components/Footer";
import LeaderBoard from "../components/LeaderBoard";
import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";

const URL = "https://val-halla.herokuapp.com/test";

export default function HomePage() {
  //pass User Auth useState into components to render data
  // Leader player state

  const [leaderPlayers, setLeaderPlayers] = useState([]);

  // fetch from backend
  const getPlayers = async () => {
    try {
      const response = await fetch(URL);

      console.log(response);
      const data = await response.json();
      console.log(data);
      setLeaderPlayers(data);
    } catch (err) {
      console.log(err);
    }
  };

  //   const handleChange = (e) => {
  //     setLeaderPlayers({ ...leaderPlayers, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  useEffect(() => {
    getPlayers();
  }, []);
  console.log(leaderPlayers);

  return (
    <>
      <div class="v3_4">
        <Header />
        <HeroLarge />
        {/* {console.log(leaderPlayers)} */}
        <div className="leaderboard">
          {leaderPlayers.map((item, idx) => {
            return (
              <div className="player-card">
                {console.log(item)}
                <div className="pfp">
                  <img src={item.card.small} alt="pfp" />
                </div>
                <h2>
                  {item.gameName} #{item.tag}
                </h2>
                <h3>
                  Rank #{item.leaderboardRank} |{" "}
                  <span>{item.rankedRating} RR </span>
                </h3>
                <h4>Competitive Wins {item.numberOfWins}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
