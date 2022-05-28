import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Loading from "../../../shared/Loading";

const ManageProduct = (props) => {
  const {
    _id,
    image,
    name,
    minimumquantity,
    availablequantity,
    description,
    price,
  } = props.part;
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("singleParts", () =>
    fetch("https://guarded-bastion-46799.herokuapp.com/parts").then(
      (response) => response.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handelDeleteBtn = (partId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://guarded-bastion-46799.herokuapp.com/part/${partId}`;
        axios.delete(
          url,
          parts.filter((part) => part._id !== parts?._Id)
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        refetch();
      }
    });
  };
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure>
        <img className="p-3 w-96 h-96" src={image} alt="Computer Parts" />
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
            onClick={() => handelDeleteBtn(_id)}
            className="btn bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring ring-red-300 text-white border-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
