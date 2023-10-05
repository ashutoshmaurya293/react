import React, { useState } from "react";
import { Route, Router, Routes, json } from "react-router-dom";

import AddCard from "../AddCard/AddCard";
import Home from "../Home/Home";
import Login from "../Login/Login";
import OnePhoto from "../Onephoto/OnePhoto";


function Allroute() {
  const [cardData, setcardData] = useState(JSON.parse(localStorage.getItem("cardData"))||[]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home cardData={cardData} setcardData={setcardData}/>} />
        <Route path="/card" element={<AddCard preData={cardData} updateData={setcardData}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/red/:id" element={<OnePhoto cardData={cardData}/>} />
      </Routes>
    </div>
  );
}

export default Allroute;
