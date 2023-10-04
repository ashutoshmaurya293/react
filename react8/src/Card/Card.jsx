import React from "react";
import './Card.css'

function Card(prop) {
    const {img,tytle,desc, id,setcardData,cardData } = prop
    const remove= ()=>{
const newArr = cardData.filter((e,i)=>id!== i)
console.log(newArr);
setcardData([...newArr])
    }
  return (
    <div className="note">
      <img
        src={img}
        alt=""
      />
      <h3>{tytle}</h3>
      <p>
      {desc}
      </p>
      <button>red</button>
      <button>edit</button>
      <button onClick={remove}>Delete</button>
    </div>
  );
}

export default Card;
