import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    if (input) {
      setTodos([...todos, { text: input, isCompleted: false }]);
      setInput("");
    }
  };
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const Delete = (index) => {
    console.log(index);
    const t = [...todos];
    t.splice(index, 1);
    setTodos(t);
  };
  return (
    <>
      <form class="flex items-center justify-center mt-10">
        <input
          className="border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-md p-2"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a Todo"
        />
        <button
          className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </form>
      <div className="flex items-center justify-center mt-10 flex-col">
        {todos.map((todo, index) => (
          <div
            className="flex  p-1.5"
            key={index}
            style={{
              backgroundColor: todo.isCompleted ? "lightgreen" : "white",
            }}
          >
            <div className="w-72 pl-3 pt-1 border-2 border-gray-300">
              {todo.text}
            </div>
            <button
              className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => Delete(index)}
            >
              Delete
            </button>
            <button
              className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => toggleTodo(index)}
            >
              {todo.isCompleted ? "Undo" : "Complete"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoApp;
