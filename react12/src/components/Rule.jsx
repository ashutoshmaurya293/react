import React from "react";
import styled from "styled-components";

function Rule() {
  return (
    <RuleContainer>
      <h2>How to play dice game</h2>
     <div className="text"> <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted</p></div>
    </RuleContainer>
  );
}

export default Rule;

const RuleContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #ff89895e;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 5px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 10px;
    }
`
