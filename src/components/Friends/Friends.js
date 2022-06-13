import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
import "./Friends.css";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h1>I have friends: {friends.length}</h1>
      <div className="friend-wrapper">
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
