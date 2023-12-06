import React, { useState } from "react";
import "./App.css"

const Calculator = () => {
  const [current, setcurrent] = useState("")
  const [previous, setprevious] = useState("")
  const [simble, setsimble] = useState("")
  const deleteHandler= ()=>{
setcurrent(String(current).slice(0,-1))
  }
  const allclearHandler = () => {
    setcurrent("")
    setprevious("")
    setsimble("")
  }
  const chooseOperationHandler  = (e) => {
    if(current === "")return
    if(!previous == ""){
      let ansValue = ans()
      setcurrent(ansValue)
    }else{
      setprevious(current)
    }
    setcurrent("")
    setsimble(e.target.getAttribute("data"))
  }
  const ans = ()=>{
    console.log("answer");
  }
  const equalHandler    = () => {
    let value = ans()
    if(value === undefined || value ===null)return
    setcurrent(value)
    setprevious("")
    setsimble("")
  }
  const appendValueHandler = (e) => {
    let value = e.target.getAttribute("data")
    if (value === "."&& current.includes("."))return
    // console.log(value);
    setcurrent(current+value)
   
  }
  return (
    <>
      <div className="Container">
        <div className="screen">
          <div className="Prevoius">{previous}{simble}</div>
          <div className="current">{current}</div>
        </div>
        <button
      
          className="button" id="width"
          onClick={allclearHandler}
        >
          AC
        </button>
        <button className="button" onClick={deleteHandler}>
          DEL
        </button>
        <button data={"÷"} onClick={chooseOperationHandler} >
          ÷
        </button>
        <button className="button" data={7} onClick={appendValueHandler}>
          7
        </button>
        <button className="button" data={8} onClick={appendValueHandler}>
          8
        </button>
        <button className="button" data={9} onClick={appendValueHandler}>
          {" "}
          9
        </button>
        <button
          className="button"
          data={"x"}
          
          onClick={chooseOperationHandler}
        >
          x
        </button>
        <button className="button" data={4} onClick={appendValueHandler}>
          4
        </button>
        <button className="button" data={5} onClick={appendValueHandler}>
          5
        </button>
        <button className="button" data={6} onClick={appendValueHandler}>
          6
        </button>
        <button
          className="button"
          data={"+"}

          onClick={chooseOperationHandler}
        >
          +
        </button>
        <button className="button" data={1} onClick={appendValueHandler}>
          1
        </button>
        <button className="button" data={2} onClick={appendValueHandler}>
          2
        </button>
        <button className="button" data={3} onClick={appendValueHandler}>
          3
        </button>
        <button
          className="button"
          data={"-"}

          onClick={chooseOperationHandler}
        >
          -
        </button>
        <button
          className="button"
          data={"."}
          onClick={appendValueHandler}
          
        >
          .
        </button>
        <button className="button" data={0} onClick={appendValueHandler}>
          0
        </button>
        <button id="last" className="button" onClick={equalHandler}>
          =
        </button>
      </div>
    </>
  );
};

export default Calculator;
