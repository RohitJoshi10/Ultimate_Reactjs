import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // Properties / values
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  // Functionality
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

// useContext ko baar baar import na krna pada iske liye hum usse
// ek hook ek ander save kr rhe hai..so jab kabhi bhi hume useContext ki jaroort padegi..
// Toh hume usko import ni krna padega hum apne hook ko use kr k le lenge useContext ki functionality.

// Jo useContext hai usko hume ek context dena padta hai...so jo context hum baane wale hai wahi context useContext ko de denge.
/// createContext ek context create krne k kaam aata hai.. isko hum ek obj dete hai and uss obj mai wo saari cheze hogi jo hum as a props sabhi components ko dena chate hai.

// Ab main k ander hume isse wrap krte hai apne component ko.
// <TodoContext.Provoder>
// so wo kaam hume udhr na krna pade iske liye hum idhr he kr lenge usse.

// Yaha hum jo functionalites likhte hai unke baas naam likhte hai...jo bhi functionality wo perfrom krenge wo hum app.js mai define kr dete hai.
