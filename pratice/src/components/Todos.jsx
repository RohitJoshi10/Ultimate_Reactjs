import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const RemoveHandler = (todoId) => {
    return dispatch(removeTodo(todoId));
  };

  const EditTodoHandler = (todoId, newTodoText) => {
    return dispatch(updateTodo({ id: todoId, text: newTodoText }));
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.text}</div>
            <button onClick={() => RemoveHandler(todo.id)}>Remove</button>
            <button onClick={() => EditTodoHandler(todo.id, "New Text")}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
