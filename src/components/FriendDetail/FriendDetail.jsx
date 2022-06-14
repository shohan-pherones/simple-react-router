import React from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Detail coming soon...</h1>
    </div>
  );
};

export default FriendDetail;
