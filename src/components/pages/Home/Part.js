import React from "react";

const Part = (props) => {
  const { image, name, minimumquantity, availablequanity, description, price } =
    props.part;
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure>
        <img className="p-3 w-80 h-80" src={image} alt="Computer Parts" />
      </figure>
      <div className="card-body">
        <h2 className=" font-bold text-center text-2xl">{name}</h2>
        <span className="font-semibold text-center text-2xl">${price}</span>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button className="btn bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white border-none">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
