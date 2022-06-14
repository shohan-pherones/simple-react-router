import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const navigate = useNavigate();
  const { name, phone, website, address, id } = props.friend;
  const friendStyle = {
    backgroundColor: "mediumturquoise",
    color: "white",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px",
    height: "400px",
    width: "200px",
  };
  const url = `/friend/${id}`;

  const handleFriendClick = () => {
    navigate(url);
  };

  return (
    <div style={friendStyle}>
      <div className="details">
        <h2>{name}</h2>
        <h3>ID: {id}</h3>
        <h5>Phone: {phone}</h5>
        <p>Visit: {website}</p>
        <p>
          <small>City: {address.city}</small>
        </p>
      </div>
      <Link to={url} className="button">
        Visit Me
      </Link>
      <br />
      <Link to={url}>
        <button>Visit Me</button>
      </Link>
      <br />
      <button onClick={handleFriendClick}>Visit Me</button>
    </div>
  );
};

export default Friend;
