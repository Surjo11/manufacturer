import React from "react";
import Banner from "./Banner";
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
    </div>
  );
};

export default Home;
