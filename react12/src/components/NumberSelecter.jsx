import React, { useState } from "react";
import styled from "styled-components";

function NumberSelecter() {
    const [SelecetedNum, setSelecetedNum] = useState()
  const arrNum = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
    <div className="flex">
      {arrNum.map((value, i) => {
        return <Box key={i}
        onClick={()=> setSelecetedNum(value)}
        isSeleceted={value===SelecetedNum}
        >{value}</Box>;
      })}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelecter;
const NumberSelectorContainer = styled.div`
margin-top: 75px;
display: flex;
flex-direction: column;
align-items: end;
  .flex{
    display: flex;
  }
  p{
    font-size: 24px;
    font-weight: 700;

  }
`
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${((prop)=> prop.isSeleceted? "black" : "white")};
  color: ${((prop)=> prop.isSeleceted? "white" : "black")};
`;
