import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Link to="/home" className="menu">
        Home
      </Link>
      <Link to="/friends" className="menu">
        Friends
      </Link>
      <Link to="/about" className="menu">
        About
      </Link>
    </div>
  );
};

export default Header;
