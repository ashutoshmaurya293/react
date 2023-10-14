import React from "react";
import SingleImg from "../Image/SingleImg";
import { NavLink } from "react-router-dom";

function ImgCard({ id, imageUrl, elm,setsingleig,singleig}) {
const redirectToPage= ()=>{
setsingleig(elm)
console.log(singleig);
}
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
