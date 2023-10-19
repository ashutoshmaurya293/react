import React from "react";
import styled from "styled-components";

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
const Button = styled.button`
  color: #fff;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  border: 1px solid transparent;
  width: 220px;
  font-size: 16px;

  &:hover{
    background-color: #fff;
    color: #000;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
