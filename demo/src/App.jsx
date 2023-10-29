import "./App.css";
import TodoApp from "./Components/TodoApp";
function App() {

  return (
    <>
      <TodoApp addTodo={addTodo} isCompleated={addTodo}/>
    </>
  );
}

export default App;
