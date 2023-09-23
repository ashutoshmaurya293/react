import React from "react";

function Pokemon({ name, image }) {
  return (
    <div>
      <div>{image}</div>
      <div>
        <img src={image} />
      </div>
    </div>
  );
}

export default Pokemon;
