import React, { useState } from "react";
import Header from "../Header/Header";
import Card from "../card/Card";

function Home({cardData,setcardData}) {

  return (
    <>
      <div className="blog">
      {cardData.map((e,i)=>{
        return <Card img = {e.img} title = {e.title} desc= {e.desc} id={i} setcardData={setcardData} cardData={cardData}/>
      })}
      </div>
    </>
  );
}

export default Home;
