import React from "react";
import "./Loder.css";

const Loader = () => {
  return (
    <div
      style={{
        display: " flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
