import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user?.displayName);
  const handelSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strostrokewidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {user ? (
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/myportfolio">My Portfolio</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/myportfolio">{user?.displayName}</Link>
              </li>
              <button
                onClick={handelSignOut}
                className="btn btn-sm md:btn-md font-semibold"
              >
                Sign Out
              </button>
            </ul>
          ) : (
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/myportfolio">My Portfolio</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
          )}
        </div>
        <Link to="/" className=" font-semibold text-3xl">
          Bit by Bit
        </Link>
      </div>
      <div className=" font-semibold text-base navbar-center hidden lg:flex mt-1">
        {user ? (
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/myportfolio">My Portfolio</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/myportfolio">{user?.displayName}</Link>
            </li>
            <button
              onClick={handelSignOut}
              className="btn btn-xs sm:btn-sm md:btn-md font-semibold"
            >
              Sign Out
            </button>
          </ul>
        ) : (
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/myportfolio">My Portfolio</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-32 lg:w-52"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
