import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../../firebase.init";
import Loading from "../../../shared/Loading";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/orders?email=${user.email}`, {
      headers: {
        method: "GET",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((response) => response.json())
  );
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
            <th>Order Quantity</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Payment</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <MyOrder
              key={order._id}
              order={order}
              index={index}
              refetch={refetch}
            ></MyOrder>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
