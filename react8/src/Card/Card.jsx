import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

function Card(prop) {
  const { img, title, desc, id, setcardData, cardData } = prop;
  const remove = () => {
    const newArr = cardData.filter((e, i) => id !== i);
    console.log(newArr);
    console.log(id);
    setcardData([...newArr]);
    localStorage.setItem("cardData",JSON.stringify(newArr))
  };
  return (
    <div className="note">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <NavLink to={`/red/${id}`}>
        <button>red</button>
      </NavLink>

      <button>edit</button>
      <button onClick={remove}>Delete</button>
    </div>
  );
}

export default Card;
