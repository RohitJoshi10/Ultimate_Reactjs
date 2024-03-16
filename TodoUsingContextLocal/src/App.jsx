import "./App.css";
import { useState, useEffect } from "react";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

// Jo bhi values lenge hum todo context se wo yaha lere hai......toh unko store bhi krege kyuki UI mai update bhi krna hai.
// So, unko store krne k liye we will make states.
// todos ko hum as an array lenge
// Jo ye TodoProvider toh humne yaha use kr lia but ye hume kuch dega bhi toh and wo kya dega.
// Obviously addTodo, update, toggle, todos, etc wo sab dega jo TodoContext k pass hai.
// Jo todo hamari state mai hai ya TodoContext k pass hai wo sab saare todos hai..na ki koi single tood.
// Single todo hume milega form ye jo ki ek string hoga.

// ADD TODO
// Jo ye todo hai addTodo karne pe wo jayega iss todos array k ander.
// But kya pata udhr pehle se he koi todo ho.
// So, we will call setTodo(todo) but esa krne se purane jitne bhi todos thy uss array mai wo delete ho jayenge aur sirf ek nayi value set ho jayegi.
// But hum esa hume nhi krna hai...hume purani state ka access chahey ki hamare pass kitne todos thy phele.
// So, we will use this technique.. setTodos((prev) => [])
// Isse hume prev === oldTodos yaha se hume purana array mil jata hai.
// Yaha pe hum purane array se naya array banayenge and uss new aarya mai  nayi todo wo bhi daal denge and purane wale  bhi daal denge.
// setTodos((prev) => [...prev]) Purani saari values li and unsabko spread kr dia
// setTodos((prev) => [todo...prev]) ye todo naya wala todo hai.
// but hum isko esa nhi de skte so we will destructure it.
// id: Date.now() id muje ni pata kya do..suppose 2 de dia but har baar 2 thori dunga usse haar baar nayi id aye uske liye hume Date.now() dia hai (Dynamic value as Date change hogi he haar baar)..hum random function krke random value bhi le skte thy.

// UPDATE TODO
// updateTodo krna hai so hume pata hona chaye ki kon se todo ko update krna hai...so uske liye todos wale arrya mai loop lagana padega and find krna padga apna todo jisko update krna hai.
// setTodos((prev) => prev.map()) You can take a map or can take for each.
// map se muje har ek todo mil jayega, and har ek todo ek object hai and har ek obj k ander ek id hai.
// prevTodo ye ek individual todo hai.
// prevTodo.id === id ? todo : prevTodo Agar dono id match ho jati hai toh jo todo aya tha usse set kr do and jo purana tha usse ese he rhne do.

// DELETE TODO
// delete todo mai ese map ki help se nhi krte.
// delete krte time hum ye krte hai ki..ek toh hamare pass hai original array and ek hai naya array.
// naye array mai wo nhi hona chaheye jo hume id di hai baaki sab hona chaheye.
// So, iss kaam ko krne k liye we will use filter function
// prev.filter((todo) => todo.id !== id) Jo Jo id match kr jayegi meri id se wo nhi ayega hamare pass baaki sab ayega.

// TOGGLE-TODO
// setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? "true" : "false"))
// Hume toggle krna hai so toggle tabhi toh krenge na jab id match ho wrna hume kya pata kisko toggle krna hai.
// Agr match nhi krta hai toh prevTodo ko ese he rhene do.
// And agr match krta hai toh uske ander hum ye krna chahate hai ki baaki values toh as it is rhe jaise wo thi he bas ek value change kr do.
// Phele hume saari values chahey {...prevTodo} esa krke saari values mil jayegi.
// { ...prevTodo, completed: !prevTodo.completed } saari values lene k baad completed wali ko overwrite kr do. saari values jo hamre pass thi wo ye thi id: todo: "Todo msg", completed: false, and isme se hume completed wali ko chnage kia bas.

// LOCAL STORAGE
// The localStorage object allows you to save key/value pairs in the browser.
// The localStorage object stores data with no expiration date.
//The data is not deleted when the browser is closed, and are available for future sessions.
// localStorage.setItem("lastname", "Smith");  lastname is key and Smith is value for this key.
// localStorage.getItem("lastname");

// window.localStorage or just: localStorage
// Save Data to Local Storage:- localStorage.setItem(key, value);
// Read Data from Local Storage:- let lastname = localStorage.getItem(key);
// Remove Data from Local Storage:- localStorage.removeItem(key);
// Remove All (Clear Local Storage):- localStorage.clear();
// Values jo ye local storage leta hai wo ek string formate mai leta hai so usko hume json mai convert krna padta hai.
// For more info on localStorage read this:https://blog.logrocket.com/localstorage-javascript-complete-guide/

// Application jab first baar load hogi toh usme bhaut saare todos honge and hum chate hai wo sab todos hume dikhe.
// Toh krne k liye hum ek ese method ka use krna padega jo query krega local storgae se saari values leke ayega and insert kr dega
// iss todos mai.  const [todos, setTodos] = useState([]); And wo method hai useEffect
// todos ko set krne se phele get krna padta hai.
// const [todos, setTodos] = useState([]);  Jaise he iss todos k ander koi bhi change ho toh muje vo value localstorgae mai add bhi karani hai.
// Set krte time value string mai honi chaheye so hum apne json ko string mai convert kr lenge.
// JSON.stringify ki help se hum apne json ko string main convert kr denge. and string to json krne k liye json.parse

//  {todos.map((todo) => (
//               <div key={todo.id} className="w-full">
//                 <TodoItem todo={todo} />
//               </div>
//             ))}

// yaha pe div ko () bracket mai dia hai isme nhi dete toh hume khud se return karna pdta but circle braces auto return kr deta hai
