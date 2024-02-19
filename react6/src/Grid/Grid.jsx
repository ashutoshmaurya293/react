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
      board[index] = turn ? "O" : "X";
      const win = CheakWinner(board, turn ? "O" : "X");
      if (win) {
        setWinner(win);
      }
      setBoard([...board]);
      setTurn(!turn);
    }
  }
  const reset = () => {
    setBoard(Array(numberOfCards).fill(""));
    setWinner(false);
  };
  return (
    <div className="grid-wrapper">
      {winner && (
        <div className="topmain">
          <h2 className="turn-highlight">Winner is {winner}</h2>
          <button onClick={reset}>Reset</button>
        </div>
      )}
      <h2 className="turn-highlight">Current turn : {turn ? "O" : "X"}</h2>
      <div className="grid">
        {board.map((el, idx) => (
          <Card
            gameEnd={winner ? true : false}
            key={idx}
            onplay={play}
            player={el}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
