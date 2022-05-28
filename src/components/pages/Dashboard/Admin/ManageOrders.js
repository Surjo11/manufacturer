import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../shared/Loading";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", async () => {
    const response = await fetch(
      "https://guarded-bastion-46799.herokuapp.com/orders",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.json();
  });
  console.log(orders);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table table-normal w-full">
        <thead>
          <tr>
            <th></th>
            <th>Part Information</th>
            <th>Email</th>
            <th>Order Quantity</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Price</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <ManageOrder
              key={order._id}
              order={order}
              index={index}
              refetch={refetch}
            ></ManageOrder>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
