import React, { useState } from "react";
import Header from "../Header/Header";
import Card from "../card/Card";

function Home() {
  const [cardData, setcardData] = useState([
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/cute-baby-animals-1558535060.jpg?crop=1.00xw:0.669xh;0,0.158xh&resize=1200:*",
      tytle: "Name",
      disc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdVou96MeQV-2RZ4CSCJ1k4W6bcqzFI8Anw&usqp=CAU",
      tytle: "Name",
      disc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ]);
  return (
    <>
      <div className="blog">
      {cardData.map((e)=>{
        return <Card img = {e.img} tytle = {e.tytle} disc= {e.disc}/>
      })}
      </div>
    </>
  );
}

export default Home;
