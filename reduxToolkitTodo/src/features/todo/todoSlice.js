import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

// Like in contextTodo we give manually id then we give id by Date.now()
// Same thing in reduxtoolkit nanoid does for us it give us some unique id's
// initialState:- It is the state which the store have initially...store can be empty or can contain something and that will be it's initial state.

// Now we create a slice
// Slice also takes an object
// we have name then initialState and then reducers
// Reducers mai aatti hai properties and function.

// Context Api mai hum sirf function ka declaration krre thy and uski defination khi aur dere thy.
// But in reduxtoolkit we give declaration and defination of the function only here.

//  And here we get two thing one is state and one is action
// state muje ye access degi ki abhi jo initialState hai usme kya kya values hai
// jaise removetodo krne k liye muje id lagegi kuch values ki jaroorat padegi.
// Wo saari values muje action se milegi jab mai removeTodo method ko call karunga,

// Playload ek obj hai.

// Ye toh humne todo banya hai bas.
// const todo = {
//   id: nanoid(),
//   text: action.payload,
// };

// Ab hume apni state ki update krna padega so dot this
// state.todos.push(todo);

// export const { addTodo, removeTodo } = todoSlice.actions;
// actions mai se hume addTodo and removeTodo mil jayega
// Ye individual functionality humne likhi hai kyuki ye hamare componnets mai kaam aygea

// Ye jo store hai wo ek restricted store hai.
// Ye har kisi se value lekar update nhi kr deta.
// So, isko humne batana padta hai ki ye jo reducer hai inko aap update kr skte ho.
// export default todoSlice.reducer;
// So, jitne bhi reducer hai un sabko export kr do
// Mere ander aap jo jo reducer doge mai unhe se value lekar update karunga
