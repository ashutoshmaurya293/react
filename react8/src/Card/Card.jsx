import React from "react";
import './Card.css'

function Card(prop) {
    const {img,tytle,disc} = prop
  return (
    <div className="note">
      <img
        src={img}
        alt=""
      />
      <h3>{tytle}</h3>
      <p>
      {disc}
      </p>
      <button>red</button>
      <button>edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Card;
