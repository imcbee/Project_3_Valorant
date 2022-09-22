import Header from "../components/Header";
import HeroLarge from "../components/HeroLarge";
import Footer from "../components/Footer";
import LeaderBoard from "../components/LeaderBoard";
import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import { json } from "react-router";

const URL = "https://val-halla.herokuapp.com/test";

export default function HomePage({handleChange, handleSubmit, submitForm}) {
  //pass User Auth useState into components to render data
  // Leader player state

  const [leaderPlayers, setLeaderPlayers] = useState([]);
  // const [searchForm, setSearchForm] = useState(null);

  // const searchPlayer = async () => {
  //   try {
  //     const options = {
  //       method: "GET",
  //       //body: json.stringify(editForm),
  //       headers: {
  //         "Content-Type" : "application/json"
  //       }
  //     }
      
  //     const response = await fetch()
  //   } catch (err) {
  //     console.log(err)
  //   }

  // }
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

  console.log("Testing Home: ", handleChange, handleSubmit, submitForm)
  return (
    
    <>
      <div className="v3_4">
        <Header />
        <HeroLarge handleChange={handleChange} handleSubmit={handleSubmit} submitForm={submitForm}/>
        {/* {console.log(leaderPlayers)} */}
        <div className="leaderboard">
          {leaderPlayers.map((item, idx) => {
            return (
              <div className="player-card" key={item._id}>
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
