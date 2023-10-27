import React from "react";
import { useState } from "react";

function Todo() {
  const [Todo, setTodo] = useState("");
  const [final, setfinal] = useState([]);

  // console.log(Todo);
  const TodoHandler = (e) => {
    e.preventDefault();
    setfinal([...final, { Todo }]);
    setTodo("");
  };
  const Delite = (i) => {
    // console.log(i);
    const t = [...final];
    t.splice(i, 1);
    setfinal(t);
  };
  const play = (e,i)=>{
// console.log(final[i])
if (final[i] == i) {
 console.log("hdkjh");
}
else{
  console.log("errr");
}
  }
  const render = final.map((e, i) => {
    return (
      <div className="h" key={i} onClick={()=>(play(e,i))}>
        <h1>{e.Todo}</h1>
        <button onClick={() => Delite(i)}>Delite</button>
      </div>
    );
  });

  return (
    <div>
      <form action="">
        {" "}
        <input
          type="text"
          value={Todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={TodoHandler}>Submit</button>
      </form>
      <div>{render} </div>
    </div>
  );
}

export default Todo;
