import React, { useState } from "react";
import styled from "styled-components";

function RoleDice({ CurrentDice, roleDice }) {
  return (
    <RDice>
      <div onClick={roleDice}>
        <img src={`/dice/dice_${CurrentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </RDice>
  );
}

export default RoleDice;
const RDice = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
