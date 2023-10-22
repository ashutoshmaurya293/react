import React from "react";
import styled from "styled-components";
import { Button } from "../style/Style";

function Start({Gameplay}) {
  return (
    <Container>
      <div> 
        <img src="Image/dices.png" alt="" />
      </div>
      <div className="first">
        <h1>Dice Game</h1>
        <Button onClick={Gameplay}>Start</Button>
      </div>
    </Container>
  );
}

export default Start;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1180px;
  .first{
  margin-left: 20px;
    h1{
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

