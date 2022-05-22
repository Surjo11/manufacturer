import React from "react";
import sim from "./sim.png";
import masterCard from "./master-card.png";
const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3 md:px-32 mt-16">
      <div className="card w-auto md:w-96 bg-gray-100 shadow-xl">
        <div className="card-body text-gray-500">
          <div className="flex justify-between mb-10">
            <h2 className="card-title">Bit by Bit.</h2>
            <img className="w-8" src={sim} alt="" />
          </div>
          <p className=" font-semibold text-3xl mb-5 ">1234 6453 1772 8888</p>
          <div className="flex justify-between">
            <div className="flex gap-5">
              {" "}
              <h1 className="text-sm">
                Card Holder <br />
                <span className="text-2xl font-semibold">El Sol</span>
              </h1>
              <h1 className="text-sm">
                Expires <br />
                <span className="text-2xl font-semibold">10/25</span>
              </h1>
            </div>
            <img className="w-16 h-10 mt-3" src={masterCard} alt="" />
          </div>
        </div>
      </div>
      <div className="w-auto md:w-96 bg-base-100 flex justify-center items-center">
        <div className="card-body text-gray-500">
          <h2 className="card-title mb-5">eGift Cards</h2>
          <p className="text-base font-semibold mb-5">
            When it comes to the woman who has it all,let her good taste lead
            the way
          </p>
          <a className="link uppercase">eGift Cards</a>
        </div>
      </div>
      <div className="w-auto md:w-96 bg-base-100 flex justify-center items-center">
        <div className="card-body text-gray-500">
          <h2 className="card-title mb-5">Free Service over $5000</h2>
          <p className="text-base font-semibold mb-5">
            Get free service from our team when you spend over $500 dollars on
            parts
          </p>
          <a className="link uppercase">see terms & condition</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
