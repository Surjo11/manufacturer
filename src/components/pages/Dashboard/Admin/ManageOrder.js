import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Loading from "../../../shared/Loading";

const ManageOrder = ({ order, index }) => {
  const { _Id, email, partImage, partName, quantity, address, number, price } =
    order;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://guarded-bastion-46799.herokuapp.com/orders").then(
      (response) => response.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handelDeleteBtn = (orderId) => {
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
        const url = `https://guarded-bastion-46799.herokuapp.com/order/${orderId}`;
        axios.delete(
          url,
          orders.filter((order) => order._id !== orders?._Id)
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        refetch();
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-16 h-16">
              <img src={partImage} alt="partImage" />
            </div>
          </div>
          <div>
            <div class="font-bold">{partName}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{quantity}</td>
      <td>{address}</td>
      <td>{number}</td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => handelDeleteBtn(_Id)}
          className=" bg-red-600 hover:bg-red-500 text-white rounded-xl p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default ManageOrder;
