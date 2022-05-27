import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const MyOrder = (props) => {
  const { _id, partImage, partName, quantity, address, number } = props.order;
  const { data: orders, refetch } = useQuery("orders", () =>
    fetch("http://localhost:5000/orders").then((response) => response.json())
  );
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
        const url = `http://localhost:5000/order/${orderId}`;
        axios.delete(
          url,
          orders.filter((order) => order._id !== orders?._Id)
        );
        Swal.fire("Deleted!", "Your Order has been deleted.", "success");
        refetch();
      }
    });
  };
  return (
    <tr>
      <th>{props.index + 1}</th>
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
      <td>{quantity}</td>
      <td>{address}</td>
      <td>{number}</td>
      <td>
        <button
          onClick={() => handelDeleteBtn(_id)}
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

export default MyOrder;
