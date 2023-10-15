import React from "react";
import Ak from "./Ak";

function SingleImg({ rl, key }) {
  // console.log(rl);
  const url = rl
  console.log(url);
  return (
    <div>
      <Ak url={url} key={key} />
    </div>
  );
}

export default SingleImg;
