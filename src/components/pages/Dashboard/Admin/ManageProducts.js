import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../shared/Loading";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  const { data: parts, isLoading } = useQuery("parts", () =>
    fetch("https://guarded-bastion-46799.herokuapp.com/parts").then(
      (response) => response.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="grid grid-cols-1 px-2 gap-10 md:grid-cols-3 md:px-12">
      {parts.map((part) => (
        <ManageProduct key={part._id} part={part}></ManageProduct>
      ))}
    </div>
  );
};

export default ManageProducts;
