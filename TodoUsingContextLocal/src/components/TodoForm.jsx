import React, { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

// Now ye form k pass todo add krne ka button hai...and addTodo ka logic hamara ha app.js k ander lika hai jo ki jayega kidhr hamre context mai.
// So, hum apne addTodo ko le  skte hai TodoContext se jo ki hai useContext k pass and useContext  hai  useTodo k pass.
// So, ab hume kuch bhi chaheye hoga hum directly apne useTodo se le lenge.

// addTodo(todo); add todo mai hume directly todo nhi de skte kyuki
// hum setTodos mai todos lere h unko(array) spread kkre hai and ek obj ko bhi spread krre hai.
// and spread krne k liye kuch dena bhi toh padega ese directly string deke thori hoga kuch.
//  setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);

// addTodo({id: Date.now(), todo:todo, completed: false});
// Ab kyuki id: Date.now() toh hume setTodos mai lia he hai so isko bhejne ki koi need ni hai.
// and we also know jab key and value ka naam same ho toh sirf key ko likhenge toh bhi chlega. so isko bhi change krke likhnege
// Now addTodo will look like this
// addTodo({todo, completed: false});
