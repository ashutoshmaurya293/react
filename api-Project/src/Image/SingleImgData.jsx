import React from "react";
import Ak from "./SingleImg";
import SingleImg from "./SingleImg";

function SingleImgData({ rl, key }) {
  const url = rl
  console.log(url);
  return (
    <div>
      <SingleImg url={url} key={key} />
    </div>
  );
}

export default SingleImgData;
