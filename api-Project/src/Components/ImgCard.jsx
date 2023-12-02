import React from "react";
import SingleImg from "../Image/SingleImgData";
import { NavLink } from "react-router-dom";

function ImgCard({ id, imageUrl, elm, setsingleig, singleig }) {
  const redirectToPage = () => {
    setsingleig([elm]);
  };
  return (
    <div>
      <img
        src={imageUrl}
        onClick={redirectToPage}
        alt=""
        height={300}
        width={250}
      />
    </div>
  );
}

export default ImgCard;
