import React, { useState } from "react";
import { Routes, Route } from "react-router";
import ImageData from "../Image/ImageData";
import SingleImgData from "../Image/SingleImgData";

function Routet() {
  const [first, setfirst] = useState([])
  return (
    <div>
      <Routes>
        <Route path="/" element={<ImageData />} />
        <Route path="/single" element={<SingleImgData />} />
      </Routes>
    </div>
  );
}

export default Routet;
