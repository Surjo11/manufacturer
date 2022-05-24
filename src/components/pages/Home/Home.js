import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Cards from "./Cards/Cards";
import Partners from "./Partners";
import Tittle from "./Tittle";

const Home = () => {
  return (
    <div>
      <Tittle></Tittle>
      <Banner></Banner>
      <Cards></Cards>
      <Partners></Partners>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
