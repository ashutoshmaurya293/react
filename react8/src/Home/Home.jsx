import React, { useState } from "react";
import Header from "../Header/Header";
import Card from "../card/Card";

function Home({cardData}) {

  return (
    <>
      <div className="blog">
      {cardData.map((e)=>{
        return <Card img = {e.img} tytle = {e.title} desc= {e.desc}/>
      })}
      </div>
    </>
  );
}

export default Home;
