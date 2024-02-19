import { useState } from "react";
import "./App.css";
import Card from "./card/Card";
import Grid from "./Grid/Grid";

function App() {
  return (
    <>
      <h2 className="h1">Tic Tak Toe</h2>
      <Grid numberOfCards={9} />
    </>
  );
}

export default App;
