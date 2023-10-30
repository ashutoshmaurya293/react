import React from "react";

function Input({ setInput, input, addTodo }) {
  return (
    <div>
      <form className="flex items-center justify-center mt-10">
        <input
          className="w-1/4 border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-md p-2"
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
    </div>
  );
}

export default Input;
