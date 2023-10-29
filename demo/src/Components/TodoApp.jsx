import React, { useState } from "react";
import Input from "./Input";
import Todo from "./Todo";

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
    <Input input={input} setInput={setInput} addTodo={addTodo}/>
    <Todo toggleTodo={toggleTodo} Delete={Delete} todos={todos} input={input} />
     
    </>
  );
};

export default TodoApp;
