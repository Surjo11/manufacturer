import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyOrder = ({ order, index, refetch }) => {
  const { partImage, partName, quantity, address, number, price, email } =
    order;
  const handelDeleteBtn = (email) => {
    fetch(`http://localhost:5000/order/${email}`, {
      method: "DELETE",
    }).then((res) => res.json());
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
      <td>{quantity}</td>
      <td>{address}</td>
      <td>{number}</td>
      <td>
        {price && (
          <Link to={``}>
            <button className=" bg-green-600 hover:bg-green-500 text-white rounded-xl p-2">
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
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </button>
          </Link>
        )}
      </td>
      <td>
        <button
          onClick={() => handelDeleteBtn(email)}
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
