import React from "react";
import { useQuery } from "react-query";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  // Load All Orders
  const { data: orders } = useQuery("orders", () =>
    fetch("http://localhost:5000/orders").then((response) => response.json())
  );
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
