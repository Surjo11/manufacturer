import React from "react";

const Partners = () => {
  return (
    <div className="container px-5 py-24 mx-auto md:mt-10 lg:px-16 ">
      <div className="flex flex-col w-full mb-8 text-center">
        <span className="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
          The best manufacturer is our partner. We assure the quality of every
          product.
          <span className="font-semibold text-blue-600 lg:mb-0 hover:text-blue-500">
            Our Partners »
          </span>
        </span>
      </div>
      <div className="mx-auto text-center">
        <div className="grid grid-cols-5 gap-4 mx-auto lg:grid-cols-5">
          <div>
            <img
              className="h-4 mx-auto lg:h-12"
              src="https://svgshare.com/i/hf1.svg"
              alt="Ryzen"
            />
          </div>
          <div>
            <img
              className="h-4 mx-auto lg:h-12"
              src="https://svgshare.com/i/hfV.svg"
              alt="Intel"
            />
          </div>
          <div>
            <img
              className="h-4 mx-auto lg:h-12"
              src="https://svgshare.com/i/hfp.svg"
              alt="Gigabyte"
            />
          </div>
          <div>
            <img
              className="h-4 mx-auto lg:h-12"
              src="https://svgshare.com/i/hfe.svg"
              alt="Corsair"
            />
          </div>
          <div>
            <img
              className="h-4 mx-auto lg:h-12"
              src="https://svgshare.com/i/hff.svg"
              alt="BenQ"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
