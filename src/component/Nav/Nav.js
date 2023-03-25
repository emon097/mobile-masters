import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Mobile Servicing</Link>
              </li>
              <li>
                <Link to="/addService">
                  <span className="badge badge-accent  text-white">
                    Add New Service
                  </span>
                </Link>
              </li>
              <div className="navbar-end">
                <Link to="/signup" className="btn btn-success text-white">
                  Sign Up
                </Link>
              </div>
            </ul>
          </div>
          <Link to="/" className="">
            Mobile Masters
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex justify-between menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link className="mx-3" to="/services">
                Mobile Servicing
              </Link>
            </li>
            <li>
              <Link to="/addService">
                <span className="badge badge-accent  text-white  ">
                  Add New Service
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/signup" className="btn btn-success text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
