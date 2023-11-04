import React from "react";

function Liked() {
  const data = localStorage.getItem("unsplashData");
  console.log(data);
  return <div>Liked</div>;
}

export default Liked;
