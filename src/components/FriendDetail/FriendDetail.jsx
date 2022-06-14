import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, [friendId]);

  const navigate = useNavigate();
  const handleFriends = () => {
    navigate("/friends");
  };
  return (
    <div>
      <h3>Friend detail of: {friendId}</h3>
      <h1>{friend.name}</h1>
      <h2>Phone: {friend.phone}</h2>
      <p>Website: {friend.website}</p>
      <p>Company: {friend.company?.name}</p>
      <button onClick={handleFriends}>Back to friends</button>
    </div>
  );
};

export default FriendDetail;
