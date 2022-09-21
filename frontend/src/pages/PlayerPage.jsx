import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSmall from "../components/HeroLarge";
import Comments from "../components/Comments";
import OptionsNav from "../components/OptionsNav";
import { useState } from "react";

export default function PlayerPage() {
  // fetch API data
  // do we need to have props sent from Main?
  // show page - map out player  stats

  return (
    <>
      <Header />
      <div class="profile-banner"></div>
      <div class="profile-card"></div>
      <div class="match-cards"></div>
      <Footer />
    </>
  );
}
