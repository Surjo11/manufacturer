import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Cards from "./Cards/Cards";
import Partners from "./Partners";
import Parts from "./Parts/Parts";
import Reviews from "./Reviews/Reviews";
import Tittle from "./Tittle";

const Home = () => {
  return (
    <div>
      <Tittle></Tittle>
      <Banner></Banner>
      <Cards></Cards>
      <Partners></Partners>
      <Parts></Parts>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
