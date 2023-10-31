import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../Context/TodoContext";

function TodoList() {
  const { List, setList } = useContext(TodoContext);
  return (
    <div>
      {List.length > 0 &&
        List.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todoData={todo.todoData}
            isFinished={todo.finished}
            changeFinished={(isFinished) => {
              const updateList = List.map((t) => {
                if (t.id == todo.id) {
                  todo.finished = isFinished;
                }
                return t;
              });
              setList(updateList);
            }}
            onDelete={() => {
              const updateList = List.filter((t) => t.id != todo.id);
              setList(updateList);
            }}
            OnEdit={(todoText) => {
              const updateList = List.map((t) => {
                if (t.id == todo.id) {
                  todo.todoData = todoText;
                }
                return t;
              });
              setList(updateList);
            }}
          />
        ))}
    </div>
  );
}

export default TodoList;
