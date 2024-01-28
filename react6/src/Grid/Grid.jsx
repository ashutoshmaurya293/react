import { useState } from "react";
import Card from "../card/Card";
import "./Grid.css";
import CheakWinner from "../helper/CheakWinner";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(true);
 
  function play(index) {
  if (board[index] === "") {
    board[index] = turn ? "O" : "X"; // Place the current player's symbol
    const win = CheakWinner(board, turn ? "O" : "X"); // Check for a winner
    if (win) {
      setWinner(win);
    }
    console.log(board);
    setBoard([...board]); // Update the board state
    setTurn(!turn); // Toggle the turn
  }
}
const reset =()=>{
  setBoard(Array(numberOfCards).fill(""))
  setWinner(false)
}
  return (
    <div className="grid-wrapper">
      {winner && (
        <>
          <h1 className="turn-highlight">Winner is {winner}</h1>
          <button onClick={reset}>Reset</button>
        </>
      )}
      <h1 className="turn-highlight">Current turn :{turn ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((el, idx)=> <Card key={idx} onplay={play} player={el} index={idx}/>)}
      </div>
    </div>
  );
}

export default Grid;
