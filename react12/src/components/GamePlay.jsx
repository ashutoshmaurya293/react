import React from "react";
import Score from "./Score";
import NumberSelecter from "./NumberSelecter";
import styled from "styled-components";
import RoleDice from "./RoleDice";

function GamePlay() {
  return (
    <MainConatiner>
      <div className="TopSection">
        <Score />
        <NumberSelecter />
      </div>
      <div>
        <RoleDice/>
      </div>
    </MainConatiner>
  );
}

export default GamePlay;
const MainConatiner = styled.div`
  padding-top: 20px;
  .TopSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
