import Header from "../components/Header";
import HeroLarge from "../components/HeroLarge";
import Footer from "../components/Footer";
import LeaderBoard from "../components/LeaderBoard";
import React from "react";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <>
      <div class="v3_4">
        <Header />
        <HeroLarge />
        <LeaderBoard />
      </div>
    </>
  );
}
