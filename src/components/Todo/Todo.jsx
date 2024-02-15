import { useState } from "react";
import { Edit, Complete, Delete } from "../SVG";
import { emptyTodo, getTodos, saveTodo } from "../../uitls";

export function Todo({ appStyles, text, setTodos }) {
  const [todo, setTodo] = useState({ ...emptyTodo, text: text });

  const handleComplete = () => {
    setTodo((todo) => ({
      ...todo,
      completed: { ...todo.completed, status: true },
    }));
  };

  const handleDelete = () => {
    const nextTodos = getTodos().filter((t) => t.text !== todo.text);
    setTodos(nextTodos);
    saveTodo(nextTodos);
  };

  return (
    <li
      className={appStyles.todo}
      style={(todo.completed.status && todo.completed.theme) || {}}
    >
      <div className={appStyles.textBlock}>
        <p className={appStyles.text}>{todo.text}</p>
        {todo.completed.status == false && (
          <span className={appStyles.textEdit}>
            <Edit />
          </span>
        )}
      </div>
      <div className={appStyles.interaction}>
        {todo.completed.status == false && (
          <button
            className={appStyles.complete + " " + appStyles.button}
            onClick={handleComplete}
          >
            <Complete />
          </button>
        )}
        <button
          className={appStyles.remove + " " + appStyles.button}
          onClick={handleDelete}
        >
          <Delete />
        </button>
      </div>
    </li>
  );
}
