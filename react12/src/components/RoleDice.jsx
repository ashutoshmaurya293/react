import React, { useState } from 'react'
import styled from 'styled-components'

function RoleDice() {
    const [CurrentDice, setCurrentDice] = useState(1)

    const GenrateNum = (max,min)=>{
return Math.floor(Math.random()* (max - min ) + min);
    }
    const roleDice = () => {
        const random = GenrateNum(1,7)
        setCurrentDice((prev)=> random)
    }
  return (
    <RDice>
       <div>
       <img src={`/dice/dice_${CurrentDice}.png`} alt="dice1" 
       onClick={()=>roleDice()}
       />
       </div>
       <p>Click on Dice to roll</p>
    </RDice>
  )
}

export default RoleDice
const RDice = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
    p{
        font-size: 24px;
        font-weight: 500;
        
    }
`