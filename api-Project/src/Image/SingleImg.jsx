import React from "react";
import "./Single.css";

function SingleImg({ url, Qq }) {
  console.log(url);
  return (
    <div className="single">
      <img src={url} alt="" />
    </div>
  );
}

export default SingleImg;
