import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feture/Todo/TodoSlice'

function Todo() {
  const todos = useSelector(state=> state.todos)
  const dispatch = useDispatch()
  return (
    
    <>
    <div>Todo</div>
    {todos.map((todo) => (
      <li key={todo.id}>
        {todo.text}
        <button onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
      </li>
    ))}
    </>
  )
}

export default Todo