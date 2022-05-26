import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useQuery } from "react-query";
import auth from "../../../../firebase.init";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${email}`, {
      headers: {
        authorization: `${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <div class="overflow-x-auto">
      <table class="table table-normal w-full">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Part Name</th>
            <th>Order Quantity</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <MyOrder key={order._id} order={order} index={index}></MyOrder>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
