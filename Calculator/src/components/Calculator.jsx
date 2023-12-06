import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";

const Calculator = () => {
  const [current, setcurrent] = useState("");
  const [previous, setprevious] = useState("");
  const [simble, setsimble] = useState("");
  const deleteHandler = () => {
    setcurrent(String(current).slice(0, -1));
  };
  const allclearHandler = () => {
    setcurrent("");
    setprevious("");
    setsimble("");
  };
  const chooseOperationHandler = (e) => {
    if (current === "") return;
    if (previous !== "") {
      let value = ans();
      setprevious(value);
    } else {
      setprevious(current);
    }
    setcurrent("");
    setsimble(e.target.getAttribute("data"));
  };
  const ans = () => {
    let result;
    let priviousNum = parseFloat(previous);
    let currentNum = parseFloat(current);
    if (isNaN(priviousNum) || isNaN(currentNum)) return;
    switch (simble) {
      case "÷":
        result = priviousNum / currentNum;
        break;
      case "+":
        result = priviousNum + currentNum;
        break;
      case "-":
        result = priviousNum - currentNum;
        break;
      case "x":
        result = priviousNum * currentNum;
        break;
    }
    return result;
  };
  const equalHandler = () => {
    let value = ans();
    if (value === undefined || value === null) return;
    setcurrent(value);
    setprevious("");
    setsimble("");
  };
  const appendValueHandler = (e) => {
    let value = e.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    // console.log(value);
    setcurrent(current + value);
  };
  return (
    <>
      <CalculatorButton
        key={Date.now()}
        appendValueHandler={appendValueHandler}
        equalHandler={equalHandler}
        deleteHandler={deleteHandler}
        simble={simble}
        previous={previous}
        current={current}
        allclearHandler={allclearHandler}
        chooseOperationHandler={chooseOperationHandler}
      />
    </>
  );
};

export default Calculator;
