import { useState } from "react";
import "./App.css";
import Allroute from "./Allroute/Allroute";
import Header from "./Header/Header";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
      <Allroute />
    </>
  );
}

export default App;
