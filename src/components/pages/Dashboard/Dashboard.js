import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h1 className="text-gray-800 text-2xl lg:text-4xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
          Welcome to Dashboard
          <label
            for="dashboard-drawer"
            class="btn-square drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-drawer" class="drawer-overlay"></label>
        {admin ? (
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/manageorders">Manage All Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addpart">Add Part</Link>
            </li>

            <li>
              <Link to="/dashboard/makeadmin">Make Admin</Link>
            </li>
            <li>
              <Link to="/dashboard/manageproducts">Manage Products</Link>
            </li>
          </ul>
        ) : (
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addareview">Add a Review</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
