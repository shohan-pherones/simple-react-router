import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let activeStyles = {
    backgroundColor: "salmon",
  };

  return (
    <div className="navbar">
      <NavLink
        to="/home"
        className="menu"
        style={({ isActive }) => (isActive ? activeStyles : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/friends"
        className="menu"
        style={({ isActive }) => (isActive ? activeStyles : undefined)}
      >
        Friends
      </NavLink>
      <NavLink
        to="/about"
        className="menu"
        style={({ isActive }) => (isActive ? activeStyles : undefined)}
      >
        About
      </NavLink>
    </div>
  );
};

export default Header;
