import React from "react";
import { Flip, Slide } from "react-reveal";

const Banner = () => {
  return (
    <div className="md:px-10">
      <div
        className="hero h-[500px] lg:h-[800px]"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/HkJnPd8B/daniel-lezuch-I4-Dc-RJ-Evd8-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 font-bold text-5xl lg:text-7xl ">
              <Flip top cascade>
                Bit by Bit
              </Flip>
            </h1>
            <p>
              <Slide bottom ascade>
                We are a 8 years professional Manufacturer specialize in
                Computer Parts.Our products line cover most of the hot sell
                brands and models.All products are 100% tested one by one before
                shipping
              </Slide>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
