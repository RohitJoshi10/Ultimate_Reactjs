import "./index.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center m-10 ">
        Hello Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
