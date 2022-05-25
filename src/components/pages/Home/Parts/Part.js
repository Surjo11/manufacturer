import React from "react";
import { useNavigate } from "react-router-dom";

const Part = (props) => {
  const {
    _id,
    image,
    name,
    minimumquantity,
    availablequantity,
    description,
    price,
  } = props.part;

  const navigate = useNavigate();
  const handelPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure>
        <img className="p-3 w-80 h-80" src={image} alt="Computer Parts" />
      </figure>
      <div className="card-body">
        <h2 className=" font-bold text-center text-2xl">{name}</h2>
        <span className="font-semibold text-center text-2xl">${price}</span>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex justify-between">
          <span className="text-lg font-medium text-orange-600 ">
            Minimum Order: {minimumquantity}
          </span>
          <span className="text-lg font-medium text-green-600">
            Available: {availablequantity}
          </span>
        </div>
        <div className="card-actions justify-center mt-5">
          <button
            onClick={() => handelPurchase(_id)}
            className="btn bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white border-none"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
