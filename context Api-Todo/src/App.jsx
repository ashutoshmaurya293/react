import { useContext, useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import TodoContext from "./Context/TodoContext";

function App() {
  const [List, setList] = useState([
    { id: 1, todoData: "todo 1", finished: false },
    { id: 2, todoData: "todo 2", finished: true },
  ]);

  return (
    <TodoContext.Provider value={{List,setList}}>
      <AddTodo
        update={(todo) =>
          setList([
            ...List,
            { id: List.length + 1, todoData: todo, finished: false },
          ])
        }
      />
      <TodoList/>
    </TodoContext.Provider>
  );
}

export default App;
