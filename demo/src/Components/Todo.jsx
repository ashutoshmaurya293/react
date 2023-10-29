import React, { useState } from "react";

function Todo({ todos, Delete, toggleTodo }) {
  const [isCompleted, setisCompleted] = useState(false);
  return (
    <div>
      {" "}
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
            {todo.isCompleted ? (
              console.log()
            ) : (
              <button
                className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => Delete(index)}
              >
                Delete
              </button>
            )}
            <button
              className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => toggleTodo(index)}
            >
              {todo.isCompleted ? "Undo" : "Complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
