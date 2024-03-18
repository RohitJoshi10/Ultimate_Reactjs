import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

// Firstly we need to make a store
// import { configureStore } from "@reduxjs/toolkit";
// export const store = configureStore({});

// Now we need to make reducer...and we call it slices

// Store ko bhi un reducers ki knowledge chaheye thi so we import our reducer.

// Data ko use krne k liye useSelector and data ko send krne k liye useDispatch and addTodo krne k liye dispatch
// Dispatch reducers ko use krke store k ander changes krta hai(ya add krta hai).
