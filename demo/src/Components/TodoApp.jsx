import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = () => {
    if (input) {
      setTodos([...todos, { text: input, isCompleted: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const Delete=(index)=>{
    console.log(index);
    const t = [...todos]
    t.splice(index,1)
    setTodos(t)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a Todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <div style={{ marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <div
            key={index}
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            <div style={{ marginRight: '10px' }}>{todo.text}</div>
            <button onClick={()=>Delete(index)}>Delete</button>
            <button onClick={() => toggleTodo(index)}>
              {todo.isCompleted ? 'Undo' : 'Complete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
