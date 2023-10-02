import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import AddCard from "../AddCard/AddCard";
import Home from "../Home/Home";


function Allroute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<AddCard/>} />
      </Routes>
    </div>
  );
}

export default Allroute;
