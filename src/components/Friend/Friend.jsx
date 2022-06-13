import React from "react";

const Friend = (props) => {
  const { name, phone, website, address } = props.friend;
  const friendStyle = {
    backgroundColor: "mediumturquoise",
    color: "white",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px",
    height: "200px",
    width: "200px",
  };
  return (
    <div style={friendStyle}>
      <h2>{name}</h2>
      <h5>Phone: {phone}</h5>
      <p>Visit: {website}</p>
      <p>
        <small>City: {address.city}</small>
      </p>
    </div>
  );
};

export default Friend;
