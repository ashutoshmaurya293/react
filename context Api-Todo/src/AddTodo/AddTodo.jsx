import React, { useState } from "react";

function AddTodo({ update }) {
  const [Input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Add your next todo"
        onChange={(e) => setInput(e.target.value)}
        value={Input}
      />
      <button
        onClick={() => {
          update(Input);
          setInput("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
