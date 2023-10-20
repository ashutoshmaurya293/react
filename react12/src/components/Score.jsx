import React from "react";
import styled from "styled-components";

function Score() {
  return (
    <Toscore>
      <h1>0</h1>
      <p>Total Score</p>
    </Toscore>
  );
}

export default Score;
const Toscore = styled.div`
max-width: 200px;
text-align: center;
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
