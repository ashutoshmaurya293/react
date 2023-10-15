import React, { useState } from "react";
import { Routes, Route } from "react-router";
import ImageData from "../Image/ImageData";
import SingleImg from "../Image/SingleImg";

function Routet() {
  const [first, setfirst] = useState([])
  return (
    <div>
      <Routes>
        <Route path="/" element={<ImageData />} />
        <Route path="/single" element={<SingleImg />} />
      </Routes>
    </div>
  );
}

export default Routet;
