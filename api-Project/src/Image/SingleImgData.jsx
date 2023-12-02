import React from "react";
import Ak from "./SingleImg";
import SingleImg from "./SingleImg";

function SingleImgData({ rl, i }) {
  const url = rl
  // console.log(url);
  return (
    <div>
      <SingleImg url={url} key={i} />
    </div>
  );
}

export default SingleImgData;
