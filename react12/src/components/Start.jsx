import React from "react";
import styled from "styled-components";

function Start() {
  return (
    <Container>
      <div> 
        <img src="Image/dices.png" alt="" />
      </div>
      <div>
        <h1>Dice Game</h1>
        <Button>Start</Button>
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
`;
const Button = styled.button`
  color: #fff;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  border: 1px solid transparent;

  &:hover{
    background-color: #fff;
    color: #000;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
