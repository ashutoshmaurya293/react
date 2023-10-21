import React, { useState } from "react";
import Score from "./Score";
import NumberSelecter from "./NumberSelecter";
import styled from "styled-components";
import RoleDice from "./RoleDice";

function GamePlay() {
  const [UpdateScore, setUpdateScore] = useState(0)
  const [SelecetedNum, setSelecetedNum] = useState()
  const [CurrentDice, setCurrentDice] = useState(1)
  const [Error, setError] = useState()


  const GenrateNum = (max,min)=>{
    return Math.floor(Math.random()* (max - min ) + min);
        }
        const roleDice = () => {
            const random = GenrateNum(1,7)
            setCurrentDice((prev)=> random)
            if(!SelecetedNum) {
              setError("You have not selected any number")
              return
            }
            setError("")

            if(SelecetedNum ===random){
              setUpdateScore((prev)=> prev + random)
            }else{
              setUpdateScore((prev)=> prev-2)
            }
            setSelecetedNum(undefined)
        }
      
  return (
    <MainConatiner>
      <div className="TopSection">
        <Score UpdateScore ={UpdateScore}/>
        <NumberSelecter Error={Error} SelecetedNum={SelecetedNum} setSelecetedNum={setSelecetedNum}/>
      </div>
      <div>
        <RoleDice CurrentDice={CurrentDice} roleDice={roleDice}/>
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
