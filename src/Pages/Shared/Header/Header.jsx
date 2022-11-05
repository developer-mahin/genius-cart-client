import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut().then(() => {
      toast.success("Successfully logout");
    });
  };

  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user?.uid ? (
        <>
          <li onClick={handleLogOut}>
            <Link>Log out</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Log in</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 py-7">
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
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline border-[#FF3811] text-[#FF3811] rounded-full font-bold py-2 px-10">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
